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
];

export function getIndustryBySlug(slug) {
  return industries.find((i) => i.slug === slug) || null;
}
