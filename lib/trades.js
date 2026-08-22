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
  {
    slug: "bricklayer-new-build-wall-construction-blockwork",
    trade: "Bricklaying",
    task_name: "New Build Wall Construction & Blockwork",
    h1_title: "New Build Wall Construction & Blockwork RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific, CDM 2015 compliant RAMS for bricklaying and blockwork on new build walls, covering manual handling and scaffold access, in 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Manual Handling Operations 1992",
      "Work at Height Regulations 2005",
    ],
    hazards: [
      {
        name: "Manual Handling of Bricks, Blocks & Mortar",
        control:
          "Use a mechanical hoist or brick/block dispenser to reduce repetitive lifting. Team-lift heavy lintels and mix mortar in small batches to limit bag handling.",
      },
      {
        name: "Working from Scaffold/Bricklayer's Platform",
        control:
          "Ensure platform is fully boarded with guardrails and toe boards before laying above 2m. Check the scaffold handover certificate before use.",
      },
      {
        name: "Cement & Mortar Skin/Dust Contact",
        control:
          "Wear waterproof gloves when handling wet mortar to prevent cement burns, and an FFP3 mask when cutting blocks dry, in line with COSHH 2002.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "BS EN 166 Safety Glasses",
      "Waterproof Cement-Resistant Gloves",
      "FFP3 Dust Mask",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover working from a bricklayer's scaffold platform?",
    faq_a1:
      "Yes. It includes controls for safe access, guardrails and platform boarding standards required before laying block or brickwork above 2m.",
  },
  {
    slug: "demolition-operative-internal-strip-out-demolition",
    trade: "Demolition & Strip-Out",
    task_name: "Internal Strip-Out & Demolition",
    h1_title: "Internal Strip-Out & Demolition RAMS Generator (UK)",
    meta_description:
      "Create a CDM 2015 compliant RAMS for internal strip-out and soft demolition work, covering asbestos awareness and structural safety, in under 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Control of Asbestos Regulations 2012",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Undisclosed Asbestos-Containing Materials",
        control:
          "Check the asbestos survey/register before starting. Stop work immediately and isolate the area if suspect materials are disturbed.",
      },
      {
        name: "Structural Instability from Removing Load-Bearing Elements",
        control:
          "Confirm with a structural engineer or site management which elements are load-bearing before removal. Install temporary propping prior to any structural strip-out.",
      },
      {
        name: "Manual Handling & Falling Debris",
        control:
          "Use chutes or skips for debris removal, segregate the drop zone, and team-lift heavy stripped-out components such as radiators and doors.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "FFP3 Dust Mask",
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover the risk of encountering asbestos during strip-out?",
    faq_a1:
      "Yes. It includes a control requiring the asbestos survey to be checked before work starts, and a stop-work procedure if suspect materials are found, in line with the Control of Asbestos Regulations 2012.",
  },
  {
    slug: "flooring-fitter-vinyl-laminate-lvt-installation",
    trade: "Flooring",
    task_name: "Vinyl, Laminate & LVT Flooring Installation",
    h1_title: "Vinyl, Laminate & LVT Flooring Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for vinyl, laminate and LVT flooring installation, covering adhesive COSHH controls and cutting tool safety, in 2 minutes.",
    applicable_regs: [
      "COSHH Regulations 2002",
      "Manual Handling Operations 1992",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Exposure to Adhesive & Levelling Compound Fumes",
        control:
          "Follow the COSHH data sheet for flooring adhesives and self-levelling compounds. Ensure adequate ventilation, especially in occupied properties.",
      },
      {
        name: "Cutting Tool Use (Flooring Knives, Underlay Saws)",
        control:
          "Use guarded cutting tools with sharp, replaceable blades to reduce slip risk. Cut away from the body and keep the work area clear of trip hazards.",
      },
      {
        name: "Manual Handling of Flooring Rolls & Boxed Materials",
        control:
          "Use a roll trolley for large vinyl rolls and avoid twisting when lifting boxed laminate/LVT packs from floor to worktop height.",
      },
    ],
    required_ppe: [
      "Cut-Resistant Gloves",
      "Knee Pads",
      "BS EN 166 Safety Glasses",
      "FFP2 Dust Mask",
      "Safety Boots",
    ],
    faq_q1: "Does this RAMS cover the adhesives and levelling compounds used in flooring work?",
    faq_a1:
      "Yes. It includes COSHH-based controls for handling flooring adhesives, primers and self-levelling compounds safely.",
  },
  {
    slug: "insulation-installer-loft-cavity-wall-insulation",
    trade: "Insulation",
    task_name: "Loft & Cavity Wall Insulation",
    h1_title: "Loft & Cavity Wall Insulation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for loft and cavity wall insulation installation, covering confined space and fibre exposure controls, in under 2 minutes.",
    applicable_regs: [
      "COSHH Regulations 2002",
      "Confined Spaces Regulations 1997",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Exposure to Mineral Fibre/Glass Fibre Dust",
        control:
          "Wear an FFP3 mask and full-sleeve coveralls when handling mineral wool or glass fibre insulation. Ventilate loft spaces where possible.",
      },
      {
        name: "Working in Confined Loft Spaces",
        control:
          "Use adequate task lighting, lay crawl boards across joists, and keep a second person aware of the work location and expected duration.",
      },
      {
        name: "Falls Through Ceilings/Between Joists",
        control:
          "Never step off joists or crawl boards directly onto ceiling material. Identify joist positions before entering the loft space.",
      },
    ],
    required_ppe: [
      "FFP3 Dust Mask",
      "Full-Sleeve Coveralls",
      "BS EN 166 Safety Glasses",
      "Knee Pads",
      "Cut-Resistant Gloves",
    ],
    faq_q1: "Does this RAMS cover the risk of falling through a ceiling while working in a loft?",
    faq_a1:
      "Yes. It includes a specific control requiring crawl boards and joist identification before entering the loft space, to prevent falls through the ceiling.",
  },
  {
    slug: "renderer-external-wall-rendering-k-rend",
    trade: "Rendering",
    task_name: "External Wall Rendering & K-Rend Application",
    h1_title: "External Wall Rendering & K-Rend Application RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for external wall rendering and K-Rend application, covering access equipment and cement COSHH controls, in 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "COSHH Regulations 2002",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Falls from Scaffold/Tower Access",
        control:
          "Use a properly erected scaffold or tower with guardrails for render application above 2m. Check the scaffold handover tag before first use each day.",
      },
      {
        name: "Cement & Render Skin/Eye Contact",
        control:
          "Wear waterproof gloves and eye protection when mixing and applying cement-based renders, following the COSHH data sheet for each product.",
      },
      {
        name: "Manual Handling of Render Bags & Mixing Equipment",
        control:
          "Store bags at waist height, use a mechanical mixer rather than hand-mixing large batches, and team-lift scaffold boards and mixing tubs.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Waterproof Cement-Resistant Gloves",
      "BS EN 166 Safety Glasses",
      "FFP3 Dust Mask",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover working from scaffolding or a tower for rendering?",
    faq_a1:
      "Yes. It includes access equipment controls for render application above 2m, in line with the Work at Height Regulations 2005.",
  },
  {
    slug: "damp-proofing-specialist-damp-proofing-waterproofing-treatment",
    trade: "Damp Proofing",
    task_name: "Damp Proofing & Waterproofing Treatment",
    h1_title: "Damp Proofing & Waterproofing Treatment RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for damp proofing and waterproofing treatment work, covering chemical injection and dust controls, in under 2 minutes.",
    applicable_regs: [
      "COSHH Regulations 2002",
      "Manual Handling Operations 1992",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Exposure to Damp Proofing Chemicals & Injection Fluids",
        control:
          "Follow the COSHH data sheet for all injection creams and tanking slurries. Ensure adequate ventilation, particularly when working in occupied basements.",
      },
      {
        name: "Dust from Chasing/Hacking Off Plaster",
        control:
          "Use dust extraction on chasing tools and wear an FFP3 mask when removing contaminated plaster or render.",
      },
      {
        name: "Working in Confined/Below-Ground Spaces (Cellars, Basements)",
        control:
          "Assess ventilation and access before starting. Keep a second person aware of the work location, particularly in below-ground cellar spaces.",
      },
    ],
    required_ppe: [
      "FFP3 Dust Mask",
      "Chemical-Resistant Gloves",
      "BS EN 166 Safety Glasses",
      "Knee Pads",
      "Safety Boots",
    ],
    faq_q1: "Does this RAMS cover the chemicals used in damp proofing injection treatments?",
    faq_a1:
      "Yes. It includes COSHH-based controls for handling damp proofing creams, tanking slurries and injection fluids safely.",
  },
  {
    slug: "air-conditioning-engineer-air-con-heat-pump-installation",
    trade: "Air Conditioning & Refrigeration",
    task_name: "Air Conditioning & Heat Pump Installation",
    h1_title: "Air Conditioning & Heat Pump Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for air conditioning and heat pump installation, covering refrigerant handling and working at height, in 2 minutes.",
    applicable_regs: [
      "F-Gas Regulations 2015",
      "Electricity at Work Regulations 1989",
      "Work at Height Regulations 2005",
    ],
    hazards: [
      {
        name: "Refrigerant Gas Exposure/Release",
        control:
          "Only F-Gas certified engineers to handle refrigerant. Use recovery equipment to capture refrigerant rather than venting, and check for leaks before and after commissioning.",
      },
      {
        name: "Electric Shock During Wiring of Indoor/Outdoor Units",
        control:
          "Isolate and lock off the circuit at the consumer unit before wiring. Test dead using a proved voltage indicator before working on any electrical connections.",
      },
      {
        name: "Working at Height for Outdoor Unit/Wall Bracket Mounting",
        control:
          "Use an appropriate tower or MEWP for elevated outdoor unit positions. Never overreach from a stepladder when fitting wall brackets.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "1000V Insulated Gloves",
      "BS EN ISO 20345 Safety Boots",
      "Fall Arrest Harness (BS EN 361)",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover F-Gas refrigerant handling requirements?",
    faq_a1:
      "Yes. It includes controls requiring F-Gas certification and correct refrigerant recovery procedures, in line with the F-Gas Regulations 2015.",
  },
  {
    slug: "tree-surgeon-tree-felling-pruning-arboriculture",
    trade: "Tree Surgery & Arboriculture",
    task_name: "Tree Felling, Pruning & Arboriculture",
    h1_title: "Tree Felling, Pruning & Arboriculture RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for tree felling, pruning and arboriculture work, covering chainsaw safety and working at height, in under 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "PUWER 1998",
      "LOLER 1998",
    ],
    hazards: [
      {
        name: "Chainsaw Use (Ground & Aerial)",
        control:
          "Only operatives holding a valid chainsaw certificate (e.g. CS30/CS31) to use chainsaws. Chain brake and PPE checked before every start-up.",
      },
      {
        name: "Falls During Tree Climbing/Aerial Work",
        control:
          "Use a climbing system with two independent attachment points or a MEWP for aerial work, in line with the Work at Height Regulations 2005.",
      },
      {
        name: "Falling Limbs & Struck-By Hazards",
        control:
          "Establish an exclusion zone at least equal to the height of the tree being worked, use spotters, and brief all ground crew before cutting begins.",
      },
    ],
    required_ppe: [
      "Chainsaw Helmet with Visor & Ear Defenders",
      "Chainsaw Protective Trousers (Type A)",
      "Cut-Resistant Gloves",
      "Climbing Harness (BS EN 358/361)",
      "Chainsaw Boots (BS EN ISO 17249)",
    ],
    faq_q1: "Does this RAMS cover aerial chainsaw work and tree climbing?",
    faq_a1:
      "Yes. It includes controls for two-point climbing systems and chainsaw certification requirements for aerial and ground-based cutting work.",
  },
  {
    slug: "bathroom-fitter-bathroom-fitting-installation",
    trade: "Bathroom Fitting",
    task_name: "Bathroom Fitting & Installation",
    h1_title: "Bathroom Fitting & Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for bathroom fitting and installation work, covering manual handling and power tool safety, in 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "PUWER 1998",
      "COSHH Regulations 2002",
    ],
    hazards: [
      {
        name: "Manual Handling of Baths, Shower Trays & Sanitaryware",
        control:
          "Two-person lift for baths, shower trays and heavy sanitaryware. Use correct lifting technique and avoid twisting while carrying.",
      },
      {
        name: "Power Tool Use (Drills, Tile Cutters, Jigsaws)",
        control:
          "Only use tools with a current PAT test and guards fitted. Use dust extraction on cutting equipment where practical.",
      },
      {
        name: "Exposure to Silicone, Adhesive & Grout Fumes",
        control:
          "Follow the COSHH data sheet for sealants, adhesives and grout. Ensure adequate ventilation in enclosed bathroom spaces.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "Knee Pads",
      "FFP2 Dust Mask",
      "Safety Boots",
    ],
    faq_q1: "Do I need a RAMS for a single domestic bathroom installation?",
    faq_a1:
      "Yes. Manual handling of sanitaryware and power tool use both carry documented risks, so a site-specific risk assessment is expected even on single domestic jobs.",
  },
  {
    slug: "cctv-security-installer-cctv-intruder-alarm-installation",
    trade: "CCTV & Security Systems",
    task_name: "CCTV & Intruder Alarm Installation",
    h1_title: "CCTV & Intruder Alarm Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for CCTV and intruder alarm installation, covering working at height and electrical safety, in under 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "Work at Height Regulations 2005",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Working at Height for Camera/Sensor Mounting",
        control:
          "Use a podium step or tower for mounting positions above 2m. Never overreach from a stepladder when positioning cameras or PIR sensors.",
      },
      {
        name: "Electric Shock During Cabling & Panel Wiring",
        control:
          "Isolate and lock off the relevant circuit before connecting to mains-powered equipment. Use low-voltage cabling wherever possible and test dead before working on any mains connection.",
      },
      {
        name: "Drilling into External Walls/Structures",
        control:
          "Wear eye protection and check for hidden pipework or wiring before drilling cable entry points, particularly on external walls.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "BS EN ISO 20345 Safety Boots",
      "1000V Insulated Gloves",
      "FFP2 Dust Mask",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover working at height to mount CCTV cameras?",
    faq_a1:
      "Yes. It includes controls for using podium steps or towers when mounting cameras and sensors above 2m, in line with the Work at Height Regulations 2005.",
  },
  {
    slug: "electrician-full-house-rewire-consumer-unit-upgrade",
    trade: "Electrical",
    task_name: "Full House Rewire & Consumer Unit Upgrade",
    h1_title: "Full House Rewire & Consumer Unit Upgrade RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific, CDM 2015 compliant RAMS for full house rewires and consumer unit upgrades, covering isolation and asbestos awareness, in 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "BS 7671 (18th Edition Wiring Regulations)",
      "CDM Regulations 2015",
    ],
    hazards: [
      {
        name: "Working on Live/Isolated Circuits",
        control:
          "Isolate and lock off the full installation at the consumer unit before starting. Test dead using a proved voltage indicator (GS38) before touching any conductor.",
      },
      {
        name: "Chasing Walls & Lifting Floorboards (Hidden Services/Asbestos)",
        control:
          "Check for other services and any asbestos survey before chasing walls or lifting older floor coverings. Use dust extraction on chasing tools.",
      },
      {
        name: "Working in Roof Voids & Under Floors",
        control:
          "Use adequate task lighting and lay crawl boards across joists. Keep a second person aware of the work location and expected duration.",
      },
    ],
    required_ppe: [
      "1000V Insulated Gloves",
      "BS EN 166 Safety Glasses",
      "FFP3 Dust Mask",
      "Knee Pads",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover isolating the whole property during a rewire?",
    faq_a1:
      "Yes. It includes full isolation and lock-out/tag-out steps at the consumer unit before any work begins, along with safe testing procedures before touching conductors.",
  },
  {
    slug: "electrician-eicr-electrical-installation-condition-report-testing",
    trade: "Electrical",
    task_name: "EICR / Electrical Installation Condition Report Testing",
    h1_title: "EICR Testing RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for Electrical Installation Condition Report (EICR) testing and inspection work, covering safe isolation and test equipment safety, in under 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "BS 7671 (18th Edition Wiring Regulations)",
      "Management of Health and Safety at Work Regulations 1999",
    ],
    hazards: [
      {
        name: "Electric Shock During Dead & Live Testing",
        control:
          "Follow safe isolation procedure before dead testing. Use CAT-rated test equipment appropriate to the supply and re-energise only once safe to do so.",
      },
      {
        name: "Access to Consumer Units in Awkward Locations (Under Stairs, Lofts)",
        control:
          "Use adequate task lighting and check the immediate area is clear before working in cupboards, lofts, or under-stair spaces.",
      },
      {
        name: "Working in Occupied Domestic/Commercial Properties",
        control:
          "Notify occupants before isolating supply, and confirm no critical equipment (medical, refrigeration) is affected before switching off.",
      },
    ],
    required_ppe: [
      "1000V Insulated Gloves",
      "BS EN 166 Safety Glasses",
      "Insulated Hand Tools",
      "Safety Boots",
      "Knee Pads",
    ],
    faq_q1: "Does this RAMS cover the risks of testing a live installation?",
    faq_a1:
      "Yes. It includes safe isolation and CAT-rated test equipment controls for both dead and live testing stages of an EICR.",
  },
  {
    slug: "roofer-flat-roof-installation-waterproofing-epdm-grp",
    trade: "Roofing",
    task_name: "Flat Roof Installation & Waterproofing (EPDM/GRP)",
    h1_title: "Flat Roof Installation & Waterproofing RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for flat roof installation and waterproofing using EPDM or GRP systems, covering height safety and resin fume controls, in 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "COSHH Regulations 2002",
      "CDM Regulations 2015",
    ],
    hazards: [
      {
        name: "Falls from Roof Edge",
        control:
          "Use edge protection or a harness with suitable anchor points in line with the Work at Height Regulations 2005. Never work on a flat roof in wet or icy conditions.",
      },
      {
        name: "Exposure to GRP Resin & Catalyst Fumes",
        control:
          "Follow the COSHH data sheet for resin, catalyst and primer products. Ensure adequate ventilation and use appropriate RPE during application.",
      },
      {
        name: "Manual Handling of Roofing Membrane & Boards",
        control:
          "Use a roof hoist or two-person lift for insulation boards and membrane rolls. Avoid carrying large boards up ladders in high wind.",
      },
    ],
    required_ppe: [
      "Fall Arrest Harness (BS EN 361)",
      "FFP3 Dust/Fume Mask",
      "Chemical-Resistant Gloves",
      "Non-Slip Roofing Boots",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover the resin and catalyst fumes used in GRP roofing?",
    faq_a1:
      "Yes. It includes COSHH-based controls for handling GRP resin, catalyst and primer products safely, including ventilation requirements.",
  },
  {
    slug: "roofline-specialist-fascia-soffit-guttering-installation",
    trade: "Roofline & Guttering",
    task_name: "Fascia, Soffit & Guttering Installation",
    h1_title: "Fascia, Soffit & Guttering Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for fascia, soffit and guttering installation, covering ladder access and falling debris controls, in under 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "Manual Handling Operations 1992",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Falls from Ladders/Towers at Eaves Height",
        control:
          "Use a properly footed ladder or tower scaffold for eaves-height work. Ladders restricted to short-duration tasks with three points of contact maintained.",
      },
      {
        name: "Falling Old Guttering & Debris",
        control:
          "Establish an exclusion zone at ground level below the work area before removing old fascia, soffit or guttering sections.",
      },
      {
        name: "Power Tool Use (Saws, Drills) at Height",
        control:
          "Use a tool lanyard to prevent dropped tools, and ensure all cutting equipment is PAT-tested and guarded before use.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "Non-Slip Footwear",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover the risk of falling debris to people below?",
    faq_a1:
      "Yes. It includes a ground-level exclusion zone control for removing old guttering, fascia and soffit sections before new material is fitted.",
  },
  {
    slug: "groundworker-resin-bound-block-paving-driveway-installation",
    trade: "Driveways & Paving",
    task_name: "Resin Bound & Block Paving Driveway Installation",
    h1_title: "Resin Bound & Block Paving Driveway Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for resin bound and block paving driveway installation, covering excavation and resin COSHH controls, in 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "COSHH Regulations 2002",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Striking Buried Services During Excavation",
        control:
          "Conduct a CAT & Genny scan and consult utility drawings before excavating the driveway base. Hand-dig trial holes near suspected service routes.",
      },
      {
        name: "Exposure to Resin, Primer & Cement Dust",
        control:
          "Follow the COSHH data sheet for resin binder, primer and any cement-based products. Use RPE and ensure adequate ventilation during mixing and laying.",
      },
      {
        name: "Manual Handling of Aggregates, Kerbs & Slabs",
        control:
          "Use a mini-dumper or wheelbarrow for moving aggregate. Team-lift heavy kerbs and paving slabs, keeping loads close to the body.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Chemical-Resistant Gloves",
      "FFP3 Dust Mask",
      "BS EN ISO 20345 Safety Boots",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover the resin binder used in resin bound driveways?",
    faq_a1:
      "Yes. It includes COSHH-based controls for handling resin binder and primer safely, including ventilation and RPE requirements during mixing and laying.",
  },
  {
    slug: "loft-conversion-specialist-loft-conversion-structural-alterations",
    trade: "Loft Conversions",
    task_name: "Loft Conversion & Structural Alterations",
    h1_title: "Loft Conversion & Structural Alterations RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for loft conversion and structural alteration work, covering structural safety and working at height, in under 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Work at Height Regulations 2005",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Structural Instability During Steel/Joist Installation",
        control:
          "Install temporary propping before removing or altering any load-bearing structure. Confirm structural calculations with a qualified engineer before work begins.",
      },
      {
        name: "Falls Through Ceiling Joists or Open Floor Areas",
        control:
          "Board over joists fully before work progresses, and use temporary edge protection around any open stairwell or floor opening.",
      },
      {
        name: "Manual Handling of Steel Beams & Timber",
        control:
          "Use a gin wheel or mechanical hoist to lift steel beams and heavy timber into the loft space. Team-lift where mechanical aids aren't practical.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Fall Arrest Harness (BS EN 361)",
      "BS EN ISO 20345 Safety Boots",
      "Cut-Resistant Gloves",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover the structural risks of removing load-bearing elements?",
    faq_a1:
      "Yes. It includes a control requiring temporary propping and engineer-confirmed structural calculations before any load-bearing element is altered.",
  },
  {
    slug: "asbestos-removal-specialist-asbestos-removal-management",
    trade: "Asbestos Removal",
    task_name: "Asbestos Removal & Management",
    h1_title: "Asbestos Removal & Management RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for licensed and non-licensed asbestos removal and management work, covering fibre exposure and RPE controls, in 2 minutes.",
    applicable_regs: [
      "Control of Asbestos Regulations 2012",
      "COSHH Regulations 2002",
      "Management of Health and Safety at Work Regulations 1999",
    ],
    hazards: [
      {
        name: "Airborne Asbestos Fibre Exposure",
        control:
          "Follow the asbestos survey and method statement for the specific material type. Use enclosure, wetting-down and RPE appropriate to the licensed or non-licensed task.",
      },
      {
        name: "Incorrect Waste Handling & Disposal",
        control:
          "Double-bag and label all asbestos waste correctly, and dispose of it only via a licensed asbestos waste carrier to an authorised site.",
      },
      {
        name: "Cross-Contamination to Other Areas",
        control:
          "Set up a segregated work zone with decontamination unit where required, and ensure RPE and coveralls are removed correctly before leaving the area.",
      },
    ],
    required_ppe: [
      "FFP3 or Powered RPE (as specified by task)",
      "Disposable Coveralls (Type 5/6)",
      "Nitrile Gloves",
      "Disposable Overshoes",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS distinguish between licensed and non-licensed asbestos work?",
    faq_a1:
      "The RAMS provides a baseline method statement structure, but you must confirm whether the specific task is licensable under HSE's licensing criteria and follow the appropriate licensed contractor procedures if so — this determination remains the duty holder's responsibility.",
  },
  {
    slug: "aerial-satellite-installer-tv-aerial-satellite-dish-installation",
    trade: "Aerial & Satellite Installation",
    task_name: "TV Aerial & Satellite Dish Installation",
    h1_title: "TV Aerial & Satellite Dish Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for TV aerial and satellite dish installation, covering roof access and working at height safety, in under 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "Electricity at Work Regulations 1989",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Falls from Roof or Ladder During Mounting",
        control:
          "Use appropriate roof access equipment and edge protection for chimney or roof-mounted aerials. Ladders restricted to gable-end or low-eaves installations only.",
      },
      {
        name: "Working Near Overhead Power Lines",
        control:
          "Identify and maintain safe clearance from any overhead electrical lines before positioning masts or dishes, in line with HSE guidance GS6.",
      },
      {
        name: "Manual Handling & Drilling Cable Entry Points",
        control:
          "Wear eye protection when drilling cable entry holes and check for hidden wiring or pipework before drilling into external walls.",
      },
    ],
    required_ppe: [
      "Fall Arrest Harness (BS EN 361)",
      "BS EN 166 Safety Glasses",
      "Non-Slip Roofing Boots",
      "Cut-Resistant Gloves",
      "BS EN 397 Hard Hat",
    ],
    faq_q1: "Does this RAMS cover working near overhead power lines when mounting an aerial?",
    faq_a1:
      "Yes. It includes a control requiring safe clearance distances from overhead electrical lines before positioning any mast or dish, in line with HSE guidance GS6.",
  },
  {
    slug: "pest-control-technician-pest-control-treatment-inspection",
    trade: "Pest Control",
    task_name: "Pest Control Treatment & Inspection",
    h1_title: "Pest Control Treatment & Inspection RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for pest control treatment and inspection work, covering pesticide COSHH controls and confined space access, in 2 minutes.",
    applicable_regs: [
      "COSHH Regulations 2002",
      "Control of Pesticides Regulations 1986",
      "Confined Spaces Regulations 1997",
    ],
    hazards: [
      {
        name: "Exposure to Pesticides & Rodenticides",
        control:
          "Follow the COSHH data sheet and product label for every pesticide or rodenticide used. Use appropriate RPE and avoid application in occupied areas without agreed access controls.",
      },
      {
        name: "Working in Roof Voids, Cellars & Confined Spaces",
        control:
          "Assess ventilation and access before entering confined spaces. Use adequate task lighting and keep a second person aware of the work location.",
      },
      {
        name: "Bites, Stings & Zoonotic Disease Risk",
        control:
          "Wear appropriate gloves when handling traps, bait stations or carcasses, and follow hygiene procedures to reduce the risk of disease transmission (e.g. Weil's disease from rodent contact).",
      },
    ],
    required_ppe: [
      "Nitrile or Chemical-Resistant Gloves",
      "FFP3 Respirator (as specified by product)",
      "BS EN 166 Safety Glasses",
      "Disposable Coveralls",
      "Knee Pads",
    ],
    faq_q1: "Does this RAMS cover the safe use of pesticides and rodenticides?",
    faq_a1:
      "Yes. It includes COSHH-based controls requiring the product label and data sheet to be followed for every treatment, along with RPE and access controls for occupied areas.",
  },
  {
    slug: "handyman-general-property-maintenance-repairs",
    trade: "Handyman Services",
    task_name: "General Property Maintenance & Repairs",
    h1_title: "General Property Maintenance & Repairs RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for general property maintenance and handyman repair work, covering ladder use and power tool safety, in under 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "PUWER 1998",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Falls from Ladders & Step Stools",
        control:
          "Use the right access equipment for the task and height involved. Ladders footed and secured, with three points of contact maintained at all times.",
      },
      {
        name: "Power Tool Use Across Varied Tasks",
        control:
          "Only use tools with a current PAT test and correct guard fitted for the specific task. Confirm competency with each tool type before use.",
      },
      {
        name: "Manual Handling of Varied/Unpredictable Loads",
        control:
          "Assess each item individually before lifting, given the varied nature of handyman work, and use a trolley or team-lift for heavier or awkward items.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "Dust Mask (FFP2)",
      "Safety Boots",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS work for a varied handyman job involving multiple small tasks?",
    faq_a1:
      "Yes. It's designed as a general baseline covering the most common handyman risks — ladder access, power tools and manual handling — suitable for typical mixed-task property maintenance visits.",
  },
  {
    slug: "plumber-underfloor-heating-installation",
    trade: "Plumbing & Heating",
    task_name: "Underfloor Heating Installation",
    h1_title: "Underfloor Heating Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for underfloor heating installation, covering pipework testing and manual handling, in 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "PUWER 1998",
      "Water Supply (Water Fittings) Regulations 1999",
    ],
    hazards: [
      {
        name: "Pressure Testing Pipework",
        control:
          "Pressure test all pipework to the manufacturer's specification before screeding, and isolate the system clearly while under test to prevent inadvertent use.",
      },
      {
        name: "Manual Handling of Screed & Insulation Boards",
        control:
          "Use a trolley for bagged screed and mechanical mixing where possible. Team-lift insulation boards to avoid awkward twisting.",
      },
      {
        name: "Cutting & Chasing Floor Insulation/Screed",
        control:
          "Use dust extraction on cutting tools and wear an FFP2 mask when cutting insulation boards or chasing screed.",
      },
    ],
    required_ppe: [
      "Knee Pads",
      "BS EN 166 Safety Glasses",
      "FFP2 Dust Mask",
      "Cut-Resistant Gloves",
      "Safety Boots",
    ],
    faq_q1: "Does this RAMS cover pressure testing the underfloor heating pipework?",
    faq_a1:
      "Yes. It includes a control requiring pipework to be pressure tested to the manufacturer's specification, and clearly isolated during the test, before screed is laid over it.",
  },
  {
    slug: "plumber-emergency-leak-detection-repair",
    trade: "Plumbing & Heating",
    task_name: "Emergency Leak Detection & Repair",
    h1_title: "Emergency Leak Detection & Repair RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for emergency leak detection and repair work, covering water damage and confined access hazards, in under 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "Management of Health and Safety at Work Regulations 1999",
      "Water Supply (Water Fittings) Regulations 1999",
    ],
    hazards: [
      {
        name: "Slips from Water Damage & Wet Surfaces",
        control:
          "Isolate the water supply at the earliest opportunity and use wet-floor signage and matting around the affected area throughout the repair.",
      },
      {
        name: "Access to Concealed Pipework (Under Floors, Behind Walls)",
        control:
          "Assess the safest access route before lifting floorboards or opening walls, and check for other services before cutting into any concealed void.",
      },
      {
        name: "Lone Working on Emergency Call-Outs",
        control:
          "Follow a lone worker check-in procedure, sharing job location and expected duration with a second person before attending out-of-hours call-outs.",
      },
    ],
    required_ppe: [
      "Nitrile Gloves",
      "BS EN 166 Safety Glasses",
      "Non-Slip Footwear",
      "Knee Pads",
      "Safety Boots",
    ],
    faq_q1: "Does this RAMS cover lone working on out-of-hours emergency call-outs?",
    faq_a1:
      "Yes. It includes a lone worker check-in control, which is particularly relevant for emergency leak call-outs attended alone and out of hours.",
  },
  {
    slug: "decorator-interior-painting-wallpapering",
    trade: "Painting & Decorating",
    task_name: "Interior Painting & Wallpapering",
    h1_title: "Interior Painting & Wallpapering RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for interior painting and wallpapering work, covering access equipment and paint/adhesive COSHH controls, in 2 minutes.",
    applicable_regs: [
      "COSHH Regulations 2002",
      "Work at Height Regulations 2005",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Falls from Steps or Podiums on Stairwells",
        control:
          "Use a purpose-made stairwell access tower or podium steps for high stairwell walls and ceilings, rather than freestanding ladders on stair treads.",
      },
      {
        name: "Exposure to Paint & Wallpaper Adhesive Fumes",
        control:
          "Follow the COSHH data sheet for paints, primers and adhesives, and ensure adequate ventilation, particularly in occupied properties.",
      },
      {
        name: "Manual Handling of Paint Tins & Paste Buckets",
        control:
          "Use correct lifting technique for full paint tins and paste buckets, and avoid carrying multiple full containers up ladders or stairs at once.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Solvent-Resistant Gloves",
      "FFP2 Dust/Fume Mask",
      "Non-Slip Footwear",
      "Coveralls",
    ],
    faq_q1: "Does this RAMS cover access equipment for painting stairwells?",
    faq_a1:
      "Yes. It includes a control requiring purpose-made stairwell access towers or podium steps rather than freestanding ladders on stair treads, which is one of the most common fall risks in interior decorating.",
  },
  {
    slug: "scaffolder-scaffold-inspection-handover-certification",
    trade: "Scaffolding",
    task_name: "Scaffold Inspection & Handover Certification",
    h1_title: "Scaffold Inspection & Handover Certification RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for scaffold inspection and handover certification, covering structural checks and safe access, in under 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "CDM Regulations 2015",
      "LOLER 1998",
    ],
    hazards: [
      {
        name: "Inspecting an Incomplete or Non-Compliant Structure",
        control:
          "Carry out a full visual and structural check against the design or TG20:21 compliance sheet before issuing a handover certificate (Scaff Tag). Do not certify a structure with missing components.",
      },
      {
        name: "Falls While Accessing the Scaffold for Inspection",
        control:
          "Use the scaffold's own designated access route (ladder bay or staircase) rather than climbing the frame, and maintain three points of contact throughout.",
      },
      {
        name: "Working at Height During Re-Inspection",
        control:
          "Re-inspect at the required interval (at least every 7 days) and after any adverse weather event, following the same access and structural check procedure as the initial inspection.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "BS EN ISO 20345 Safety Boots",
      "Hi-Vis Clothing",
      "Work Gloves",
      "Fall Arrest Harness (BS EN 361)",
    ],
    faq_q1: "Does this RAMS cover the required frequency of scaffold re-inspection?",
    faq_a1:
      "Yes. It includes a control requiring re-inspection at least every 7 days and after any event likely to have affected its stability, in line with the Work at Height Regulations 2005.",
  },
  {
    slug: "solar-installer-solar-battery-storage-installation",
    trade: "Solar Installation",
    task_name: "Solar Battery Storage (ESS) Installation",
    h1_title: "Solar Battery Storage Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for solar battery storage (ESS) installation, covering electrical and fire safety controls, in 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "BS 7671 (18th Edition Wiring Regulations)",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Electric Shock from DC Battery Terminals",
        control:
          "Isolate and lock off the battery system and any connected inverter before making or breaking connections. Use insulated tools rated for the system voltage.",
      },
      {
        name: "Fire Risk from Incorrect Installation or Damaged Cells",
        control:
          "Install strictly to the manufacturer's clearance, ventilation and location guidance, and visually inspect battery units for damage before installation.",
      },
      {
        name: "Manual Handling of Battery Units",
        control:
          "Battery units are heavy and dense — use a trolley or two-person lift, and mount at a height and location that avoids repeated manual handling during any future maintenance.",
      },
    ],
    required_ppe: [
      "1000V Insulated Gloves",
      "BS EN 166 Safety Glasses",
      "BS EN ISO 20345 Safety Boots",
      "Insulated Hand Tools",
      "Flame-Resistant Coveralls",
    ],
    faq_q1: "Does this RAMS cover fire safety risks specific to battery storage systems?",
    faq_a1:
      "Yes. It includes a control requiring installation strictly to the manufacturer's clearance and ventilation guidance, along with a pre-installation visual inspection for cell damage.",
  },
  {
    slug: "groundworker-foundations-footings-excavation",
    trade: "Groundworks",
    task_name: "Foundations & Footings Excavation",
    h1_title: "Foundations & Footings Excavation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for foundations and footings excavation work, covering trench collapse and buried services, in under 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Manual Handling Operations 1992",
      "Confined Spaces Regulations 1997",
    ],
    hazards: [
      {
        name: "Trench/Excavation Collapse",
        control:
          "Batter, shore or box excavations over 1.2m deep in line with a competent person's assessment. No one enters an unsupported excavation, and spoil is kept back from the edge.",
      },
      {
        name: "Striking Buried Services",
        control:
          "Conduct a CAT & Genny scan and consult utility drawings before digging. Hand-dig trial holes within 0.5m of known service routes.",
      },
      {
        name: "Plant & Pedestrian Interaction",
        control:
          "Segregate excavator swing radius from pedestrian routes with barriers, and use a banksman for all excavator movements near the excavation edge.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Hi-Vis Clothing",
      "BS EN ISO 20345 Safety Boots",
      "Cut-Resistant Gloves",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover excavation collapse risks for deep foundations?",
    faq_a1:
      "Yes. It includes a control requiring battering, shoring or boxing of any excavation over 1.2m deep, assessed by a competent person, in line with HSE guidance on excavation safety.",
  },
  {
    slug: "carpenter-staircase-installation-balustrade-fitting",
    trade: "Carpentry & Joinery",
    task_name: "Staircase Installation & Balustrade Fitting",
    h1_title: "Staircase Installation & Balustrade Fitting RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for staircase installation and balustrade fitting, covering fall prevention and manual handling, in 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "Manual Handling Operations 1992",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Falls Through Open Stairwells During Installation",
        control:
          "Fit temporary edge protection or netting around any open stairwell until the permanent balustrade is installed and secure.",
      },
      {
        name: "Manual Handling of Staircase Strings & Treads",
        control:
          "Team-lift staircase strings and heavy hardwood treads into position, using the stairwell opening rather than carrying full flights through tight doorways where possible.",
      },
      {
        name: "Power Tool Use (Saws, Routers) in Confined Stairwell Spaces",
        control:
          "Ensure adequate space and lighting before using powered cutting tools in a stairwell, and use dust extraction where practical.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "Hearing Protection",
      "FFP2 Dust Mask",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover the risk of falling through an open stairwell during fitting?",
    faq_a1:
      "Yes. It includes a control requiring temporary edge protection or netting around any open stairwell until the permanent balustrade is fully installed and secure.",
  },
  {
    slug: "roofer-chimney-repair-repointing",
    trade: "Roofing",
    task_name: "Chimney Repair & Repointing",
    h1_title: "Chimney Repair & Repointing RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for chimney repair and repointing work, covering height access and falling debris controls, in under 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "CDM Regulations 2015",
      "COSHH Regulations 2002",
    ],
    hazards: [
      {
        name: "Falls from Height at Chimney/Ridge Level",
        control:
          "Use scaffold or a chimney-specific access platform with guardrails for all work at ridge and chimney height. Never work directly off a roof ladder alone for repointing tasks.",
      },
      {
        name: "Falling Debris from Loose Brickwork or Pots",
        control:
          "Establish a ground-level exclusion zone before removing loose brickwork or chimney pots, and lower debris via a chute or bucket rather than dropping it.",
      },
      {
        name: "Cement & Mortar Dust/Skin Contact",
        control:
          "Wear waterproof gloves when handling wet mortar and an FFP3 mask when cutting or removing old pointing dry.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Fall Arrest Harness (BS EN 361)",
      "Waterproof Cement-Resistant Gloves",
      "FFP3 Dust Mask",
      "Non-Slip Roofing Boots",
    ],
    faq_q1: "Does this RAMS cover the risk of falling debris from chimney repair work?",
    faq_a1:
      "Yes. It includes a ground-level exclusion zone control and a requirement to lower debris via chute or bucket rather than dropping it, before any loose brickwork or pots are removed.",
  },
  {
    slug: "welder-on-site-welding-metal-fabrication",
    trade: "Welding & Fabrication",
    task_name: "On-Site Welding & Metal Fabrication",
    h1_title: "On-Site Welding & Metal Fabrication RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for on-site welding and metal fabrication work, covering fire risk and fume exposure controls, in 2 minutes.",
    applicable_regs: [
      "PUWER 1998",
      "COSHH Regulations 2002",
      "Dangerous Substances and Explosive Atmospheres Regulations (DSEAR) 2002",
    ],
    hazards: [
      {
        name: "Fire Risk from Sparks & Hot Work",
        control:
          "Carry out a hot work permit check before starting, clear the area of combustible materials within a 10m radius, and keep a fire extinguisher and fire watch in place during and after welding.",
      },
      {
        name: "Exposure to Welding Fume",
        control:
          "Use local exhaust ventilation (LEV) or fume extraction at the point of welding, and wear appropriate RPE where extraction alone cannot control exposure, in line with HSE guidance on welding fume.",
      },
      {
        name: "Arc Eye & Burns from UV Radiation and Hot Metal",
        control:
          "Use a welding screen to protect others nearby, and wear full welding PPE including an appropriately rated shade lens at all times while arc welding.",
      },
    ],
    required_ppe: [
      "Welding Helmet (Appropriate Shade Lens)",
      "Flame-Resistant Welding Gauntlets",
      "Flame-Resistant Coveralls",
      "Welding Boots",
      "Fume Extraction / RPE",
    ],
    faq_q1: "Does this RAMS cover welding fume exposure controls?",
    faq_a1:
      "Yes. It includes a control requiring local exhaust ventilation or fume extraction at the point of welding, with RPE specified where extraction alone isn't sufficient — a control reflecting HSE's 2019 update classifying all welding fume as a carcinogen.",
  },
  {
    slug: "signage-installer-shopfront-signage-installation",
    trade: "Signage & Shopfitting",
    task_name: "Shopfront & Signage Installation",
    h1_title: "Shopfront & Signage Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for shopfront and signage installation work, covering working at height and public pedestrian safety, in under 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "Electricity at Work Regulations 1989",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Falls from MEWPs/Towers Above Public Footways",
        control:
          "Use a properly positioned MEWP or tower with the work area barriered off from pedestrians below, particularly on high street and public-facing installs.",
      },
      {
        name: "Manual Handling of Sign Panels & Lettering",
        control:
          "Use mechanical lifting aids (glass/panel suckers, lifting frames) for large sign panels, and team-lift where mechanical aids aren't practical.",
      },
      {
        name: "Electric Shock from Illuminated Sign Connections",
        control:
          "Isolate and lock off the relevant circuit before connecting illuminated signage, and use a proved voltage indicator to test dead before any electrical connection.",
      },
    ],
    required_ppe: [
      "Fall Arrest Harness (BS EN 361)",
      "BS EN 397 Hard Hat",
      "Hi-Vis Clothing",
      "1000V Insulated Gloves",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover working above a public footway or high street?",
    faq_a1:
      "Yes. It includes a control requiring the work area to be barriered off from pedestrians below when using a MEWP or tower above a public-facing footway.",
  },
  {
    slug: "gas-engineer-lpg-oil-boiler-installation",
    trade: "Gas Engineering",
    task_name: "LPG & Oil Boiler Installation",
    h1_title: "LPG & Oil Boiler Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for LPG and oil boiler installation, covering fuel storage and flue safety, in 2 minutes.",
    applicable_regs: [
      "Gas Safety (Installation and Use) Regulations 1998",
      "Oil Firing Technical Association (OFTEC) Standards",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Fuel Leaks (LPG/Oil)",
        control:
          "Pressure test all gas connections before commissioning, and check oil supply lines and tank connections for leaks before and after installation.",
      },
      {
        name: "Flue Gas & Carbon Monoxide Exposure",
        control:
          "Check flue integrity, terminal clearances and combustion performance using a calibrated analyser before leaving any appliance in use.",
      },
      {
        name: "Manual Handling of Boiler & Fuel Tank",
        control:
          "Two-person lift for the boiler unit and any fuel tank sections, using correct lifting technique and mechanical aids where available.",
      },
    ],
    required_ppe: [
      "Nitrile Gloves",
      "BS EN 166 Safety Glasses",
      "Safety Boots",
      "FFP2 Dust Mask",
      "Knee Pads",
    ],
    faq_q1: "Does this RAMS cover both LPG and oil-fired boiler installations?",
    faq_a1:
      "Yes. It includes controls for fuel leak testing appropriate to either LPG or oil systems, alongside flue and combustion safety checks common to both.",
  },
  {
    slug: "plasterer-dry-lining-plasterboard-installation",
    trade: "Plastering",
    task_name: "Dry Lining & Plasterboard Installation",
    h1_title: "Dry Lining & Plasterboard Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for dry lining and plasterboard installation work, covering manual handling and dust controls, in under 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "COSHH Regulations 2002",
      "Work at Height Regulations 2005",
    ],
    hazards: [
      {
        name: "Manual Handling of Plasterboard Sheets",
        control:
          "Use a board trolley or two-person carry for full-size sheets, and a board lifter for ceiling installations to avoid repeated overhead lifting.",
      },
      {
        name: "Dust Exposure from Cutting & Sanding Joints",
        control:
          "Use dust extraction on cutting tools and wear an FFP3 mask when sanding jointing compound, particularly in enclosed rooms.",
      },
      {
        name: "Falls from Trestles During Ceiling Work",
        control:
          "Use properly boarded trestle platforms with guardrails for ceiling-height dry lining, never standing on buckets or improvised platforms.",
      },
    ],
    required_ppe: [
      "FFP3 Dust Mask",
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "Knee Pads",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover the manual handling risks of lifting plasterboard overhead for ceilings?",
    faq_a1:
      "Yes. It includes a control requiring a board lifter for ceiling installations to avoid repeated overhead manual handling of full sheets.",
  },
  {
    slug: "decking-installer-timber-composite-decking-installation",
    trade: "Decking",
    task_name: "Timber & Composite Decking Installation",
    h1_title: "Timber & Composite Decking Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for timber and composite decking installation, covering power tool and ground-level fall hazards, in 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "Manual Handling Operations 1992",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Falls from Raised Decking During Construction",
        control:
          "Use edge protection or work from the ground/sub-frame level wherever possible while the deck is being built, particularly on raised or multi-level decks.",
      },
      {
        name: "Power Tool Use (Saws, Drills)",
        control:
          "Use guarded, PAT-tested cutting equipment, and ensure operatives are trained on the specific saw type before use.",
      },
      {
        name: "Manual Handling of Deck Boards & Joists",
        control:
          "Team-lift long timber or composite boards and joists, and use trestles to support material at a manageable working height during cutting.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "Hearing Protection",
      "BS EN ISO 20345 Safety Boots",
      "FFP2 Dust Mask",
    ],
    faq_q1: "Does this RAMS cover the fall risk during construction of a raised deck?",
    faq_a1:
      "Yes. It includes a control requiring edge protection or ground-level working wherever possible while a raised or multi-level deck is under construction, before balustrades are fitted.",
  },
  {
    slug: "landscaper-artificial-grass-installation",
    trade: "Landscaping",
    task_name: "Artificial Grass Installation",
    h1_title: "Artificial Grass Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for artificial grass installation, covering excavation and power tool safety, in under 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "PUWER 1998",
      "COSHH Regulations 2002",
    ],
    hazards: [
      {
        name: "Striking Buried Services During Excavation",
        control:
          "Conduct a CAT & Genny scan before excavating the sub-base, and hand-dig trial holes near suspected service routes.",
      },
      {
        name: "Power Tool Use (Compactor Plates, Cutting Tools)",
        control:
          "Use guarded, well-maintained equipment, and ensure operatives are trained on the compactor plate and any cutting tools used to trim the turf.",
      },
      {
        name: "Manual Handling of Aggregate & Turf Rolls",
        control:
          "Use a wheelbarrow or mini-dumper for sub-base aggregate, and team-lift heavy artificial turf rolls into position.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "Hearing Protection",
      "Knee Pads",
    ],
    faq_q1: "Does this RAMS cover excavating the sub-base before laying artificial grass?",
    faq_a1:
      "Yes. It includes a CAT & Genny scanning control before any excavation work begins on the sub-base, in line with HSE guidance on avoiding buried services.",
  },
  {
    slug: "glazier-upvc-window-door-installation",
    trade: "Glazing",
    task_name: "uPVC Window & Door Installation",
    h1_title: "uPVC Window & Door Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for uPVC window and door installation, covering glass handling and structural opening safety, in 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "Work at Height Regulations 2005",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Cuts from Handling Glazed Units",
        control:
          "Use glass-handling gloves and suction lifters for sealed glazed units, carrying panes vertically and never gripping by the edges alone.",
      },
      {
        name: "Structural Opening Instability During Removal",
        control:
          "Support the head of the opening with temporary propping before removing the old frame on load-bearing openings, particularly on larger patio door installations.",
      },
      {
        name: "Falls from Height (Upper Floor Installations)",
        control:
          "Use an appropriate tower or MEWP for upper-floor window installations, with ladders restricted to short-duration ground floor work only.",
      },
    ],
    required_ppe: [
      "Glass-Handling Gloves",
      "BS EN 166 Safety Glasses",
      "BS EN ISO 20345 Safety Boots",
      "Fall Arrest Harness (BS EN 361)",
      "Coveralls",
    ],
    faq_q1: "Does this RAMS cover the structural risk of removing a large patio door opening?",
    faq_a1:
      "Yes. It includes a control requiring temporary propping to support the head of the opening before the old frame is removed on load-bearing installations.",
  },
  {
    slug: "plumber-water-softener-filtration-system-installation",
    trade: "Plumbing & Heating",
    task_name: "Water Softener & Filtration System Installation",
    h1_title: "Water Softener & Filtration System Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for water softener and filtration system installation, covering pipework and manual handling, in under 2 minutes.",
    applicable_regs: [
      "Water Supply (Water Fittings) Regulations 1999",
      "Manual Handling Operations 1992",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Incorrect Plumbing-In Causing Backflow Contamination",
        control:
          "Install with an appropriate air gap or approved backflow prevention device in line with the Water Supply (Water Fittings) Regulations 1999.",
      },
      {
        name: "Manual Handling of Softener/Filtration Units & Salt Bags",
        control:
          "Use correct lifting technique for filtration units and bagged salt, and position the unit at a height that avoids repeated bending for future maintenance.",
      },
      {
        name: "Water Leaks During Pipework Modification",
        control:
          "Isolate the water supply before cutting into pipework, and pressure test all new connections before restoring supply.",
      },
    ],
    required_ppe: [
      "Nitrile Gloves",
      "BS EN 166 Safety Glasses",
      "Knee Pads",
      "Safety Boots",
      "Cut-Resistant Gloves",
    ],
    faq_q1: "Does this RAMS cover backflow contamination risks when plumbing in a filtration system?",
    faq_a1:
      "Yes. It includes a control requiring an appropriate air gap or approved backflow prevention device, in line with the Water Supply (Water Fittings) Regulations 1999.",
  },
  {
    slug: "groundworker-septic-tank-soakaway-installation",
    trade: "Groundworks",
    task_name: "Septic Tank & Soakaway Installation",
    h1_title: "Septic Tank & Soakaway Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for septic tank and soakaway installation, covering excavation and confined space entry, in 2 minutes.",
    applicable_regs: [
      "Confined Spaces Regulations 1997",
      "CDM Regulations 2015",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Excavation Collapse Around the Tank Chamber",
        control:
          "Batter, shore or box excavations over 1.2m deep in line with a competent person's assessment, particularly around the larger open excavation required for a tank chamber.",
      },
      {
        name: "Confined Space Entry for Connections & Inspection",
        control:
          "Never enter the tank chamber without a permit-to-work, atmosphere testing and a trained top-man in constant communication.",
      },
      {
        name: "Manual Handling & Plant Interaction",
        control:
          "Use mechanical lifting for the tank itself, and keep operatives clear of the excavator's swing radius during placement.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Gas Detector",
      "Hi-Vis Clothing",
      "BS EN ISO 20345 Safety Boots",
      "Waterproof Gloves",
    ],
    faq_q1: "Does this RAMS cover confined space entry into the tank chamber?",
    faq_a1:
      "Yes. It includes a control prohibiting entry without a permit-to-work, atmosphere testing and a trained top-man, in line with the Confined Spaces Regulations 1997.",
  },
  {
    slug: "stove-installer-wood-burning-stove-flue-installation",
    trade: "Stove & Fireplace Installation",
    task_name: "Wood Burning Stove & Flue Installation",
    h1_title: "Wood Burning Stove & Flue Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for wood burning stove and flue installation, covering fire safety and carbon monoxide controls, in under 2 minutes.",
    applicable_regs: [
      "Building Regulations Approved Document J",
      "HETAS Installation Standards",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Fire Risk from Inadequate Hearth or Clearances",
        control:
          "Install to the manufacturer's minimum clearances to combustible materials, and confirm the hearth meets Building Regulations Approved Document J requirements before commissioning.",
      },
      {
        name: "Carbon Monoxide Exposure from Flue Faults",
        control:
          "Carry out a smoke or spillage test on the completed flue, and fit a carbon monoxide alarm in the room as required before handover.",
      },
      {
        name: "Manual Handling of Stove Unit & Flue Liner",
        control:
          "Two-person lift for the stove body, and use a rope and pulley or roof access equipment when installing flue liner from above.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Heat-Resistant Gloves",
      "FFP2 Dust Mask",
      "Safety Boots",
      "Knee Pads",
    ],
    faq_q1: "Does this RAMS cover testing the flue for carbon monoxide safety?",
    faq_a1:
      "Yes. It includes a control requiring a smoke or spillage test on the completed flue and a carbon monoxide alarm fitted before handover.",
  },
  {
    slug: "structural-repair-specialist-underpinning-subsidence-repair",
    trade: "Structural Repairs",
    task_name: "Underpinning & Subsidence Repair",
    h1_title: "Underpinning & Subsidence Repair RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for underpinning and subsidence repair work, covering excavation collapse and structural support risks, in 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Confined Spaces Regulations 1997",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Excavation Collapse Beneath Existing Foundations",
        control:
          "Excavate underpinning bays in short sections as designed by the structural engineer, with each bay supported or concreted before the next is opened, never leaving an unsupported length beneath a load-bearing wall.",
      },
      {
        name: "Structural Movement or Collapse During Works",
        control:
          "Monitor the structure for movement throughout the works, and stop immediately with the area evacuated if any unexpected movement or cracking is observed.",
      },
      {
        name: "Working in Confined Excavated Bays",
        control:
          "Assess ventilation and access before entering any excavated bay, keeping a second person aware of the work location at all times.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "BS EN ISO 20345 Safety Boots",
      "Hi-Vis Clothing",
      "Cut-Resistant Gloves",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover the sequencing of underpinning bays to prevent structural collapse?",
    faq_a1:
      "Yes. It includes a control requiring bays to be excavated in short sections as designed by the structural engineer, with each supported before the next is opened.",
  },
  {
    slug: "conservatory-installer-conservatory-orangery-installation",
    trade: "Conservatory & Orangery Installation",
    task_name: "Conservatory & Orangery Installation",
    h1_title: "Conservatory & Orangery Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for conservatory and orangery installation, covering roof glazing and structural opening safety, in under 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "Manual Handling Operations 1992",
      "CDM Regulations 2015",
    ],
    hazards: [
      {
        name: "Falls & Cuts During Roof Glazing Installation",
        control:
          "Use appropriate roof access equipment (podium, tower) for fitting roof panels or glass units, and use suction lifters and glass-handling gloves throughout.",
      },
      {
        name: "Structural Opening Instability When Forming the Link",
        control:
          "Support the head of the opening with temporary propping before breaking through an external wall to link the conservatory to the main structure.",
      },
      {
        name: "Manual Handling of Roof Panels & Base Materials",
        control:
          "Team-lift roof panels and glazed roof units, and use mechanical aids for base and dwarf wall materials wherever possible.",
      },
    ],
    required_ppe: [
      "Fall Arrest Harness (BS EN 361)",
      "Glass-Handling Gloves",
      "BS EN 397 Hard Hat",
      "BS EN 166 Safety Glasses",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover forming the structural opening to link the conservatory to the house?",
    faq_a1:
      "Yes. It includes a control requiring temporary propping to support the head of the opening before any external wall is broken through to form the link.",
  },
  {
    slug: "cladding-installer-external-wall-cladding-installation",
    trade: "Cladding & Curtain Walling",
    task_name: "External Wall Cladding Installation",
    h1_title: "External Wall Cladding Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific, CDM 2015 compliant RAMS for external wall cladding and curtain walling installation, covering height access and fire safety, in 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Work at Height Regulations 2005",
      "Building Regulations Approved Document B (Fire Safety)",
    ],
    hazards: [
      {
        name: "Falls from Height During Cladding Fixing",
        control:
          "Use a properly designed scaffold or MEWP with edge protection for all cladding fixing above 2m, never relying on ladders for panel installation.",
      },
      {
        name: "Fire Safety of Cladding Materials & Cavity Barriers",
        control:
          "Install cavity barriers and fire-stopping strictly to the specified system design, and confirm the cladding material meets the project's fire classification before fixing.",
      },
      {
        name: "Manual Handling of Cladding Panels",
        control:
          "Use mechanical lifting aids (vacuum lifters, panel hoists) for large composite or metal panels, team-lifting where mechanical aids aren't practical.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Fall Arrest Harness (BS EN 361)",
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover fire safety requirements for cladding systems?",
    faq_a1:
      "Yes. It includes a control requiring cavity barriers and fire-stopping to be installed strictly to the specified system design, reflecting the increased scrutiny on external wall fire safety following Building Regulations changes.",
  },
  {
    slug: "chimney-sweep-chimney-sweeping-flue-inspection",
    trade: "Chimney Sweeping",
    task_name: "Chimney Sweep & Flue Inspection",
    h1_title: "Chimney Sweep & Flue Inspection RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for chimney sweeping and flue inspection work, covering roof access and soot/dust exposure, in under 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "COSHH Regulations 2002",
      "HETAS Guidance Notes",
    ],
    hazards: [
      {
        name: "Falls from Roof or Ladder Accessing the Chimney",
        control:
          "Use appropriate roof access equipment and edge protection where sweeping from above; prefer sweeping from below via the fireplace where the flue design allows.",
      },
      {
        name: "Exposure to Soot & Creosote Dust",
        control:
          "Use a sheeted, sealed work area around the fireplace opening with HEPA-filtered vacuum extraction, and wear an FFP3 mask throughout.",
      },
      {
        name: "Undetected Flue Blockages or Damage",
        control:
          "Carry out a smoke test and visual/CCTV inspection of the flue before certifying it clear, flagging any damage or blockage found for repair.",
      },
    ],
    required_ppe: [
      "FFP3 Dust Mask",
      "BS EN 166 Safety Glasses",
      "Work Gloves",
      "Non-Slip Roofing Boots",
      "Coveralls",
    ],
    faq_q1: "Does this RAMS cover the risk of soot and creosote dust exposure?",
    faq_a1:
      "Yes. It includes a control requiring a sealed work area with HEPA-filtered extraction and an FFP3 mask, since soot and creosote dust are recognised respiratory and skin irritants.",
  },
  {
    slug: "steel-erector-structural-steel-frame-erection",
    trade: "Structural Steel Erection",
    task_name: "Structural Steel Frame Erection",
    h1_title: "Structural Steel Frame Erection RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific, CDM 2015 compliant RAMS for structural steel frame erection, covering crane lifting and working at height, in 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "LOLER 1998",
      "Work at Height Regulations 2005",
    ],
    hazards: [
      {
        name: "Falls During Steel Erection",
        control:
          "Use a fall arrest system with horizontal lifelines or a MEWP for connecting steelwork at height, with only trained steel erectors permitted to work aloft.",
      },
      {
        name: "Crane Lifting Operations & Dropped Loads",
        control:
          "Plan every lift in line with a lifting plan supervised by an appointed person, using tested and certified lifting gear and a clear exclusion zone beneath the load.",
      },
      {
        name: "Structural Instability of the Partially Erected Frame",
        control:
          "Temporarily brace and guy each erected section in line with the erection sequence drawing before the next lift proceeds.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Fall Arrest Harness (BS EN 361)",
      "BS EN ISO 20345 Safety Boots",
      "Cut-Resistant Gloves",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover the crane lifting plan for steel erection?",
    faq_a1:
      "Yes. It includes a control requiring every lift to be planned and supervised by an appointed person in line with a documented lifting plan, using tested and certified lifting gear.",
  },
  {
    slug: "groundworker-tarmac-asphalt-driveway-installation",
    trade: "Driveways & Paving",
    task_name: "Tarmac & Asphalt Driveway Installation",
    h1_title: "Tarmac & Asphalt Driveway Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for tarmac and asphalt driveway installation, covering hot material handling and plant safety, in under 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "PUWER 1998",
      "COSHH Regulations 2002",
    ],
    hazards: [
      {
        name: "Burns from Hot Tarmac/Asphalt",
        control:
          "Wear heat-resistant gloves and boots when handling and raking hot material, and keep bystanders clear of the tipping and laying area.",
      },
      {
        name: "Plant & Roller Movement on Site",
        control:
          "Use a banksman when reversing dumpers or rollers, and keep pedestrians segregated from the compaction area while rolling is underway.",
      },
      {
        name: "Exposure to Bitumen Fumes",
        control:
          "Work in well-ventilated conditions where possible, and follow the COSHH data sheet for the specific asphalt/bitumen product being laid.",
      },
    ],
    required_ppe: [
      "Heat-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots (Heat Resistant Sole)",
      "Hi-Vis Clothing",
      "BS EN 166 Safety Glasses",
      "FFP2 Dust Mask",
    ],
    faq_q1: "Does this RAMS cover the risk of burns from hot tarmac?",
    faq_a1:
      "Yes. It includes a control requiring heat-resistant gloves and boots for anyone handling or raking hot material, alongside a clear working area for the tipping and laying process.",
  },
  {
    slug: "pool-installer-domestic-swimming-pool-installation",
    trade: "Swimming Pool Installation",
    task_name: "Domestic Swimming Pool Installation",
    h1_title: "Domestic Swimming Pool Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for domestic swimming pool installation, covering excavation and plant room electrical safety, in 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Confined Spaces Regulations 1997",
      "Electricity at Work Regulations 1989",
    ],
    hazards: [
      {
        name: "Excavation Collapse During Pool Shell Formation",
        control:
          "Batter or shore the excavation sides in line with a competent person's assessment, keeping plant and stored spoil back from the edge.",
      },
      {
        name: "Confined Space Entry to the Plant Room/Pit",
        control:
          "Assess ventilation before entry to below-ground plant rooms or pits, never working alone without a means of raising the alarm.",
      },
      {
        name: "Electric Shock from Pool Pump & Lighting Circuits",
        control:
          "Install pool electrics to BS 7671's special locations requirements (Section 702), with RCD protection throughout and isolation before any circuit work.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "BS EN ISO 20345 Safety Boots",
      "Waterproof Gloves",
      "Hi-Vis Clothing",
      "1000V Insulated Gloves",
    ],
    faq_q1: "Does this RAMS cover the special electrical requirements for pool installations?",
    faq_a1:
      "Yes. It includes a control requiring pool electrics to be installed to BS 7671's special locations requirements (Section 702), which set stricter rules for wiring near water.",
  },
  {
    slug: "access-control-engineer-door-entry-access-control-installation",
    trade: "Access Control & Intercom Systems",
    task_name: "Door Entry & Access Control Installation",
    h1_title: "Door Entry & Access Control Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for door entry and access control system installation, covering electrical safety and fire door compliance, in under 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "Regulatory Reform (Fire Safety) Order 2005",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Electric Shock During Panel & Door Strike Wiring",
        control:
          "Isolate and lock off the relevant low-voltage supply before wiring door strikes, maglocks or control panels, testing dead before connection.",
      },
      {
        name: "Compromising Fire Door Integrity When Fitting Hardware",
        control:
          "Confirm fitted hardware and cable routing does not breach the fire door's certification, and use only fire-rated intumescent-compatible fixings where required.",
      },
      {
        name: "Manual Handling & Drilling into Structural Openings",
        control:
          "Check for hidden services before drilling door frames or adjacent walls, wearing eye protection throughout.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "1000V Insulated Gloves",
      "Safety Boots",
      "FFP2 Dust Mask",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover the risk of compromising fire door certification when fitting access control hardware?",
    faq_a1:
      "Yes. It includes a control requiring fitted hardware and cable routing to preserve the fire door's certification, using compatible fixings where required.",
  },
  {
    slug: "data-cabling-engineer-structured-data-cabling-installation",
    trade: "Data Cabling & Networking",
    task_name: "Structured Data Cabling Installation",
    h1_title: "Structured Data Cabling Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for structured data cabling and network installation, covering ceiling void access and working at height, in 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "Electricity at Work Regulations 1989",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Falls from Height Accessing Ceiling Voids",
        control:
          "Use a podium step or tower for above-ceiling cable pulling, never overreaching from a stepladder into a ceiling void.",
      },
      {
        name: "Working in Confined Ceiling & Riser Spaces",
        control:
          "Use adequate task lighting and check for asbestos-containing materials or other hazards in older ceiling voids before disturbing tiles.",
      },
      {
        name: "Manual Handling of Cable Reels & Containment",
        control:
          "Use a cable reel stand and trolley for heavy drums, and team-lift lengths of cable tray or basket into position.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "Knee Pads",
      "FFP2 Dust Mask",
      "Safety Boots",
    ],
    faq_q1: "Does this RAMS cover the risk of disturbing asbestos in older ceiling voids?",
    faq_a1:
      "Yes. It includes a control requiring a check for asbestos-containing materials before disturbing ceiling tiles or voids in older buildings, in line with the Control of Asbestos Regulations 2012.",
  },
  {
    slug: "garden-room-installer-garden-room-outbuilding-installation",
    trade: "Garden Rooms & Outbuildings",
    task_name: "Garden Room & Outbuilding Installation",
    h1_title: "Garden Room & Outbuilding Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for garden room and outbuilding installation, covering base excavation and structural build safety, in under 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Manual Handling Operations 1992",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Striking Buried Services During Base Excavation",
        control:
          "Conduct a CAT & Genny scan before excavating for the base or ground screws, hand-digging trial holes near suspected service routes.",
      },
      {
        name: "Manual Handling of Wall Panels & Roof Sections",
        control:
          "Team-lift prefabricated wall and roof panels, using lifting poles for raising heavier roof sections into place.",
      },
      {
        name: "Power Tool Use During Frame & Panel Assembly",
        control:
          "Use guarded, PAT-tested cutting and fixing tools, with operatives trained on each specific tool before use.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "Hearing Protection",
      "FFP2 Dust Mask",
    ],
    faq_q1: "Does this RAMS cover excavation for the base or ground screw foundations?",
    faq_a1:
      "Yes. It includes a CAT & Genny scanning control before any excavation work begins for the base slab or ground screw foundations.",
  },
  {
    slug: "insulation-installer-spray-foam-roof-insulation",
    trade: "Insulation",
    task_name: "Spray Foam Roof Insulation",
    h1_title: "Spray Foam Roof Insulation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for spray foam roof insulation application, covering isocyanate exposure and confined loft space controls, in 2 minutes.",
    applicable_regs: [
      "COSHH Regulations 2002",
      "Confined Spaces Regulations 1997",
      "Control of Substances Hazardous to Health",
    ],
    hazards: [
      {
        name: "Exposure to Isocyanate Vapours During Spraying",
        control:
          "Use powered RPE (not just a filtering mask) rated for isocyanate exposure, and ensure the space is sealed off and ventilated for the manufacturer's specified re-entry period after spraying.",
      },
      {
        name: "Fire Risk from Spray Foam Application",
        control:
          "Follow the manufacturer's application guidance on layer thickness and curing time, keeping ignition sources clear of the work area.",
      },
      {
        name: "Working in Confined Loft Spaces",
        control:
          "Use crawl boards across joists and keep a second person aware of the work location throughout the application.",
      },
    ],
    required_ppe: [
      "Powered RPE (Isocyanate-Rated)",
      "Chemical-Resistant Coveralls",
      "Chemical-Resistant Gloves",
      "BS EN 166 Safety Glasses/Goggles",
      "Knee Pads",
    ],
    faq_q1: "Does this RAMS cover the isocyanate exposure risk from spray foam application?",
    faq_a1:
      "Yes. It includes a control requiring powered RPE rated for isocyanate exposure and a sealed, ventilated re-entry period after spraying, reflecting HSE guidance on spray foam risks.",
  },
  {
    slug: "blacksmith-ornamental-metalwork-railings-gates",
    trade: "Blacksmithing & Ornamental Metalwork",
    task_name: "Ornamental Railings & Gates Fabrication/Installation",
    h1_title: "Ornamental Railings & Gates RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for ornamental railings and gate fabrication and installation, covering forge/welding and manual handling safety, in under 2 minutes.",
    applicable_regs: [
      "PUWER 1998",
      "COSHH Regulations 2002",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Burns from Forge Work & Hot Metal",
        control:
          "Wear heat-resistant gauntlets and use tongs appropriate to the workpiece, keeping a clear, uncluttered area around the forge or hearth.",
      },
      {
        name: "Fire Risk from Hot Work & Sparks",
        control:
          "Clear the area of combustible materials within a 10m radius before forging or grinding, keeping a fire extinguisher on hand.",
      },
      {
        name: "Manual Handling & Installation of Heavy Gates/Railings",
        control:
          "Use mechanical lifting aids or a minimum two-person team to position and hang heavy gates, supporting the structure fully before removing lifting equipment.",
      },
    ],
    required_ppe: [
      "Heat-Resistant Gauntlets",
      "Flame-Resistant Apron/Coveralls",
      "BS EN 166 Safety Glasses",
      "Hearing Protection",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover the fire risk from forge work and grinding?",
    faq_a1:
      "Yes. It includes a control requiring a 10m radius clearance of combustible materials before hot work begins, with a fire extinguisher kept on hand throughout.",
  },
  {
    slug: "pressure-washer-driveway-patio-pressure-washing",
    trade: "Pressure Washing & Exterior Cleaning",
    task_name: "Driveway & Patio Pressure Washing",
    h1_title: "Driveway & Patio Pressure Washing RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for driveway and patio pressure washing work, covering high-pressure equipment and chemical treatment hazards, in under 2 minutes.",
    applicable_regs: [
      "PUWER 1998",
      "COSHH Regulations 2002",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "High-Pressure Water Jet Injury",
        control:
          "Never direct the jet at any person, and maintain a safe stand-off distance from the surface being cleaned in line with the equipment's rated pressure.",
      },
      {
        name: "Exposure to Cleaning Chemicals & Biocides",
        control:
          "Follow the COSHH data sheet for all patio cleaners, algaecides and biocides used, and prevent run-off into drains or water courses.",
      },
      {
        name: "Slips on Wet Surfaces During & After Cleaning",
        control:
          "Use warning signage around the work area and allow surfaces to dry before reopening to pedestrian traffic.",
      },
    ],
    required_ppe: [
      "Waterproof Coveralls",
      "BS EN 166 Safety Glasses",
      "Non-Slip Waterproof Footwear",
      "Chemical-Resistant Gloves",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover the risk of chemical run-off into drains?",
    faq_a1:
      "Yes. It includes a control requiring run-off from patio cleaners, algaecides and biocides to be prevented from entering drains or water courses, in line with COSHH and environmental good practice.",
  },
  {
    slug: "garage-door-installer-garage-door-installation-automation",
    trade: "Garage Doors",
    task_name: "Garage Door Installation & Automation",
    h1_title: "Garage Door Installation & Automation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for garage door installation and automation, covering spring tension and electrical safety, in 2 minutes.",
    applicable_regs: [
      "PUWER 1998",
      "Electricity at Work Regulations 1989",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Release of Stored Spring Tension",
        control:
          "Only competent operatives to work on torsion or extension springs, using winding bars and never releasing tension without following the manufacturer's de-tensioning procedure.",
      },
      {
        name: "Electric Shock During Automation Wiring",
        control:
          "Isolate and lock off the local supply before wiring the door motor and control unit, testing dead before connection.",
      },
      {
        name: "Manual Handling of Door Panels & Frames",
        control:
          "Two-person lift for sectional door panels and steel frames, using correct lifting technique throughout installation.",
      },
    ],
    required_ppe: [
      "Cut-Resistant Gloves",
      "BS EN 166 Safety Glasses",
      "BS EN ISO 20345 Safety Boots",
      "1000V Insulated Gloves",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover the risk of releasing stored spring tension in garage door mechanisms?",
    faq_a1:
      "Yes. It includes a control restricting spring work to competent operatives using winding bars and the manufacturer's de-tensioning procedure, reflecting one of the most serious risks in garage door servicing.",
  },
  {
    slug: "smart-home-installer-smart-home-system-installation",
    trade: "Smart Home & Home Automation",
    task_name: "Smart Home System Installation",
    h1_title: "Smart Home System Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for smart home and home automation system installation, covering low-voltage wiring and working at height, in under 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "Work at Height Regulations 2005",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Electric Shock During Panel & Sensor Wiring",
        control:
          "Isolate and lock off relevant circuits before connecting control panels, sensors or smart switches, testing dead before working on any mains-connected component.",
      },
      {
        name: "Falls While Fitting Ceiling Sensors & Speakers",
        control:
          "Use a podium step or tower for ceiling-mounted sensors and speakers above 2m, never overreaching from a stepladder.",
      },
      {
        name: "Drilling into Walls & Ceilings for Cabling",
        control:
          "Check for hidden services before drilling cable routes, wearing eye protection throughout.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "1000V Insulated Gloves",
      "Safety Boots",
      "FFP2 Dust Mask",
      "Knee Pads",
    ],
    faq_q1: "Does this RAMS cover working at height to fit ceiling-mounted sensors and speakers?",
    faq_a1:
      "Yes. It includes a control requiring a podium step or tower for any ceiling-mounted component above 2m, rather than overreaching from a stepladder.",
  },
  {
    slug: "dry-stone-waller-dry-stone-wall-construction-repair",
    trade: "Dry Stone Walling",
    task_name: "Dry Stone Wall Construction & Repair",
    h1_title: "Dry Stone Wall Construction & Repair RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for dry stone wall construction and repair, covering manual handling and structural stability hazards, in 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "PUWER 1998",
      "Work at Height Regulations 2005",
    ],
    hazards: [
      {
        name: "Manual Handling of Heavy Stone",
        control:
          "Assess each stone individually before lifting, using mechanical aids (stone grabs, mini-diggers) for larger pieces and team-lifting where mechanical aids aren't practical.",
      },
      {
        name: "Wall Collapse During Dismantling or Rebuilding",
        control:
          "Dismantle and rebuild in short, stable sections, never leaving a partially built or destabilised section unsupported overnight.",
      },
      {
        name: "Crush & Trapped Finger Injuries When Placing Stone",
        control:
          "Use appropriate hand positioning and tools (not fingers) to guide heavy stones into final position.",
      },
    ],
    required_ppe: [
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "BS EN 166 Safety Glasses",
      "Knee Pads",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover the risk of wall collapse during rebuilding?",
    faq_a1:
      "Yes. It includes a control requiring dismantling and rebuilding in short, stable sections, with no partially built section left unsupported overnight.",
  },
  {
    slug: "waste-clearance-operative-house-clearance-waste-removal",
    trade: "Waste Clearance",
    task_name: "House Clearance & Waste Removal",
    h1_title: "House Clearance & Waste Removal RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for house clearance and waste removal work, covering manual handling and hazardous item hazards, in under 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "Health and Safety at Work etc. Act 1974",
      "Hazardous Waste (England and Wales) Regulations 2005",
    ],
    hazards: [
      {
        name: "Manual Handling of Bulky & Awkward Items",
        control:
          "Use trolleys, straps and a two-person team for large furniture and appliances, assessing weight and access route before moving each item.",
      },
      {
        name: "Undisclosed Hazardous or Sharp Items in Clutter",
        control:
          "Visually assess loose waste before handling, wearing cut-resistant gloves at all times and segregating any hazardous items found for separate licensed disposal.",
      },
      {
        name: "Trip & Fall Hazards in Cluttered Properties",
        control:
          "Clear a safe working path through the property before bulk removal begins, and use adequate lighting in cluttered or poorly lit rooms.",
      },
    ],
    required_ppe: [
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "FFP2 Dust Mask",
      "Hi-Vis Clothing",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover the risk of hazardous items being found during a house clearance?",
    faq_a1:
      "Yes. It includes a control requiring loose waste to be visually assessed before handling, with any hazardous items segregated for separate licensed disposal.",
  },
  {
    slug: "appliance-installer-domestic-appliance-installation-connection",
    trade: "Appliance Installation",
    task_name: "Domestic Appliance Installation & Connection",
    h1_title: "Domestic Appliance Installation & Connection RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for domestic appliance installation and connection, covering electrical, gas and water safety, in 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "Water Supply (Water Fittings) Regulations 1999",
      "Gas Safety (Installation and Use) Regulations 1998",
    ],
    hazards: [
      {
        name: "Electric Shock During Appliance Connection",
        control:
          "Isolate the relevant circuit before hard-wiring any appliance, and visually inspect flexible connections and plugs before use.",
      },
      {
        name: "Water Leaks from Plumbed Appliance Connections",
        control:
          "Use correctly rated hoses and fittings for washing machines and dishwashers, and pressure test connections before leaving site.",
      },
      {
        name: "Manual Handling of Heavy Appliances",
        control:
          "Use an appliance trolley and correct lifting technique for washing machines, dishwashers and ovens, particularly on stairs.",
      },
    ],
    required_ppe: [
      "Nitrile Gloves",
      "BS EN 166 Safety Glasses",
      "Safety Boots",
      "Knee Pads",
      "Cut-Resistant Gloves",
    ],
    faq_q1: "Does this RAMS cover gas-connected appliances such as cookers?",
    faq_a1:
      "The RAMS includes general connection safety controls, but any gas appliance connection must be carried out by a Gas Safe registered engineer separately, in line with the Gas Safety (Installation and Use) Regulations 1998.",
  },
  {
    slug: "screeder-liquid-sand-cement-floor-screeding",
    trade: "Screeding",
    task_name: "Liquid & Sand Cement Floor Screeding",
    h1_title: "Liquid & Sand Cement Floor Screeding RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for liquid and sand cement floor screeding, covering pumping equipment and cement COSHH controls, in under 2 minutes.",
    applicable_regs: [
      "COSHH Regulations 2002",
      "Manual Handling Operations 1992",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Skin & Eye Contact with Wet Screed",
        control:
          "Wear waterproof, cement-resistant gloves and eye protection when handling or finishing wet screed, following the COSHH data sheet for the specific product.",
      },
      {
        name: "Screed Pump & Hose Pressure Hazards",
        control:
          "Only trained operatives to operate the screed pump, keeping hands clear of the hose end and coupling points while the pump is pressurised.",
      },
      {
        name: "Manual Handling of Bagged Materials & Insulation Boards",
        control:
          "Use a trolley or mechanical mixer feed for bagged screed materials, and team-lift insulation boards to avoid awkward twisting.",
      },
    ],
    required_ppe: [
      "Waterproof Cement-Resistant Gloves",
      "BS EN 166 Safety Glasses",
      "Knee Pads",
      "BS EN ISO 20345 Safety Boots",
      "FFP2 Dust Mask",
    ],
    faq_q1: "Does this RAMS cover the pumping equipment used for liquid screed?",
    faq_a1:
      "Yes. It includes a control restricting pump operation to trained operatives and requiring hands to be kept clear of the hose end and couplings while pressurised.",
  },
  {
    slug: "fire-door-installer-fire-door-installation-certification",
    trade: "Fire Door Installation",
    task_name: "Fire Door Installation & Certification",
    h1_title: "Fire Door Installation & Certification RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for fire door installation and certification, covering door set compliance and manual handling, in 2 minutes.",
    applicable_regs: [
      "Regulatory Reform (Fire Safety) Order 2005",
      "Building Regulations Approved Document B (Fire Safety)",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Installing a Non-Compliant Door Set or Hardware",
        control:
          "Install only certified fire door sets with matching certified hardware (hinges, closers, intumescent strips), never mixing components outside the tested configuration.",
      },
      {
        name: "Manual Handling of Heavy Fire-Rated Doors",
        control:
          "Two-person lift for solid-core fire doors, using door lifters or wedges to support the leaf during hanging.",
      },
      {
        name: "Compromising Door/Frame Integrity When Fitting Ironmongery",
        control:
          "Fit ironmongery strictly to the manufacturer's certified positions, avoiding any cutting or drilling that isn't part of the tested door set specification.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "Safety Boots",
      "Knee Pads",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover certification requirements for fire door installations?",
    faq_a1:
      "Yes. It includes a control requiring only certified fire door sets with matching certified hardware to be installed, without mixing components outside the tested configuration — a common cause of certification failure.",
  },
  {
    slug: "soundproofing-installer-acoustic-insulation-soundproofing-installation",
    trade: "Soundproofing & Acoustic Insulation",
    task_name: "Acoustic Insulation & Soundproofing Installation",
    h1_title: "Acoustic Insulation & Soundproofing Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for acoustic insulation and soundproofing installation, covering fibre exposure and manual handling, in under 2 minutes.",
    applicable_regs: [
      "COSHH Regulations 2002",
      "Manual Handling Operations 1992",
      "Work at Height Regulations 2005",
    ],
    hazards: [
      {
        name: "Exposure to Mineral Wool & Acoustic Fibre Dust",
        control:
          "Wear an FFP3 mask and full-sleeve coveralls when cutting or fitting mineral wool or acoustic fibre products, ventilating the work area where possible.",
      },
      {
        name: "Manual Handling of Acoustic Boards & Resilient Bars",
        control:
          "Team-lift large acoustic board sheets and use trolleys for heavy resilient bar and channel bundles.",
      },
      {
        name: "Falls from Trestles During Ceiling Soundproofing",
        control:
          "Use properly boarded trestle platforms with guardrails for ceiling-height installation, never standing on buckets or improvised platforms.",
      },
    ],
    required_ppe: [
      "FFP3 Dust Mask",
      "Full-Sleeve Coveralls",
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "Knee Pads",
    ],
    faq_q1: "Does this RAMS cover dust exposure from mineral wool acoustic products?",
    faq_a1:
      "Yes. It includes a control requiring an FFP3 mask and full-sleeve coveralls when cutting or fitting mineral wool or acoustic fibre insulation, in line with COSHH 2002.",
  },
  {
    slug: "electrician-commercial-public-ev-charging-infrastructure-installation",
    trade: "Electrical",
    task_name: "Commercial & Public EV Charging Infrastructure Installation",
    h1_title: "Commercial & Public EV Charging Infrastructure Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific, CDM 2015 compliant RAMS for commercial and public EV charging infrastructure installation, covering groundworks and high-power electrical safety, in 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "CDM Regulations 2015",
      "BS 7671 (18th Edition Wiring Regulations)",
    ],
    hazards: [
      {
        name: "High-Power Electrical Connection & Isolation",
        control:
          "Isolate and lock out the supply at the distribution board before connecting rapid or ultra-rapid charge points, testing dead using a proved voltage indicator rated for the system voltage.",
      },
      {
        name: "Excavation for Sub-Base & Cabling Runs",
        control:
          "Conduct a CAT & Genny scan before excavating cable trenches or charger foundations, hand-digging within 0.5m of known service routes.",
      },
      {
        name: "Manual Handling & Plant Interaction During Groundworks",
        control:
          "Segregate pedestrian routes from excavator and plant movement with barriers, using a banksman for all reversing manoeuvres.",
      },
    ],
    required_ppe: [
      "1000V Insulated Gloves",
      "BS EN 397 Hard Hat",
      "BS EN 166 Safety Glasses",
      "BS EN ISO 20345 Safety Boots",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover the groundworks needed for charger foundations and cabling?",
    faq_a1:
      "Yes. It includes a CAT & Genny scanning control before any excavation for cable trenches or charger foundations, alongside the high-power electrical isolation controls specific to rapid charging infrastructure.",
  },
];

export function getTradeBySlug(slug) {
  return trades.find((t) => t.slug === slug) || null;
}
