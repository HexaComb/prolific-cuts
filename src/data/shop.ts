export type Service = {
  name: string;
  detail?: string;
  time: string;
  listPrice: string;
  promoPrice?: string;
};

export type Barber = {
  slug: string;
  name: string;
  shortName: string;
  bookingName?: string;
  booksy?: string;
  square: string;
  photo: string;
  instagram?: string;
  rating?: string;
  bio?: string;
  gap?: string;
  services: Service[];
};

const squareRoot =
  "https://book.squareup.com/appointments/ffx6wytyanadvd/location/A9J0R0GQAC0G3";

function squareStaff(id: string) {
  return `${squareRoot}/staff/${id}`;
}

export const shop = {
  name: "Prolific Cuts",
  address: "493 W Shaw Ave, Ste A",
  locality: "Clovis, CA 93612",
  phone: "(559) 939-8704",
  phoneHref: "tel:+15599398704",
  maps: "https://maps.google.com/?q=493+W+Shaw+Ave+Ste+A+Clovis+CA+93612",
  booksy: "https://booksy.com/en-us/1637118_prolific-cuts_barber-shop_103855_clovis",
  square: "https://pc-108642.square.site/",
  squareAppointments: `${squareRoot}/services`,
  booksyRating: "5.0 from 120 reviews",
  hours: [
    ["Monday", "10:00 a.m.–6:00 p.m."],
    ["Tuesday–Saturday", "8:00 a.m.–6:00 p.m."],
    ["Sunday", "9:00 a.m.–4:00 p.m."],
  ] as const,
  priceNote:
    "Prices are each barber’s Booksy list as of October 16, 2026. Where Booksy is also showing a lower price, both are listed. They can change.",
};

export const ledger = [
  { name: "Detailed haircut", time: "45 min", price: "from $30" },
  { name: "Haircut and beard", time: "1 hour", price: "from $40" },
  { name: "Kids’ haircut", time: "40–45 min", price: "$30" },
];

