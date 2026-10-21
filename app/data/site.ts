// ---------------------------------------------------------------
//  Your business details. Edit this file first.
//  Everything here is used across all pages, the footer,
//  the contact form and the structured data for Google.
// ---------------------------------------------------------------

export const site = {
  // Public address of the website (no trailing slash). Used for hreflang, canonical URLs and the sitemap.
  url: 'https://www.example.ch',

  name: 'Lindenhof Malerei & Renovation',
  shortName: 'Lindenhof',
  legalName: 'Lindenhof Malerei & Renovation GmbH',

  // schema.org type for Google. Examples: HousePainter, Electrician, Plumber, HVACBusiness,
  // RoofingContractor, GeneralContractor, HomeAndConstructionBusiness, LocalBusiness
  schemaType: 'HousePainter',

  phone: '+41 31 000 00 00',
  phoneDisplay: '031 000 00 00',
  email: 'hallo@example.ch',

  address: {
    street: 'Lindenhofweg 12',
    postalCode: '3072',
    city: 'Ostermundigen',
    region: 'BE',
    country: 'CH',
  },

  // Opening hours in schema.org format, plus how they are shown on the site (per language).
  openingHours: ['Mo-Fr 07:00-17:30'],
  foundedYear: 1998,

  // Public rating shown in the hero. Set to null to hide it.
  rating: { value: 4.9, count: 137, source: 'Google' },
  warrantyYears: 5,
  quoteDays: 2,

  // Contact form: send submissions to a form service such as Formspree, Basin or Web3Forms.
  // Leave empty to run the form in demo mode (it validates and shows the success message, but sends nothing).
  formEndpoint: '',

  // Service area used by the postcode checker.
  // baseLat/baseLng: your workshop. freeRadiusKm: no travel fee. maxRadiusKm: furthest you travel.
  area: {
    freeRadiusKm: 15,
    maxRadiusKm: 40,
    travelFee: 'CHF 60',
  },

  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
  },
}

export type Site = typeof site
