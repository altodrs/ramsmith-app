export const industries = [
  {
    slug: "rigger-stage-rigging-erection",
    trade: "Events & Entertainment",
    task_name: "Stage & Rigging Erection",
    h1_title: "Stage & Rigging Erection RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific, CDM 2015 compliant RAMS for stage and rigging erection at events, covering fall prevention and load safety, in 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Work at Height Regulations 2005",
      "LOLER 1998",
    ],
    hazards: [
      {
        name: "Falls During Rigging / Truss Work",
        control:
          "Use a fall arrest system with suitable anchor points when working aloft on trussing or ground support structures. Only competent, harness-trained riggers to work at height.",
      },
      {
        name: "Structural Overload of Rigging Points",
        control:
          "Work strictly within the safe working load (SWL) of every rigging point, chain hoist and truss span. All lifting equipment inspected and certified under LOLER before use.",
      },
      {
        name: "Falling Tools & Components onto the Crowd Area",
        control:
          "Use tool lanyards and secondary safety cables on all rigged components. Establish and maintain an exclusion zone beneath the rig until de-rig is complete.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Fall Arrest Harness (BS EN 361)",
      "BS EN ISO 20345 Safety Boots",
      "Work Gloves",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover the load ratings of rigging points and chain hoists?",
    faq_a1:
      "Yes. It includes a control requiring all lifting equipment to be worked within its safe working load and inspected and certified under LOLER 1998 before use.",
  },
  {
    slug: "event-crew-marquee-temporary-structure-installation",
    trade: "Events & Entertainment",
    task_name: "Marquee & Temporary Structure Installation",
    h1_title: "Marquee & Temporary Structure Installation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for marquee and temporary structure installation at events, covering wind loading and manual handling, in under 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Manual Handling Operations 1992",
      "Work at Height Regulations 2005",
    ],
    hazards: [
      {
        name: "Structural Collapse in High Wind",
        control:
          "Monitor forecast wind speeds against the structure's rated wind loading throughout the build and event. Stop work and evacuate the structure if conditions exceed the manufacturer's limits.",
      },
      {
        name: "Manual Handling of Frame Sections & Roof Panels",
        control:
          "Team-lift all frame sections and roof panels in line with the manufacturer's crew-size guidance. Use lifting poles for raising heavier roof sections rather than freehand lifting.",
      },
      {
        name: "Ground Anchor & Guy Rope Trip Hazards",
        control:
          "Mark and cover all ground anchors and guy ropes with hazard tape or matting in publicly accessible areas, and brief all crew on anchor point locations before work begins.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "Hi-Vis Clothing",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover the risk of structural collapse in high wind?",
    faq_a1:
      "Yes. It includes a control requiring wind speeds to be actively monitored against the structure's rated loading, with a stop-work and evacuation trigger if conditions exceed manufacturer limits.",
  },
  {
    slug: "event-electrician-event-electrics-temporary-power-distribution",
    trade: "Events & Entertainment",
    task_name: "Event Electrics & Temporary Power Distribution",
    // Supplying temporary power for an event isn't "construction work" under
    // CDM 2015 on its own (unlike erecting the stage/marquee it powers).
    cdm_applicable: false,
    h1_title: "Event Electrics & Temporary Power Distribution RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for event electrics and temporary power distribution, covering electric shock and weatherproofing controls, in 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "CDM Regulations 2015",
      "BS 7909 (Temporary Electrical Systems for Entertainment)",
    ],
    hazards: [
      {
        name: "Electric Shock from Temporary Distribution",
        control:
          "Distribute power via RCD-protected outlets throughout the chain, and only use equipment and cabling rated for the event's power demand. All distribution assemblies inspected before energising.",
      },
      {
        name: "Water Ingress on Outdoor Connections",
        control:
          "Use IP-rated (minimum IP44) connectors and enclosures for all outdoor cabling and distribution equipment, and route or elevate cable runs away from standing water.",
      },
      {
        name: "Cable Trip Hazards Across Public Walkways",
        control:
          "Use cable ramps or overhead rigging to route cables across any public walkway or vehicle route, and secure all other runs with tape to prevent movement underfoot.",
      },
    ],
    required_ppe: [
      "1000V Insulated Gloves",
      "BS EN 166 Safety Glasses",
      "BS EN ISO 20345 Safety Boots",
      "Hi-Vis Clothing",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover outdoor and weatherproofing requirements for event power?",
    faq_a1:
      "Yes. It includes IP-rating requirements for outdoor connectors and enclosures, in line with BS 7909 guidance for temporary electrical systems used at events.",
  },
  {
    slug: "window-cleaner-high-level-commercial-window-cleaning",
    trade: "Facilities Management",
    task_name: "High-Level Window Cleaning (Commercial)",
    // Routine cleaning/maintenance is generally excluded from CDM 2015's
    // definition of construction work unless bundled with actual repair work.
    cdm_applicable: false,
    h1_title: "High-Level Window Cleaning RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for high-level commercial window cleaning, covering rope access and cradle/MEWP safety, in 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "LOLER 1998",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Falls During Rope Access or Cradle Work",
        control:
          "Only IRATA-certified operatives to carry out rope access work, with all equipment inspected before each use. Building maintenance units (BMUs) and cradles thoroughly checked under LOLER before use.",
      },
      {
        name: "Falling Objects to Pedestrians Below",
        control:
          "Establish a ground-level exclusion zone using barriers or signage before work begins, particularly on public-facing elevations.",
      },
      {
        name: "Equipment Failure at Height",
        control:
          "Use equipment with current inspection certificates only, and always work with a secondary attachment point as backup to the primary system.",
      },
    ],
    required_ppe: [
      "Fall Arrest Harness (BS EN 361)",
      "BS EN 397 Hard Hat",
      "Non-Slip Footwear",
      "Work Gloves",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover rope access window cleaning specifically?",
    faq_a1:
      "Yes. It includes controls requiring IRATA-certified operatives and dual attachment points for rope access work, alongside separate controls for cradle and MEWP-based cleaning.",
  },
  {
    slug: "cleaning-operative-commercial-deep-cleaning-sanitisation",
    trade: "Facilities Management",
    task_name: "Commercial Deep Cleaning & Sanitisation",
    cdm_applicable: false,
    h1_title: "Commercial Deep Cleaning & Sanitisation RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for commercial deep cleaning and sanitisation work, covering chemical COSHH controls and slip hazards, in under 2 minutes.",
    applicable_regs: [
      "COSHH Regulations 2002",
      "Manual Handling Operations 1992",
      "Management of Health and Safety at Work Regulations 1999",
    ],
    hazards: [
      {
        name: "Exposure to Cleaning Chemicals & Disinfectants",
        control:
          "Follow the COSHH data sheet for every chemical used, never mix products, and ensure adequate ventilation throughout the space being cleaned.",
      },
      {
        name: "Slips on Wet Floors",
        control:
          "Use warning signage and barrier off wet areas during and after cleaning, and allow adequate drying time before reopening to staff or the public.",
      },
      {
        name: "Manual Handling of Cleaning Equipment & Waste",
        control:
          "Use trolleys for heavy equipment and bagged waste, and avoid overfilling waste sacks beyond a manageable weight.",
      },
    ],
    required_ppe: [
      "Chemical-Resistant Gloves",
      "BS EN 166 Safety Glasses",
      "Non-Slip Footwear",
      "FFP2 Dust Mask",
      "Disposable Coveralls",
    ],
    faq_q1: "Does this RAMS cover the chemicals used in a commercial deep clean?",
    faq_a1:
      "Yes. It includes COSHH-based controls requiring the data sheet for every product to be followed, and a specific control against mixing chemicals.",
  },
  {
    slug: "farm-worker-grain-store-silo-maintenance",
    trade: "Agriculture",
    task_name: "Grain Store & Silo Maintenance",
    cdm_applicable: false,
    h1_title: "Grain Store & Silo Maintenance RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for grain store and silo maintenance work, covering confined space entry and engulfment risks, in 2 minutes.",
    applicable_regs: [
      "Confined Spaces Regulations 1997",
      "Work at Height Regulations 2005",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Engulfment in Flowing Grain",
        control:
          "Never enter a silo while grain is being loaded or unloaded. Isolate and lock off all augers and conveying equipment before any entry.",
      },
      {
        name: "Confined Space Atmosphere (Dust, Low Oxygen)",
        control:
          "Test the atmosphere before entry and ventilate the space. Use a permit-to-work system with a trained top-man in constant communication.",
      },
      {
        name: "Falls from Silo Access Ladders & Platforms",
        control:
          "Use a fall arrest system on external silo ladders and internal platforms, and inspect access structures before each use.",
      },
    ],
    required_ppe: [
      "Fall Arrest Harness (BS EN 361)",
      "FFP3 Dust Mask",
      "BS EN 397 Hard Hat",
      "Gas Detector",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover the risk of grain engulfment?",
    faq_a1:
      "Yes. It includes a control requiring all conveying equipment to be isolated and locked off before any entry, and prohibits entry while grain is flowing.",
  },
  {
    slug: "farm-worker-farm-machinery-operation-maintenance",
    trade: "Agriculture",
    task_name: "Farm Machinery Operation & Maintenance",
    cdm_applicable: false,
    h1_title: "Farm Machinery Operation & Maintenance RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for farm machinery operation and maintenance, covering PTO shaft and moving part hazards, in under 2 minutes.",
    applicable_regs: [
      "PUWER 1998",
      "Manual Handling Operations 1992",
      "Provision and Use of Work Equipment Regulations 1998",
    ],
    hazards: [
      {
        name: "Entanglement in PTO Shafts & Moving Parts",
        control:
          "Ensure all PTO shaft guards are fitted and in good condition before use. Isolate and stop all moving parts before carrying out any maintenance or clearing blockages.",
      },
      {
        name: "Overturning of Tractors & Machinery on Slopes",
        control:
          "Assess ground conditions and gradient before operating machinery on sloped land, and only operate within the manufacturer's stated safe limits.",
      },
      {
        name: "Manual Handling of Feed, Bales & Equipment",
        control:
          "Use mechanical handling equipment (telehandlers, loaders) for heavy bales and feed sacks wherever possible, rather than manual lifting.",
      },
    ],
    required_ppe: [
      "BS EN ISO 20345 Safety Boots",
      "Hearing Protection",
      "Cut-Resistant Gloves",
      "Hi-Vis Clothing",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover the risk of entanglement in PTO shafts?",
    faq_a1:
      "Yes. It includes a control requiring PTO shaft guards to be fitted and all moving parts fully isolated before maintenance or clearing blockages, reflecting one of the most common causes of serious injury in agriculture.",
  },
  {
    slug: "production-crew-on-location-filming-set-construction",
    trade: "Film & TV Production",
    task_name: "On-Location Filming & Set Construction",
    h1_title: "On-Location Filming & Set Construction RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for on-location filming and set construction, covering public access and structural build safety, in 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Manual Handling Operations 1992",
      "Work at Height Regulations 2005",
    ],
    hazards: [
      {
        name: "Public & Cast/Crew Access During Filming",
        control:
          "Establish a controlled unit base and filming perimeter with marshals managing public access, particularly on live or semi-public locations.",
      },
      {
        name: "Structural Build Risks (Sets, Platforms, Rostra)",
        control:
          "Build all sets, platforms and rostra to a competent design, with a structural check before cast or crew are permitted onto any elevated structure.",
      },
      {
        name: "Trailing Cables & Trip Hazards on Location",
        control:
          "Route or cover all cables across walkways, and use cable ramps on any public-facing route through the location.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Hi-Vis Clothing",
      "BS EN ISO 20345 Safety Boots",
      "Work Gloves",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover managing public access on a live filming location?",
    faq_a1:
      "Yes. It includes a control requiring a controlled filming perimeter and marshalled public access points, which is a core requirement for filming on live or semi-public locations.",
  },
  {
    slug: "drone-operator-drone-operation-aerial-filming",
    trade: "Film & TV Production",
    task_name: "Drone Operation for Aerial Filming",
    cdm_applicable: false,
    h1_title: "Drone Operation for Aerial Filming RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for drone operation used in aerial filming, covering CAA compliance and third-party overflight risk, in under 2 minutes.",
    applicable_regs: [
      "UK Civil Aviation Authority (CAA) Drone Regulations",
      "Health and Safety at Work etc. Act 1974",
      "Management of Health and Safety at Work Regulations 1999",
    ],
    hazards: [
      {
        name: "Loss of Control / Fly-Away",
        control:
          "Conduct pre-flight checks on the aircraft, battery and control link before every flight, and only fly within the operator's permissions and the airframe's rated conditions.",
      },
      {
        name: "Overflight of Uninvolved Third Parties",
        control:
          "Plan flight paths to avoid overflying uninvolved people or property, maintaining the separation distances required by the operator's CAA operating authorisation.",
      },
      {
        name: "Loss of Line of Sight or Airspace Infringement",
        control:
          "Check NOTAMs and airspace restrictions before flying, and maintain visual line of sight (or a trained observer) throughout the flight in line with the operator's authorisation.",
      },
    ],
    required_ppe: [
      "Hi-Vis Clothing",
      "Safety Boots",
      "Eye Protection (Launch/Recovery)",
      "Ear Defenders (Larger Aircraft)",
      "Weatherproof Clothing",
    ],
    faq_q1: "Does this RAMS cover CAA operating authorisation requirements?",
    faq_a1:
      "The RAMS includes site-specific hazard planning for the flight, but you must hold a valid CAA operating authorisation (or equivalent permission) for the drone and operation type separately — this remains the operator's responsibility to confirm and maintain.",
  },
  {
    slug: "warehouse-operative-racking-installation-warehouse-fit-out",
    trade: "Warehouse & Logistics",
    task_name: "Racking Installation & Warehouse Fit-Out",
    h1_title: "Racking Installation & Warehouse Fit-Out RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for warehouse racking installation and fit-out work, covering structural safety and MEWP operation, in 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "PUWER 1998",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Racking Collapse During Installation",
        control:
          "Install racking strictly to the manufacturer's design and loading specification, with base plates fixed and frames braced before any loading. Have the installation checked by a SEMA-qualified inspector before handover.",
      },
      {
        name: "Falls from MEWPs & Access Platforms",
        control:
          "Only trained and certified operatives (IPAF) to use MEWPs or scissor lifts, with harnesses worn in boom-type platforms in line with the manufacturer's guidance.",
      },
      {
        name: "Manual Handling of Racking Components",
        control:
          "Use mechanical lifting aids for heavy upright frames and beams. Team-lift where mechanical aids aren't practical, keeping loads close to the body.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Fall Arrest Harness (BS EN 361)",
      "BS EN ISO 20345 Safety Boots",
      "Work Gloves",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover SEMA inspection requirements for racking installation?",
    faq_a1:
      "Yes. It includes a control requiring installation to be checked by a SEMA-qualified inspector before handover, in line with industry good practice for racking safety.",
  },
  {
    slug: "mhe-operator-forklift-mhe-operations",
    trade: "Warehouse & Logistics",
    task_name: "Forklift & MHE Operations",
    cdm_applicable: false,
    h1_title: "Forklift & MHE Operations RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for forklift and materials handling equipment (MHE) operations, covering pedestrian segregation and load safety, in under 2 minutes.",
    applicable_regs: [
      "PUWER 1998",
      "LOLER 1998",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Collision with Pedestrians",
        control:
          "Maintain segregated pedestrian and vehicle routes wherever possible, use fitted warning beacons/alarms, and enforce a site speed limit for all MHE.",
      },
      {
        name: "Overloading or Unstable Loads",
        control:
          "Never exceed the truck's rated capacity at the load's centre of gravity, and check the load is stable and correctly stacked before moving.",
      },
      {
        name: "Operator Competence & Unauthorised Use",
        control:
          "Only operators holding a valid, in-date certificate of basic training for the specific truck type are permitted to operate it, with keys secured when not in use.",
      },
    ],
    required_ppe: [
      "BS EN ISO 20345 Safety Boots",
      "Hi-Vis Clothing",
      "Hearing Protection",
      "Work Gloves",
      "BS EN 397 Hard Hat",
    ],
    faq_q1: "Does this RAMS cover pedestrian segregation in the warehouse?",
    faq_a1:
      "Yes. It includes a control requiring segregated pedestrian and vehicle routes and audible/visual warning devices on all MHE, reflecting one of the most common causes of serious warehouse incidents.",
  },
  {
    slug: "waste-operative-skip-loading-waste-collection",
    trade: "Waste & Recycling",
    task_name: "Skip Loading & Waste Collection",
    cdm_applicable: false,
    h1_title: "Skip Loading & Waste Collection RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for skip loading and waste collection work, covering vehicle movement and manual handling hazards, in 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "PUWER 1998",
      "Health and Safety at Work etc. Act 1974",
    ],
    hazards: [
      {
        name: "Vehicle Movement & Reversing on Site",
        control:
          "Use a banksman for all reversing manoeuvres on site, and maintain segregation between the collection vehicle and pedestrians during loading.",
      },
      {
        name: "Manual Handling of Waste Materials",
        control:
          "Assess loose waste for weight and sharp/hazardous items before handling, and use mechanical aids (grabs, hoists) for skip movement rather than manual tipping where possible.",
      },
      {
        name: "Sharps & Contaminated Waste Exposure",
        control:
          "Wear cut-resistant gloves at all times when handling mixed waste, and never sort waste by hand without first visually checking for sharps or hazardous items.",
      },
    ],
    required_ppe: [
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "Hi-Vis Clothing",
      "BS EN 166 Safety Glasses",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover the risk of vehicle movement during skip collection?",
    faq_a1:
      "Yes. It includes a control requiring a banksman for reversing manoeuvres and clear segregation between the collection vehicle and pedestrians during loading.",
  },
  {
    slug: "telecoms-engineer-telecoms-mast-tower-work",
    trade: "Utilities & Telecoms",
    task_name: "Telecoms Mast & Tower Work",
    h1_title: "Telecoms Mast & Tower Work RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for telecoms mast and tower work, covering climbing safety and RF exposure controls, in under 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "Control of Electromagnetic Fields at Work Regulations 2016",
      "LOLER 1998",
    ],
    hazards: [
      {
        name: "Falls During Mast/Tower Climbing",
        control:
          "Only operatives holding a valid working-at-height climbing certificate to climb, using 100% tie-off climbing technique at all times with correctly rated fall arrest equipment.",
      },
      {
        name: "RF (Radio Frequency) Exposure from Live Antennas",
        control:
          "Check the site RF risk assessment and ensure relevant antennas/sectors are powered down or access-restricted in line with EMF exposure limits before working in close proximity.",
      },
      {
        name: "Dropped Objects from Height",
        control:
          "Use tool lanyards and a rigged lifting line for all tools and components taken up the structure, and establish a ground-level exclusion zone below the work area.",
      },
    ],
    required_ppe: [
      "Fall Arrest Harness (BS EN 361)",
      "BS EN 397 Hard Hat",
      "RF Personal Monitor",
      "Work Gloves",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover RF exposure from live antennas on the mast?",
    faq_a1:
      "Yes. It includes a control requiring the site RF risk assessment to be checked and antennas powered down or access-restricted where necessary, in line with the Control of Electromagnetic Fields at Work Regulations 2016.",
  },
  {
    slug: "fire-safety-technician-commercial-fire-safety-equipment-servicing",
    trade: "Facilities Management",
    task_name: "Commercial Fire Safety Equipment Servicing",
    cdm_applicable: false,
    h1_title: "Commercial Fire Safety Equipment Servicing RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for commercial fire safety equipment servicing, covering extinguisher testing and access hazards, in 2 minutes.",
    applicable_regs: [
      "Regulatory Reform (Fire Safety) Order 2005",
      "PUWER 1998",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Handling Pressurised Extinguishers",
        control:
          "Visually inspect each extinguisher for damage or corrosion before pressure testing, and never fully discharge or test-fire an extinguisher indoors without adequate ventilation.",
      },
      {
        name: "Access to Fire Panels & Equipment in Plant Rooms",
        control:
          "Use adequate task lighting and check the immediate area is clear before working in plant rooms or riser cupboards.",
      },
      {
        name: "Disruption to Live Fire Systems in Occupied Buildings",
        control:
          "Notify the building's responsible person before isolating any part of the fire system, and reinstate full cover at the end of each working day.",
      },
    ],
    required_ppe: [
      "Nitrile Gloves",
      "BS EN 166 Safety Glasses",
      "Safety Boots",
      "Hi-Vis Clothing",
      "Knee Pads",
    ],
    faq_q1: "Does this RAMS cover isolating fire systems in an occupied building during servicing?",
    faq_a1:
      "Yes. It includes controls for notifying the responsible person and restoring full alarm cover, since isolating any part of a fire system in an occupied building affects everyone on site.",
  },
  {
    slug: "groundskeeper-grounds-external-estate-maintenance",
    trade: "Facilities Management",
    task_name: "Grounds & External Estate Maintenance",
    cdm_applicable: false,
    h1_title: "Grounds & External Estate Maintenance RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for grounds and external estate maintenance work, covering machinery and public access hazards, in under 2 minutes.",
    applicable_regs: [
      "PUWER 1998",
      "Manual Handling Operations 1992",
      "COSHH Regulations 2002",
    ],
    hazards: [
      {
        name: "Power Tool & Machinery Use (Mowers, Strimmers, Hedge Cutters)",
        control:
          "Use only guarded, well-maintained equipment appropriate to the task, and check the area for debris and members of the public before starting.",
      },
      {
        name: "Public Access During Grounds Work",
        control:
          "Use cordon tape or signage around active work areas on estates with public or staff footfall, particularly when using strimmers or hedge cutters.",
      },
      {
        name: "Exposure to Herbicides & Fertilisers",
        control:
          "Follow the COSHH data sheet for all chemicals applied, and observe the specified re-entry period before the treated area is reopened to staff or the public.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Hearing Protection",
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover public access during grounds maintenance work?",
    faq_a1:
      "Yes. It includes a control requiring cordon tape or signage around active work areas on sites with public or staff footfall.",
  },
  {
    slug: "farm-worker-livestock-handling-husbandry",
    trade: "Agriculture",
    task_name: "Livestock Handling & Husbandry",
    cdm_applicable: false,
    h1_title: "Livestock Handling & Husbandry RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for livestock handling and husbandry work, covering animal behaviour and zoonotic disease risks, in 2 minutes.",
    applicable_regs: [
      "Health and Safety at Work etc. Act 1974",
      "Manual Handling Operations 1992",
      "COSHH Regulations 2002",
    ],
    hazards: [
      {
        name: "Crush & Kick Injuries from Livestock",
        control:
          "Use appropriate handling facilities (crushes, races, pens) for any close-contact procedure, and never work alone with cattle or in a confined space with an animal showing aggressive behaviour.",
      },
      {
        name: "Zoonotic Disease Exposure",
        control:
          "Wear gloves for all handling of afterbirth, faeces or sick animals, and follow good hygiene practice (handwashing, covering cuts) to reduce the risk of diseases such as leptospirosis or E. coli.",
      },
      {
        name: "Manual Handling of Feed & Bedding",
        control:
          "Use mechanical handling equipment for heavy feed sacks and bedding bales wherever possible, rather than repeated manual lifting.",
      },
    ],
    required_ppe: [
      "Waterproof/Chemical-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "Coveralls",
      "BS EN 166 Safety Glasses",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover the risk of zoonotic disease from livestock contact?",
    faq_a1:
      "Yes. It includes hygiene and PPE controls specifically aimed at reducing the risk of diseases that can pass from livestock to humans, such as leptospirosis.",
  },
  {
    slug: "agricultural-operative-agricultural-spraying-pesticide-application",
    trade: "Agriculture",
    task_name: "Agricultural Spraying & Pesticide Application",
    cdm_applicable: false,
    h1_title: "Agricultural Spraying & Pesticide Application RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for agricultural spraying and pesticide application, covering chemical exposure and drift controls, in under 2 minutes.",
    applicable_regs: [
      "Control of Pesticides Regulations 1986",
      "COSHH Regulations 2002",
      "Plant Protection Products Regulations",
    ],
    hazards: [
      {
        name: "Exposure to Concentrated & Diluted Pesticides",
        control:
          "Only operatives holding a valid PA1/PA2 (or equivalent) certificate to mix and apply pesticides. Follow the product label and COSHH data sheet at every stage from mixing to disposal.",
      },
      {
        name: "Spray Drift onto Neighbouring Land or Public Areas",
        control:
          "Check wind speed and direction before spraying, and maintain buffer zones from watercourses, public footpaths and neighbouring land in line with the product label.",
      },
      {
        name: "Re-Entry to Treated Areas",
        control:
          "Observe the product's specified re-entry interval and post warning signage before any person or livestock re-enters a treated field.",
      },
    ],
    required_ppe: [
      "Chemical-Resistant Coveralls",
      "Chemical-Resistant Gloves",
      "Respiratory Protective Equipment (as specified by product)",
      "Face Shield/Goggles",
      "Chemical-Resistant Boots",
    ],
    faq_q1: "Does this RAMS cover spray drift onto neighbouring land?",
    faq_a1:
      "Yes. It includes a control requiring wind speed and direction to be checked before spraying and buffer zones to be maintained from watercourses and neighbouring land, in line with the product label.",
  },
  {
    slug: "fx-technician-special-effects-pyrotechnics-on-set",
    trade: "Film & TV Production",
    task_name: "Special Effects & Pyrotechnics on Set",
    cdm_applicable: false,
    h1_title: "Special Effects & Pyrotechnics on Set RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for special effects and pyrotechnics work on a film or TV set, covering fire risk and cast/crew safety, in 2 minutes.",
    applicable_regs: [
      "Explosives Regulations 2014",
      "Health and Safety at Work etc. Act 1974",
      "Management of Health and Safety at Work Regulations 1999",
    ],
    hazards: [
      {
        name: "Fire & Explosion Risk from Pyrotechnic Devices",
        control:
          "Only a qualified pyrotechnician to handle, rig and fire pyrotechnic devices, with a fire extinguisher and trained fire watch present at every firing.",
      },
      {
        name: "Injury to Cast & Crew from Effects",
        control:
          "Establish and brief a clear minimum safe distance for all cast and crew before any effect is fired, with a dedicated effects safety briefing before the first take involving pyrotechnics.",
      },
      {
        name: "Storage & Transport of Pyrotechnic Materials",
        control:
          "Store all pyrotechnic materials in a licensed, secure store away from the set, and transport only the quantity needed for the immediate scene.",
      },
    ],
    required_ppe: [
      "Flame-Resistant Coveralls",
      "BS EN 166 Safety Glasses",
      "Hearing Protection",
      "Flame-Resistant Gloves",
      "Fire-Resistant Footwear",
    ],
    faq_q1: "Does this RAMS cover the qualifications required to handle pyrotechnics?",
    faq_a1:
      "The RAMS sets out the on-set safety controls, but only a qualified, licensed pyrotechnician may handle, rig or fire pyrotechnic devices under the Explosives Regulations 2014 — confirming that qualification remains the production's responsibility.",
  },
  {
    slug: "lighting-technician-studio-lighting-rigging",
    trade: "Film & TV Production",
    task_name: "Studio Lighting & Rigging",
    h1_title: "Studio Lighting & Rigging RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for studio lighting and rigging work, covering working at height and electrical safety, in under 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "Electricity at Work Regulations 1989",
      "LOLER 1998",
    ],
    hazards: [
      {
        name: "Falls While Rigging Lighting from Grids or Trussing",
        control:
          "Use a fall arrest system with suitable anchor points when working aloft on lighting grids or trussing, and only competent, harness-trained riggers to work at height.",
      },
      {
        name: "Electric Shock from Lighting Circuits",
        control:
          "Isolate and lock off circuits before connecting or adjusting fixtures where practical, and use RCD-protected distribution throughout the studio.",
      },
      {
        name: "Falling Lamps, Barn Doors & Rigging Components",
        control:
          "Use secondary safety cables on all rigged lighting fixtures and accessories, and establish a ground-level exclusion zone beneath the rig during focus and adjustment.",
      },
    ],
    required_ppe: [
      "Fall Arrest Harness (BS EN 361)",
      "BS EN 397 Hard Hat",
      "1000V Insulated Gloves",
      "BS EN ISO 20345 Safety Boots",
      "Heat-Resistant Gloves (Lamp Handling)",
    ],
    faq_q1: "Does this RAMS cover the risk of falling lighting equipment onto cast or crew below?",
    faq_a1:
      "Yes. It includes a control requiring secondary safety cables on all rigged fixtures and a ground-level exclusion zone beneath the rig during focus and adjustment.",
  },
  {
    slug: "warehouse-operative-goods-vehicle-loading-yard-operations",
    trade: "Warehouse & Logistics",
    task_name: "Goods Vehicle Loading & Yard Operations",
    cdm_applicable: false,
    h1_title: "Goods Vehicle Loading & Yard Operations RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for goods vehicle loading and yard operations, covering vehicle movement and dock safety, in 2 minutes.",
    applicable_regs: [
      "PUWER 1998",
      "Manual Handling Operations 1992",
      "Health and Safety at Work etc. Act 1974",
    ],
    hazards: [
      {
        name: "Vehicle Movement in the Yard",
        control:
          "Enforce a one-way traffic system and site speed limit where possible, with pedestrian routes clearly marked and segregated from vehicle movement.",
      },
      {
        name: "Trailer Movement During Loading (Drive-Away)",
        control:
          "Use dock levellers with trailer restraint systems or wheel chocks on every vehicle before loading begins, and never load a trailer that isn't confirmed as immobilised.",
      },
      {
        name: "Falls from Loading Bay Edges",
        control:
          "Use edge protection or dock safety gates on any loading bay above ground level, particularly when the bay is unoccupied by a vehicle.",
      },
    ],
    required_ppe: [
      "Hi-Vis Clothing",
      "BS EN ISO 20345 Safety Boots",
      "Work Gloves",
      "Hearing Protection",
      "BS EN 397 Hard Hat",
    ],
    faq_q1: "Does this RAMS cover the risk of a trailer moving away during loading?",
    faq_a1:
      "Yes. It includes a control requiring trailer restraint systems or wheel chocks to be fitted and confirmed before loading begins on any vehicle at the dock.",
  },
  {
    slug: "warehouse-operative-cold-storage-refrigerated-warehouse-operations",
    trade: "Warehouse & Logistics",
    task_name: "Cold Storage & Refrigerated Warehouse Operations",
    cdm_applicable: false,
    h1_title: "Cold Storage & Refrigerated Warehouse Operations RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for cold storage and refrigerated warehouse operations, covering cold stress and refrigerant risks, in under 2 minutes.",
    applicable_regs: [
      "Management of Health and Safety at Work Regulations 1999",
      "PUWER 1998",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Cold Stress from Prolonged Exposure",
        control:
          "Limit continuous time in sub-zero or chilled areas in line with a documented cold-work schedule, with warm-up breaks in a heated area at regular intervals.",
      },
      {
        name: "Refrigerant Gas Leak in Plant Areas",
        control:
          "Fit and maintain gas detection in refrigeration plant rooms, and evacuate immediately and ventilate the area if an alarm is triggered, never re-entering until confirmed safe.",
      },
      {
        name: "Slips on Ice or Condensation Build-Up",
        control:
          "Inspect floors regularly for ice or condensation build-up at door thresholds and around plant, and grit or clear as needed.",
      },
    ],
    required_ppe: [
      "Insulated Cold-Store Clothing",
      "Thermal Gloves",
      "Non-Slip Insulated Footwear",
      "BS EN 166 Safety Glasses",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover cold stress risks from working in sub-zero storage?",
    faq_a1:
      "Yes. It includes a control requiring a documented cold-work schedule with limited continuous exposure time and warm-up breaks in a heated area.",
  },
  {
    slug: "mrf-operative-recycling-sorting-materials-recovery-facility",
    trade: "Waste & Recycling",
    task_name: "Recycling Sorting & Materials Recovery Facility (MRF) Operations",
    cdm_applicable: false,
    h1_title: "Materials Recovery Facility (MRF) Operations RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for recycling sorting and materials recovery facility operations, covering conveyor and sharps hazards, in 2 minutes.",
    applicable_regs: [
      "PUWER 1998",
      "Manual Handling Operations 1992",
      "Provision and Use of Work Equipment Regulations 1998",
    ],
    hazards: [
      {
        name: "Entanglement in Conveyors & Sorting Machinery",
        control:
          "Never reach into or clear a blocked conveyor while it is running. Isolate and lock off machinery before any clearance or maintenance work.",
      },
      {
        name: "Sharps & Contaminated Material Exposure",
        control:
          "Wear cut-resistant gloves at all times on the sorting line, and report any hazardous or contaminated items found (needles, chemicals) via the site's reporting procedure rather than handling directly.",
      },
      {
        name: "Manual Handling on the Sorting Line",
        control:
          "Rotate operatives regularly between sorting tasks to reduce repetitive strain, and use mechanical aids for baled or bulk material movement.",
      },
    ],
    required_ppe: [
      "Cut-Resistant Gloves",
      "BS EN 166 Safety Glasses",
      "FFP2 Dust Mask",
      "Hi-Vis Clothing",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover the risk of entanglement in sorting line machinery?",
    faq_a1:
      "Yes. It includes a control prohibiting reaching into or clearing a running conveyor, requiring full isolation and lock-off before any clearance or maintenance work.",
  },
  {
    slug: "waste-operative-hazardous-waste-handling-transport",
    trade: "Waste & Recycling",
    task_name: "Hazardous Waste Handling & Transport",
    cdm_applicable: false,
    h1_title: "Hazardous Waste Handling & Transport RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for hazardous waste handling and transport, covering chemical exposure and documentation controls, in under 2 minutes.",
    applicable_regs: [
      "Hazardous Waste (England and Wales) Regulations 2005",
      "COSHH Regulations 2002",
      "Carriage of Dangerous Goods Regulations",
    ],
    hazards: [
      {
        name: "Exposure to Unknown or Mixed Hazardous Waste",
        control:
          "Identify and classify waste before handling using available data sheets or a competent assessment, and never mix incompatible waste streams together.",
      },
      {
        name: "Spills During Handling or Transport",
        control:
          "Use compliant, correctly labelled containers for the specific waste type, and keep spill kits available at the point of loading and on the transporting vehicle.",
      },
      {
        name: "Incorrect Documentation & Consignment Notes",
        control:
          "Complete a consignment note for every movement of hazardous waste before it leaves site, confirming the receiving site is licensed to accept that waste type.",
      },
    ],
    required_ppe: [
      "Chemical-Resistant Gloves",
      "Chemical-Resistant Coveralls",
      "BS EN 166 Safety Glasses",
      "Respiratory Protective Equipment (as specified by waste type)",
      "Chemical-Resistant Boots",
    ],
    faq_q1: "Does this RAMS cover the consignment note requirements for hazardous waste?",
    faq_a1:
      "Yes. It includes a control requiring a consignment note to be completed for every movement of hazardous waste, confirming the receiving site is licensed to accept that specific waste type.",
  },
  {
    slug: "utility-engineer-water-utility-network-maintenance",
    trade: "Utilities & Telecoms",
    task_name: "Water Utility Network Maintenance",
    h1_title: "Water Utility Network Maintenance RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for water utility network maintenance work, covering excavation and confined space entry, in 2 minutes.",
    applicable_regs: [
      "Confined Spaces Regulations 1997",
      "CDM Regulations 2015",
      "New Roads and Street Works Act 1991",
    ],
    hazards: [
      {
        name: "Confined Space Entry (Chambers, Manholes)",
        control:
          "Test the atmosphere before entry into any chamber or manhole and use a permit-to-work system with a trained top-man in constant communication.",
      },
      {
        name: "Striking Buried Services During Excavation",
        control:
          "Conduct a CAT & Genny scan and consult utility drawings before excavating, hand-digging trial holes near suspected service routes.",
      },
      {
        name: "Working in the Public Highway",
        control:
          "Set out signage, cones and barriers in line with the New Roads and Street Works Act 1991 (Chapter 8) before starting any work in or near the carriageway or footway.",
      },
    ],
    required_ppe: [
      "Gas Detector",
      "Fall Arrest/Confined Space Harness",
      "Hi-Vis Clothing",
      "BS EN ISO 20345 Safety Boots",
      "Waterproof Gloves",
    ],
    faq_q1: "Does this RAMS cover working in the public highway near live traffic?",
    faq_a1:
      "Yes. It includes a control requiring signage, cones and barriers to be set out in line with Chapter 8 of the New Roads and Street Works Act 1991 before work begins in or near the carriageway.",
  },
  {
    slug: "utility-engineer-street-lighting-installation-maintenance",
    trade: "Utilities & Telecoms",
    task_name: "Street Lighting Installation & Maintenance",
    h1_title: "Street Lighting Installation & Maintenance RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for street lighting installation and maintenance, covering working at height and traffic management, in under 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "Work at Height Regulations 2005",
      "New Roads and Street Works Act 1991",
    ],
    hazards: [
      {
        name: "Falls from Elevated Platforms When Working on Columns",
        control:
          "Use a properly positioned MEWP for all column-top work, with the platform's safe working load and outreach never exceeded.",
      },
      {
        name: "Electric Shock During Column Wiring",
        control:
          "Isolate and lock off the supply at the feeder pillar before opening any column door or working on the internal wiring, and test dead before touching conductors.",
      },
      {
        name: "Working Adjacent to Live Traffic",
        control:
          "Set out signage, cones and barriers in line with Chapter 8 of the New Roads and Street Works Act 1991, and position the MEWP to keep the work area clear of the live carriageway where possible.",
      },
    ],
    required_ppe: [
      "Fall Arrest Harness (BS EN 361)",
      "1000V Insulated Gloves",
      "Hi-Vis Clothing (Class 3)",
      "BS EN 397 Hard Hat",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover traffic management for roadside column work?",
    faq_a1:
      "Yes. It includes a control requiring signage, cones and barriers to be set out in line with Chapter 8 of the New Roads and Street Works Act 1991 before work begins adjacent to live traffic.",
  },
];

export function getIndustryBySlug(slug) {
  return industries.find((i) => i.slug === slug) || null;
}
