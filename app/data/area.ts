// ---------------------------------------------------------------
//  Service area for the postcode checker and the "Where we work" list.
//  zone 'free' = no travel fee, zone 'fee' = flat travel fee (see site.area.travelFee).
//  Postcodes that are not listed are reported as outside the service area.
// ---------------------------------------------------------------

export type Zone = 'free' | 'fee'

export interface Town {
  name: string
  postcodes: string[]
  zone: Zone
}

const range = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => String(from + i))

export const towns: Town[] = [
  { name: 'Bern', postcodes: range(3000, 3030), zone: 'free' },
  { name: 'Ostermundigen', postcodes: ['3072'], zone: 'free' },
  { name: 'Ittigen', postcodes: ['3063'], zone: 'free' },
  { name: 'Bolligen', postcodes: ['3065'], zone: 'free' },
  { name: 'Stettlen', postcodes: ['3066'], zone: 'free' },
  { name: 'Gümligen', postcodes: ['3073'], zone: 'free' },
  { name: 'Muri bei Bern', postcodes: ['3074'], zone: 'free' },
  { name: 'Worb', postcodes: ['3076'], zone: 'free' },
  { name: 'Köniz', postcodes: ['3098'], zone: 'free' },
  { name: 'Liebefeld', postcodes: ['3097'], zone: 'free' },
  { name: 'Wabern', postcodes: ['3084'], zone: 'free' },
  { name: 'Bremgarten', postcodes: ['3047'], zone: 'free' },
  { name: 'Zollikofen', postcodes: ['3052'], zone: 'free' },
  { name: 'Kehrsatz', postcodes: ['3122'], zone: 'free' },
  { name: 'Belp', postcodes: ['3123'], zone: 'free' },
  { name: 'Münsingen', postcodes: ['3110'], zone: 'fee' },
  { name: 'Jegenstorf', postcodes: ['3303'], zone: 'fee' },
  { name: 'Konolfingen', postcodes: ['3510'], zone: 'fee' },
  { name: 'Burgdorf', postcodes: ['3400', '3401', '3402'], zone: 'fee' },
  { name: 'Thun', postcodes: ['3600', '3602', '3603', '3604', '3608'], zone: 'fee' },
  { name: 'Steffisburg', postcodes: ['3612'], zone: 'fee' },
  { name: 'Schwarzenburg', postcodes: ['3150'], zone: 'fee' },
  { name: 'Laupen', postcodes: ['3177'], zone: 'fee' },
  { name: 'Lyss', postcodes: ['3250'], zone: 'fee' },
  { name: 'Kerzers', postcodes: ['3210'], zone: 'fee' },
  { name: 'Murten', postcodes: ['3280'], zone: 'fee' },
  { name: 'Langnau i.E.', postcodes: ['3550'], zone: 'fee' },
  { name: 'Biel/Bienne', postcodes: range(2500, 2505), zone: 'fee' },
  { name: 'Fribourg', postcodes: ['1700'], zone: 'fee' },
  { name: 'Solothurn', postcodes: ['4500'], zone: 'fee' },
]

export function findTown(postcode: string): Town | undefined {
  const code = postcode.trim()
  return towns.find((t) => t.postcodes.includes(code))
}
