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
];

export function getTradeBySlug(slug) {
  return trades.find((t) => t.slug === slug) || null;
}
