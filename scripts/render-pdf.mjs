// Runs as a genuinely separate `node` process, invoked via child_process
// from lib/pdf.js — see the comment there for why. Reads a JSON job
// { trade, siteAddress, assessorName } from stdin, writes raw PDF bytes to
// stdout. Nothing else may write to stdout: any diagnostics go to stderr.

import path from "node:path";
import { fileURLToPath } from "node:url";
import { createElement as h } from "react";
import { Document, Page, Text, View, Image, StyleSheet, renderToBuffer } from "@react-pdf/renderer";

const SLATE = "#1a1a1a";
const ORANGE = "#de5b27";
const MUTED = "#6b6b6b";
const BORDER = "#dfe3e6";
const RED = "#e5342b";
const RED_BG = "#fdecec";
const GREEN = "#16a34a";
const GREEN_BG = "#e8f7ed";

const METHOD_STATEMENT_STEPS = [
  "Review this RAMS and confirm site conditions match those described before work begins.",
  "Brief all operatives on the hazards, controls and PPE requirements below (toolbox talk).",
  "Check and don all required PPE, and inspect tools and equipment before use.",
  "Carry out the task in line with the control measures set out in the Hazard & Risk Assessment section below.",
  "Maintain good housekeeping throughout — keep the work area tidy and manage waste and materials safely.",
  "On completion, remove tools and equipment, restore the work area, and report any incidents, near misses or changes in site conditions to the site supervisor.",
  "Complete the sign-off section at the end of this document before leaving site.",
];

const EMERGENCY_PROCEDURES = [
  {
    title: "Fire",
    body: "Stop work immediately, raise the alarm and evacuate to the designated assembly point. Do not attempt to fight a fire beyond your training. Call 999 once safely evacuated if the fire brigade has not already been alerted.",
  },
  {
    title: "First Aid / Injury",
    body: "Stop work and alert the nearest first aider or site supervisor. For a serious injury, call 999 immediately and do not move a casualty unless there is immediate danger.",
  },
  {
    title: "Spillage / Environmental Incident",
    body: "Stop work, contain the spill using the site's spill kit if safe to do so, and report it to the site supervisor immediately. Do not allow any spillage to enter a drain or watercourse.",
  },
];

// Pre-rendered PNG (logo.svg is dark-on-transparent, built for the light
// masthead — renders directly on the white PDF page, no plate needed).
// Resolved relative to this file, not process.cwd(), so it works
// regardless of where the child process is spawned from.
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const LOGO_PATH = path.join(SCRIPT_DIR, "assets", "pdf-logo.png");
const LOGO_ASPECT_RATIO = 2740 / 315;
const LOGO_WIDTH = 170;
const LOGO_HEIGHT = LOGO_WIDTH / LOGO_ASPECT_RATIO;

