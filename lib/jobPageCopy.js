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

  // Electrical hub (/rams/electrician) job pages.
  "electrician-full-house-rewire-consumer-unit-upgrade": {
    h1: "Rewire & Consumer Unit RAMS, Sorted Before First Fix",
    metaDescription:
      "Rewire or board change booked in? Get a site-specific RAMS covering safe isolation, chasing and asbestos checks. Free preview, then £15. No account needed.",
    intro:
      "Stop rewriting the same rewire paperwork for every house. Add the site address, preview your RAMS free, and pay £15 when you're happy. No account needed, pay per document.",
    sections: [
      {
        heading: "What it covers on a rewire or board change",
        bullets: [
          { label: "Safe isolation", text: "whole installation isolated and locked off at the board, then proved dead with a GS38 voltage indicator before you touch a conductor." },
          { label: "Chasing and lifting boards", text: "other services and any asbestos survey checked before you chase walls or lift old floor coverings." },
          { label: "Dust", text: "extraction on the chaser and FFP3 masks when cutting into plaster or masonry." },
          { label: "Lofts and floor voids", text: "task lighting, crawl boards across the joists, and someone who knows where you are and for how long." },
          { label: "Live-in rewires", text: "a room-by-room plan agreed with the occupant, essential circuits kept on where you can, and shutdown times confirmed in advance." },
        ],
        body: ["Plus the PPE list (1000V gloves, glasses, FFP3, knee pads, boots) and emergency procedures, all in one PDF."],
      },
      {
        heading: "Who asks for it",
        body: [
          "Housing associations, letting agents and main contractors on refurbs often want a RAMS before you pull the first cable. Landlord rewires through a managing agent are a common one. Have it ready and skip the back-and-forth. It's the paperwork you need to get onto most UK sites.",
        ],
        notes: [
          {
            label: "Part P note",
            text: "a new consumer unit or full rewire is notifiable work in England and Wales. The RAMS sits alongside your scheme notification and Electrical Installation Certificate, it doesn't replace them.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a RAMS for a domestic rewire?",
        a: "Not every homeowner asks. Housing associations, letting agents and main contractors often do, so having one ready saves a wasted morning on site.",
      },
      {
        q: "Does it cover isolating the whole property?",
        a: "Yes. It includes isolating and locking off at the consumer unit and proving dead with a GS38 voltage indicator, built around the Electricity at Work Regulations 1989 and BS 7671.",
      },
      {
        q: "What about asbestos in older houses?",
        a: "It includes checking for an asbestos survey before chasing walls or lifting older floor coverings. If you suspect asbestos, stop and get it tested before carrying on.",
      },
    ],
    related: [
      "electrician-eicr-electrical-installation-condition-report-testing",
      "electrician-ev-charger-installation",
    ],
  },

  "electrician-eicr-electrical-installation-condition-report-testing": {
    h1: "EICR Testing RAMS, Ready Before the Agent Asks",
    metaDescription:
      "Doing EICRs for landlords or commercial clients? Get a site-specific RAMS covering safe isolation, live testing and C1 defects. Free preview, £15 per document.",
    intro:
      "Landlord EICRs, commercial periodics, pre-purchase checks. Same job, different address. Generate a site-specific RAMS in minutes and get on with the testing. No account needed, pay per document.",
    sections: [
      {
        heading: "What it covers on an EICR",
        bullets: [
          { label: "Dead and live testing", text: "safe isolation before dead tests, CAT-rated test kit suited to the supply, and re-energising only when it's safe." },
          { label: "Awkward boards", text: "task lighting and a clear work area for consumer units under stairs, in cupboards or up in the loft." },
          { label: "Occupied properties", text: "occupants told before you switch off, and a check that nothing critical (medical kit, freezers, servers) loses power." },
          { label: "C1 defects", text: "the client told straight away about any Code C1 danger, and the installation made safe or isolation recommended before you leave." },
          { label: "Old or unknown installs", text: "treated as non-standard until proved otherwise, with cable colours and circuit IDs checked carefully before testing." },
        ],
      },
      {
        heading: "Who asks for it",
        body: [
          "Letting agents, housing associations, facilities management firms and commercial clients often want a RAMS on file before you start testing. Doing a batch of EICRs every month? The Multi-Site Pack (5 for £50) or the Unlimited plan might work out cheaper. Pay per document is always there.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a RAMS for a landlord EICR?",
        a: "The EICR itself is what the landlord needs. Agents and housing providers often ask for a RAMS as well before you go in, so it's worth having one ready.",
      },
      {
        q: "Does it cover live testing?",
        a: "Yes. It includes safe isolation for dead tests and CAT-rated test equipment for the live stages, built around the Electricity at Work Regulations 1989 and BS 7671.",
      },
      {
        q: "What if I find a C1 defect?",
        a: "The method statement covers it: tell the client straight away and make the installation safe, or recommend isolation, before you leave site.",
      },
    ],
    related: [
      "electrician-full-house-rewire-consumer-unit-upgrade",
      "fire-security-engineer-fire-alarm-installation-testing",
    ],
  },

  "electrician-ev-charger-installation": {
    h1: "EV Charger Install RAMS, Done From the Van",
    metaDescription:
      "Fitting a home EV charger? Get a site-specific RAMS covering isolation, wall drilling, cable trenching and RCD testing. Free preview, £15. No account needed.",
    intro:
      "Stop writing a fresh method statement for every driveway. Pick the job, add the address, preview your RAMS free and pay £15 when you're happy. No account needed, pay per document.",
    sections: [
      {
        heading: "What it covers on a charger install",
        bullets: [
          { label: "Isolation", text: "main supply isolated at the consumer unit, locked off and tagged, and proved dead before you terminate." },
          { label: "Drilling out", text: "eye protection and an FFP3 mask, and the wall checked for hidden pipes and cables before you drill through." },
          { label: "Cable trenches", text: "CAT and Genny scan before digging, and hand-digging within 0.5m of known services." },
          { label: "Driveways and car parks", text: "work area kept out of vehicle routes where possible, with cones or barriers to warn drivers." },
          { label: "RCD/RCBO testing", text: "the dedicated protective device tested and commissioned, with trip times checked to BS 7671, before handover." },
        ],
      },
      {
        heading: "Who asks for it",
        body: [
          "Car dealerships, fleet and lease companies, and housing developers often want a RAMS before you fit their customers' chargers. Main contractors on new-builds usually ask too. Fitting several chargers a week? The Multi-Site Pack (5 for £50) or Unlimited might suit you better.",
        ],
        notes: [
          {
            label: "Scheme note",
            text: "a new circuit for a charger is Part P notifiable work in England and Wales, and grant-funded installs go through an approved installer. The RAMS sits alongside your certificates and notifications, it doesn't replace them.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a RAMS for a domestic EV charger install?",
        a: "Many homeowners won't ask. Dealerships, fleet companies, developers and main contractors often do, and CDM 2015 expects the work to be planned and its risks managed either way.",
      },
      {
        q: "Does it cover trenching for the cable run?",
        a: "Yes. It includes a CAT and Genny scan before digging and hand-digging within 0.5m of known service routes.",
      },
      {
        q: "Can I use it for a workplace or public charger?",
        a: "For rapid chargers, car parks and groundworks, use the commercial and public EV charging RAMS. It covers plant, live traffic and DNO capacity checks.",
      },
    ],
    related: [
      "electrician-commercial-public-ev-charging-infrastructure-installation",
      "solar-installer-solar-battery-storage-installation",
    ],
  },

  "electrician-commercial-public-ev-charging-infrastructure-installation": {
    h1: "Commercial EV Charging RAMS for Car Parks and Forecourts",
    metaDescription:
      "Installing rapid or car park chargers? Get a site-specific RAMS covering groundworks, plant, traffic and high-power isolation. Free preview, £15 per document.",
    intro:
      "Ducting, bases, feeder pillars, rapid chargers. More moving parts than a home install, and the principal contractor wants the RAMS before day one. Get it sorted in minutes. No account needed, pay per document.",
    sections: [
      {
        heading: "What it covers on a commercial install",
        bullets: [
          { label: "High-power isolation", text: "supply locked out at the distribution board and proved dead with a tester rated for the system voltage before connecting rapid or ultra-rapid units." },
          { label: "Excavation", text: "CAT and Genny scan before trenching or digging charger bases, with hand-digging within 0.5m of known services." },
          { label: "Plant", text: "pedestrian routes barriered off from excavators and dumpers, with a banksman for every reverse." },
          { label: "Live car parks", text: "work area segregated from traffic with barriers and signage while chargers and cabling go in." },
          { label: "Supply capacity", text: "site capacity confirmed with the DNO before high-power chargers go in, with load management where it's needed." },
        ],
      },
      {
        heading: "Who asks for it",
        body: [
          "Principal contractors, retail park and supermarket estates teams, local councils and fleet depots will usually want a RAMS before you break ground. On multi-site rollouts, the Multi-Site Pack (5 for £50) or Unlimited can save you money, and you can still pay per document whenever you like.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does it cover the groundworks as well as the electrics?",
        a: "Yes. It includes CAT and Genny scanning before excavation, plant segregation and a banksman, alongside the high-power isolation controls.",
      },
      {
        q: "Does it mention DNO coordination?",
        a: "Yes. It includes confirming supply capacity with the Distribution Network Operator before installing high-power charging, and applying load management where required.",
      },
      {
        q: "I'm doing chargers across several sites. Do I need one per site?",
        a: "Yes. Each RAMS is written for one site address, which is what principal contractors expect. That's what the Multi-Site Pack is for.",
      },
    ],
    related: [
      "electrician-ev-charger-installation",
      "data-cabling-engineer-structured-data-cabling-installation",
    ],
  },

  "solar-installer-solar-pv-panel-installation": {
    h1: "Solar PV Installation RAMS, Sorted Before the Scaffold Goes Up",
    metaDescription:
      "Solar job on the roof this week? Get a site-specific RAMS covering work at height, live DC and roof fixings. Free preview, then £15. No account needed.",
    intro:
      "Scaffold booked, panels on the way, and the client wants a RAMS. Add the site address, preview it free, and pay £15 when you're happy. No account needed, pay per document.",
    sections: [
      {
        heading: "What it covers on a PV install",
        bullets: [
          { label: "Work at height", text: "edge protection, roof anchors and fall arrest, and no working on wet or icy roofs." },
          { label: "Live DC", text: "panels covered or worked in low light where possible, because they're live whenever light hits them, and the inverter isolated and locked off before you connect." },
          { label: "Getting panels up", text: "a roof hoist or two-person lift, and no carrying panels up ladders in high wind." },
          { label: "Overhead lines", text: "safe clearance kept from any overhead cables before ladders, scaffold or lifting kit go up." },
          { label: "Roof fixings", text: "rafters found before drilling anchor points, and every penetration sealed so the roof stays watertight." },
        ],
      },
      {
        heading: "Who asks for it",
        body: [
          "Housebuilders, roofing contractors you're subbing to, commercial building owners and schools will often want a RAMS before you go up. Scaffold firms sometimes ask to see it too. It's the paperwork you need to get onto most UK sites.",
        ],
        notes: [
          {
            label: "MCS note",
            text: "if the job is going through MCS certification, the RAMS sits alongside your MCS paperwork and commissioning records. It doesn't replace them.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does it cover the risk of live DC from the panels?",
        a: "Yes. Panels make live DC whenever they're in daylight, even with the system switched off downstream. The RAMS includes covering panels or working in low light where possible, and isolating the inverter before connecting.",
      },
      {
        q: "Does it cover scaffold and roof work?",
        a: "Yes. It includes edge protection, roof anchor points and fall arrest, built around the Work at Height Regulations 2005.",
      },
      {
        q: "Fitting a battery at the same time?",
        a: "Generate a second RAMS for the battery storage install. It covers DC battery terminals, fire risk and ventilation, which the PV document doesn't.",
      },
    ],
    related: [
      "solar-installer-solar-battery-storage-installation",
      "electrician-ev-charger-installation",
    ],
  },

  "solar-installer-solar-battery-storage-installation": {
    h1: "Battery Storage RAMS for UK Solar Installers",
    metaDescription:
      "Fitting a home battery? Get a site-specific RAMS covering DC isolation, fire risk and ventilation. Free preview, £15 per document. No account needed.",
    intro:
      "Battery retrofit or new PV-plus-storage job, the paperwork's the same faff every time. Generate a site-specific RAMS in minutes and get it to the client before you turn up. No account needed, pay per document.",
    sections: [
      {
        heading: "What it covers on a battery install",
        bullets: [
          { label: "DC terminals", text: "battery and connected inverter isolated and locked off before making or breaking connections, with insulated tools rated for the system voltage." },
          { label: "Fire risk", text: "installed to the manufacturer's clearance, ventilation and location guidance, and every unit checked for damage before it goes in." },
          { label: "The lift", text: "battery units are heavy and dense, so it's a trolley or two-person lift, mounted where it won't need lifting again for maintenance." },
          { label: "Location", text: "ventilation, temperature and clearances to the manufacturer's spec, keeping out of cupboards and spaces with poor airflow." },
          { label: "Existing PV", text: "compatibility with the existing inverter confirmed, and both systems isolated before any new connection." },
        ],
      },
      {
        heading: "Who asks for it",
        body: [
          "Housebuilders adding storage to new homes, commercial clients and the main contractor on a retrofit will usually want a RAMS. Some homeowners ask too, especially for batteries going in a garage or near the house. It's the paperwork you need to get onto most UK sites.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does it cover fire risk from the battery?",
        a: "Yes. It includes installing strictly to the manufacturer's clearance and ventilation guidance, plus a visual check for damaged cells before installation.",
      },
      {
        q: "Can I use it for a retrofit onto an existing solar system?",
        a: "Yes. It includes confirming compatibility with the existing inverter and isolating both systems before making new connections.",
      },
      {
        q: "What PPE does it list?",
        a: "1000V insulated gloves, safety glasses, safety boots, insulated hand tools and flame-resistant coveralls.",
      },
    ],
    related: [
      "solar-installer-solar-pv-panel-installation",
      "electrician-ev-charger-installation",
    ],
  },

  "fire-security-engineer-fire-alarm-installation-testing": {
    h1: "Fire Alarm RAMS for Installs, Tests and Service Visits",
    metaDescription:
      "Fitting or testing a fire alarm in an occupied building? Get a site-specific RAMS covering isolation, false alarms and work at height. Free preview, £15.",
    intro:
      "New system, panel swap or routine test, the building manager wants a RAMS before you touch the panel. Generate one in minutes. No account needed, pay per document.",
    sections: [
      {
        heading: "What it covers on a fire alarm job",
        bullets: [
          { label: "Detector heights", text: "a podium step or tower above 2m, and no overreaching from a stepladder." },
          { label: "Panel wiring", text: "panel and local supply isolated and proved dead with a voltage indicator before you connect." },
          { label: "Occupied buildings", text: "the responsible person told before any part of the system is isolated, and full cover restored at the end of every day." },
          { label: "False alarms", text: "the responsible person and monitoring station told before testing, and the system reset properly afterwards." },
          { label: "Ceiling voids", text: "task lighting, and a check for asbestos before lifting tiles in older buildings to route cable." },
        ],
      },
      {
        heading: "Who asks for it",
        body: [
          "Facilities managers, school business managers, care home operators, landlords of HMOs and blocks of flats, and main contractors on fit-outs all tend to want a RAMS before you start. On a regular service round, the Multi-Site Pack (5 for £50) or Unlimited might work out cheaper.",
        ],
        notes: [
          {
            label: "BS 5839 note",
            text: "the RAMS covers how you do the work safely. Your design, commissioning and service certificates to BS 5839 are separate and still needed.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does it cover working on a live system in an occupied building?",
        a: "Yes. It includes notifying the responsible person before isolating any part of the system and restoring full alarm cover at the end of each working day.",
      },
      {
        q: "How does it deal with false alarms during testing?",
        a: "It includes telling the responsible person and the monitoring station before testing, and confirming the system has reset correctly afterwards.",
      },
      {
        q: "Can I use it for routine servicing as well as new installs?",
        a: "Yes. The same hazards come up on both. Add the site address and the RAMS is written for that building.",
      },
    ],
    related: [
      "data-cabling-engineer-structured-data-cabling-installation",
      "electrician-eicr-electrical-installation-condition-report-testing",
    ],
  },

  "data-cabling-engineer-structured-data-cabling-installation": {
    h1: "Data Cabling RAMS, Sorted Before You Lift a Tile",
    metaDescription:
      "Pulling Cat6 through ceiling voids and risers? Get a site-specific RAMS covering work at height, asbestos checks and fire-stopping. Free preview, £15.",
    intro:
      "Office fit-out, school network upgrade or a new comms room. The site manager wants your RAMS before you're through the door. Get it done in minutes. No account needed, pay per document.",
    sections: [
      {
        heading: "What it covers on a cabling job",
        bullets: [
          { label: "Ceiling voids", text: "a podium step or tower for pulling cable above the ceiling, never overreaching from a stepladder." },
          { label: "Asbestos and confined spaces", text: "task lighting, and a check for asbestos-containing materials before disturbing tiles in older ceilings." },
          { label: "Reels and containment", text: "a reel stand and trolley for heavy drums, and team lifts for tray and basket." },
          { label: "Fire-stopping", text: "every penetration through fire-rated walls and floors fire-stopped to spec, so compartments are restored when you finish." },
          { label: "Risers", text: "existing live electrical and data services identified first, with new cabling kept separate from them." },
        ],
      },
      {
        heading: "Who asks for it",
        body: [
          "Main contractors on office fit-outs, IT managed service providers you sub for, schools, universities and NHS estates teams usually want a RAMS on file before you start. Lots of sites a month? The Multi-Site Pack (5 for £50) or Unlimited can save you money. Pay per document is always there.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does it cover asbestos in older ceiling voids?",
        a: "Yes. It includes checking for asbestos-containing materials before disturbing tiles or voids in older buildings, in line with the Control of Asbestos Regulations 2012.",
      },
      {
        q: "Does it cover fire-stopping?",
        a: "Yes. It includes fire-stopping every cable penetration through fire-rated walls and floors to the specification and restoring compartmentation when you finish.",
      },
      {
        q: "Is this one for electricians too?",
        a: "It's written for low-voltage data and network cabling. For mains circuits, use the rewire or EV charger RAMS instead.",
      },
    ],
    related: [
      "fire-security-engineer-fire-alarm-installation-testing",
      "electrician-commercial-public-ev-charging-infrastructure-installation",
    ],
  },
};

export function getJobPageCopy(slug) {
  return JOB_PAGE_COPY[slug] || null;
}
