// ---------------------------------------------------------------
//  Services. Each service gets its own page at /services/<slug>.
//  Handwerk Lite is English only. The full version ships EN/DE/FR:
//  https://stavreva68.gumroad.com/l/handwerk-nuxt-template
// ---------------------------------------------------------------

export interface Service {
  slug: string
  image: string
  priceFrom: number
  text: {
    name: string
    short: string
    included: string
    duration: string
    priceUnit: string
    intro: string
    body: string[]
    points: string[]
  }
}

export const services: Service[] = [
  {
    "slug": "interior-painting",
    "image": "https://images.unsplash.com/photo-1688372199140-cade7ae820fe?w=1400&q=75&auto=format&fit=crop",
    "priceFrom": 690,
    "text": {
      "name": "Interior painting",
      "short": "Walls and ceilings in flats, houses and offices.",
      "included": "Covering, filling small cracks, two coats, cleaning up",
      "duration": "1–3 days per flat",
      "priceUnit": "per room",
      "intro": "Fresh walls and ceilings without the mess. We cover floors and furniture, repair small cracks and holes, and apply two even coats.",
      "body": [
        "Most flats take one to three days. We agree the colours with you beforehand and can bring sample cards or paint test patches on the wall.",
        "We use low-emission, water-based paints, so rooms can be used again the same evening."
      ],
      "points": [
        "Floors and furniture covered and protected",
        "Small cracks and holes filled and sanded",
        "Two coats, edges cut by hand",
        "Room cleaned and furniture back in place"
      ]
    }
  },
  {
    "slug": "facades",
    "image": "https://images.unsplash.com/photo-1757812628038-5e96d6263d31?w=1400&q=75&auto=format&fit=crop",
    "priceFrom": 4800,
    "text": {
      "name": "Facades",
      "short": "Cleaning, repair and painting of exterior walls.",
      "included": "Scaffolding, cleaning, crack repair, primer, two coats",
      "duration": "1–2 weeks per house",
      "priceUnit": "per house",
      "intro": "A facade protects the house as much as it shows it off. We clean, repair and repaint exterior walls so they last another 15 years.",
      "body": [
        "Before we quote, we check the render for cracks, moisture and loose areas, and tell you what really needs doing.",
        "We organise the scaffolding and, where needed, the permit from the municipality."
      ],
      "points": [
        "Scaffolding and permit organised",
        "Pressure cleaning and moss removal",
        "Cracks and damaged render repaired",
        "Primer and two weatherproof coats"
      ]
    }
  },
  {
    "slug": "plaster-and-wallpaper",
    "image": "https://images.unsplash.com/photo-1745665777586-09381ba528d6?w=1400&q=75&auto=format&fit=crop",
    "priceFrom": 45,
    "text": {
      "name": "Plaster & wallpaper",
      "short": "Smooth walls, decorative plaster and wallpaper.",
      "included": "Removing old layers, levelling, finishing",
      "duration": "1–4 days",
      "priceUnit": "per m²",
      "intro": "From perfectly smooth walls to lime plaster with texture. We remove old wallpaper, level uneven surfaces and finish them the way you want.",
      "body": [
        "Quality levels Q1 to Q4 tell you how smooth a wall will be. We show you the difference on a sample before we start.",
        "Natural lime and clay plasters are a good choice for bedrooms and old buildings, because they regulate humidity."
      ],
      "points": [
        "Old wallpaper and loose plaster removed",
        "Surfaces levelled to Q3 or Q4",
        "Lime, clay or decorative plaster",
        "Wallpaper hung pattern-matched"
      ]
    }
  },
  {
    "slug": "wood-and-shutters",
    "image": "https://images.unsplash.com/photo-1693985120993-e9b203ce7631?w=1400&q=75&auto=format&fit=crop",
    "priceFrom": 120,
    "text": {
      "name": "Wood & shutters",
      "short": "Window frames, shutters, doors and balconies.",
      "included": "Sanding, wood repair, primer, two coats of varnish or paint",
      "duration": "2–5 days",
      "priceUnit": "per shutter",
      "intro": "Wood outside needs care every 8 to 10 years. We sand, repair and protect shutters, window frames, doors and balcony railings.",
      "body": [
        "Shutters can be taken to our workshop and painted there, so your windows are never open for long.",
        "We choose between glaze, varnish and opaque paint depending on the wood and how much sun it gets."
      ],
      "points": [
        "Shutters painted in our workshop",
        "Rotten spots repaired with wood filler",
        "Glaze, varnish or opaque paint",
        "Hinges and fittings protected"
      ]
    }
  },
  {
    "slug": "small-renovations",
    "image": "https://images.unsplash.com/photo-1511822148790-e7b58ba14c72?w=1400&q=75&auto=format&fit=crop",
    "priceFrom": 1500,
    "text": {
      "name": "Small renovations",
      "short": "Before you move in or out: one team for the whole flat.",
      "included": "Drywall, minor repairs, painting, final cleaning",
      "duration": "3–10 days",
      "priceUnit": "per job",
      "intro": "Moving out and need the flat ready for the handover? Or moving in and want it fresh first? We coordinate everything with one point of contact.",
      "body": [
        "We handle drywall, holes, damaged edges, painting and the final clean, and we can bring in trusted electricians and floor layers.",
        "For handovers we know what landlords check, and we plan the work so you get your deposit back."
      ],
      "points": [
        "One contact person for the whole job",
        "Drywall, edges and repairs",
        "Painting and final cleaning",
        "Ready for the handover date"
      ]
    }
  }
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