const styles = StyleSheet.create({
  page: { padding: 40, paddingBottom: 64, fontSize: 10, color: "#262626", fontFamily: "Helvetica" },
  logo: { width: LOGO_WIDTH, height: LOGO_HEIGHT, marginBottom: 14 },
  title: { fontSize: 18, fontFamily: "Helvetica-Bold", color: SLATE, marginBottom: 4 },
  meta: { fontSize: 9, color: MUTED, marginBottom: 4 },
  assessorLine: { fontSize: 10.5, fontFamily: "Helvetica-Bold", color: SLATE, marginBottom: 20 },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: SLATE,
    marginTop: 18,
    marginBottom: 8,
    borderBottom: `1pt solid ${BORDER}`,
    paddingBottom: 4,
  },
  regRow: { flexDirection: "row", marginBottom: 3 },
  regBullet: { width: 10, color: ORANGE, fontFamily: "Helvetica-Bold" },
  regText: { flex: 1 },
  methodStepRow: { flexDirection: "row", marginBottom: 6 },
  methodStepNum: { width: 16, fontSize: 9.5, fontFamily: "Helvetica-Bold", color: ORANGE },
  methodStepText: { flex: 1, fontSize: 9.5, color: "#333" },
  sectionNote: { fontSize: 9, color: MUTED, marginBottom: 8 },
  hazardBlock: { marginBottom: 10, paddingLeft: 10, borderLeft: `2pt solid ${ORANGE}` },
  hazardName: { fontSize: 10.5, fontFamily: "Helvetica-Bold", color: SLATE, marginBottom: 2 },
  hazardControl: { fontSize: 9.5, color: "#333" },
  riskTagRow: { flexDirection: "row", marginTop: 5 },
  riskTag: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginRight: 6,
  },
  riskTagInitial: { backgroundColor: RED_BG, color: RED },
  riskTagResidual: { backgroundColor: GREEN_BG, color: GREEN },
  ppeRow: { flexDirection: "row", flexWrap: "wrap" },
  emergencyBlock: { marginBottom: 8 },
  emergencyTitle: { fontSize: 10, fontFamily: "Helvetica-Bold", color: SLATE, marginBottom: 2 },
  emergencyBody: { fontSize: 9.5, color: "#333" },
  emergencyContactRow: { flexDirection: "row", alignItems: "flex-end", marginTop: 6 },
  emergencyContactLabel: { fontSize: 9.5, color: "#333", width: 150 },
  emergencyContactValue: { fontSize: 9.5, fontFamily: "Helvetica-Bold", color: "#333" },
  emergencyContactLine: { flexGrow: 1, borderBottom: "1pt solid #333", minHeight: 12 },
  ppeBadge: {
    fontSize: 9,
    color: SLATE,
    border: `1pt solid ${BORDER}`,
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 7,
    marginRight: 6,
    marginBottom: 6,
  },
  faqQ: { fontSize: 10, fontFamily: "Helvetica-Bold", marginBottom: 3 },
  signoffRow: { flexDirection: "row", alignItems: "flex-end", marginTop: 22 },
  signoffLabel: { fontSize: 9.5, color: "#333" },
  signoffLine: { flexGrow: 1, borderBottom: "1pt solid #333", marginHorizontal: 6, minHeight: 14 },
  signoffDateLabel: { fontSize: 9.5, color: "#333" },
  signoffDateLine: { width: 90, borderBottom: "1pt solid #333", marginHorizontal: 6, minHeight: 14 },
  footer: {
    position: "absolute",
    bottom: 24,
    left: 40,
    right: 40,
    fontSize: 7.5,
    color: MUTED,
    borderTop: `1pt solid ${BORDER}`,
    paddingTop: 8,
  },
});

