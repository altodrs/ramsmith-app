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
  {
    slug: "ladder-pre-use-check",
    category: "checklists",
    title: "Ladder and Stepladder Pre-Use Check",
    description:
      "The checks HSE's ladder guidance expects before every use. For anyone going up a ladder, from apprentices to site managers.",
    time: "1 min",
    blocks: [
      {
        type: "note",
        text: "Is a ladder the right kit? HSE says ladders are fine for low-risk, short-duration work (as a rule of thumb, no more than 30 minutes in one position) and light work. If you need to carry more than 10 kg up it, or need both hands for long, look at a tower, podium or MEWP.",
      },
      { type: "h", text: "Check the ladder" },
      {
        type: "checklist",
        items: [
          "Stiles not bent, split or damaged",
          "Feet present, not worn, and clean",
          "Rungs or treads not bent, loose or missing",
          "Locking bars (stepladders) work and are not bent",
          "Platform (stepladders) not split or buckled",
        ],
      },
      { type: "h", text: "Check the set-up" },
      {
        type: "checklist",
        items: [
          "Firm, level ground, clean and not slippery",
          "Leaning ladders at a 75 degree angle (1 out for every 4 up)",
          "Extends at least 1 m above the landing point if used for access",
          "Tied, footed or fitted with a stability device",
          "Three points of contact while climbing, belt buckle kept inside the stiles",
          "Stepladders fully open with locks on, and not working off the top 2 steps (3 for swing-back steps) unless there's a safe handhold",
        ],
      },
    ],
    basedOn: 'HSE INDG455 "Safe use of ladders and stepladders".',
  },
  {
    slug: "daily-pre-start-check",
    category: "checklists",
    title: "Daily Pre-Start Check: 5 Minutes Before the Tools Come Out",
    description:
      "A quick daily walk-round for gangers, supervisors and sole traders. Catches what's changed since yesterday.",
    time: "5 min",
    tag: "Every day",
    blocks: [
      {
        type: "checklist",
        items: [
          "Access and walkways clear, lit and free of trip hazards",
          "Edge protection, barriers and covers still in place and secure",
          "Scaffold tag in date (inspected in the last 7 days) before anyone goes up",
          "Excavations checked at the start of the shift",
          "Ladders, steps and towers checked before use",
          "Tools and leads in good condition, no damaged cables, 110V on site where required",
          "Weather checked: wind, rain, ice or heat that changes how the job is done",
          "Everyone on the job has seen the RAMS and knows today's plan",
          "Fire extinguisher and first aid kit in place",
          "Anything new on site today (other trades, deliveries, cranes) that affects your work",
        ],
      },
      {
        type: "note",
        text: "Anything you can't tick? Stop and sort it, or tell the site manager, before work starts.",
      },
    ],
    cta: {
      text: "Job changed since the RAMS was written? Get an updated one for the new scope and preview it free.",
    },
  },
  {
    slug: "hot-works-checklist",
    category: "checklists",
    title: "Hot Works Checklist: Before, During, After",
    description:
      "For plumbers, roofers and fabricators doing brazing, welding, cutting or torch-on work. Covers the checks most hot works permits ask for.",
    time: "3 min",
    tag: "Permit work",
    blocks: [
      { type: "h", text: "Before" },
      {
        type: "checklist",
        items: [
          "Can the job be done without heat (push-fit, press-fit, cold cutting)? If yes, do that",
          "Hot works permit issued and signed, if the site uses them",
          "Combustibles moved at least 10 m away or covered with fire-resistant blankets",
          "Checked behind walls, under floors and above ceilings for anything that could catch",
          "Suitable extinguisher at the work point, and you know how to use it",
          "Fire detection isolated only with the site's permission, and put back after",
        ],
      },
      { type: "h", text: "During" },
      {
        type: "checklist",
        items: [
          "Area kept clear, watching for sparks and heat travelling along pipes",
          "Gas bottles upright, secured and fitted with flashback arrestors",
        ],
      },
      { type: "h", text: "After" },
      {
        type: "checklist",
        items: [
          "Fire watch for at least 60 minutes after the work stops, longer if the permit says so",
          "Final check of the area, including the far side of walls and floors, before signing off",
        ],
      },
    ],
    cta: {
      text: "Hot works part of a bigger job? Make sure your RAMS covers it. Preview yours free before you pay.",
    },
  },
  {
    slug: "suspected-asbestos",
    category: "guides",
    title: "Found Something That Might Be Asbestos? What to Do Next",
    description:
      "The steps to take if you uncover a suspect material on a job. For every trade working on buildings built before 2000.",
    time: "1 min",
    tag: "Stop work",
    blocks: [
      {
        type: "steps",
        items: [
          {
            title: "Stop work straight away",
            text: "Don't drill, cut, sand or break it any further.",
          },
          {
            title: "Keep people away",
            text: "Clear the area and stop others going in. Close doors if you can.",
          },
          {
            title: "Don't clean it up",
            text: "No sweeping, and no hoovering with a normal vacuum.",
          },
          {
            title: "Tell the person in charge",
            text: "The site manager, principal contractor or, on domestic jobs, the homeowner.",
          },
          {
            title: "Don't restart until it's sorted",
            text: "Work only restarts once the material has been tested and dealt with by the right people. Some asbestos work needs a licensed contractor.",
          },
        ],
      },
      {
        type: "p",
        text: "Common places in pre-2000 buildings: artex and textured coatings, floor tiles, boiler flues and cupboards, pipe lagging, soffits, garage and shed roofs, and insulation board around fireplaces and doors.",
      },
      {
        type: "note",
        text: "Before work starts on non-domestic buildings, ask for the asbestos register or survey. Refurbishment work needs a refurbishment and demolition survey of the area you're working on.",
      },
    ],
    basedOn: 'Control of Asbestos Regulations 2012, HSE "Asbestos essentials".',
  },
  {
    slug: "noise-action-levels",
    category: "cheatsheets",
    title: "Noise on Site: Action Levels Cheat Sheet",
    description:
      "The noise levels that trigger action under UK law, and a quick way to tell if it's too loud. For anyone using saws, breakers or nail guns.",
    time: "1 min",
    blocks: [
      {
        type: "table",
        head: ["Daily exposure", "What it means", "What's needed"],
        rows: [
          [
            "80 dB(A)",
            "Lower exposure action value",
            "Employer must assess the risk, give information and training, and make hearing protection available",
          ],
          [
            "85 dB(A)",
            "Upper exposure action value",
            "Employer must reduce noise as far as possible and mark hearing protection zones, and hearing protection must be worn",
          ],
          [
            "87 dB(A)",
            "Exposure limit value, allowing for hearing protection",
            "Must not be exceeded",
          ],
        ],
      },
      {
        type: "p",
        text: "Peak noise (sudden bangs like nail guns): 135, 137 and 140 dB(C) for the lower, upper and limit values.",
      },
      {
        type: "note",
        text: "The 2-metre test: if you have to raise your voice to talk to someone about 2 metres away for at least part of the day, the noise probably needs assessing.",
      },
      {
        type: "p",
        text: "Typically noisy on site: breakers, disc cutters, circular and chop saws, nail guns, compressors and concrete pokers.",
      },
    ],
    basedOn: "Control of Noise at Work Regulations 2005, HSE INDG362.",
  },
  {
    slug: "inspection-frequencies",
    category: "cheatsheets",
    title: "Inspection Frequencies Cheat Sheet",
    description:
      "How often scaffolds, excavations, lifting kit and other site equipment need inspecting, in one table. For site managers and supervisors.",
    time: "2 min",
    blocks: [
      {
        type: "table",
        head: ["Equipment", "When it must be inspected", "Based on"],
        rows: [
          [
            "Scaffolds and working platforms (fall of 2 m or more)",
            "After erection and before first use, at least every 7 days, and after anything that could affect stability (high winds, alterations)",
            "Work at Height Regulations 2005",
          ],
          [
            "Mobile towers",
            "After assembly in each new position, and at least every 7 days if left up",
            "Work at Height Regulations 2005",
          ],
          [
            "Excavations",
            "At the start of every shift, and after any event that could affect stability or any fall of material",
            "CDM 2015",
          ],
          [
            "Lifting accessories and kit that lifts people (slings, MEWPs, hoists)",
            "Thorough examination at least every 6 months, plus pre-use checks",
            "LOLER 1998",
          ],
          [
            "Other lifting equipment (cranes, telehandlers)",
            "Thorough examination at least every 12 months, plus pre-use checks",
            "LOLER 1998",
          ],
          [
            "Harnesses and lanyards",
            "Pre-use check every time, detailed inspection at least every 6 months (more often in heavy use)",
            "WAH Regulations 2005, BS 8437",
          ],
          [
            "Ladders and stepladders",
            "Pre-use check every time, plus regular detailed visual inspections recorded by the employer",
            "HSE INDG455",
          ],
          [
            "Portable electrical tools",
            "User checks before use, plus formal inspection and testing at intervals based on risk (more often on construction sites)",
            "HSE HSG107",
          ],
          [
            "Fire extinguishers",
            "Monthly visual check, annual service by a competent person",
            "BS 5306-3",
          ],
        ],
      },
      {
        type: "note",
        text: "Scaffold and excavation inspections need a written report. Always follow the manufacturer's instructions, and the site's own regime if it's stricter.",
      },
    ],
  },
];
