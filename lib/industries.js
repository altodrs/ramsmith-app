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
      {
        name: "Manual Handling of Truss & Rigging Components",
        control:
          "Use mechanical lifting aids (chain hoists, ground support systems) for heavy truss sections, team-lifting where mechanical aids aren't practical.",
      },
      {
        name: "Weather Conditions Affecting Outdoor Rigging",
        control:
          "Monitor wind speed against the structure's rated limits throughout the build and event, with a stop-work and de-rig trigger if conditions are exceeded.",
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
      {
        name: "Ground Conditions & Anchor Point Suitability",
        control:
          "Assess ground conditions before installing ground anchors or ballast, using an alternative anchoring method where ground bearing capacity is insufficient.",
      },
      {
        name: "Working at Height During Roof Panel Fitting",
        control:
          "Use appropriate access equipment (towers, MEWPs) for fitting roof panels above 2m, rather than freestanding ladders.",
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
      {
        name: "Generator Fuel Handling & Fire Risk",
        control:
          "Store and handle generator fuel away from ignition sources, refuelling only when the generator is switched off and cool.",
      },
      {
        name: "Load Assessment & Circuit Overload",
        control:
          "Calculate the total connected load against the supply/generator capacity before energising, avoiding overloading circuits during peak demand.",
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
      {
        name: "Adverse Weather Affecting High-Level Access",
        control:
          "Monitor wind speed and weather forecasts throughout the day, and suspend rope access or cradle work if conditions exceed safe operating limits.",
      },
      {
        name: "Manual Handling of Water-Fed Pole Equipment",
        control:
          "Use correct lifting and carrying technique for water-fed pole systems and backpacks, particularly when working for extended periods.",
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
      {
        name: "Working in Occupied Commercial Premises",
        control:
          "Agree working hours and access with the client to minimise disruption, and barrier off areas being cleaned from staff and visitors.",
      },
      {
        name: "Electrical Safety of Cleaning Equipment",
        control:
          "Check cleaning equipment (floor scrubbers, extraction machines) has a current PAT test and inspect cables for damage before use.",
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
      {
        name: "Dust Explosion Risk from Grain Dust",
        control:
          "Control ignition sources and grain dust accumulation in line with DSEAR requirements, using appropriately rated electrical equipment in dusty areas.",
      },
      {
        name: "Structural Condition of the Silo/Grain Store",
        control:
          "Inspect the structure for signs of wall bulging or instability before entry, particularly in older or overloaded grain stores.",
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
      {
        name: "Livestock & Public Interaction with Moving Machinery",
        control:
          "Maintain a safe distance between operating machinery and livestock, members of the public or other workers on the farm.",
      },
      {
        name: "Noise Exposure from Machinery Operation",
        control:
          "Wear hearing protection during prolonged operation of tractors and farm machinery, particularly in enclosed cab environments with poor sound insulation.",
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
      {
        name: "Vehicle Movement on the Filming Location",
        control:
          "Use a banksman for reversing vehicles and generator trucks on location, segregating pedestrian routes from vehicle movement.",
      },
      {
        name: "Working in Confined or Historic Locations",
        control:
          "Assess access, egress and any listed building constraints before positioning equipment or structures at heritage or confined filming locations.",
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
      {
        name: "Battery Handling & Fire Risk (LiPo Batteries)",
        control:
          "Store, charge and transport lithium polymer batteries in a fire-resistant bag or container, and inspect for damage or swelling before use.",
      },
      {
        name: "Weather Conditions Affecting Flight Safety",
        control:
          "Check wind speed, precipitation and visibility against the aircraft's rated operating limits before every flight.",
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
      {
        name: "Working Around Live Warehouse Operations",
        control:
          "Segregate the installation area from live picking and MHE traffic routes using barriers, coordinating with warehouse management.",
      },
      {
        name: "Floor Loading & Anchor Fixing",
        control:
          "Confirm floor loading capacity and use anchors rated for the racking design before fixing base plates.",
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
      {
        name: "Racking & Overhead Obstruction Collision",
        control:
          "Check mast height clearance against racking and overhead obstructions before raising loads, particularly in low-headroom areas.",
      },
      {
        name: "Refuelling & Battery Charging Hazards",
        control:
          "Refuel or change gas cylinders/batteries only in designated, ventilated areas away from ignition sources.",
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
      {
        name: "Skip Overloading & Load Stability",
        control:
          "Do not overload skips beyond their rated capacity, and secure or sheet loose loads before transport to prevent material falling from the vehicle.",
      },
      {
        name: "Working Near Overhead Power Lines During Lifting",
        control:
          "Identify and maintain safe clearance from overhead power lines before raising or tipping skips near them.",
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
      {
        name: "Adverse Weather During Mast/Tower Work",
        control:
          "Monitor wind speed and weather forecasts throughout the day, and stop climbing or working at height if conditions exceed safe limits.",
      },
      {
        name: "Rescue & Emergency Descent Planning",
        control:
          "Confirm a rescue plan and equipment is in place before any climb, ensuring a trained second person is present at ground level.",
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
      {
        name: "Manual Handling of Extinguishers & Fire Equipment",
        control:
          "Use correct lifting technique when carrying and repositioning extinguishers and fire equipment around the building.",
      },
      {
        name: "Recording Servicing & Compliance Records",
        control:
          "Complete and leave a service record/tag on each item serviced, updating the building's fire safety log in line with BS 5306.",
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
      {
        name: "Manual Handling of Grounds Equipment & Materials",
        control:
          "Use correct lifting technique and mechanical aids where possible for heavy mowers, equipment and bagged materials.",
      },
      {
        name: "Working Near Water Features & Ponds",
        control:
          "Assess the risk of falling into water features before working near pond or lake edges, using appropriate barriers or supervision.",
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
      {
        name: "Handling Aggressive or Distressed Animals",
        control:
          "Assess animal behaviour before approaching, and never handle an aggressive or distressed animal alone without appropriate facilities.",
      },
      {
        name: "Slips & Trips in Livestock Areas",
        control:
          "Keep walkways and handling areas clear of slurry, loose bedding and equipment to reduce slip and trip hazards.",
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
      {
        name: "Tank Mixing & Filling Hazards",
        control:
          "Use a closed transfer system or bunded filling area where available, and never leave a filling tank unattended.",
      },
      {
        name: "Sprayer/Vehicle Operation on Uneven Ground",
        control:
          "Assess field conditions and gradient before operating the sprayer, adjusting speed and load to maintain stability.",
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
      {
        name: "Environmental & Smoke/Fume Effects",
        control:
          "Use effects materials in line with COSHH data sheets, ensuring adequate ventilation and monitoring air quality where smoke or haze effects are used in enclosed sets.",
      },
      {
        name: "Post-Effect Area Clearance & Debris",
        control:
          "Clear and inspect the area for unexploded or hazardous debris after each effect before cast and crew re-enter.",
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
      {
        name: "Heat Hazards from Lighting Fixtures",
        control:
          "Allow lamps and fixtures to cool before handling, and maintain safe clearance between hot lights and combustible set materials.",
      },
      {
        name: "Manual Handling of Lighting Rigs & Stands",
        control:
          "Use correct lifting technique and secure lighting stands and rigs against tipping, particularly on uneven studio floors.",
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
      {
        name: "Manual Handling During Loading & Unloading",
        control:
          "Use mechanical handling aids (pallet trucks, conveyors) for loading and unloading goods, avoiding manual lifting of heavy or awkward items.",
      },
      {
        name: "Weather Conditions Affecting Yard Safety",
        control:
          "Grit or clear yard surfaces in icy conditions, and reduce vehicle speed limits in poor visibility or heavy rain.",
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
      {
        name: "MHE Operation in Cold Storage Areas",
        control:
          "Confirm MHE is rated for cold storage use, and check visibility and windscreen condition regularly as condensation and frost can build up quickly.",
      },
      {
        name: "Manual Handling in Restricted PPE & Cold Conditions",
        control:
          "Account for reduced dexterity and grip when handling loads in cold-store gloves and clothing, using mechanical aids wherever possible.",
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
      {
        name: "Fire Risk from Batteries & Flammable Materials in Waste Streams",
        control:
          "Identify and safely remove damaged batteries and flammable items from the waste stream, following the site's fire prevention procedure.",
      },
      {
        name: "Noise & Dust Exposure on the Sorting Line",
        control:
          "Wear hearing protection and an FFP2 dust mask on the sorting line, in line with the site's noise and dust assessments.",
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
      {
        name: "Manual Handling of Hazardous Waste Containers",
        control:
          "Use mechanical lifting aids for heavy or bulky hazardous waste containers, avoiding manual handling of drums exceeding safe lifting limits.",
      },
      {
        name: "Vehicle Loading & Segregation of Incompatible Waste",
        control:
          "Segregate incompatible waste types during vehicle loading in line with the Carriage of Dangerous Goods Regulations, securing containers against movement in transit.",
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
      {
        name: "Waterborne Disease Exposure (Sewage/Contaminated Water)",
        control:
          "Wear appropriate waterproof PPE and follow hygiene procedures when working with contaminated water or sewage, covering cuts and washing hands before eating or drinking.",
      },
      {
        name: "Manual Handling of Valves, Fittings & Equipment",
        control:
          "Use mechanical lifting aids for heavy valves, fittings and pumps, team-lifting where mechanical aids aren't practical.",
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
      {
        name: "Column Structural Condition & Corrosion",
        control:
          "Inspect the column base for corrosion or structural defects before climbing or working on it, particularly on older columns near the ground line.",
      },
      {
        name: "Working at Night or in Low Light",
        control:
          "Use adequate task lighting and high-visibility clothing when working during darkness or low-light conditions on street lighting circuits.",
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
  {
    slug: "rail-engineer-trackside-maintenance-possession-work",
    trade: "Rail",
    task_name: "Trackside Maintenance & Possession Work",
    cdm_applicable: false,
    h1_title: "Trackside Maintenance & Possession Work RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for trackside maintenance and possession work, covering line safety and access control, in 2 minutes.",
    applicable_regs: [
      "Railways and Other Guided Transport Systems (Safety) Regulations 2006 (ROGS)",
      "Network Rail Standards (Rule Book)",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Being Struck by Rail Traffic",
        control:
          "Work only within a properly authorised possession or under a valid Safe System of Work, with a competent Controller of Site Safety (COSS) in place before any trackside access.",
      },
      {
        name: "Trips & Falls on Ballast & Trackside Terrain",
        control:
          "Use appropriate footwear for uneven ballast, maintain awareness of the walking route, and use lookouts/warning systems as specified in the Safe System of Work.",
      },
      {
        name: "Manual Handling of Track Components & Equipment",
        control:
          "Use mechanical lifting aids for rail sections and sleepers wherever possible, and team-lift smaller components in line with site manual handling assessments.",
      },
      {
        name: "Adverse Weather on the Trackside",
        control:
          "Monitor weather conditions throughout the possession, adjusting the safe system of work for ice, heavy rain or high winds affecting the trackside.",
      },
      {
        name: "Noise Exposure from Passing Trains & Machinery",
        control:
          "Wear hearing protection during possession work near operational lines and when using track machinery.",
      },
    ],
    required_ppe: [
      "Hi-Vis Clothing (Orange, Network Rail Spec)",
      "BS EN 397 Hard Hat",
      "BS EN ISO 20345 Safety Boots",
      "Hearing Protection",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover the requirement for a Safe System of Work and COSS?",
    faq_a1:
      "Yes. It includes a control requiring all trackside access to take place only within a properly authorised possession or under a valid Safe System of Work with a competent COSS in place.",
  },
  {
    slug: "rail-engineer-rail-signalling-overhead-line-equipment-work",
    trade: "Rail",
    task_name: "Rail Signalling & Overhead Line Equipment (OLE) Work",
    cdm_applicable: false,
    h1_title: "Rail Signalling & OLE Work RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for rail signalling and overhead line equipment work, covering electrical isolation and height access, in under 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "Railways and Other Guided Transport Systems (Safety) Regulations 2006 (ROGS)",
      "Work at Height Regulations 2005",
    ],
    hazards: [
      {
        name: "Electric Shock from Overhead Line Equipment",
        control:
          "Never approach OLE within the specified safe clearance distance unless it has been formally isolated and earthed by an authorised person, confirmed in writing before work begins.",
      },
      {
        name: "Falls During Signal Gantry or OLE Structure Access",
        control:
          "Use a fall arrest system with suitable anchor points when working on signal gantries or OLE structures, with only trained and competent operatives permitted to climb.",
      },
      {
        name: "Being Struck by Rail Traffic",
        control:
          "Work only within a properly authorised possession or under a valid Safe System of Work, with a competent COSS in place before any trackside access.",
      },
      {
        name: "Manual Handling of Signalling & OLE Equipment",
        control:
          "Use mechanical lifting aids for heavy signalling equipment and OLE components, team-lifting where mechanical aids aren't practical.",
      },
      {
        name: "Testing & Commissioning of Signalling Systems",
        control:
          "Follow the approved testing and commissioning procedure before a signalling system is returned to service, confirming correct operation with the signaller.",
      },
    ],
    required_ppe: [
      "Fall Arrest Harness (BS EN 361)",
      "1000V Insulated Gloves",
      "Hi-Vis Clothing (Orange, Network Rail Spec)",
      "BS EN 397 Hard Hat",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover the isolation requirements for working near overhead line equipment?",
    faq_a1:
      "Yes. It includes a control prohibiting approach within the safe clearance distance unless OLE has been formally isolated and earthed by an authorised person, confirmed in writing.",
  },
  {
    slug: "security-officer-static-site-security-key-holding",
    trade: "Security Services",
    task_name: "Static Site Security & Key Holding",
    cdm_applicable: false,
    h1_title: "Static Site Security & Key Holding RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for static site security and key holding duties, covering lone working and site access risks, in 2 minutes.",
    applicable_regs: [
      "Private Security Industry Act 2001",
      "Management of Health and Safety at Work Regulations 1999",
      "Health and Safety at Work etc. Act 1974",
    ],
    hazards: [
      {
        name: "Lone Working During Unsociable Hours",
        control:
          "Follow a lone worker check-in procedure at set intervals throughout the shift, with a clear escalation process if a check-in is missed.",
      },
      {
        name: "Confrontation with Intruders or Trespassers",
        control:
          "Never physically engage or attempt to detain an intruder; observe, report and contact police in line with the site's incident procedure.",
      },
      {
        name: "Slips, Trips & Falls on Patrol Routes",
        control:
          "Use adequate torches/lighting on outdoor patrol routes at night, and report any trip hazards or poor lighting on the patrol route to site management.",
      },
      {
        name: "Handling & Safeguarding of Site Keys",
        control:
          "Follow the site's key control procedure at all times, logging key issue and return and never leaving keys unattended.",
      },
      {
        name: "Adverse Weather During Outdoor Patrols",
        control:
          "Wear appropriate weatherproof clothing and adjust patrol routes in severe weather, prioritising personal safety over strict route adherence.",
      },
    ],
    required_ppe: [
      "Hi-Vis Clothing",
      "Safety Boots",
      "Torch/Head Torch",
      "Weatherproof Clothing",
      "Body-Worn Camera (where provided)",
    ],
    faq_q1: "Does this RAMS cover lone working during night shifts?",
    faq_a1:
      "Yes. It includes a lone worker check-in control with a defined escalation process, which is particularly relevant for static security roles worked alone during unsociable hours.",
  },
  {
    slug: "security-officer-mobile-patrol-alarm-response",
    trade: "Security Services",
    task_name: "Mobile Patrol & Alarm Response",
    cdm_applicable: false,
    h1_title: "Mobile Patrol & Alarm Response RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for mobile patrol and alarm response work, covering driving safety and lone working risks, in under 2 minutes.",
    applicable_regs: [
      "Road Traffic Act 1988",
      "Private Security Industry Act 2001",
      "Management of Health and Safety at Work Regulations 1999",
    ],
    hazards: [
      {
        name: "Road Traffic Incidents Between Sites",
        control:
          "Plan realistic response routes and times that don't encourage speeding, and ensure the vehicle is roadworthy with a current MOT and service history.",
      },
      {
        name: "Lone Working When Responding to Alarm Activations",
        control:
          "Follow a check-in procedure before and after attending an alarm call, and never enter a building alone if signs of forced entry are present — wait for police attendance.",
      },
      {
        name: "Manual Handling & Access Risks at Unfamiliar Sites",
        control:
          "Assess access routes and lighting before entering an unfamiliar site at night, and use a torch to check for trip hazards before proceeding.",
      },
      {
        name: "Fatigue During Extended or Night Shift Patrols",
        control:
          "Monitor driving hours and take scheduled breaks during extended or night shift patrol rounds to manage fatigue-related risk.",
      },
      {
        name: "Vehicle Security & Equipment Handling",
        control:
          "Secure patrol vehicle equipment (torches, radios) correctly between call-outs, and check the vehicle is roadworthy before each shift.",
      },
    ],
    required_ppe: [
      "Hi-Vis Clothing",
      "Safety Boots",
      "Torch/Head Torch",
      "Weatherproof Clothing",
      "First Aid Kit (Vehicle)",
    ],
    faq_q1: "Does this RAMS cover the risk of entering a building where forced entry has occurred?",
    faq_a1:
      "Yes. It includes a control against lone entry to a building showing signs of forced entry, requiring the operative to wait for police attendance instead.",
  },
  {
    slug: "commercial-diver-commercial-diving-operations",
    trade: "Marine & Diving",
    task_name: "Commercial Diving Operations",
    cdm_applicable: false,
    h1_title: "Commercial Diving Operations RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for commercial diving operations, covering decompression and surface support controls, in 2 minutes.",
    applicable_regs: [
      "Diving at Work Regulations 1997",
      "HSE Approved Code of Practice L104",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Decompression Illness",
        control:
          "Plan and follow appropriate decompression procedures for the dive profile, with a diving supervisor monitoring dive time and depth throughout.",
      },
      {
        name: "Loss of Air Supply or Equipment Failure",
        control:
          "Conduct full pre-dive equipment checks, and maintain a stand-by diver ready to assist within the time required for the dive's risk profile.",
      },
      {
        name: "Entanglement or Entrapment Underwater",
        control:
          "Assess the dive site for entanglement hazards (lines, nets, structures) before entry, and carry a cutting tool suitable for the diver's equipment.",
      },
      {
        name: "Cold Water & Hypothermia Risk",
        control:
          "Use appropriate thermal protection for water temperature and dive duration, monitoring divers for signs of cold stress.",
      },
      {
        name: "Surface Vessel & Boat Traffic Hazards",
        control:
          "Display dive flags/signals and maintain a surface lookout to warn other vessels of diving operations in progress.",
      },
    ],
    required_ppe: [
      "Commercial Diving Suit & Helmet",
      "Surface-Supplied or SCUBA Breathing Apparatus",
      "Diving Knife/Cutting Tool",
      "Weight System",
      "Communication Equipment",
    ],
    faq_q1: "Does this RAMS cover the requirement for a diving supervisor and stand-by diver?",
    faq_a1:
      "Yes. It includes controls requiring a diving supervisor to monitor the dive and a stand-by diver ready to assist, in line with the Diving at Work Regulations 1997 and HSE ACOP L104.",
  },
  {
    slug: "marine-technician-marina-pontoon-maintenance",
    trade: "Marine & Diving",
    task_name: "Marina & Pontoon Maintenance",
    cdm_applicable: false,
    h1_title: "Marina & Pontoon Maintenance RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for marina and pontoon maintenance work, covering water safety and slip hazards, in under 2 minutes.",
    applicable_regs: [
      "Management of Health and Safety at Work Regulations 1999",
      "Manual Handling Operations 1992",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Falling Into Water from Pontoons or Jetties",
        control:
          "Wear a buoyancy aid when working near the water's edge, and ensure life rings and rescue equipment are accessible at the work location throughout.",
      },
      {
        name: "Slips on Wet & Algae-Covered Surfaces",
        control:
          "Use non-slip footwear appropriate for wet decking, and clean or treat algae build-up on walkways regularly to reduce slip risk.",
      },
      {
        name: "Manual Handling of Pontoon Sections & Fixings",
        control:
          "Team-lift pontoon sections and heavy fixings, and use a small crane or hoist for larger structural components where available.",
      },
      {
        name: "Working Near Boat Traffic & Moorings",
        control:
          "Maintain awareness of vessel movements in the marina and use appropriate signage or barriers around the work area.",
      },
      {
        name: "Electrical Safety of Marina Power/Lighting Systems",
        control:
          "Isolate and lock off marina electrical supplies before working on pontoon-mounted power or lighting systems, testing dead before connection.",
      },
    ],
    required_ppe: [
      "Buoyancy Aid",
      "Non-Slip Footwear",
      "BS EN 166 Safety Glasses",
      "Work Gloves",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover the risk of falling into the water while working on pontoons?",
    faq_a1:
      "Yes. It includes a control requiring a buoyancy aid when working near the water's edge, with life rings and rescue equipment kept accessible throughout.",
  },
  {
    slug: "leisure-technician-gym-fitness-equipment-installation",
    trade: "Leisure & Sports",
    task_name: "Gym & Fitness Equipment Installation",
    cdm_applicable: false,
    h1_title: "Gym & Fitness Equipment Installation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for gym and fitness equipment installation, covering manual handling and assembly safety, in 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "PUWER 1998",
      "Provision and Use of Work Equipment Regulations 1998",
    ],
    hazards: [
      {
        name: "Manual Handling of Heavy Equipment (Weights, Machines)",
        control:
          "Use mechanical lifting aids or trolleys for heavy plates and machine frames, and team-lift where mechanical aids aren't practical.",
      },
      {
        name: "Incorrect Assembly Leading to Equipment Failure",
        control:
          "Assemble strictly to the manufacturer's instructions and torque specifications, particularly on cable machines and any equipment with moving parts under load.",
      },
      {
        name: "Trapped Fingers & Crush Injuries During Assembly",
        control:
          "Keep hands clear of pinch points when fitting cable pulleys, weight stacks and adjustable components, and use appropriate tools rather than hands to align heavy parts.",
      },
      {
        name: "Working in an Occupied/Operating Gym",
        control:
          "Barrier off the installation area from gym members and staff while equipment is assembled and commissioned.",
      },
      {
        name: "Power Tool Use During Assembly",
        control:
          "Use PAT-tested power tools with correct guards fitted, ensuring operatives are trained on each tool used during assembly.",
      },
    ],
    required_ppe: [
      "Cut-Resistant Gloves",
      "BS EN 166 Safety Glasses",
      "BS EN ISO 20345 Safety Boots",
      "Knee Pads",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover the risk of incorrect assembly on cable and weight-stack machines?",
    faq_a1:
      "Yes. It includes a control requiring assembly strictly to the manufacturer's instructions and torque specifications, particularly for equipment with moving parts under load.",
  },
  {
    slug: "pool-technician-swimming-pool-plant-room-maintenance",
    trade: "Leisure & Sports",
    task_name: "Swimming Pool Plant Room Maintenance",
    cdm_applicable: false,
    h1_title: "Swimming Pool Plant Room Maintenance RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for swimming pool plant room maintenance, covering chemical handling and confined space risks, in under 2 minutes.",
    applicable_regs: [
      "COSHH Regulations 2002",
      "Confined Spaces Regulations 1997",
      "Control of Substances Hazardous to Health",
    ],
    hazards: [
      {
        name: "Exposure to Chlorine & Pool Chemicals",
        control:
          "Follow the COSHH data sheet for all pool chemicals, never mix chlorine-based and acid-based products, and ensure adequate plant room ventilation before and during work.",
      },
      {
        name: "Confined Space Risks in Plant Rooms & Chemical Stores",
        control:
          "Assess ventilation before entry to below-ground plant rooms or chemical stores, and never work alone in a confined plant room without a means of raising the alarm.",
      },
      {
        name: "Manual Handling of Chemical Drums & Filtration Media",
        control:
          "Use a trolley for chemical drums and bagged filtration media, and follow correct lifting technique to avoid back injury.",
      },
      {
        name: "Electrical Safety Near Pool Plant & Water",
        control:
          "Isolate and lock off electrical supplies before working on pumps and plant, following BS 7671's special locations requirements for swimming pool areas.",
      },
      {
        name: "Working While the Pool Remains in Use",
        control:
          "Coordinate plant room work with pool opening hours where possible, and notify lifeguards/pool staff before any work affecting water quality or circulation.",
      },
    ],
    required_ppe: [
      "Chemical-Resistant Gloves",
      "Face Shield/Goggles",
      "Respiratory Protective Equipment (Chlorine-Rated)",
      "Chemical-Resistant Apron",
      "Safety Boots",
    ],
    faq_q1: "Does this RAMS cover the risk of mixing incompatible pool chemicals?",
    faq_a1:
      "Yes. It includes a control explicitly prohibiting the mixing of chlorine-based and acid-based products, which can produce toxic gas if combined.",
  },
  {
    slug: "rigger-festival-site-build-ground-preparation",
    trade: "Events & Entertainment",
    task_name: "Festival Site Build & Ground Preparation",
    h1_title: "Festival Site Build & Ground Preparation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for festival site build and ground preparation work, covering vehicle movement and ground condition hazards, in 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Manual Handling Operations 1992",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Vehicle & Plant Movement During Build",
        control:
          "Segregate pedestrian routes from vehicle and plant movement with clear signage, and use a banksman for reversing plant on the build site.",
      },
      {
        name: "Ground Condition Hazards (Uneven Terrain, Mud)",
        control:
          "Assess and, where needed, trackway or matting over soft ground before heavy loads or frequent vehicle movement, particularly after wet weather.",
      },
      {
        name: "Manual Handling of Fencing, Trackway & Structure Components",
        control:
          "Team-lift heavy fencing panels and trackway sections, and use mechanical handling for palletised materials wherever possible.",
      },
      {
        name: "Working Near Underground Services on Festival Sites",
        control:
          "Conduct a CAT & Genny scan and consult utility drawings before excavating for ground anchors, cabling trenches or structure foundations.",
      },
      {
        name: "Weather Conditions During Site Build",
        control:
          "Monitor weather forecasts throughout the build, adjusting the work programme for high winds, heavy rain or lightning risk.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Hi-Vis Clothing",
      "BS EN ISO 20345 Safety Boots",
      "Work Gloves",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover vehicle and plant movement during the site build phase?",
    faq_a1:
      "Yes. It includes a control requiring segregated pedestrian and vehicle routes with clear signage, and a banksman for all reversing plant movements.",
  },
  {
    slug: "care-worker-moving-handling-in-care-settings",
    trade: "Healthcare Support Services",
    task_name: "Moving & Handling in Care Settings",
    cdm_applicable: false,
    h1_title: "Moving & Handling in Care Settings RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for moving and handling in care settings, covering hoist use and resident/patient safety, in under 2 minutes.",
    applicable_regs: [
      "Manual Handling Operations 1992",
      "Health and Safety at Work etc. Act 1974",
      "Lifting Operations and Lifting Equipment Regulations 1998 (LOLER)",
    ],
    hazards: [
      {
        name: "Injury from Incorrect Moving & Handling Technique",
        control:
          "Complete a person-specific moving and handling plan before any transfer, and only use techniques and equipment (hoists, slings) that staff are trained and assessed as competent to use.",
      },
      {
        name: "Hoist or Sling Equipment Failure",
        control:
          "Check hoists and slings are within their LOLER inspection date and visually inspect for damage before every use, taking any suspect equipment out of service immediately.",
      },
      {
        name: "Resident/Patient Falls During Transfer",
        control:
          "Assess the individual's mobility and cognitive state before each transfer, and never attempt a transfer alone if the care plan specifies two carers are required.",
      },
      {
        name: "Manual Handling in Confined Domestic/Bedroom Spaces",
        control:
          "Assess the available space around the bed or chair before a transfer, repositioning furniture where needed to allow safe hoist or manual handling technique.",
      },
      {
        name: "Challenging Behaviour During Personal Care",
        control:
          "Follow the individual's care plan and behaviour support strategy, and never carry out a procedure alone if the care plan indicates a risk of challenging behaviour.",
      },
    ],
    required_ppe: [
      "Nitrile Gloves",
      "Non-Slip Footwear",
      "Apron/Tunic",
      "Knee Pads",
      "Manual Handling Belt (where assessed as needed)",
    ],
    faq_q1: "Does this RAMS cover the LOLER inspection requirements for hoists and slings?",
    faq_a1:
      "Yes. It includes a control requiring hoists and slings to be within their LOLER inspection date and visually checked before every use, with suspect equipment taken out of service immediately.",
  },
  {
    slug: "facilities-officer-school-nursery-facilities-maintenance",
    trade: "Education",
    task_name: "School & Nursery Facilities Maintenance",
    cdm_applicable: false,
    h1_title: "School & Nursery Facilities Maintenance RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for school and nursery facilities maintenance work, covering safeguarding and occupied-site safety, in 2 minutes.",
    applicable_regs: [
      "Health and Safety at Work etc. Act 1974",
      "Management of Health and Safety at Work Regulations 1999",
      "Working Together to Safeguard Children (DfE guidance)",
    ],
    hazards: [
      {
        name: "Working Around Children During Occupied Hours",
        control:
          "Schedule higher-risk tasks (power tools, working at height) outside of pupil contact hours where possible, and barrier off any work area accessible to children during the school day.",
      },
      {
        name: "Safeguarding & Unsupervised Access to Vulnerable Groups",
        control:
          "All operatives to hold a valid DBS check before working unsupervised on site, and sign in/out via the school's visitor procedure at all times.",
      },
      {
        name: "Manual Handling & Access Equipment in Occupied Corridors",
        control:
          "Use warning signage and a spotter when moving equipment or using access towers in corridors during the school day.",
      },
      {
        name: "Chemical & COSHH Storage Around Children",
        control:
          "Store cleaning chemicals and maintenance materials securely away from areas accessible to children at all times.",
      },
      {
        name: "Working at Height in Occupied Classrooms/Halls",
        control:
          "Use appropriate access equipment and barrier off the area beneath, scheduling height work outside of occupied class times where possible.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "Safety Boots",
      "Hi-Vis Clothing",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover safeguarding requirements for working on a school site?",
    faq_a1:
      "Yes. It includes a control requiring a valid DBS check before any unsupervised work and sign-in via the school's visitor procedure, reflecting standard safeguarding practice on education sites.",
  },
  {
    slug: "kitchen-porter-commercial-kitchen-extraction-cleaning",
    trade: "Hospitality",
    task_name: "Commercial Kitchen Extraction Cleaning",
    cdm_applicable: false,
    h1_title: "Commercial Kitchen Extraction Cleaning RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for commercial kitchen extraction cleaning (TR19-compliant), covering chemical exposure and roof access, in under 2 minutes.",
    applicable_regs: [
      "COSHH Regulations 2002",
      "Work at Height Regulations 2005",
      "Regulatory Reform (Fire Safety) Order 2005",
    ],
    hazards: [
      {
        name: "Exposure to Degreasing Chemicals",
        control:
          "Follow the COSHH data sheet for all degreasing agents, ensuring adequate ventilation and never mixing chemical products.",
      },
      {
        name: "Access to Roof-Mounted Extract Fans & Ductwork",
        control:
          "Use appropriate roof access equipment and edge protection when accessing external extract fans, following the Work at Height Regulations 2005.",
      },
      {
        name: "Fire Risk from Grease Build-Up in Ductwork",
        control:
          "Clean to the full extent specified by TR19 guidance, photographing before/after to evidence grease removal for the fire risk assessment record.",
      },
      {
        name: "Working Near Live Kitchen Equipment",
        control:
          "Isolate and allow cooking equipment to cool before cleaning extraction canopies and ductwork directly above it.",
      },
      {
        name: "Manual Handling of Cleaning Equipment in Confined Ductwork",
        control:
          "Use appropriately sized access equipment and tools for confined duct sections, avoiding awkward reaching or overextension.",
      },
    ],
    required_ppe: [
      "Chemical-Resistant Gloves",
      "Face Shield/Goggles",
      "Chemical-Resistant Coveralls",
      "Non-Slip Footwear",
      "FFP3 Dust/Fume Mask",
    ],
    faq_q1: "Does this RAMS cover TR19-compliant cleaning standards?",
    faq_a1:
      "Yes. It includes a control requiring cleaning to the full extent specified by TR19 guidance with photographic evidence, which is the industry-recognised standard for kitchen extraction cleaning.",
  },
  {
    slug: "ramp-agent-airside-ground-handling-ramp-operations",
    trade: "Aviation",
    task_name: "Airside Ground Handling & Ramp Operations",
    cdm_applicable: false,
    h1_title: "Airside Ground Handling & Ramp Operations RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for airside ground handling and ramp operations, covering vehicle movement and jet blast hazards, in 2 minutes.",
    applicable_regs: [
      "Air Navigation Order 2016",
      "PUWER 1998",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Vehicle & Aircraft Movement on the Ramp",
        control:
          "Follow the airport's airside driving permit rules at all times, maintaining safe separation from moving aircraft and using a marshaller where required.",
      },
      {
        name: "Jet Blast & Engine Intake Hazards",
        control:
          "Maintain the minimum safe clearance distance from running engines specified by the aircraft type, and never approach an aircraft with engines running without authorisation.",
      },
      {
        name: "Manual Handling of Baggage & Cargo",
        control:
          "Use mechanical belt loaders and conveyors wherever possible, and follow correct lifting technique for baggage handled manually into the hold.",
      },
      {
        name: "Noise Exposure on the Ramp",
        control:
          "Wear hearing protection at all times on the ramp in line with the airport's noise zoning requirements.",
      },
      {
        name: "Weather Conditions Affecting Ramp Operations",
        control:
          "Follow the airport's adverse weather procedures, suspending operations in lightning risk or severe wind conditions.",
      },
    ],
    required_ppe: [
      "Hi-Vis Clothing",
      "Hearing Protection",
      "BS EN ISO 20345 Safety Boots",
      "Cut-Resistant Gloves",
      "Eye Protection",
    ],
    faq_q1: "Does this RAMS cover jet blast and engine intake hazards on the ramp?",
    faq_a1:
      "Yes. It includes a control requiring minimum safe clearance distances from running aircraft engines, reflecting one of the most serious hazards specific to airside ramp work.",
  },
  {
    slug: "wind-turbine-technician-wind-turbine-maintenance-inspection",
    trade: "Renewable Energy",
    task_name: "Wind Turbine Maintenance & Inspection",
    cdm_applicable: false,
    h1_title: "Wind Turbine Maintenance & Inspection RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for wind turbine maintenance and inspection, covering height access and electrical isolation, in under 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "Electricity at Work Regulations 1989",
      "LOLER 1998",
    ],
    hazards: [
      {
        name: "Falls During Tower & Nacelle Access",
        control:
          "Use a certified climbing/fall arrest system on internal ladders at all times, with rescue equipment and a trained second technician present for any nacelle access.",
      },
      {
        name: "Electric Shock from Turbine Generator & Control Systems",
        control:
          "Follow the manufacturer's lock-out/tag-out procedure to isolate the turbine before any electrical work, confirming zero energy state before touching components.",
      },
      {
        name: "Working in Confined Nacelle & Hub Spaces",
        control:
          "Assess ventilation and communication coverage before entry, maintaining radio contact with ground control throughout the visit.",
      },
      {
        name: "Manual Handling of Tools & Components at Height",
        control:
          "Use a rigged lifting line for tools and components taken up the tower, avoiding manual carrying up internal ladders.",
      },
      {
        name: "Adverse Weather Affecting Turbine Access",
        control:
          "Follow the site's wind speed and weather limits for tower access, suspending work if conditions exceed safe operating thresholds.",
      },
    ],
    required_ppe: [
      "Fall Arrest Harness (BS EN 361)",
      "BS EN 397 Hard Hat",
      "1000V Insulated Gloves",
      "Rescue Descent Device",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover the lock-out/tag-out procedure for turbine electrical systems?",
    faq_a1:
      "Yes. It includes a control requiring the manufacturer's lock-out/tag-out procedure to be followed and a confirmed zero energy state before any electrical work begins.",
  },
  {
    slug: "data-centre-technician-server-room-maintenance",
    trade: "Data Centres",
    task_name: "Data Centre Server Room Maintenance",
    cdm_applicable: false,
    h1_title: "Data Centre Server Room Maintenance RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for data centre server room maintenance, covering electrical safety and fire suppression system hazards, in 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "Regulatory Reform (Fire Safety) Order 2005",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Electric Shock from Live Power Distribution (UPS, PDUs)",
        control:
          "Isolate and lock off the specific circuit or rack PDU before intervention where possible, using insulated tools when working near live busbars that cannot be isolated.",
      },
      {
        name: "Accidental Discharge of Gas Fire Suppression Systems",
        control:
          "Notify the building's responsible person and place the suppression system in maintenance/hold mode before any work that could trigger a false alarm.",
      },
      {
        name: "Manual Handling of Servers & Rack Equipment",
        control:
          "Use a server lift or two-person team for heavy rack-mounted equipment, sliding units onto rails rather than lifting freehand where possible.",
      },
      {
        name: "Raised Floor & Cable Management Hazards",
        control:
          "Use correct floor tile lifting tools and replace tiles securely after accessing under-floor cabling, avoiding trip hazards from open floor voids.",
      },
      {
        name: "Working in Cold Aisle/Hot Aisle Environments",
        control:
          "Be aware of temperature extremes between cold and hot aisles, and avoid blocking airflow paths while working.",
      },
    ],
    required_ppe: [
      "1000V Insulated Gloves",
      "BS EN 166 Safety Glasses",
      "Anti-Static Wrist Strap",
      "Safety Boots",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover the risk of accidentally triggering the gas fire suppression system?",
    faq_a1:
      "Yes. It includes a control requiring the suppression system to be placed in maintenance/hold mode before work that could trigger a false discharge, protecting both people and equipment.",
  },
  {
    slug: "forestry-worker-commercial-forestry-timber-harvesting",
    trade: "Forestry",
    task_name: "Commercial Forestry & Timber Harvesting",
    cdm_applicable: false,
    h1_title: "Commercial Forestry & Timber Harvesting RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for commercial forestry and timber harvesting operations, covering felling and machinery hazards, in under 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "PUWER 1998",
      "Forestry Commission Safety Guidance",
    ],
    hazards: [
      {
        name: "Struck-By Hazards from Felling & Falling Timber",
        control:
          "Establish a felling exclusion zone of at least twice the tree height, with only certificated fellers (e.g. CS30/CS31) operating chainsaws and clear communication between the felling and extraction teams.",
      },
      {
        name: "Harvesting Machinery & Forwarder Operation",
        control:
          "Only trained and competent operators to use harvesters and forwarders, maintaining safe separation from ground crew at all times.",
      },
      {
        name: "Manual Handling & Terrain Hazards",
        control:
          "Assess ground conditions before manual extraction work, using appropriate footwear and being alert to uneven or hidden terrain features.",
      },
      {
        name: "Working Near Public Rights of Way",
        control:
          "Close or divert public rights of way through the felling area during operations, using signage and barriers to prevent unauthorised access.",
      },
      {
        name: "Noise & Vibration Exposure from Chainsaws & Machinery",
        control:
          "Wear hearing protection and manage daily exposure to chainsaw vibration in line with HAVS guidance.",
      },
    ],
    required_ppe: [
      "Chainsaw Helmet with Visor & Ear Defenders",
      "Chainsaw Protective Trousers (Type A)",
      "Cut-Resistant Gloves",
      "Chainsaw Boots (BS EN ISO 17249)",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover the felling exclusion zone requirements?",
    faq_a1:
      "Yes. It includes a control requiring a felling exclusion zone of at least twice the tree height, with certificated fellers and clear communication between felling and extraction teams.",
  },
  {
    slug: "quarry-operative-quarry-face-plant-operations",
    trade: "Mining & Quarrying",
    task_name: "Quarry Face & Plant Operations",
    cdm_applicable: false,
    h1_title: "Quarry Face & Plant Operations RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for quarry face and plant operations, covering rock fall and mobile plant hazards, in 2 minutes.",
    applicable_regs: [
      "Quarries Regulations 1999",
      "PUWER 1998",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Rock Fall from the Quarry Face",
        control:
          "Maintain the exclusion zone specified in the site's geotechnical assessment, with regular face inspections by a competent person before work proceeds beneath it.",
      },
      {
        name: "Mobile Plant & Vehicle Interaction",
        control:
          "Follow the site's traffic management plan at all times, with segregated pedestrian routes and reversing alarms fitted to all mobile plant.",
      },
      {
        name: "Dust Exposure from Crushing & Processing",
        control:
          "Use water suppression or dust extraction at crushing and screening points, and wear an FFP3 mask in high-dust areas in line with the COSHH assessment.",
      },
      {
        name: "Blasting Operations & Fly-Rock Risk",
        control:
          "Follow the site's shot-firing procedure and exclusion zone requirements during blasting, with all personnel accounted for before firing.",
      },
      {
        name: "Noise Exposure from Crushing & Processing Plant",
        control:
          "Wear hearing protection in designated high-noise zones around crushing and screening plant, in line with the site's noise assessment.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Hi-Vis Clothing",
      "BS EN ISO 20345 Safety Boots",
      "FFP3 Dust Mask",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover the exclusion zone for rock fall risk at the quarry face?",
    faq_a1:
      "Yes. It includes a control requiring the exclusion zone from the site's geotechnical assessment to be maintained, with regular competent-person face inspections before work proceeds beneath it.",
  },
  {
    slug: "vehicle-technician-vehicle-workshop-mot-bay-operations",
    trade: "Automotive",
    task_name: "Vehicle Workshop & MOT Bay Operations",
    cdm_applicable: false,
    h1_title: "Vehicle Workshop & MOT Bay Operations RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for vehicle workshop and MOT bay operations, covering vehicle lift and exhaust fume hazards, in under 2 minutes.",
    applicable_regs: [
      "PUWER 1998",
      "LOLER 1998",
      "COSHH Regulations 2002",
    ],
    hazards: [
      {
        name: "Vehicle Lift Failure or Instability",
        control:
          "Use only lifts within their current LOLER inspection date, positioned correctly under the vehicle's rated lift points before raising, with the safety catch engaged.",
      },
      {
        name: "Exhaust Fume Exposure in the Workshop",
        control:
          "Connect exhaust extraction hosing to any running vehicle indoors, and ensure adequate general ventilation throughout the workshop.",
      },
      {
        name: "Manual Handling of Vehicle Parts & Tools",
        control:
          "Use a trolley jack, engine crane or two-person lift for heavy components, and store tools and parts to avoid trip hazards around the bays.",
      },
      {
        name: "Handling of Vehicle Fluids & Batteries",
        control:
          "Follow the COSHH data sheet for oils, coolants and battery acid, using spill trays and appropriate PPE when draining or replacing fluids.",
      },
      {
        name: "Fire Risk from Fuel Systems & Hot Work",
        control:
          "Avoid hot work near fuel lines or tanks, and keep a fire extinguisher accessible in the workshop at all times.",
      },
    ],
    required_ppe: [
      "Nitrile Gloves",
      "BS EN 166 Safety Glasses",
      "Safety Boots",
      "Hearing Protection",
      "Coveralls",
    ],
    faq_q1: "Does this RAMS cover the LOLER inspection requirements for vehicle lifts?",
    faq_a1:
      "Yes. It includes a control requiring lifts to be within their current LOLER inspection date and correctly positioned under rated lift points before raising a vehicle.",
  },
  {
    slug: "shopfitter-retail-store-fit-out-refurbishment",
    trade: "Retail",
    task_name: "Retail Store Fit-Out & Refurbishment",
    h1_title: "Retail Store Fit-Out & Refurbishment RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific, CDM 2015 compliant RAMS for retail store fit-out and refurbishment work, covering occupied-centre safety and power tool hazards, in 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Manual Handling Operations 1992",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Working in an Occupied Shopping Centre/Retail Park",
        control:
          "Agree permitted working hours and delivery routes with centre management, and barrier off the work area from public access at all times.",
      },
      {
        name: "Power Tool Use & Dust Generation Near Trading Units",
        control:
          "Use dust extraction on cutting equipment and seal the work area to prevent dust migrating into neighbouring occupied units.",
      },
      {
        name: "Manual Handling of Shopfitting Materials & Fixtures",
        control:
          "Use trolleys and mechanical aids for heavy shelving, glazing and joinery units, particularly when moving through shared mall or service corridors.",
      },
      {
        name: "Working Outside Permitted Hours",
        control:
          "Confirm agreed working hours with centre management, scheduling noisy or disruptive work outside trading hours where required.",
      },
      {
        name: "Fire Compartmentation During Fit-Out",
        control:
          "Maintain fire compartmentation and escape routes throughout the fit-out, reinstating any fire-stopping disturbed during the works.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "FFP2 Dust Mask",
      "BS EN ISO 20345 Safety Boots",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover working in an occupied shopping centre alongside trading units?",
    faq_a1:
      "Yes. It includes controls for agreeing working hours and delivery routes with centre management and sealing the work area to protect neighbouring trading units from dust and noise.",
  },
  {
    slug: "highways-operative-highway-verge-street-cleansing",
    trade: "Highways & Local Authority",
    task_name: "Highway Verge & Street Cleansing",
    cdm_applicable: false,
    h1_title: "Highway Verge & Street Cleansing RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for highway verge maintenance and street cleansing work, covering live traffic and machinery hazards, in under 2 minutes.",
    applicable_regs: [
      "New Roads and Street Works Act 1991",
      "PUWER 1998",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Working Adjacent to Live Traffic",
        control:
          "Set out signage, cones and barriers in line with Chapter 8 of the New Roads and Street Works Act 1991 before starting any work on or near the carriageway.",
      },
      {
        name: "Machinery Use (Strimmers, Sweepers, Mowers) Near the Public",
        control:
          "Use only guarded, well-maintained equipment, checking the immediate area for pedestrians and debris hazards before starting.",
      },
      {
        name: "Manual Handling & Sharps in Litter/Waste Collection",
        control:
          "Wear cut-resistant gloves when hand-picking litter and waste, and use litter pickers rather than bare hands to avoid contact with sharps or hazardous items.",
      },
      {
        name: "Wildlife & Protected Species on Verges",
        control:
          "Check for protected species or nesting habitats before cutting verges during breeding season, adjusting the work programme where required.",
      },
      {
        name: "Weather Conditions Affecting Roadside Work",
        control:
          "Monitor visibility and weather conditions, suspending roadside work in fog, heavy rain or high winds that reduce driver visibility of the work party.",
      },
    ],
    required_ppe: [
      "Hi-Vis Clothing (Class 3)",
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "Hearing Protection",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover traffic management for verge work near live carriageways?",
    faq_a1:
      "Yes. It includes a control requiring signage, cones and barriers to be set out in line with Chapter 8 of the New Roads and Street Works Act 1991 before work begins near the carriageway.",
  },
  {
    slug: "void-property-technician-void-property-turnaround-repairs",
    trade: "Social Housing",
    task_name: "Void Property Turnaround & Repairs",
    h1_title: "Void Property Turnaround & Repairs RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for social housing void property turnaround and repairs, covering hazardous material and access hazards, in 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Control of Asbestos Regulations 2012",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Undisclosed Hazardous Materials in Older Housing Stock",
        control:
          "Check the property's asbestos register before starting, and stop work immediately if suspect materials are disturbed during strip-out or repair.",
      },
      {
        name: "Access to Properties with Unknown Occupancy History",
        control:
          "Conduct a walk-through hazard check (sharps, biohazards, structural damage) before starting work in a void property.",
      },
      {
        name: "Manual Handling of Fixtures & Waste During Clearance",
        control:
          "Use trolleys and team-lift heavy fixtures such as baths and kitchen units removed during the turnaround.",
      },
      {
        name: "Security & Lone Working in Empty Properties",
        control:
          "Follow a lone worker check-in procedure when attending void properties, and secure the property on completion each day.",
      },
      {
        name: "Utility Isolation Before Works Begin",
        control:
          "Confirm gas, electricity and water supplies are safely isolated or reconnected as appropriate before turnaround works begin.",
      },
    ],
    required_ppe: [
      "FFP3 Dust Mask",
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "BS EN 166 Safety Glasses",
      "Disposable Coveralls",
    ],
    faq_q1: "Does this RAMS cover the risk of asbestos in older housing stock?",
    faq_a1:
      "Yes. It includes a control requiring the property's asbestos register to be checked before work starts, with a stop-work procedure if suspect materials are disturbed.",
  },
  {
    slug: "restoration-technician-fire-flood-damage-restoration",
    trade: "Property Restoration",
    task_name: "Fire & Flood Damage Restoration",
    h1_title: "Fire & Flood Damage Restoration RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for fire and flood damage restoration work, covering structural safety and contamination hazards, in under 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "COSHH Regulations 2002",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Structural Instability from Fire or Water Damage",
        control:
          "Assess the structure for stability before entry, particularly fire-damaged roofs and floors, and install temporary propping where required before work begins.",
      },
      {
        name: "Exposure to Soot, Smoke Residue & Contaminated Flood Water",
        control:
          "Wear appropriate RPE and chemical-resistant gloves when handling soot-contaminated debris or flood-affected materials, following the COSHH assessment for the specific contamination.",
      },
      {
        name: "Electrical Hazards from Water-Damaged Systems",
        control:
          "Treat all electrics in a flood-affected property as unsafe until isolated and inspected by a competent electrician before any work in the affected area.",
      },
      {
        name: "Mould & Biological Contamination After Flooding",
        control:
          "Wear appropriate RPE and follow decontamination procedures when removing mould-affected materials, in line with industry drying and restoration guidance.",
      },
      {
        name: "Manual Handling of Water-Damaged Debris & Contents",
        control:
          "Assess weight and stability before lifting water-saturated materials, which are often significantly heavier than their dry equivalent.",
      },
    ],
    required_ppe: [
      "FFP3 Dust/Fume Mask",
      "Chemical-Resistant Gloves",
      "Disposable Coveralls",
      "BS EN ISO 20345 Safety Boots",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover the structural risks of working in a fire-damaged building?",
    faq_a1:
      "Yes. It includes a control requiring a stability assessment and temporary propping where needed before any work begins in a fire or flood-damaged structure.",
  },
  {
    slug: "circuit-marshal-race-circuit-pit-lane-operations",
    trade: "Motorsport",
    task_name: "Race Circuit & Pit Lane Operations",
    cdm_applicable: false,
    h1_title: "Race Circuit & Pit Lane Operations RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for race circuit and pit lane operations, covering vehicle movement and refuelling hazards, in 2 minutes.",
    applicable_regs: [
      "Health and Safety at Work etc. Act 1974",
      "Dangerous Substances and Explosive Atmospheres Regulations (DSEAR) 2002",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "High-Speed Vehicle Movement in the Pit Lane",
        control:
          "Enforce the circuit's pit lane speed limit at all times, with clear marshalled crossing points and high-vis clothing worn by all personnel in the lane.",
      },
      {
        name: "Fuel Handling & Refuelling Fire Risk",
        control:
          "Follow DSEAR-compliant refuelling procedures, with fire extinguishers and a trained fire marshal present during any refuelling operation.",
      },
      {
        name: "Manual Handling of Tyres, Equipment & Barriers",
        control:
          "Use trolleys for tyre stacks and team-lift heavy trackside barriers, keeping clear of the live track edge during movement.",
      },
      {
        name: "Noise Exposure from Racing Vehicles",
        control:
          "Wear hearing protection at all times when working trackside or in the pit lane during on-track sessions.",
      },
      {
        name: "Incident Response & Track Recovery",
        control:
          "Follow the circuit's incident response procedure for track recovery, ensuring the track is confirmed clear before racing resumes.",
      },
    ],
    required_ppe: [
      "Hi-Vis Clothing (Fire-Resistant)",
      "Hearing Protection",
      "BS EN ISO 20345 Safety Boots",
      "Cut-Resistant Gloves",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover the fire risk from refuelling in the pit lane?",
    faq_a1:
      "Yes. It includes a control requiring DSEAR-compliant refuelling procedures with fire extinguishers and a trained fire marshal present during every refuelling operation.",
  },
  {
    slug: "zoo-keeper-animal-enclosure-maintenance",
    trade: "Zoos & Wildlife Parks",
    task_name: "Animal Enclosure Maintenance",
    cdm_applicable: false,
    h1_title: "Animal Enclosure Maintenance RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for zoo and wildlife park animal enclosure maintenance, covering animal contact and containment hazards, in under 2 minutes.",
    applicable_regs: [
      "Health and Safety at Work etc. Act 1974",
      "Zoo Licensing Act 1981",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Escape or Contact with Dangerous Animals During Maintenance",
        control:
          "Follow the collection's dangerous animal protocol, never entering an enclosure with a dangerous animal present unless it has been securely isolated in a separate den or holding area.",
      },
      {
        name: "Containment Barrier Integrity During Repair Work",
        control:
          "Maintain a secondary containment barrier or keeper presence at all times while the primary enclosure barrier is compromised for repair.",
      },
      {
        name: "Zoonotic Disease Exposure",
        control:
          "Wear gloves and follow hygiene procedures when handling animal waste or enclosure furnishings, particularly in primate and bird enclosures.",
      },
      {
        name: "Public Access & Visitor Safety During Maintenance",
        control:
          "Barrier off and signpost maintenance work carried out in publicly accessible areas, maintaining safe separation from visitors.",
      },
      {
        name: "Manual Handling of Enclosure Materials & Equipment",
        control:
          "Use mechanical aids where possible for heavy enclosure furnishings, fencing panels and construction materials.",
      },
    ],
    required_ppe: [
      "Waterproof/Chemical-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "Coveralls",
      "BS EN 166 Safety Glasses",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover the risk of contact with dangerous animals during enclosure repairs?",
    faq_a1:
      "Yes. It includes a control requiring the collection's dangerous animal protocol to be followed, with animals securely isolated before any maintenance work begins in the enclosure.",
  },
  {
    slug: "conservator-heritage-building-conservation-works",
    trade: "Museums & Heritage",
    task_name: "Heritage Building Conservation Works",
    h1_title: "Heritage Building Conservation Works RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific, CDM 2015 compliant RAMS for heritage building conservation works, covering listed structure and hazardous material controls, in 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Control of Asbestos Regulations 2012",
      "Planning (Listed Buildings and Conservation Areas) Act 1990",
    ],
    hazards: [
      {
        name: "Structural Fragility of Historic Fabric",
        control:
          "Assess original structure and materials with a heritage-competent surveyor before any intervention, using minimal, reversible methods wherever possible.",
      },
      {
        name: "Legacy Hazardous Materials (Lead Paint, Asbestos)",
        control:
          "Check for lead-based paint and asbestos-containing materials common in older buildings before sanding, cutting or removing any original fabric.",
      },
      {
        name: "Working at Height on Fragile or Irregular Structures",
        control:
          "Use bespoke access equipment suited to the building's irregular or fragile surfaces, avoiding standard fixings into protected historic fabric without approval.",
      },
      {
        name: "Working Within Listed Building Constraints",
        control:
          "Confirm listed building consent and any conservation officer requirements before carrying out work that alters historic fabric.",
      },
      {
        name: "Manual Handling of Heritage Materials & Artefacts",
        control:
          "Handle historic materials and artefacts with care, using appropriate lifting technique and protective packaging to prevent damage.",
      },
    ],
    required_ppe: [
      "FFP3 Dust Mask",
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "Fall Arrest Harness (BS EN 361)",
    ],
    faq_q1: "Does this RAMS cover the risk of legacy lead paint or asbestos in historic buildings?",
    faq_a1:
      "Yes. It includes a control requiring a check for lead-based paint and asbestos-containing materials before any original fabric is sanded, cut or removed.",
  },
  {
    slug: "energy-technician-utility-scale-battery-storage-site-maintenance",
    trade: "Renewable Energy",
    task_name: "Utility-Scale Battery Storage Site Maintenance",
    cdm_applicable: false,
    h1_title: "Utility-Scale Battery Storage Site Maintenance RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for utility-scale battery storage site maintenance, covering thermal runaway and high-voltage hazards, in under 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "Regulatory Reform (Fire Safety) Order 2005",
      "DSEAR 2002",
    ],
    hazards: [
      {
        name: "Electric Shock from High-Voltage Battery Systems",
        control:
          "Follow the site's lock-out/tag-out procedure and confirm zero energy state using rated test equipment before any intervention on battery racks or inverters.",
      },
      {
        name: "Thermal Runaway & Fire Risk from Damaged Cells",
        control:
          "Monitor cell temperature and gas detection systems continuously, evacuating and following the site's thermal event procedure immediately if triggered.",
      },
      {
        name: "Manual Handling of Battery Modules",
        control:
          "Use mechanical lifting aids for heavy battery modules, and mount or position units in line with the manufacturer's handling guidance.",
      },
      {
        name: "Fire Suppression System Interaction",
        control:
          "Confirm the fire suppression system status before working within the enclosure, and avoid triggering an unintended discharge.",
      },
      {
        name: "Working in Extreme Temperature Environments",
        control:
          "Monitor container/enclosure temperature before entry, as battery storage sites can reach extreme temperatures during fault conditions.",
      },
    ],
    required_ppe: [
      "1000V Insulated Gloves",
      "Arc-Rated Flame-Resistant Clothing",
      "BS EN 166 Safety Glasses",
      "Gas Detector",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover the risk of thermal runaway in damaged battery cells?",
    faq_a1:
      "Yes. It includes a control requiring continuous monitoring of cell temperature and gas detection systems, with an immediate evacuation and thermal event procedure if triggered.",
  },
  {
    slug: "obu-technician-outside-broadcast-rigging-camera-platforms",
    trade: "Broadcasting & Media",
    task_name: "Outside Broadcast Rigging & Camera Platforms",
    cdm_applicable: false,
    h1_title: "Outside Broadcast Rigging & Camera Platforms RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for outside broadcast rigging and camera platform work, covering height access and cable management hazards, in 2 minutes.",
    applicable_regs: [
      "Work at Height Regulations 2005",
      "Electricity at Work Regulations 1989",
      "LOLER 1998",
    ],
    hazards: [
      {
        name: "Falls While Rigging Camera Platforms & Gantries",
        control:
          "Use a fall arrest system with suitable anchor points when rigging elevated camera positions, with only competent, harness-trained riggers working aloft.",
      },
      {
        name: "Electric Shock from OB Truck Power & Cabling",
        control:
          "Use RCD-protected distribution throughout the site, and route or elevate cable runs to avoid standing water and public walkways.",
      },
      {
        name: "Falling Equipment from Elevated Camera Positions",
        control:
          "Use secondary safety cables (dead-man lines) on all cameras and equipment rigged above public or crew areas.",
      },
      {
        name: "Working Near Public Crowds at Events",
        control:
          "Barrier off and maintain a safe exclusion zone beneath rigged camera positions in areas with public access.",
      },
      {
        name: "Weather Conditions Affecting Outdoor Broadcast Rigging",
        control:
          "Monitor wind speed and weather forecasts throughout the event, adjusting or de-rigging camera platforms if conditions exceed safe limits.",
      },
    ],
    required_ppe: [
      "Fall Arrest Harness (BS EN 361)",
      "BS EN 397 Hard Hat",
      "1000V Insulated Gloves",
      "Hi-Vis Clothing",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover the risk of equipment falling from elevated camera platforms?",
    faq_a1:
      "Yes. It includes a control requiring secondary safety cables on all cameras and equipment rigged above public or crew areas.",
  },
  {
    slug: "plant-operative-brewery-distillery-plant-maintenance",
    trade: "Food & Drink Production",
    task_name: "Brewery & Distillery Plant Maintenance",
    cdm_applicable: false,
    h1_title: "Brewery & Distillery Plant Maintenance RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for brewery and distillery plant maintenance, covering confined space and flammable atmosphere hazards, in under 2 minutes.",
    applicable_regs: [
      "Confined Spaces Regulations 1997",
      "DSEAR 2002",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Confined Space Entry into Vessels & Tanks",
        control:
          "Test the atmosphere before entry into any fermentation vessel, tank or cellar, using a permit-to-work system with a trained top-man in constant communication.",
      },
      {
        name: "CO2 Build-Up & Oxygen Displacement During Fermentation",
        control:
          "Use a calibrated gas monitor in cellars and fermentation areas, evacuating immediately if CO2 levels exceed the site's safe threshold.",
      },
      {
        name: "Flammable Atmosphere Risk During Spirit Distillation",
        control:
          "Follow the site's DSEAR zoning and hot work permit procedure, eliminating ignition sources in classified areas around stills and spirit storage.",
      },
      {
        name: "Manual Handling of Casks, Kegs & Raw Materials",
        control:
          "Use mechanical lifting aids for heavy casks, kegs and sacks of raw materials, team-lifting where mechanical aids aren't practical.",
      },
      {
        name: "Hot Surfaces & Steam During Brewing/Distilling",
        control:
          "Wear heat-resistant gloves and maintain awareness of hot surfaces, steam lines and pressurised vessels during brewing and distilling processes.",
      },
    ],
    required_ppe: [
      "Gas Detector",
      "Chemical-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "BS EN 166 Safety Glasses",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover the risk of CO2 build-up in fermentation cellars?",
    faq_a1:
      "Yes. It includes a control requiring a calibrated gas monitor in cellars and fermentation areas, with immediate evacuation if CO2 levels exceed the site's safe threshold — a well-known risk in brewing and distilling.",
  },
  {
    slug: "valet-technician-commercial-car-wash-valeting-operations",
    trade: "Vehicle Valeting",
    task_name: "Commercial Car Wash & Valeting Operations",
    cdm_applicable: false,
    h1_title: "Commercial Car Wash & Valeting Operations RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for commercial car wash and valeting operations, covering chemical exposure and vehicle movement hazards, in 2 minutes.",
    applicable_regs: [
      "COSHH Regulations 2002",
      "Manual Handling Operations 1992",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Exposure to Valeting Chemicals & Degreasers",
        control:
          "Follow the COSHH data sheet for all shampoos, degreasers and polish/wax products, ensuring adequate ventilation in enclosed valeting bays.",
      },
      {
        name: "Vehicle Movement Within the Wash/Valeting Bay",
        control:
          "Only trained staff to move customer vehicles, with a clear, controlled handover procedure and keys secured when not in use.",
      },
      {
        name: "Slips on Wet Bay Floors",
        control:
          "Use non-slip footwear and squeegee or drain standing water regularly throughout the shift to reduce slip risk in wash bays.",
      },
      {
        name: "Manual Handling During Interior/Exterior Valeting",
        control:
          "Use correct posture and take regular breaks during repetitive tasks such as vacuuming, polishing and interior cleaning.",
      },
      {
        name: "Electrical Safety of Valeting Equipment",
        control:
          "Check pressure washers, vacuums and polishers have a current PAT test and inspect cables for damage before use in wet environments.",
      },
    ],
    required_ppe: [
      "Chemical-Resistant Gloves",
      "Non-Slip Waterproof Footwear",
      "BS EN 166 Safety Glasses",
      "Waterproof Apron",
      "Knee Pads",
    ],
    faq_q1: "Does this RAMS cover the handling of customer vehicles within the valeting bay?",
    faq_a1:
      "Yes. It includes a control restricting vehicle movement to trained staff only, with a controlled handover procedure and secure key management.",
  },
  {
    slug: "grounds-technician-cemetery-grounds-maintenance",
    trade: "Cemeteries & Memorial Services",
    task_name: "Cemetery & Grounds Maintenance",
    cdm_applicable: false,
    h1_title: "Cemetery & Grounds Maintenance RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for cemetery and grounds maintenance work, covering ground stability and machinery hazards, in under 2 minutes.",
    applicable_regs: [
      "PUWER 1998",
      "Manual Handling Operations 1992",
      "Health and Safety at Work etc. Act 1974",
    ],
    hazards: [
      {
        name: "Unstable or Subsided Ground Around Older Graves",
        control:
          "Visually assess ground condition before operating machinery near older grave plots, and avoid heavy plant on areas showing signs of subsidence.",
      },
      {
        name: "Leaning or Unstable Headstones",
        control:
          "Follow the site's headstone safety testing procedure before working near memorials, temporarily supporting or cordoning off any found to be unstable.",
      },
      {
        name: "Machinery Use (Mowers, Strimmers) Around Memorials & Visitors",
        control:
          "Use only guarded, well-maintained equipment, and maintain a respectful working distance from visitors and services in progress.",
      },
      {
        name: "Working Near Grieving Visitors & Services",
        control:
          "Maintain a respectful distance and pause noisy machinery work during funeral services or when visitors are present at nearby graves.",
      },
      {
        name: "Manual Handling of Grounds Equipment & Memorial Materials",
        control:
          "Use correct lifting technique and mechanical aids where possible for heavy mowers, edging equipment and memorial materials.",
      },
    ],
    required_ppe: [
      "BS EN ISO 20345 Safety Boots",
      "Hearing Protection",
      "Cut-Resistant Gloves",
      "BS EN 166 Safety Glasses",
      "Hi-Vis Clothing",
    ],
    faq_q1: "Does this RAMS cover the risk of unstable or leaning headstones during grounds maintenance?",
    faq_a1:
      "Yes. It includes a control requiring the site's headstone safety testing procedure to be followed, with unstable memorials temporarily supported or cordoned off before nearby work continues.",
  },
  {
    slug: "docker-port-dockside-cargo-operations",
    trade: "Ports & Shipping",
    task_name: "Port & Dockside Cargo Operations",
    cdm_applicable: false,
    h1_title: "Port & Dockside Cargo Operations RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for port and dockside cargo operations, covering crane lifting and vehicle movement hazards, in 2 minutes.",
    applicable_regs: [
      "LOLER 1998",
      "PUWER 1998",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Crane & Container Lifting Operations",
        control:
          "Plan every lift in line with a documented lifting plan, using tested and certified lifting gear, with a clear exclusion zone beneath suspended loads.",
      },
      {
        name: "Vehicle & Plant Movement on the Quayside",
        control:
          "Follow the port's traffic management plan, with segregated pedestrian routes and a banksman for all reversing manoeuvres near the quay edge.",
      },
      {
        name: "Falls into Water from the Quay Edge",
        control:
          "Use edge protection or clearly marked exclusion zones along the quay edge, with lifebuoys and rescue equipment accessible at regular intervals.",
      },
      {
        name: "Manual Handling of Cargo & Lashing Equipment",
        control:
          "Use mechanical aids for heavy lashing equipment and cargo, team-lifting where mechanical aids aren't practical.",
      },
      {
        name: "Weather Conditions Affecting Lifting Operations",
        control:
          "Suspend crane and lifting operations in high winds exceeding the equipment's rated limits, or in poor visibility.",
      },
    ],
    required_ppe: [
      "BS EN 397 Hard Hat",
      "Hi-Vis Clothing",
      "BS EN ISO 20345 Safety Boots",
      "Buoyancy Aid (Quayside Work)",
      "Hearing Protection",
    ],
    faq_q1: "Does this RAMS cover the risk of falling into the water from the quay edge?",
    faq_a1:
      "Yes. It includes a control requiring edge protection or marked exclusion zones along the quay, with lifebuoys and rescue equipment kept accessible at regular intervals.",
  },
  {
    slug: "ride-engineer-ride-maintenance-inspection",
    trade: "Theme Parks & Attractions",
    task_name: "Ride Maintenance & Inspection",
    cdm_applicable: false,
    h1_title: "Ride Maintenance & Inspection RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for theme park ride maintenance and inspection, covering mechanical isolation and working at height, in under 2 minutes.",
    applicable_regs: [
      "PUWER 1998",
      "LOLER 1998",
      "Work at Height Regulations 2005",
    ],
    hazards: [
      {
        name: "Unexpected Ride Movement During Maintenance",
        control:
          "Follow the ride's lock-out/tag-out procedure to fully isolate power before any mechanical or electrical intervention, confirming zero energy state before work begins.",
      },
      {
        name: "Falls During Elevated Ride Structure Inspection",
        control:
          "Use a fall arrest system with suitable anchor points when inspecting elevated track, structure or plant, with only trained and competent technicians working aloft.",
      },
      {
        name: "Structural & Component Fatigue Going Undetected",
        control:
          "Carry out inspection strictly to the manufacturer's schedule and NDT (non-destructive testing) requirements, recording findings in the ride's engineering log before it is reopened to the public.",
      },
      {
        name: "Manual Handling of Ride Components",
        control:
          "Use mechanical lifting aids for heavy ride components and panels, team-lifting where mechanical aids aren't practical.",
      },
      {
        name: "Public Exclusion During Testing & Commissioning",
        control:
          "Maintain a public exclusion zone around the ride during test cycles and commissioning, only reopening once testing is fully signed off.",
      },
    ],
    required_ppe: [
      "Fall Arrest Harness (BS EN 361)",
      "BS EN 397 Hard Hat",
      "BS EN ISO 20345 Safety Boots",
      "Cut-Resistant Gloves",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover the lock-out/tag-out procedure before working on a ride?",
    faq_a1:
      "Yes. It includes a control requiring the ride's lock-out/tag-out procedure to fully isolate power and confirm zero energy state before any mechanical or electrical intervention.",
  },
  {
    slug: "lab-technician-laboratory-cleanroom-maintenance",
    trade: "Laboratories & Pharmaceutical",
    task_name: "Laboratory & Cleanroom Maintenance",
    cdm_applicable: false,
    h1_title: "Laboratory & Cleanroom Maintenance RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for laboratory and cleanroom facility maintenance, covering chemical exposure and contamination control, in 2 minutes.",
    applicable_regs: [
      "COSHH Regulations 2002",
      "Control of Substances Hazardous to Health",
      "Management of Health and Safety at Work Regulations 1999",
    ],
    hazards: [
      {
        name: "Exposure to Residual Chemical or Biological Contamination",
        control:
          "Confirm the area has been decontaminated and signed off by lab staff before maintenance work begins, following the site's permit-to-work system for any work inside a controlled area.",
      },
      {
        name: "Compromising Cleanroom Contamination Control",
        control:
          "Follow the cleanroom's gowning and entry procedure at all times, and agree any work affecting air handling or filtration with facility management before starting.",
      },
      {
        name: "Working Around Sensitive Equipment & Utilities",
        control:
          "Confirm which services and equipment must remain live or protected before starting, isolating only what has been agreed with lab management.",
      },
      {
        name: "Working with Compressed Gas Supplies",
        control:
          "Identify and isolate the relevant compressed gas supply before working on connected pipework, checking for leaks before reconnection.",
      },
      {
        name: "Manual Handling of Laboratory Equipment & Supplies",
        control:
          "Use correct lifting technique and mechanical aids for heavy laboratory equipment, cylinders and supply containers.",
      },
    ],
    required_ppe: [
      "Nitrile Gloves",
      "BS EN 166 Safety Glasses",
      "Cleanroom Coveralls (as required by area)",
      "FFP3 Dust/Fume Mask",
      "Safety Boots",
    ],
    faq_q1: "Does this RAMS cover the risk of compromising cleanroom contamination control?",
    faq_a1:
      "Yes. It includes a control requiring the cleanroom's gowning and entry procedure to be followed at all times, and any work affecting air handling to be agreed with facility management first.",
  },
  {
    slug: "aquaculture-technician-fish-farm-aquaculture-site-operations",
    trade: "Aquaculture & Fish Farming",
    task_name: "Fish Farm & Aquaculture Site Operations",
    cdm_applicable: false,
    h1_title: "Fish Farm & Aquaculture Site Operations RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for fish farm and aquaculture site operations, covering water safety and boat/pontoon hazards, in under 2 minutes.",
    applicable_regs: [
      "Management of Health and Safety at Work Regulations 1999",
      "Manual Handling Operations 1992",
      "Merchant Shipping Regulations (Small Vessels, as applicable)",
    ],
    hazards: [
      {
        name: "Falling Into Water from Pontoons, Cages or Boats",
        control:
          "Wear a buoyancy aid at all times when working over or near open water, keeping life rings and rescue equipment accessible at the work location.",
      },
      {
        name: "Manual Handling of Feed, Nets & Equipment",
        control:
          "Use mechanical feeders and winches for heavy feed sacks and nets wherever possible, team-lifting where mechanical aids aren't practical.",
      },
      {
        name: "Entanglement in Nets & Mooring Lines",
        control:
          "Keep nets and mooring lines tidy and clear of walkways, carrying a cutting tool suitable for quickly freeing entanglement if it occurs.",
      },
      {
        name: "Weather & Sea Conditions Affecting Site Operations",
        control:
          "Monitor weather and sea state forecasts before working on pontoons, cages or vessels, suspending operations in conditions exceeding safe limits.",
      },
      {
        name: "Working Near Boat Engines & Machinery",
        control:
          "Keep clear of propellers and running machinery when working from or around vessels, following the vessel's safe working procedure.",
      },
    ],
    required_ppe: [
      "Buoyancy Aid",
      "Non-Slip Waterproof Footwear",
      "Waterproof Gloves",
      "Weatherproof Clothing",
      "BS EN 166 Safety Glasses",
    ],
    faq_q1: "Does this RAMS cover the risk of falling into water while working on pontoons or cages?",
    faq_a1:
      "Yes. It includes a control requiring a buoyancy aid to be worn at all times when working over or near open water, with rescue equipment kept accessible throughout.",
  },
  {
    slug: "greenkeeper-golf-course-maintenance-irrigation",
    trade: "Golf & Country Clubs",
    task_name: "Golf Course Maintenance & Irrigation",
    cdm_applicable: false,
    h1_title: "Golf Course Maintenance & Irrigation RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for golf course maintenance and irrigation work, covering machinery and public interaction hazards, in 2 minutes.",
    applicable_regs: [
      "PUWER 1998",
      "COSHH Regulations 2002",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Machinery Use Around Players & the Public (Mowers, Aerators)",
        control:
          "Use only guarded, well-maintained equipment, and pause or reroute machinery work when players are approaching the area being maintained.",
      },
      {
        name: "Exposure to Fertilisers & Turf Treatment Chemicals",
        control:
          "Follow the COSHH data sheet and product label for every treatment applied, observing the specified re-entry period before the area reopens to play.",
      },
      {
        name: "Working Near Irrigation Infrastructure & Water Features",
        control:
          "Isolate the relevant irrigation zone before working on pipework or sprinkler heads, and be aware of water hazard edges when working near ponds or lakes.",
      },
      {
        name: "Manual Handling of Course Maintenance Equipment",
        control:
          "Use correct lifting technique and mechanical aids for heavy bunker sand, turf and maintenance equipment.",
      },
      {
        name: "Working Near Water Hazards on the Course",
        control:
          "Assess the risk of falling into water hazards before working near pond or lake edges on the course, using appropriate care or barriers.",
      },
    ],
    required_ppe: [
      "BS EN 166 Safety Glasses",
      "Hearing Protection",
      "Cut-Resistant Gloves",
      "BS EN ISO 20345 Safety Boots",
      "Chemical-Resistant Gloves",
    ],
    faq_q1: "Does this RAMS cover working safely around players while maintaining the course?",
    faq_a1:
      "Yes. It includes a control requiring machinery work to be paused or rerouted when players are approaching the area being maintained.",
  },
  {
    slug: "yard-hand-stable-yard-equestrian-facility-maintenance",
    trade: "Equestrian Facilities",
    task_name: "Stable Yard & Equestrian Facility Maintenance",
    cdm_applicable: false,
    h1_title: "Stable Yard & Equestrian Facility Maintenance RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for stable yard and equestrian facility maintenance, covering animal handling and manual handling hazards, in under 2 minutes.",
    applicable_regs: [
      "Health and Safety at Work etc. Act 1974",
      "Manual Handling Operations 1992",
      "COSHH Regulations 2002",
    ],
    hazards: [
      {
        name: "Kick, Bite & Crush Injuries from Horses",
        control:
          "Approach and handle horses only using established yard procedures, never entering a stable or working close behind a horse without the handler's awareness.",
      },
      {
        name: "Manual Handling of Feed, Bedding & Muck",
        control:
          "Use mechanical handling equipment for heavy feed sacks and bedding bales wherever possible, and use a barrow or mechanical mucker for muck removal.",
      },
      {
        name: "Slips & Trips on Yard Surfaces",
        control:
          "Keep yard walkways clear of loose bedding, tools and hoses, and grit or clear surfaces in icy conditions.",
      },
      {
        name: "Working Near Loose or Turned-Out Horses",
        control:
          "Maintain awareness of loose or turned-out horses when moving around the yard and paddocks, using established gates and catch procedures.",
      },
      {
        name: "Fire Risk from Stored Hay & Bedding",
        control:
          "Store hay, straw and bedding away from ignition sources and electrical equipment, in a well-ventilated area to reduce spontaneous combustion risk.",
      },
    ],
    required_ppe: [
      "BS EN ISO 20345 Safety Boots",
      "Cut-Resistant Gloves",
      "Hi-Vis Clothing",
      "BS EN 166 Safety Glasses",
      "Dust Mask (FFP2)",
    ],
    faq_q1: "Does this RAMS cover the risk of kick or crush injuries from horses?",
    faq_a1:
      "Yes. It includes a control requiring horses to be approached and handled only using established yard procedures, with no working close behind a horse without the handler's awareness.",
  },
  {
    slug: "site-warden-caravan-park-campsite-maintenance",
    trade: "Campsites & Caravan Parks",
    task_name: "Caravan Park & Campsite Maintenance",
    cdm_applicable: false,
    h1_title: "Caravan Park & Campsite Maintenance RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for caravan park and campsite maintenance work, covering utility hook-up and public safety hazards, in 2 minutes.",
    applicable_regs: [
      "Electricity at Work Regulations 1989",
      "Manual Handling Operations 1992",
      "Health and Safety at Work etc. Act 1974",
    ],
    hazards: [
      {
        name: "Electric Shock from Pitch Hook-Up Points",
        control:
          "Isolate and lock off the relevant supply before working on pitch electrical hook-up bollards or distribution, testing dead before any connection work.",
      },
      {
        name: "Vehicle Movement Around Pitches & Pedestrians",
        control:
          "Enforce a site speed limit for maintenance vehicles and plant, with clear segregation from pedestrian routes and children's play areas.",
      },
      {
        name: "Manual Handling During Pitch & Facility Upkeep",
        control:
          "Use trolleys and mechanical aids for heavy items such as gas bottles and waste bins, using correct lifting technique throughout.",
      },
      {
        name: "Fire Safety Across the Site",
        control:
          "Maintain clear access for fire appliances between pitches, and check fire points and extinguishers are accessible and in date.",
      },
      {
        name: "Working Near Water & Drainage Infrastructure",
        control:
          "Identify and isolate water and drainage connections before maintenance work, particularly on shared amenity blocks and standpipes.",
      },
    ],
    required_ppe: [
      "1000V Insulated Gloves",
      "Hi-Vis Clothing",
      "BS EN ISO 20345 Safety Boots",
      "BS EN 166 Safety Glasses",
      "Cut-Resistant Gloves",
    ],
    faq_q1: "Does this RAMS cover the electrical safety of pitch hook-up points?",
    faq_a1:
      "Yes. It includes a control requiring isolation and lock-off of the relevant supply before any work on pitch hook-up bollards or distribution, with dead testing before connection.",
  },
  {
    slug: "verger-church-place-of-worship-maintenance",
    trade: "Places of Worship",
    task_name: "Church & Place of Worship Maintenance",
    h1_title: "Church & Place of Worship Maintenance RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for church and place of worship maintenance, covering historic fabric and working at height hazards, in under 2 minutes.",
    applicable_regs: [
      "CDM Regulations 2015",
      "Work at Height Regulations 2005",
      "Control of Asbestos Regulations 2012",
    ],
    hazards: [
      {
        name: "Working at Height on Towers, Spires & Roofs",
        control:
          "Use appropriate scaffold or MEWP access for tower, spire and roof-level work, with edge protection maintained throughout.",
      },
      {
        name: "Legacy Hazardous Materials in Historic Fabric",
        control:
          "Check for asbestos-containing materials and lead-based paint common in older buildings before disturbing original fabric.",
      },
      {
        name: "Working Around Scheduled Services & Public Access",
        control:
          "Agree working hours and access restrictions with the church community to avoid disruption to services and events, barriering off active work areas from visitors.",
      },
      {
        name: "Bell & Bell Tower Mechanism Hazards",
        control:
          "Isolate and lock off bell mechanisms before working in the bell chamber, and never work while bells are in use or scheduled to ring.",
      },
      {
        name: "Manual Handling of Heavy Fixtures & Furnishings",
        control:
          "Use mechanical aids or a team lift for heavy pews, memorials and fixtures, particularly on uneven historic flooring.",
      },
    ],
    required_ppe: [
      "Fall Arrest Harness (BS EN 361)",
      "BS EN 397 Hard Hat",
      "FFP3 Dust Mask",
      "BS EN 166 Safety Glasses",
      "BS EN ISO 20345 Safety Boots",
    ],
    faq_q1: "Does this RAMS cover working around services and public access at a place of worship?",
    faq_a1:
      "Yes. It includes a control requiring working hours and access restrictions to be agreed with the church community to avoid disruption, with active work areas barriered off from visitors.",
  },
  {
    slug: "network-technician-district-heating-network-maintenance",
    trade: "District Heating",
    task_name: "District Heating Network Maintenance",
    cdm_applicable: false,
    h1_title: "District Heating Network Maintenance RAMS Generator (UK)",
    meta_description:
      "Generate a site-specific RAMS for district heating network maintenance, covering high-temperature pipework and confined chamber hazards, in 2 minutes.",
    applicable_regs: [
      "Confined Spaces Regulations 1997",
      "Pressure Systems Safety Regulations 2000",
      "Manual Handling Operations 1992",
    ],
    hazards: [
      {
        name: "Burns from High-Temperature Pipework & Chambers",
        control:
          "Isolate and allow pipework to cool where possible before intervention, and wear heat-resistant gloves and clothing when working on live high-temperature sections.",
      },
      {
        name: "Confined Space Entry into Heat Network Chambers",
        control:
          "Test the atmosphere before entry into any below-ground chamber and use a permit-to-work system with a trained top-man in constant communication.",
      },
      {
        name: "Pressure Release from System Isolation Points",
        control:
          "Depressurise and isolate the relevant section following the system's documented procedure before opening any joint or valve.",
      },
      {
        name: "Working Near Live Traffic Over Buried Network Chambers",
        control:
          "Set out signage, cones and barriers in line with Chapter 8 of the New Roads and Street Works Act 1991 when accessing chambers in or near the carriageway.",
      },
      {
        name: "Manual Handling of Pipework & Chamber Covers",
        control:
          "Use appropriate lifting keys and mechanical aids for heavy chamber covers and pipework sections, team-lifting where required.",
      },
    ],
    required_ppe: [
      "Heat-Resistant Gloves",
      "Gas Detector",
      "BS EN ISO 20345 Safety Boots",
      "BS EN 166 Safety Glasses",
      "Flame-Resistant Coveralls",
    ],
    faq_q1: "Does this RAMS cover confined space entry into underground heat network chambers?",
    faq_a1:
      "Yes. It includes a control requiring atmosphere testing and a permit-to-work system with a trained top-man before any entry into a below-ground chamber, in line with the Confined Spaces Regulations 1997.",
  },
  {
    slug: "plant-technician-indoor-ski-slope-snow-facility-maintenance",
    trade: "Snow Sports Facilities",
    task_name: "Indoor Ski Slope & Snow Facility Maintenance",
    cdm_applicable: false,
    h1_title: "Indoor Ski Slope & Snow Facility Maintenance RAMS Generator (UK)",
    meta_description:
      "Create a site-specific RAMS for indoor ski slope and snow facility maintenance, covering refrigeration plant and cold environment hazards, in under 2 minutes.",
    applicable_regs: [
      "F-Gas Regulations 2015",
      "Management of Health and Safety at Work Regulations 1999",
      "PUWER 1998",
    ],
    hazards: [
      {
        name: "Refrigerant Gas Leak in Plant Areas",
        control:
          "Fit and maintain gas detection in refrigeration plant rooms, evacuating and ventilating immediately if an alarm is triggered and never re-entering until confirmed safe.",
      },
      {
        name: "Cold Stress from Prolonged Slope & Plant Exposure",
        control:
          "Limit continuous time in sub-zero slope and plant areas in line with a documented cold-work schedule, with warm-up breaks in a heated area at regular intervals.",
      },
      {
        name: "Machinery Use for Snow Grooming & Piste Maintenance",
        control:
          "Only trained operatives to use snow grooming machinery, maintaining safe separation from public areas during operation.",
      },
      {
        name: "Working at Height on Slope Structures & Netting",
        control:
          "Use appropriate access equipment when inspecting or repairing high-level slope structures, safety netting and lighting rigs.",
      },
      {
        name: "Public Interaction During Maintenance",
        control:
          "Close or barrier off the area being maintained from public slope users, coordinating timing with facility operations.",
      },
    ],
    required_ppe: [
      "Insulated Cold-Store Clothing",
      "Thermal Gloves",
      "Non-Slip Insulated Footwear",
      "BS EN 166 Safety Glasses",
      "Gas Detector",
    ],
    faq_q1: "Does this RAMS cover the refrigerant leak risks specific to indoor snow facilities?",
    faq_a1:
      "Yes. It includes a control requiring gas detection to be fitted and maintained in refrigeration plant rooms, with immediate evacuation and ventilation if an alarm is triggered.",
  },
];

export function getIndustryBySlug(slug) {
  return industries.find((i) => i.slug === slug) || null;
}