export const barbers: Barber[] = [
  {
    slug: "diego-gonzalez",
    name: "Diego Gonzalez",
    shortName: "Diego",
    bookingName: "Diego’s Cutz",
    booksy: "https://booksy.com/en-us/805345_diegos-cutz_barber-shop_103855_clovis",
    square: squareStaff("urj2w30eu5y5hf"),
    photo: "/barbers/diego-gonzalez.jpg",
    instagram: "https://www.instagram.com/diegos_cutz",
    rating: "5.0 from 100 reviews on Booksy",
    bio: "Hello, my name is Diego Gonzalez. I’m 27 years old and I have been professionally cutting hair for 6 years now and enjoying the journey every day. I love to hang out with family, work on cars, and play video games when I’m not cutting hair. I look forward to you choosing me as your barber. Thank you.",
    services: [
      {
        name: "Detailed haircut",
        detail: "Fades and tapers, razor finish, beard line-up.",
        time: "45 min",
        listPrice: "$40",
        promoPrice: "$30",
      },
      {
        name: "Simple haircut",
        detail: "No fade and no taper. One length on the sides, a light trim on top.",
        time: "45 min",
        listPrice: "$30",
      },
      {
        name: "Haircut and beard",
        detail: "Haircut and beard work with a razor line-up.",
        time: "1 hour",
        listPrice: "$45",
        promoPrice: "$33.75",
      },
      {
        name: "Beard trim and work",
        time: "30 min",
        listPrice: "$20",
      },
      {
        name: "Eyebrows",
        time: "10 min",
        listPrice: "$5",
      },
      {
        name: "Haircut and eyebrows",
        time: "1 hour",
        listPrice: "$45",
        promoPrice: "$33.75",
      },
      {
        name: "Haircut and black mask",
        detail: "Detailed haircut, razor finish, black mask during the cut.",
        time: "1 hour",
        listPrice: "$45",
        promoPrice: "$33.75",
      },
      {
        name: "Haircut, beard, and black mask",
        time: "1 hour",
        listPrice: "$50",
      },
      {
        name: "Haircut, beard work, and eyebrows",
        time: "1 hour",
        listPrice: "$50",
      },
      {
        name: "Haircut, black mask, and hot towel",
        time: "1 hour",
        listPrice: "$50",
      },
      {
        name: "Haircut, beard, hot towel, and black mask",
        time: "2 hours",
        listPrice: "$60",
      },
      {
        name: "Two haircuts",
        detail: "A small discount for bringing someone with you. Detailed cut, design, and enhancements.",
        time: "2 hours",
        listPrice: "$60",
      },
      {
        name: "Three haircuts",
        detail: "Detailed cut, design, and enhancements for three people.",
        time: "3 hours",
        listPrice: "$90",
      },
      {
        name: "After hours",
        detail: "Call or text the number on his Booksy to confirm a time outside the posted day.",
        time: "55 min",
        listPrice: "$50",
      },
    ],
  },
  {
    slug: "roger-bandz",
    name: "Roger Saldivar",
    shortName: "Roger",
    bookingName: "BlessedbyBandz (Roger Bandz)",
    booksy: "https://booksy.com/en-us/1637114_blessedbybandz_barber-shop_103855_clovis",
    square: squareStaff("fwow3m4x84v0av"),
    photo: "/barbers/roger-bandz.jpg",
    rating: "5.0 from 20 reviews on Booksy",
    bio: "When you choose me as your barber you can expect a friendly and welcoming atmosphere. If you’re looking for a classic haircut, a trendy style, or a complete transformation, I’m here for it.",
    services: [
      {
        name: "Haircut",
        detail: "Full haircut and line-up, razor finish, styled.",
        time: "45 min",
        listPrice: "$40",
        promoPrice: "$32",
      },
      {
        name: "Haircut and beard",
        detail: "Full haircut, styled. Beard trim with line-up, electric shaver, and straight razor. Eyebrows optional.",
        time: "1 hour",
        listPrice: "$50",
        promoPrice: "$40",
      },
      {
        name: "Gentleman’s haircut",
        detail: "No skin fade.",
        time: "35 min",
        listPrice: "$30",
      },
      {
        name: "Kid’s haircut",
        time: "40 min",
        listPrice: "$30",
      },
      {
        name: "Beard",
        detail: "Trim or fade with line-up, electric shaver, and straight razor.",
        time: "20 min",
        listPrice: "$20",
      },
      {
        name: "Eyebrow shaping",
        time: "10 min",
        listPrice: "$5+",
      },
      {
        name: "Design",
        time: "15 min",
        listPrice: "Varies",
      },
      {
        name: "Full service",
        detail:
          "Haircut, black mask, hot towel shave, beard trim, straight razor, eyebrows, line-up, and a hair wash.",
        time: "2 hours",
        listPrice: "$80",
      },
      {
        name: "Hot towel shave",
        time: "30 min",
        listPrice: "$40",
      },
      {
        name: "Hair wash",
        time: "10 min",
        listPrice: "$10",
      },
      {
        name: "Black mask",
        time: "20 min",
        listPrice: "$10",
      },
      {
        name: "Perm",
        time: "3 hours",
        listPrice: "$150+",
      },
      {
        name: "Blonde or color",
        detail: "Bleaching and color.",
        time: "4 hours",
        listPrice: "$125+",
      },
    ],
  },
  {
    slug: "nic",
    name: "Nic Tabiolo",
    shortName: "Nic",
    bookingName: "Cutzbynic",
    booksy: "https://booksy.com/en-us/1879575_cutzbynic_barber-shop_103855_clovis",
    square: squareStaff("q6iq1vqydsnh3i"),
    photo: "/barbers/nic.jpg",
    bio: "Hello, my name is Nic. I’ve been cutting for 2 years and I’m all about giving you the best service. I’m always ready to meet new people and make every client leave with a smile.",
    services: [
      {
        name: "Male haircut",
        time: "45 min",
        listPrice: "$30",
      },
      {
        name: "Haircut and beard",
        time: "1 hour",
        listPrice: "$40",
      },
      {
        name: "Kids’ haircut",
        time: "45 min",
        listPrice: "$30",
      },
    ],
  },
  {
    slug: "abel-zamora",
    name: "Abel Zamora",
    shortName: "Abel",
    square: squareStaff("qp7n4f35o9peok"),
    photo: "/barbers/abel-zamora.jpg",
    bio: "Hello, my name is Abel and I enjoy being a barber very much. I have a wide range of clientele from different ages and backgrounds, so don’t be afraid to be yourself. I have 15+ years of cutting hair experience.",
    services: [],
  },
  {
    slug: "baba-vang",
    name: "Baba Vang",
    shortName: "Baba",
    square: squareStaff("jha41c8j1vomw8"),
    photo: "/barbers/baba-vang.jpg",
    gap: "No bio is published on the Square booking page.",
    services: [],
  },
  {
    slug: "devin-yang",
    name: "Devin Yang",
    shortName: "Devin",
    square: squareStaff("b7osilh2mx8t94"),
    photo: "/barbers/devin-yang.jpg",
    bio: "This is Devin. I’ve been cutting hair for about 6+ years. I love barbering, and I’ll make sure you feel great about yourself when you leave the chair.",
    services: [],
  },
  {
    slug: "peda-thik",
    name: "Peda Thik",
    shortName: "Peda",
    square: squareStaff("ju4ne94ja9cby3"),
    photo: "/barbers/peda-thik.jpg",
    instagram: "https://www.instagram.com/pedacuts/",
    bio: "Hello, my name is Peda. I’m the owner of Prolific Cuts. I’ve been in the hair industry for 11 years. I take pride in my work and in the service for every client who sits in my chair.",
    services: [],
  },
  {
    slug: "ryan-sanchez",
    name: "Ryan Sanchez",
    shortName: "Ryan",
    square: squareStaff("5wnjvpjybeyc2r"),
    photo: "/barbers/ryan-sanchez.jpg",
    bio: "Hey, I’m Ryan. Whether you are looking for a fresh fade, a beard shape-up, or a place to talk shop, the chair is yours.",
    services: [],
  },
  {
    slug: "tyler-ou",
    name: "Tyler Ou",
    shortName: "Tyler",
    square: squareStaff("qxvkirxf8dlfli"),
    photo: "/barbers/tyler-ou.jpg",
    bio: "My name is Tyler. I’ve been barbering for 3 years. I look to give great customer service and quality haircuts to everyone.",
    services: [],
  },
];

