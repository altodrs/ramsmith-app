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
  {
    slug: "plasterer-wall-ceiling-plastering",
    trade: "Plastering",
    task_name: "Wall & Ceiling Plastering",
    h1_title: "Wall & Ceiling Plastering RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for wall and ceiling plastering work, covering dust control and working at height, in 2 minutes.",
    applicable_regs: [
      "COSHH Regulations 2002",
      "Work at Height Regulations 2005",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Exposure to Plaster & Silica Dust",
        control:
          "Use dust extraction on sanding tools, wear an FFP3 mask, and damp-down surfaces before sanding where practical, in line with COSHH 2002.",
      },
      {
        name: "Falls from Trestles/Podium Steps",
        control:
          "Use properly boarded trestle platforms with guardrails for ceiling work above 2m. Never stand on buckets or improvised platforms.",
      },
      {
        name: "Manual Handling of Plaster Bags & Boards",
        control:
          "Use a two-person lift or trolley for plasterboard sheets and bagged materials. Store bags at waist height to reduce repeated bending.",
      },
    ],
    required_ppe: [
      "FFP3 Dust Mask",
      "BS EN 166 Safety Glasses",
      "Knee Pads",
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover ceiling work at height?",
    faq_a1:
      "Yes. It includes controls for safe access equipment when plastering ceilings or high walls, in line with the Work at Height Regulations 2005.",
  },
  {
    slug: "tiler-wall-floor-tiling",
    trade: "Tiling",
    task_name: "Wall & Floor Tiling",
    h1_title: "Wall & Floor Tiling RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for wall and floor tiling work, covering cutting tool safety and adhesive COSHH controls, in under 2 minutes.",
    applicable_regs: [
      "COSHH Regulations 2002",
      "PUWER 1998",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Tile Cutting Equipment (Wet Saws, Grinders)",
        control:
          "Use guarded, PAT-tested cutting equipment with water suppression to limit dust. Ensure operatives are trained on the specific tool.",
      },
      {
        name: "Exposure to Adhesive & Grout Fumes",
        control:
          "Follow the COSHH data sheet for tile adhesives and grouts. Ensure adequate ventilation and use low-solvent products where available.",
      },
      {
        name: "Manual Handling of Tile Boxes & Stone Slabs",
        control:
          "Use trolleys for heavy tile boxes and large-format slabs. Team-lift stone or porcelain slabs over 25kg.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "Knee Pads",
      "FFP3 Dust Mask",
      "Hearing Protection",
    ],
    faq_q1: "Do I need a RAMS for a small bathroom tiling job?",
    faq_a1:
      "Yes. Power tool use, manual handling and adhesive/grout exposure all apply even on small domestic jobs, so a documented risk assessment is expected under CDM 2015.",
  },
  {
    slug: "fencer-fence-installation-erection",
    trade: "Fencing",
    task_name: "Fence Installation & Erection",
    h1_title: "Fence Installation & Erection RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for fence installation and erection work, covering post-hole digging and buried services, in 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "PUWER 1998",
      "CDM Regulations 2015",
    ],
    hazards: [
      {
        name: "Striking Buried Services When Digging Post Holes",
        control:
          "Conduct a CAT & Genny scan before digging. Hand-dig the first 0.5m of each post hole near suspected service routes.",
      },
      {
        name: "Manual Handling of Posts, Panels & Concrete",
        control:
          "Use a post-hole auger where ground allows. Two-person lift for concrete posts and gravel boards, keeping loads close to the body.",
      },
      {
        name: "Power Tool Use (Post Drivers, Augers)",
        control:
          "Only use tools with a current PAT test and correct guards fitted. Operatives trained on each specific tool before use.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "BS EN 166 Safety Glasses",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover fencing near underground services?",
    faq_a1:
      "Yes. It includes a CAT & Genny scanning step and safe digging practice before any post holes are dug, in line with HSE guidance HSG47.",
  },
  {
    slug: "landscaper-garden-landscaping-patio-installation",
    trade: "Landscaping",
    task_name: "Garden Landscaping & Patio Installation",
    h1_title: "Garden Landscaping & Patio Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for garden landscaping and patio installation work, covering manual handling and power tool safety, in 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "PUWER 1998",
      "COSHH Regulations 2002",
    ],
    hazards: [
      {
        name: "Manual Handling of Paving Slabs & Aggregates",
        control:
          "Use a slab trolley or mechanical lifting aid for heavy paving and stone. Team-lift where mechanical aids aren't practical.",
      },
      {
        name: "Power Tool Use (Cut-Off Saws, Compactor Plates)",
        control:
          "Use dust suppression on cutting equipment, ensure guards are fitted, and keep bystanders clear of the operating radius.",
      },
      {
        name: "Exposure to Cement Dust & Chemicals",
        control:
          "Wear appropriate RPE when mixing cement or handling weedkillers/sealants, and follow the COSHH data sheet for each product.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "FFP3 Dust Mask",
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "Hearing Protection",
    ],
    faq_q1: "Do I need a RAMS for a domestic patio job?",
    faq_a1:
      "Yes. Power tools, manual handling of heavy materials and cement-related COSHH risks apply to most domestic landscaping jobs, so a written risk assessment is expected.",
  },
  {
    slug: "solar-installer-solar-pv-panel-installation",
    trade: "Solar Installation",
    task_name: "Solar PV Panel Installation",
    h1_title: "Solar PV Panel Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for solar PV panel installation, covering roof work at height and DC electrical hazards, in 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "Electricity at Work Regulations 1989",
      "CDM Regulations 2015",
    ],
    hazards: [
      {
        name: "Falls from Roof During Panel Fitting",
        control:
          "Use edge protection, roof anchor points and a fall arrest system in line with the Work at Height Regulations 2005. Never work on wet or icy roofs.",
      },
      {
        name: "DC Electrical Shock from Live Panels",
        control:
          "Cover panels or work before sunrise/after sunset where possible to reduce live DC output. Isolate and lock off the inverter before connecting cabling.",
      },
      {
        name: "Manual Handling of Panels & Mounting Rails",
        control:
          "Use a roof hoist or two-person lift for panels. Avoid carrying panels up ladders in high wind.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Fall Arrest Harness (BS EN 361)",
      "1000V Insulated Gloves",
      "BS EN 166 Safety Glasses",
      "Non-Slip Roofing Boots",
    ],
    faq_q1: "Does this RAMS cover the DC isolation risks specific to solar panels?",
    faq_a1:
      "Yes. Solar panels generate live DC voltage whenever exposed to light, even when the system is switched off downstream, and the RAMS includes controls specifically for that risk.",
  },
  {
    slug: "glazier-window-door-glazing-replacement",
    trade: "Glazing",
    task_name: "Window & Door Glazing Replacement",
    h1_title: "Window & Door Glazing Replacement RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for window and door glazing replacement, covering glass handling and working at height, in under 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "Work at Height Regulations 2005",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Cuts from Handling Glass",
        control:
          "Use glass-handling gloves and suction lifters. Carry panes vertically and never grip by the edges alone.",
      },
      {
        name: "Falls from Height (Upper Floor Windows)",
        control:
          "Use an appropriate tower or MEWP for upper-floor glazing. Ladders restricted to short-duration ground/first-floor work only.",
      },
      {
        name: "Manual Handling of Large/Heavy Glass Units",
        control:
          "Use a glazing robot or vacuum lifter for large double-glazed units. Team-lift where mechanical aids aren't available.",
      },
    ],
    required_ppe: [
      "Glass-Handling Gloves",
      "BS EN 166 Safety Glasses",
      "BS EN ISO 20345 Safety Boots",
      "Fall Arrest Harness (BS EN 361)",
      "Coveralls",
    ],
    faq_q1: "Does this RAMS cover safe disposal of broken glass?",
    faq_a1:
      "Yes. It includes safe handling and disposal steps for damaged units, in line with general COSHH and workplace waste handling practice.",
  },
  {
    slug: "locksmith-emergency-lock-change-door-security",
    trade: "Locksmith Services",
    task_name: "Emergency Lock Change & Door Security",
    h1_title: "Emergency Lock Change & Door Security RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for emergency lock changes and door security work, covering power tool and lone working safety, in 2 minutes.",
    applicable_regs: [
      "PUWER 1998",
      "Manual Handling Operations 1992",
      "Management of Health and Safety at Work Regulations 1999",
    ],
    hazards: [
      {
        name: "Lone Working (Emergency Call-Outs)",
        control:
          "Follow a lone worker check-in procedure, share job location and expected duration with a second person, and carry a charged phone.",
      },
      {
        name: "Power Tool Use (Drills, Angle Grinders)",
        control:
          "Only use tools with a current PAT test and correct guards fitted. Use cutting discs rated for the material being cut.",
      },
      {
        name: "Forced/Uncontrolled Entry Hazards",
        control:
          "Assess the door for tension (e.g. UPVC panels under load) before drilling out cylinders. Wear eye protection against debris.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "Hearing Protection",
      "Dust Mask (FFP2)",
      "Safety Boots",
    ],
    faq_q1: "Does this RAMS cover lone working on emergency call-outs?",
    faq_a1:
      "Yes. It includes a lone worker check-in control, which is particularly relevant for out-of-hours emergency locksmith call-outs.",
  },
  {
    slug: "fire-security-engineer-fire-alarm-installation-testing",
    trade: "Fire & Security Systems",
    task_name: "Fire Alarm Installation & Testing",
    h1_title: "Fire Alarm Installation & Testing RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for fire alarm installation and testing work, covering height access and electrical safety, in under 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "Work at Height Regulations 2005",
      "Regulatory Reform (Fire Safety) Order 2005",
    ],
    hazards: [
      {
        name: "Working at Height for Ceiling-Mounted Detectors",
        control:
          "Use a podium step or tower for detector installation above 2m. Never overreach from a stepladder.",
      },
      {
        name: "Electric Shock During Panel Wiring",
        control:
          "Isolate and prove dead at the fire panel and local supply before connecting wiring. Use a proved voltage indicator before working live.",
      },
      {
        name: "Disruption to Live Fire Systems in Occupied Buildings",
        control:
          "Notify the building's responsible person before isolating any part of the system, and reinstate full alarm cover at the end of each working day.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "BS EN 166 Safety Glasses",
      "1000V Insulated Gloves",
      "BS EN ISO 20345 Safety Boots",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover working on a live fire alarm system in an occupied building?",
    faq_a1:
      "Yes. It includes controls for notifying the responsible person and restoring full alarm cover, since isolating any part of a fire system in an occupied building affects everyone on site.",
  },
];

export function getTradeBySlug(slug) {
  return trades.find((t) => t.slug === slug) || null;
}
