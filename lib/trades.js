export const trades = [
  {
    slug: "electrician-ev-charger-installation",
    trade: "Electrical",
    task_name: "EV Charger Installation",
    h1_title: "EV Charger Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific, CDM 2015 compliant Risk Assessment & Method Statement for domestic and commercial EV charger installations in 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "CDM Regulations 2015",
      "Work at Height Regulations 2005",
    ],
    hazards: [
      {
        name: "Electric Shock / Mains Isolation",
        control:
          "Isolate main supply at consumer unit, lock out / tag out (LOTO), test dead using proved voltage indicator before terminating.",
      },
      {
        name: "Ground Trenching / Underground Services",
        control:
          "Conduct CAT & Genny scan before excavating cable trench. Hand-dig within 0.5m of known service routes.",
      },
      {
        name: "Drilling through External Walls",
        control:
          "Wear eye protection (BS EN 166) and dust mask (FFP3). Inspect wall for hidden pipework/wiring prior to drilling.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "BS EN 166 Safety Glasses",
      "FFP3 Dust Mask",
      "1000V Insulated Gloves",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Do I need a site-specific RAMS for domestic EV charger installs?",
    faq_a1:
      "Yes. Under CDM 2015, all construction and electrical installation work—including domestic jobs—requires adequate risk planning.",
  },
  {
    slug: "plumber-combi-boiler-replacement",
    trade: "Plumbing & Heating",
    task_name: "Combi Boiler Replacement",
    h1_title: "Combi Boiler Replacement RAMS Generator (UK)",
    meta_description:
      "Create a Gas Safe & CDM 2015 compliant RAMS for boiler swaps and heating system upgrades in under 2 minutes.",
    applicable_regs: [
      "Gas Safety Regulations 1998",
      "COSHH Regulations 2002",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Gas Leaks & Flue Gas Exposure",
        control:
          "Test gas tightness before and after install. Ensure flue is correctly terminated with compliant clearances.",
      },
      {
        name: "Hot System Water / Chemical Dosing",
        control:
          "Drain system completely into sealed containers before cutting pipes. Wear nitrile gloves when handling flushing fluids.",
      },
      {
        name: "Manual Handling (Heavy Appliance)",
        control:
          "Two-person lift required for removing old unit and mounting new boiler (approx 30–40kg). Keep load close to waist.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "BS EN 166 Safety Glasses",
      "Heat-Resistant Gloves",
      "Nitrile Gloves",
      "Safety Boots",
    ],
    faq_q1: "Does this RAMS include Gas Safe compliance standards?",
    faq_a1:
      "Yes. The generated method statement includes gas isolation steps, flue tightness testing sequences, and pressure testing protocols aligned with 1998 Regulations.",
  },
  {
    slug: "roofer-pitched-roof-re-tiling",
    trade: "Roofing",
    task_name: "Pitched Roof Re-Tiling",
    h1_title: "Pitched Roof Re-Tiling RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific, CDM 2015 compliant RAMS for pitched roof re-tiling and repair work, covering height safety and manual handling, in 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "CDM Regulations 2015",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Falls from Height",
        control:
          "Use appropriate roof edge protection, scaffolding or roof ladders/crawl boards in line with the Work at Height Regulations 2005. Never work on fragile roof coverings without proper staging.",
      },
      {
        name: "Falling Materials & Debris",
        control:
          "Establish an exclusion zone below the work area, use debris netting or chutes, and secure loose tiles before removal.",
      },
      {
        name: "Manual Handling of Roof Tiles",
        control:
          "Use a mechanical hoist or tile lift where possible. Team-lift heavy bundles and avoid twisting while carrying tiles up ladders.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Fall Arrest Harness (BS EN 361)",
      "BS EN 166 Safety Glasses",
      "Non-Slip Roofing Boots",
      "Cut-Resistant Gloves",
    ],
    faq_q1: "Do I need a RAMS for a small roof repair job?",
    faq_a1:
      "Yes. Any work at height, including short-duration repairs, falls under the Work at Height Regulations 2005 and requires a documented risk assessment and method statement, regardless of job size.",
  },
  {
    slug: "scaffolder-scaffold-erection-dismantling",
    trade: "Scaffolding",
    task_name: "Scaffold Erection & Dismantling",
    h1_title: "Scaffold Erection & Dismantling RAMS Generator (UK)",
    meta_description:
      "Create a Work at Height and CDM 2015 compliant RAMS for scaffold erection and dismantling, covering fall prevention and load safety, in minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "CDM Regulations 2015",
      "LOLER 1998",
    ],
    hazards: [
      {
        name: "Falls During Erection/Dismantling",
        control:
          "Use an advance guardrail system (ADAS) so leading-edge protection is in place before operatives step onto each new lift. All scaffolders must hold a valid CISRS card.",
      },
      {
        name: "Overloading & Structural Collapse",
        control:
          "Erect strictly in accordance with the TG20:21 compliance sheet or a bespoke design. Do not exceed the rated load class boarded on the scaffold.",
      },
      {
        name: "Falling Tools & Components",
        control:
          "Use tool lanyards, toe boards and brick guards on all working lifts. Segregate the ground-level drop zone during erection and dismantling.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Fall Arrest Harness (BS EN 361)",
      "BS EN ISO 20345 Safety Boots",
      "Hi-Vis Clothing",
      "Work Gloves",
    ],
    faq_q1: "Does the RAMS cover TG20:21 compliance?",
    faq_a1:
      "Yes. The generated method statement references TG20:21 compliant configurations and flags where a bespoke scaffold design is required instead.",
  },
  {
    slug: "painter-exterior-painting-ladder-access",
    trade: "Painting & Decorating",
    task_name: "Exterior Painting (Ladder/Access Equipment)",
    h1_title: "Exterior Painting & Decorating RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for exterior painting and decorating work at height, covering ladder safety and paint COSHH controls, in 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "COSHH Regulations 2002",
      "CDM Regulations 2015",
    ],
    hazards: [
      {
        name: "Falls from Ladders/Towers",
        control:
          "Use a proper access tower or podium steps in preference to ladders where practical. Ladders restricted to short-duration, low-risk tasks and secured/footed at all times.",
      },
      {
        name: "Exposure to Solvents & Paint Fumes",
        control:
          "Use low-VOC coatings where possible, ensure adequate ventilation, and follow the COSHH data sheet for each product used.",
      },
      {
        name: "Slips on Wet or Painted Surfaces",
        control:
          "Cordon off wet paint areas, use non-slip matting on walkways, and allow adequate drying/cure time before reopening access routes.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Solvent-Resistant Gloves",
      "FFP3 Dust/Fume Mask",
      "Non-Slip Footwear",
      "Coveralls",
    ],
    faq_q1: "Do I need a RAMS just for painting a house exterior?",
    faq_a1:
      "Yes, if any part of the job involves ladders, towers or other access equipment. The Work at Height Regulations 2005 apply regardless of how brief the task is.",
  },
  {
    slug: "groundworker-drainage-installation-excavation",
    trade: "Groundworks",
    task_name: "Drainage Installation & Excavation",
    h1_title: "Drainage Installation & Excavation RAMS Generator (UK)",
    meta_description:
      "Create a CDM 2015 compliant RAMS for drainage installation and excavation work, covering trench collapse and buried services, in under 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Manual Handling Operations 1992",
      "Confined Spaces Regulations 1997",
    ],
    hazards: [
      {
        name: "Trench Collapse",
        control:
          "Batter, shore or box excavations over 1.2m deep in line with a competent person's assessment. No one enters an unsupported trench.",
      },
      {
        name: "Striking Buried Services",
        control:
          "Conduct a CAT & Genny scan and consult utility drawings before digging. Hand-dig trial holes within 0.5m of known services.",
      },
      {
        name: "Manual Handling of Pipes & Materials",
        control:
          "Use mechanical lifting aids for heavy drainage pipes and manhole rings. Team-lift where mechanical aids aren't practical.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Hi-Vis Clothing",
      "BS EN ISO 20345 Safety Boots",
      "Cut-Resistant Gloves",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover excavations near existing services?",
    faq_a1:
      "Yes. It includes a CAT & Genny scanning step and safe digging practice around buried services, in line with HSE guidance HSG47.",
  },
  {
    slug: "carpenter-kitchen-fitting-installation",
    trade: "Carpentry & Joinery",
    task_name: "Kitchen Fitting & Installation",
    h1_title: "Kitchen Fitting & Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for kitchen fitting and installation work, covering power tool use and manual handling, in 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "PUWER 1998",
      "COSHH Regulations 2002",
    ],
    hazards: [
      {
        name: "Manual Handling of Units & Worktops",
        control:
          "Two-person lift for base/wall units and stone or heavy worktops. Use trolleys and worktop lifting suckers to reduce lifting strain.",
      },
      {
        name: "Power Tool Use (Saws, Drills)",
        control:
          "Only use tools with a current PAT test and guards fitted. Use dust extraction on cutting equipment and ensure operatives are trained on each tool.",
      },
      {
        name: "Exposure to Wood Dust & Adhesive Fumes",
        control:
          "Use on-tool dust extraction, work in a ventilated area, and follow the COSHH data sheet for adhesives and sealants used.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "FFP3 Dust Mask",
      "Cut-Resistant Gloves",
      "Hearing Protection",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Do I need a RAMS for a single kitchen installation job?",
    faq_a1:
      "Yes. Any job for a client, including a single domestic kitchen fit, falls under CDM 2015's requirement for adequate risk planning where power tools and manual handling risks are present.",
  },
  {
    slug: "gas-engineer-boiler-servicing-safety-inspection",
    trade: "Gas Engineering",
    task_name: "Gas Boiler Servicing & Safety Inspection",
    h1_title: "Gas Boiler Servicing & Safety Inspection RAMS Generator (UK)",
    meta_description:
      "Create a Gas Safe compliant RAMS for boiler servicing and safety inspections, covering gas leak and carbon monoxide controls, in under 2 minutes.",
    applicable_regs: [
      "Gas Safety (Installation and Use) Regulations 1998",
      "COSHH Regulations 2002",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Gas Leaks",
        control:
          "Carry out a tightness test before and after servicing. Use a calibrated gas detector and isolate the supply immediately if a leak is found.",
      },
      {
        name: "Carbon Monoxide Exposure",
        control:
          "Check flue integrity and terminal clearances, use a CO analyser on all combustion appliances, and never leave a suspect appliance in use.",
      },
      {
        name: "Working in Confined Spaces (Airing Cupboards/Lofts)",
        control:
          "Assess ventilation and access before starting. Use task lighting and keep a second person aware of the work location.",
      },
    ],
    required_ppe: [
      "Nitrile Gloves",
      "BS EN 166 Safety Glasses",
      "Knee Pads",
      "FFP3 Dust Mask",
      "Safety Boots",
    ],
    faq_q1: "Does this RAMS confirm I'm Gas Safe registered?",
    faq_a1:
      "No — the RAMS is a risk assessment document, not proof of registration. You must still be Gas Safe registered to legally carry out this work, and your registration number should be added to the document separately.",
  },
];

export function getTradeBySlug(slug) {
  return trades.find((t) => t.slug === slug) || null;
}