const rosterOrder = [
  "abel-zamora",
  "baba-vang",
  "devin-yang",
  "diego-gonzalez",
  "nic",
  "peda-thik",
  "roger-bandz",
  "ryan-sanchez",
  "tyler-ou",
];

barbers.sort(
  (a, b) => rosterOrder.indexOf(a.slug) - rosterOrder.indexOf(b.slug),
);

const everyone = rosterOrder;

export const squareMenu = [
  {
    name: "Men’s haircut",
    detail: "Full haircut and line-up, finishing with a razor.",
    time: "45 min",
    price: "Starting at $30",
    href: `${squareRoot}/services/XRVSSR32YVAFQJEFDGYNX4H6`,
    staff: everyone,
  },
  {
    name: "Kids’ haircut",
    detail: "",
    time: "45 min",
    price: "Starting at $30",
    href: `${squareRoot}/services/6E4ICMJTO4C6VFOQCKXF7E3T`,
    staff: everyone,
  },
  {
    name: "Haircut and beard",
    detail: "Full haircut and line-up. Beard trim with line-up, electric shaver, and straight razor.",
    time: "1 hour",
    price: "Starting at $40",
    href: `${squareRoot}/services/C7CISQFVYDX6IUXCIL7FSNPN`,
    staff: everyone,
  },
  {
    name: "Hot towel service",
    detail: "Hot towels with a straight razor shave on the beard.",
    time: "45 min",
    price: "Starting at $50",
    href: `${squareRoot}/services/YVGTZGTJYF26CYEVZULGBDB5`,
    staff: everyone.filter((slug) => slug !== "nic" && slug !== "ryan-sanchez"),
  },
  {
    name: "Full Prolific service",
    detail: "Haircut, black mask, hot towel shave, beard trim, straight razor, eyebrows, line-up, and a hair wash.",
    time: "2 hours",
    price: "Starting at $75",
    href: `${squareRoot}/services/WAFVNN6IRFKEAAATXRXDHEPF`,
    staff: everyone.filter((slug) => slug !== "nic" && slug !== "ryan-sanchez"),
  },
  {
    name: "Before or after hours haircut",
    detail: "Contact the barber for a haircut before 8:00 a.m. or after 6:00 p.m. Anything besides the haircut is extra.",
    time: "45 min",
    price: "Starting at $60",
    href: `${squareRoot}/services/EFZJYBNHMKAYAPXMJGK22N5V`,
    staff: ["peda-thik", "abel-zamora"],
  },
];

