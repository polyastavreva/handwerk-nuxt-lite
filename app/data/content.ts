// ---------------------------------------------------------------
//  Projects, reviews and FAQ. Replace with your own.
// ---------------------------------------------------------------

export interface Project { image: string; place: string; days: number; text: { title: string; scope: string } }
export interface Review { name: string; place: string; text: string }

export const projects: Project[] = [
  {
    "image": "https://images.unsplash.com/photo-1631048501831-46856f9eaaf2?w=1400&q=75&auto=format&fit=crop",
    "place": "Bern, Länggasse",
    "days": 4,
    "text": {
      "title": "4½-room flat before moving in",
      "scope": "Walls and ceilings, lime plaster in the bedroom"
    }
  },
  {
    "image": "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=1400&q=75&auto=format&fit=crop",
    "place": "Muri bei Bern",
    "days": 9,
    "text": {
      "title": "Family house, full interior",
      "scope": "Eleven rooms, stairwell, window frames"
    }
  },
  {
    "image": "https://images.unsplash.com/photo-1613685301586-4f2b15f0ccd4?w=1400&q=75&auto=format&fit=crop",
    "place": "Thun",
    "days": 3,
    "text": {
      "title": "Living room with accent wall",
      "scope": "Smooth Q4 finish, deep blue feature wall"
    }
  }
]

export const reviews: Review[] = [
  {
    "name": "Anna M.",
    "place": "Ittigen",
    "text": "They quoted on Tuesday and started the following Monday. Four rooms in three days, and the floors were cleaner than before."
  },
  {
    "name": "Thomas K.",
    "place": "Worb",
    "text": "Our facade had cracks we were worried about. They explained what was cosmetic and what was not, and the price stayed exactly as quoted."
  },
  {
    "name": "Claire D.",
    "place": "Fribourg",
    "text": "We needed the flat ready for the handover in a week. Everything was done on time and we got the full deposit back."
  }
]

export const faqs: { q: string; a: string }[] = [
  {
    "q": "Is the quote really fixed?",
    "a": "Yes. Once we have seen the space, the price in the quote is the price you pay. If you ask for extra work, we quote it separately before we do it."
  },
  {
    "q": "Do we need to move the furniture?",
    "a": "No. We move furniture to the middle of the room, cover it and put it back afterwards. Only fragile or very valuable items should be stored away."
  },
  {
    "q": "How soon can you start?",
    "a": "Usually within two to three weeks. For handovers with a fixed date, tell us early and we will reserve the days."
  },
  {
    "q": "Can we stay at home during the work?",
    "a": "Yes. We use low-emission paints and work room by room, so you can keep using the rest of the home."
  },
  {
    "q": "Do you give a warranty?",
    "a": "We give five years warranty on our work, in line with SIA standards, and we come back if something is not right."
  }
]
