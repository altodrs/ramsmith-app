// Free resources shown as expandable cards on /resources, under the
// toolbox talk generator. Each resource is a list of content blocks, so
// adding a new one is just adding an entry here.
//
// Block types: p, h, list, checklist, steps, table, note, ppe, symbols.
// Claims rules: never "compliant" or "guaranteed"; say "built around
// CDM 2015 and HSE guidance". Check figures against the HSE page cited.

export const resourceCategories = [
  { id: "checklists", label: "Quick Checklists", kind: "Checklist" },
  { id: "guides", label: "Step-by-Step Guides", kind: "Guide" },
  { id: "cheatsheets", label: "Cheat Sheets and Tools", kind: "Cheat sheet" },
];

export const resources = [
  {
    slug: "rams-signed-off-first-time",
    category: "guides",
    title: "How to Write RAMS That Get Signed Off First Time",
    description:
      "The common reasons principal contractors bounce RAMS back, and how to avoid them. For subbies tired of resubmitting.",
    time: "4 min",
    tag: "Most useful",
    blocks: [
      {
        type: "steps",
        items: [
          {
            title: "Make it site-specific",
            text: "Put the actual site address, the area you're working in and the dates. A generic RAMS is the number one reason for rejection.",
          },
          {
            title: "Describe the job in order",
            text: "The method statement should read like the job: arrive, set up, do the work, clear up. Short numbered steps.",
          },
          {
            title: "List the real hazards for this job",
            text: "Not every hazard in construction, just the ones that apply, each with a risk rating before and after controls.",
          },
          {
            title: "Make the controls specific",
            text: '"Take care" is not a control. "Tower scaffold erected by a PASMA-trained operative, inspected before use" is.',
          },
          {
            title: "Name the PPE and the plant",
            text: "List PPE by task, and the plant and tools you'll bring.",
          },
          {
            title: "Cover emergencies",
            text: "First aid, fire, rescue from height where it applies, and the nearest A&E.",
          },
          {
            title: "Show who's been briefed",
            text: "A sign-off sheet with the names and signatures of everyone doing the work.",
          },
        ],
      },
    ],
    cta: {
      text: "Ramsforge builds site-specific RAMS with the job steps, rated hazards, PPE and emergency procedures laid out. Add your site address and preview it free. No account needed, pay per document.",
    },
  },
  {
    slug: "new-site-paperwork-checklist",
    category: "checklists",
    title: "New Site Paperwork Checklist: Turn Up Ready, Start on Time",
    description:
      "Everything most principal contractors ask to see before you start. For sole traders and small subbies who keep getting held at the gate.",
    time: "2 min",
    blocks: [
      { type: "h", text: "Before you go" },
      {
        type: "checklist",
        items: [
          "RAMS for the actual job and the actual site address, not a generic one",
          "Public liability insurance certificate, in date, with the cover level the contractor asked for",
          "Employer's liability certificate if you employ anyone",
          "CSCS card (or the right card for your trade, such as ECS for electricians) for everyone going",
          "Training certificates for the work, for example IPAF, PASMA, asbestos awareness or Gas Safe ID",
          "COSHH assessments for any hazardous products you're bringing (sealants, solvents, resins)",
          "PAT or inspection records for your power tools, if the site asks",
        ],
      },
      { type: "h", text: "On the day" },
      {
        type: "checklist",
        items: [
          "Your PPE: boots, hi-vis, hard hat, gloves, eye protection, plus anything your RAMS lists",
          "Time for the site induction (allow 30 to 60 minutes on bigger sites)",
        ],
      },
      {
        type: "note",
        text: "Not every site asks for all of this. Check the pre-start email or ask the site manager. Bigger contractors may also want CHAS, SMAS or Constructionline details.",
      },
    ],
    cta: {
      text: "Need RAMS for the job by tonight? Pick your job, add the site address, and preview it free.",
    },
  },
  {
    slug: "ppe-by-trade",
    category: "cheatsheets",
    title: "PPE by Trade: What to Wear for the Job",
    description:
      "The PPE most sites expect on top of the site minimum, by trade and task, plus the standard to look for on the label.",
    time: "Interactive",
    blocks: [
      {
        type: "p",
        text: "Site minimum on most UK sites: safety boots with midsole and toe protection, hi-vis, hard hat, gloves and eye protection. Always check the site rules, as some sites set more.",
      },
      {
        type: "ppe",
        trades: [
          {
            trade: "Electrician",
            items: [
              "Insulated gloves for electrical work where the risk assessment calls for them",
              "FFP3 mask when chasing walls or drilling masonry",
              "Ear defenders for chasing",
            ],
          },
          {
            trade: "Plumber and heating engineer",
            items: [
              "Heat-resistant gloves for soldering and brazing",
              "FFP3 mask for cutting or drilling",
              "Chemical gloves and goggles for descalers and flux",
            ],
          },
          {
            trade: "Carpenter and joiner",
            items: [
              "Ear defenders for power saws and nail guns",
              "FFP3 mask for MDF and hardwood dust",
              "Cut-resistant gloves",
            ],
          },
          {
            trade: "Painter and decorator",
            items: [
              "FFP3 mask for sanding (and check for lead paint on older buildings)",
              "Nitrile gloves for solvents",
              "Goggles for overhead work",
            ],
          },
          {
            trade: "Roofer",
            items: [
              "Harness and lanyard where edge protection isn't in place",
              "Heat-resistant gloves for torch-on work",
              "Sun protection",
            ],
          },
          {
            trade: "Groundworker",
            items: [
              "Ear defenders for breakers, and anti-vibration routines",
              "FFP3 mask for cutting concrete or kerbs",
              "Waterproofs",
            ],
          },
          {
            trade: "Bricklayer",
            items: [
              "FFP3 mask for disc cutting",
              "Goggles and gloves for wet cement (it burns skin)",
              "Knee pads",
            ],
          },
          {
            trade: "Plasterer and dry liner",
            items: [
              "FFP3 mask for mixing and sanding",
              "Goggles and gloves for wet plaster and cement-based products",
            ],
          },
        ],
      },
      { type: "h", text: "What to look for on the label" },
      {
        type: "table",
        head: ["Item", "Standard"],
        rows: [
          ["Hard hat", "EN 397"],
          ["Safety boots", "EN ISO 20345 (S1P or S3 on most sites)"],
          ["Hi-vis", "EN ISO 20471"],
          ["Eye protection", "EN 166"],
          ["Work gloves", "EN 388 (cut and abrasion), EN 374 (chemicals)"],
          ["Dust mask", "EN 149 FFP3 for silica and hardwood dust"],
          ["Hearing protection", "EN 352"],
          ["Harness", "EN 361"],
        ],
      },
      {
        type: "note",
        text: "Tight-fitting masks like FFP3 need a face fit test and only work on a clean-shaven face. PPE is the last line of defence, after controlling the hazard at source (for example water suppression or on-tool extraction for dust).",
      },
    ],
    basedOn:
      "Personal Protective Equipment at Work Regulations 1992 (as amended 2022), HSE INDG174.",
    cta: {
      text: "Ramsforge RAMS list the PPE for each task in the job, so the whole gang knows what to bring.",
    },
  },
  {
    slug: "working-at-height-risk-assessment",
    category: "guides",
    title: "How to Assess Risk for Working at Height",
    description:
      "A 6-step guide to planning work at height the way the Work at Height Regulations 2005 and HSE expect. For anyone going above ground level.",
    time: "5 min",
    blocks: [
      {
        type: "steps",
        items: [
          {
            title: "Can you avoid it?",
            text: "Work from the ground where you can: extendable poles, pre-assembling at ground level, lowering lighting to service it.",
          },
          {
            title: "If not, prevent a fall",
            text: "Use an existing safe place (a roof with a parapet) or kit that stops a fall: scaffold, towers, podiums, MEWPs, edge protection.",
          },
          {
            title: "If a fall can't be prevented, cut the distance and the consequences",
            text: "Nets, airbags, fall arrest harnesses. These are a last resort and need a rescue plan.",
          },
          {
            title: "Check the ground and surroundings",
            text: "Fragile roofs and rooflights, uneven or soft ground, overhead power lines, the public below, weather and wind.",
          },
          {
            title: "Check the people and the kit",
            text: "Trained and competent for the access kit (for example PASMA for towers, IPAF for MEWPs). Kit inspected and in date.",
          },
          {
            title: "Write it down and brief it",
            text: "Put the controls in your RAMS, brief the team before work starts, and review it if anything changes.",
          },
        ],
      },
      {
        type: "note",
        text: "HSE does not ban ladders. A ladder is fine for short, light, low-risk work: as a rule of thumb no more than 30 minutes in one position, and nothing over 10 kg carried up it.",
      },
    ],
    basedOn: 'Work at Height Regulations 2005, HSE INDG401 "Working at height: a brief guide".',
    cta: {
      text: "Ramsforge RAMS cover work at height for each job, with the hazards rated. Preview yours free.",
    },
  },
  {
    slug: "coshh-hazard-symbols",
    category: "cheatsheets",
    title: "COSHH Hazard Symbols Cheat Sheet",
    description:
      "The 9 hazard pictograms on product labels, what each means, and where you'll see them on site.",
    time: "2 min",
    blocks: [
      {
        type: "symbols",
        items: [
          {
            name: "Exploding bomb",
            meaning: "Explosive",
            site: "Cartridges for powder-actuated nail guns",
          },
          {
            name: "Flame",
            meaning: "Flammable",
            site: "Solvents, spray foam, aerosol paints, contact adhesive, fuel",
          },
          {
            name: "Flame over circle",
            meaning: "Oxidising, makes fires burn hotter",
            site: "Oxygen cylinders for cutting and brazing",
          },
          {
            name: "Gas cylinder",
            meaning: "Gas under pressure",
            site: "Propane, acetylene and oxygen cylinders",
          },
          {
            name: "Corrosion",
            meaning: "Burns skin, damages eyes",
            site: "Wet cement and mortar, brick acid, drain cleaners",
          },
          {
            name: "Skull and crossbones",
            meaning: "Toxic, can kill in small amounts",
            site: "Some pest control products",
          },
          {
            name: "Exclamation mark",
            meaning: "Irritant, harmful, skin sensitiser",
            site: "Many adhesives, sealants and cement products",
          },
          {
            name: "Health hazard",
            meaning: "Serious long-term health effects, including cancer and asthma",
            site: "Isocyanate products (PU foam, 2-pack paints), some silica-containing products",
          },
          {
            name: "Environment",
            meaning: "Harmful to the environment",
            site: "Wood preservatives, some solvent-based paints",
          },
        ],
      },
      {
        type: "p",
        text: "Before using a product: read the label and the safety data sheet, check the COSHH assessment, use the controls it lists, and store and dispose of it as the label says.",
      },
    ],
    basedOn:
      'Control of Substances Hazardous to Health Regulations 2002 (COSHH), GB CLP Regulation, HSE "COSHH basics".',
  },
];