export function squareServicesFor(slug: string) {
  return squareMenu.filter((item) => item.staff.includes(slug));
}

export function getBarber(slug: string) {
  return barbers.find((barber) => barber.slug === slug);
}

export type CatalogRef = { slug: string; service: string };

export const catalog: { id: string; title: string; lede: string; items: CatalogRef[] }[] = [
  {
    id: "haircuts",
    title: "Haircuts",
    lede: "Fades, tapers, one-length trims, or a classic gentleman’s cut—with a barber who takes the time to get it right.",
    items: [
      { slug: "diego-gonzalez", service: "Detailed haircut" },
      { slug: "diego-gonzalez", service: "Simple haircut" },
      { slug: "roger-bandz", service: "Haircut" },
      { slug: "roger-bandz", service: "Gentleman’s haircut" },
      { slug: "nic", service: "Male haircut" },
    ],
  },
  {
    id: "haircut-beard",
    title: "Haircut and beard",
    lede: "The full cleanup. A solid hour for your haircut, beard trim, and razor line-up.",
    items: [
      { slug: "diego-gonzalez", service: "Haircut and beard" },
      { slug: "roger-bandz", service: "Haircut and beard" },
      { slug: "nic", service: "Haircut and beard" },
    ],
  },
  {
    id: "kids",
    title: "Kids",
    lede: "From a toddler’s first haircut to a fresh fade for school—patient, easygoing barbers who make kids feel at home.",
    items: [
      { slug: "roger-bandz", service: "Kid’s haircut" },
      { slug: "nic", service: "Kids’ haircut" },
    ],
  },
  {
    id: "beard",
    title: "Beard, brows, and design",
    lede: "Quick clean-ups between cuts: twenty to thirty minutes for beard work, sharp brows, or a custom design.",
    items: [
      { slug: "diego-gonzalez", service: "Beard trim and work" },
      { slug: "roger-bandz", service: "Beard" },
      { slug: "diego-gonzalez", service: "Eyebrows" },
      { slug: "roger-bandz", service: "Eyebrow shaping" },
      { slug: "diego-gonzalez", service: "Haircut and eyebrows" },
      { slug: "roger-bandz", service: "Design" },
    ],
  },
  {
    id: "chair",
    title: "The longer chair",
    lede: "Kick back with a hot towel shave, black mask, or hair wash—or bring a friend with Diego’s two- and three-haircut deals.",
    items: [
      { slug: "diego-gonzalez", service: "Haircut and black mask" },
      { slug: "diego-gonzalez", service: "Haircut, beard, and black mask" },
      { slug: "diego-gonzalez", service: "Haircut, beard work, and eyebrows" },
      { slug: "diego-gonzalez", service: "Haircut, black mask, and hot towel" },
      { slug: "diego-gonzalez", service: "Haircut, beard, hot towel, and black mask" },
      { slug: "roger-bandz", service: "Full service" },
      { slug: "roger-bandz", service: "Hot towel shave" },
      { slug: "roger-bandz", service: "Hair wash" },
      { slug: "roger-bandz", service: "Black mask" },
      { slug: "diego-gonzalez", service: "Two haircuts" },
      { slug: "diego-gonzalez", service: "Three haircuts" },
      { slug: "diego-gonzalez", service: "After hours" },
    ],
  },
  {
    id: "color",
    title: "Color and perm",
    lede: "Looking for a bigger change? Roger books three- to four-hour sessions for perms, bleaching, and color.",
    items: [
      { slug: "roger-bandz", service: "Perm" },
      { slug: "roger-bandz", service: "Blonde or color" },
    ],
  },
];

export function resolveService(ref: CatalogRef) {
  const barber = getBarber(ref.slug);
  const service = barber?.services.find((item) => item.name === ref.service);
  if (!barber || !service) {
    throw new Error(`Missing service ${ref.service} for ${ref.slug}`);
  }
  return { barber, service };
}
