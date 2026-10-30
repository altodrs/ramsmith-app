// Long-form landing page copy for individual job pages (/rams/[slug]).
// Only jobs listed here get the extra intro, body sections, FAQs and related
// links; every other job page falls back to the fields in lib/trades.js.
//
// Shape:
//   h1, intro, metaDescription — override h1_title / meta_description
//   sections: [{ heading, bullets?: [{ label, text }], body?: [string],
//                notes?: [{ label, text }] }]
//   faqs:     [{ q, a }] — rendered on the page and in the FAQ schema
//   related:  [slug] — other job pages to link to

const JOB_PAGE_COPY = {
  "plumber-combi-boiler-replacement": {
    h1: "Combi Boiler Replacement RAMS, Sorted in Minutes",
    metaDescription:
      "Combi swap booked in? Get a site-specific risk assessment and method statement sorted in minutes. Free preview, then £15. No account needed.",
    intro:
      "Stop writing the same boiler swap paperwork for every job. Add the site address, preview your RAMS free, and pay £15 when you're happy. No account needed, pay per document.",
    sections: [
      {
        heading: "What it covers on a combi swap",
        bullets: [
          { label: "Gas and flue", text: "isolation, tightness testing before and after, and flue termination checks." },
          { label: "Draining down", text: "draining into sealed containers before cutting pipes, and gloves for flushing chemicals." },
          { label: "The lift", text: "two-person lift for the old unit and the new boiler (roughly 30 to 40kg)." },
          { label: "Tight spots", text: "task lighting and ventilation for airing cupboards and under-stairs boilers." },
          { label: "Condensate", text: "routed and lagged to spec so it doesn't freeze and lock the boiler out." },
        ],
        body: ["Plus the PPE list and emergency procedures, all in one PDF."],
      },
      {
        heading: "Who asks for it",
        body: [
          "Housing associations, letting agents and main contractors often want a RAMS before you touch the boiler. Have it ready and skip the back-and-forth. It's the paperwork you need to get onto most UK sites.",
        ],
        notes: [
          {
            label: "Gas Safe note",
            text: "gas work must be done by a Gas Safe registered engineer. The RAMS doesn't replace your registration, so add your number to the document.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a RAMS for a domestic boiler swap?",
        a: "Not every homeowner job asks for one. Housing associations, letting agents and main contractors often do, so having one ready saves you a wasted morning.",
      },
      {
        q: "Does it cover gas tightness testing and flue checks?",
        a: "Yes. The method statement includes gas isolation, tightness testing before and after the install, and flue termination checks, built around the Gas Safety (Installation and Use) Regulations 1998 and HSE guidance.",
      },
      {
        q: "How quickly do I get it?",
        a: "You see the preview on screen straight away. Pay £15 and the PDF is emailed to you. Need a change? Free corrections within 14 days.",
      },
    ],
    related: [
      "gas-engineer-boiler-servicing-safety-inspection",
      "gas-engineer-lpg-oil-boiler-installation",
    ],
  },

  "plumber-underfloor-heating-installation": {
    h1: "Underfloor Heating RAMS for UK Installers",
    metaDescription:
      "Laying wet underfloor heating? Get a site-specific RAMS covering pressure testing, screed and manifold commissioning. Free preview, £15 per document.",
    intro:
      "Pipe down, pressure test, screed, commission. You know the job. Ramsforge writes it up as a site-specific RAMS so you can crack on. No account needed, pay per document.",
    sections: [
      {
        heading: "What it covers on a UFH install",
        bullets: [
          { label: "Pressure testing", text: "pipework tested to the manufacturer's spec before screed goes down, with the system clearly isolated while under test." },
          { label: "Screed and boards", text: "trolleys for bagged screed, mechanical mixing where possible, and team lifts for insulation boards." },
          { label: "Dust", text: "extraction on cutting tools and FFP2 masks when cutting insulation or chasing screed." },
          { label: "Manifold", text: "each zone balanced, commissioned and labelled before handover." },
          { label: "Suspended timber floors", text: "joist positions and floor loading checked before cutting, with no over-notching of load-bearing joists." },
        ],
      },
      {
        heading: "Who asks for it",
        body: [
          "Builders on extensions and kitchen-diner knock-throughs, new-build site managers and renovation main contractors usually want your RAMS before the UFH goes down. Get it done before the screeder turns up.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does it cover pressure testing the pipework?",
        a: "Yes. It requires the pipework to be pressure tested to the manufacturer's spec, and isolated during the test, before screed is laid.",
      },
      {
        q: "Can I use it for a retrofit over suspended timber floors?",
        a: "Yes. It includes checking joist positions and floor loading before cutting, and avoiding excessive notching of load-bearing joists.",
      },
      {
        q: "Is it for wet or electric underfloor heating?",
        a: "It's written for wet, water-fed systems with a manifold. Electric mats are electrical work, so use an electrical RAMS for those.",
      },
    ],
    related: [
      "bathroom-fitter-bathroom-fitting-installation",
      "plumber-combi-boiler-replacement",
    ],
  },

  "plumber-emergency-leak-detection-repair": {
    h1: "Emergency Leak Repair RAMS, Ready Before You Are",
    metaDescription:
      "Burst pipe at 2am? Get a site-specific leak repair RAMS covering lone working, wet floors and electrics near water. Free preview, £15 per document.",
    intro:
      "Call-outs don't wait for paperwork. Generate a RAMS for leak detection and repair from your phone, in the van, in minutes. No account needed, pay per document.",
    sections: [
      {
        heading: "What it covers on a leak call-out",
        bullets: [
          { label: "Wet floors", text: "water isolated at the first chance, with wet-floor signs and matting around the area." },
          { label: "Hidden pipework", text: "the safest way in planned before lifting boards or opening walls, and other services checked before cutting." },
          { label: "Lone working", text: "a check-in with a second person, sharing the address and how long you expect to be." },
          { label: "Electrics near water", text: "fittings near the leak (ceiling roses, downlights) treated as unsafe until isolated and checked." },
          { label: "Getting up to it", text: "proper access kit, not furniture, for ceiling and loft leaks." },
        ],
      },
      {
        heading: "Who asks for it",
        body: [
          "Housing association repairs teams, facilities management firms and escape-of-water repair contractors often want a RAMS on file for reactive jobs. Doing loads of call-outs a month? The Multi-Site Pack (5 for £50) or the Unlimited plan might work out cheaper. Pay per document is always there.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does it cover lone working on out-of-hours call-outs?",
        a: "Yes. It includes a lone worker check-in, which matters most when you're attending a leak alone at night.",
      },
      {
        q: "Can I do it from my phone?",
        a: "Yes. Pick the job, add the address, preview it, pay. The PDF lands in your email, ready to forward to the client.",
      },
      {
        q: "Do I need a RAMS for a reactive repair?",
        a: "It depends on the client. Many housing associations and FM contractors ask for one before any work, emergency or not. Check what your client wants, and keep one handy so it never holds up the job.",
      },
    ],
    related: [
      "bathroom-fitter-bathroom-fitting-installation",
      "plumber-water-softener-filtration-system-installation",
    ],
  },

  "plumber-water-softener-filtration-system-installation": {
    h1: "Water Softener Installation RAMS for UK Plumbers",
    metaDescription:
      "Fitting a water softener or whole-house filter? Get a site-specific RAMS covering backflow, pipework and commissioning. Free preview, £15 per document.",
    intro:
      "Hard water keeps you busy. The paperwork shouldn't. Get a site-specific RAMS for softener and filter installs in minutes. No account needed, pay per document.",
    sections: [
      {
        heading: "What it covers on a softener install",
        bullets: [
          { label: "Backflow", text: "an air gap or approved backflow prevention device, in line with the Water Supply (Water Fittings) Regulations 1999." },
          { label: "Lifting", text: "safe handling of units and salt bags, with the unit sited so future maintenance doesn't mean constant bending." },
          { label: "Leaks", text: "supply isolated before cutting in, and every new joint pressure tested before the water goes back on." },
          { label: "Near the consumer unit", text: "safe clearance when routing pipework, with power isolated if you're working close." },
          { label: "Commissioning", text: "regeneration and flow checked, and all joints checked for leaks before handover." },
        ],
      },
      {
        heading: "Built for hard water areas",
        body: [
          "Much of London, the South East and the East of England has hard water, so softener installs are bread-and-butter work there. If that's your patch, stop writing the same RAMS every week.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does it cover backflow when plumbing in a softener or filter?",
        a: "Yes. It requires an appropriate air gap or approved backflow prevention device, in line with the Water Supply (Water Fittings) Regulations 1999.",
      },
      {
        q: "Does it work for filtration systems as well as softeners?",
        a: "Yes. The same RAMS covers water softeners and whole-house filtration systems, from cutting in to commissioning.",
      },
      {
        q: "How much is it?",
        a: "£15 per document. No account needed, preview free before you pay, and free corrections within 14 days.",
      },
    ],
    related: [
      "plumber-emergency-leak-detection-repair",
      "plumber-combi-boiler-replacement",
    ],
  },

  "gas-engineer-boiler-servicing-safety-inspection": {
    h1: "Boiler Servicing & Gas Safety Check RAMS",
    metaDescription:
      "Site-specific RAMS for boiler services and gas safety checks, covering CO, tightness testing and isolation. Free preview, £15. No account needed.",
    intro:
      "Servicing season, landlord checks, back-to-back visits. Get your RAMS done in minutes, not evenings. No account needed, pay per document.",
    sections: [
      {
        heading: "What it covers on a service visit",
        bullets: [
          { label: "Gas leaks", text: "tightness test before and after, a calibrated gas detector, and the supply isolated straight away if a leak is found." },
          { label: "Carbon monoxide", text: "flue integrity and terminal clearances checked, a CO analyser on every combustion appliance, and no suspect appliance left in use." },
          { label: "Tight spaces", text: "ventilation and access checked in airing cupboards and lofts, with task lighting and someone aware of where you are." },
          { label: "Hot parts", text: "the appliance left to cool before casings come off, and heat-resistant gloves for hot components." },
          { label: "Electrics", text: "boiler isolated and tested dead before any casing comes off." },
        ],
      },
      {
        heading: "Who asks for it",
        body: [
          "Letting agents, housing associations and commercial FM clients often want a RAMS on file before their gas engineers start a run of visits. Got a big service list? The Multi-Site Pack (5 for £50) or the Unlimited plan is there if it works out cheaper.",
        ],
        notes: [
          {
            label: "Gas Safe note",
            text: "gas work must be done by a Gas Safe registered engineer. The RAMS covers how you work safely on the visit. It isn't a Landlord Gas Safety Record (CP12) and doesn't replace one.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does this RAMS prove I'm Gas Safe registered?",
        a: "No. It's a risk assessment and method statement, not proof of registration. You must still be Gas Safe registered to do the work, so add your registration number to the document.",
      },
      {
        q: "Is this the same as a landlord gas safety certificate (CP12)?",
        a: "No. The CP12 records the safety check itself. The RAMS sets out how you'll carry out the visit safely. Many letting agents and housing associations ask for both.",
      },
      {
        q: "Does it cover carbon monoxide checks?",
        a: "Yes. It includes flue integrity and terminal clearance checks, using a CO analyser on all combustion appliances, and never leaving a suspect appliance in use.",
      },
    ],
    related: [
      "plumber-combi-boiler-replacement",
      "gas-engineer-lpg-oil-boiler-installation",
    ],
  },

  "gas-engineer-lpg-oil-boiler-installation": {
    h1: "LPG & Oil Boiler Installation RAMS for Off-Grid Jobs",
    metaDescription:
      "Off-grid boiler install? Get a site-specific RAMS for LPG and oil boilers, covering fuel leaks, flues, tank siting and bunding. Free preview, £15.",
    intro:
      "No mains gas, no problem. Get a site-specific RAMS for LPG and oil boiler installs in minutes. No account needed, pay per document.",
    sections: [
      {
        heading: "What it covers on an off-grid install",
        bullets: [
          { label: "Fuel leaks", text: "gas connections pressure tested before commissioning, and oil lines and tank connections checked before and after." },
          { label: "Flue and CO", text: "flue integrity, terminal clearances and combustion checked with a calibrated analyser." },
          { label: "The lift", text: "two-person lift for the boiler and any tank sections, with mechanical aids where available." },
          { label: "Tank siting", text: "fire separation distances from boundaries, openings and ignition sources, per the manufacturer and OFTEC/LPGA guidance." },
          { label: "Bunding", text: "adequate bunding or spill containment confirmed before commissioning." },
        ],
      },
      {
        heading: "Built for off-grid patches",
        body: [
          "Oil and LPG heating is common in rural areas off the gas grid, from the Highlands and rural Wales to the South West and East Anglia. If your diary is full of farmhouses and village jobs, this one's for you.",
        ],
        notes: [
          {
            label: "Competence note",
            text: "LPG is gas work, so it must be done by a Gas Safe registered engineer. Oil work is usually done by OFTEC-registered technicians. The RAMS doesn't replace either registration.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does it cover both LPG and oil boilers?",
        a: "Yes. It includes leak testing for either fuel, plus the flue and combustion checks both need.",
      },
      {
        q: "Does it cover tank siting and bunding?",
        a: "Yes. It covers fire separation distances for the tank and confirming bunding or spill containment before commissioning.",
      },
      {
        q: "Do I need to be Gas Safe for oil?",
        a: "No, Gas Safe covers gas, including LPG. For oil, OFTEC registration is the usual route. Either way, the RAMS sits alongside your registration, not in place of it.",
      },
    ],
    related: [
      "plumber-combi-boiler-replacement",
      "gas-engineer-boiler-servicing-safety-inspection",
    ],
  },

  "bathroom-fitter-bathroom-fitting-installation": {
    h1: "Bathroom Fitting RAMS for UK Fitters",
    metaDescription:
      "Bathroom refit? Get a site-specific RAMS covering heavy sanitaryware, tile cutting, adhesives and water isolation. Free preview, £15 per document.",
    intro:
      "Rip-out, first fix, tiling, second fix. Your RAMS shouldn't take longer than the silicone. Get it sorted in minutes. No account needed, pay per document.",
    sections: [
      {
        heading: "What it covers on a bathroom refit",
        bullets: [
          { label: "Heavy kit", text: "two-person lift for baths, shower trays and heavy sanitaryware, with no twisting while carrying." },
          { label: "Power tools", text: "drills, tile cutters and jigsaws PAT tested with guards on, and dust extraction on cutting kit where practical." },
          { label: "Fumes", text: "COSHH data sheets followed for silicone, adhesive and grout, with good ventilation in small bathrooms." },
          { label: "Water", text: "supply isolated before old sanitaryware comes out, and checked for leaks before removal." },
          { label: "Electrics near water", text: "fans and shaver sockets fitted in line with BS 7671 Section 701 for bathrooms." },
        ],
      },
      {
        heading: "Who asks for it",
        body: [
          "Showrooms that subcontract fitting, housing association bathroom upgrade programmes and main contractors on refurbs often want a RAMS before you start. Doing a full refurb with tiling? Pair it with the tiling RAMS.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a RAMS for a single domestic bathroom?",
        a: "Not every homeowner job asks for one. Showrooms, housing associations and main contractors often do, and it's a quick way to show you've planned the job properly.",
      },
      {
        q: "Does it cover tile cutting and dust?",
        a: "Yes. It includes dust extraction on cutting tools where practical, and FFP2 masks are on the PPE list.",
      },
      {
        q: "Does it cover the electrics in the bathroom?",
        a: "It covers fitting extractor fans and shaver sockets in line with BS 7671 Section 701. Any electrical work should be done by a competent electrician.",
      },
    ],
    related: [
      "tiler-wall-floor-tiling",
      "plumber-underfloor-heating-installation",
      "plumber-emergency-leak-detection-repair",
    ],
  },
};

export function getJobPageCopy(slug) {
  return JOB_PAGE_COPY[slug] || null;
}