function buildRamsPdfElement(trade, siteAddress, assessorName) {
  const generatedOn = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const regItems = trade.applicable_regs.map((reg) =>
    h(View, { style: styles.regRow, key: reg }, [
      h(Text, { style: styles.regBullet, key: "b" }, "—"),
      h(Text, { style: styles.regText, key: "t" }, reg),
    ])
  );

  const methodStepRows = METHOD_STATEMENT_STEPS.map((step, i) =>
    h(View, { style: styles.methodStepRow, key: step }, [
      h(Text, { style: styles.methodStepNum, key: "n" }, `${i + 1}.`),
      h(Text, { style: styles.methodStepText, key: "t" }, step),
    ])
  );

  const hazardBlocks = trade.hazards.map((hazard) =>
    h(View, { style: styles.hazardBlock, key: hazard.name }, [
      h(Text, { style: styles.hazardName, key: "n" }, hazard.name),
      h(Text, { style: styles.hazardControl, key: "c" }, `Control: ${hazard.control}`),
      h(View, { style: styles.riskTagRow, key: "r" }, [
        h(
          Text,
          { style: [styles.riskTag, styles.riskTagInitial], key: "ri" },
          "Initial Risk: High"
        ),
        h(
          Text,
          { style: [styles.riskTag, styles.riskTagResidual], key: "rr" },
          "Residual Risk: Low"
        ),
      ]),
    ])
  );

  const ppeBadges = trade.required_ppe.map((ppe) =>
    h(Text, { style: styles.ppeBadge, key: ppe }, ppe)
  );

  const emergencyBlocks = EMERGENCY_PROCEDURES.map((item) =>
    h(View, { style: styles.emergencyBlock, key: item.title }, [
      h(Text, { style: styles.emergencyTitle, key: "t" }, item.title),
      h(Text, { style: styles.emergencyBody, key: "b" }, item.body),
    ])
  );

  return h(
    Document,
    { title: `RAMS - ${trade.task_name}` },
    h(
      Page,
      { size: "A4", style: styles.page },
      h(Image, { style: styles.logo, src: LOGO_PATH }),
      h(Text, { style: styles.title }, trade.h1_title),
      h(
        Text,
        { style: styles.meta },
        `${siteAddress ? `Site: ${siteAddress}  |  ` : ""}Generated: ${generatedOn}`
      ),
      h(
        Text,
        { style: styles.assessorLine },
        `Assessor / Competent Person: ${assessorName || "Not provided"}`
      ),

      h(Text, { style: styles.sectionTitle }, "Applicable Regulations"),
      ...regItems,

      h(Text, { style: styles.sectionTitle }, "Method Statement — Sequence of Work"),
      ...methodStepRows,

      h(Text, { style: styles.sectionTitle }, "Hazard & Risk Assessment"),
      h(
        Text,
        { style: styles.sectionNote },
        "Each hazard is assessed against a standard Likelihood x Severity matrix. “Initial Risk” reflects the risk before any control measures are applied; “Residual Risk” reflects the risk once the stated controls are correctly implemented on site."
      ),
      ...hazardBlocks,

      h(Text, { style: styles.sectionTitle }, "Required PPE"),
      h(View, { style: styles.ppeRow }, ppeBadges),

      h(Text, { style: styles.sectionTitle }, "Emergency Procedures"),
      ...emergencyBlocks,
      h(View, { style: styles.emergencyContactRow }, [
        h(Text, { style: styles.emergencyContactLabel, key: "l1" }, "Emergency Services:"),
        h(Text, { style: styles.emergencyContactValue, key: "v1" }, "999"),
      ]),
      h(View, { style: styles.emergencyContactRow }, [
        h(Text, { style: styles.emergencyContactLabel, key: "l2" }, "Site Supervisor / Contact:"),
        h(View, { style: styles.emergencyContactLine, key: "line2" }),
      ]),
      h(View, { style: styles.emergencyContactRow }, [
        h(Text, { style: styles.emergencyContactLabel, key: "l3" }, "Nearest A&E:"),
        h(View, { style: styles.emergencyContactLine, key: "line3" }),
      ]),

      h(Text, { style: styles.sectionTitle }, "Review & Sign-Off"),
      h(
        Text,
        { style: [styles.faqQ, { marginBottom: 4 }] },
        "Draft template. Not valid for use on site until signed by the competent person."
      ),
      h(
        Text,
        { style: styles.sectionNote },
        "I declare that I am a competent person for this work, with the skills, knowledge, and experience to assess it. I have inspected the site (or it has been inspected on my behalf), checked every section of this document, amended anything that does not apply, and adopt it as my own active risk assessment. Under the Management of Health and Safety at Work Regulations 1999, I retain exclusive statutory responsibility for its adequacy. Ramsforge is an automated clerical drafting tool. To the maximum extent permitted by UK law, Ramsforge and its operators exclude all liability for any direct, indirect, or consequential loss, injury, regulatory penalties, or fatalities resulting from errors, omissions, or text generation anomalies within this document."
      ),
      h(View, { style: styles.signoffRow }, [
        h(Text, { style: styles.signoffLabel, key: "l1" }, `Assessor${assessorName ? " (" + assessorName + ")" : ""} Signature:`),
        h(View, { style: styles.signoffLine, key: "line1" }),
        h(Text, { style: styles.signoffDateLabel, key: "dl1" }, "Date:"),
        h(View, { style: styles.signoffDateLine, key: "dline1" }),
      ]),
      h(View, { style: styles.signoffRow }, [
        h(
          Text,
          { style: styles.signoffLabel, key: "l2" },
          "Site Supervisor / Operative Sign-off:"
        ),
        h(View, { style: styles.signoffLine, key: "line2" }),
        h(Text, { style: styles.signoffDateLabel, key: "dl2" }, "Date:"),
        h(View, { style: styles.signoffDateLine, key: "dline2" }),
      ]),
      h(
        Text,
        { style: { ...styles.sectionNote, marginTop: 14 } },
        "Review again if site conditions, the scope of work, or the team change."
      ),

      h(
        Text,
        { style: styles.footer, fixed: true },
        "Generated by Ramsforge (ramsforge.co.uk) from standard templates and user-supplied details. It is guidance for drafting only and is not a substitute for a site-specific assessment by a competent person. The duty holder remains responsible for the adequacy of the risk assessment (Management of Health and Safety at Work Regulations 1999), for verifying hazards and controls, and for compliance with HSE regulations. See ramsforge.co.uk/terms."
      )
    )
  );
}

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

const input = JSON.parse(await readStdin());
const buf = await renderToBuffer(
  buildRamsPdfElement(input.trade, input.siteAddress, input.assessorName)
);
process.stdout.write(buf);
