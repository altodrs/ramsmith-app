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
];

export function getIndustryBySlug(slug) {
  return industries.find((i) => i.slug === slug) || null;
}
