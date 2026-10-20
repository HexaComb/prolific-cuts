import { bookingProfileFor } from "./square/bookingProfiles";

export type Barber = {
  slug: string;
  teamMemberId: string;
  name: string;
  shortName: string;
  square: string;
  photo: string;
  instagram?: string;
  bio: string;
};

const squareRoot =
  "https://book.squareup.com/appointments/ffx6wytyanadvd/location/A9J0R0GQAC0G3";

function squareStaff(id: string) {
  return `${squareRoot}/staff/${id}`;
}

/**
 * Shop-level Google reviews. Square has no reviews API, so this is the only
 * rating on the site. Set `rating` (e.g. "4.9") and `count` when a live Maps
 * listing is confirmed. Leave them null to show a link with no number.
 */
export const googleReviews = {
  url: "https://www.google.com/maps/search/?api=1&query=Prolific+Cuts%2C+493+W+Shaw+Ave+Ste+A%2C+Clovis%2C+CA+93612",
  rating: null as string | null,
  count: null as number | null,
};

export function googleReviewsLabel() {
  const { rating } = googleReviews;
  return rating ? `★ ${rating} on Google` : "Google reviews";
}

export function googleReviewsDetail() {
  const { count } = googleReviews;
  return count != null ? `${count} reviews on Google` : "Read reviews on Google";
}

export const shop = {
  name: "Prolific Cuts",
  address: "493 W Shaw Ave, Ste A",
  locality: "Clovis, CA 93612",
  phone: "(559) 939-8704",
  phoneHref: "tel:+15599398704",
  maps: "https://maps.google.com/?q=493+W+Shaw+Ave+Ste+A+Clovis+CA+93612",
  square: "https://pc-108642.square.site/",
  squareAppointments: `${squareRoot}/services`,
  googleReviews,
  hours: [
    ["Monday", "10:00 a.m.–6:00 p.m."],
    ["Tuesday–Saturday", "8:00 a.m.–6:00 p.m."],
    ["Sunday", "9:00 a.m.–4:00 p.m."],
  ] as const,
  priceNote: "Starting prices as listed on Square. They can change.",
};

const localPhotos: Record<string, string> = {
  "abel-zamora": "/barbers/abel-zamora.jpg",
  "baba-vang": "/barbers/baba-vang.jpg",
  "devin-yang": "/barbers/devin-yang.jpg",
  "diego-gonzalez": "/barbers/diego-gonzalez.jpg",
  nic: "/barbers/nic.jpg",
  "peda-thik": "/barbers/peda-thik.jpg",
  "roger-bandz": "/barbers/roger-bandz.jpg",
  "ryan-sanchez": "/barbers/ryan-sanchez.jpg",
  "tyler-ou": "/barbers/tyler-ou.jpg",
};

function barberPhoto(slug: string, squarePhotoUrl: string | null) {
  return localPhotos[slug] ?? squarePhotoUrl ?? "";
}

function barberFromSquare(input: {
  slug: string;
  teamMemberId: string;
  shortName: string;
  instagram?: string;
}): Barber {
  const profile = bookingProfileFor(input.teamMemberId);
  if (!profile.description) {
    throw new Error(`Missing bio for ${input.slug}`);
  }
  return {
    slug: input.slug,
    teamMemberId: input.teamMemberId,
    name: profile.display_name,
    shortName: input.shortName,
    square: squareStaff(input.teamMemberId),
    photo: barberPhoto(input.slug, profile.profile_image_url),
    instagram: input.instagram,
    bio: profile.description,
  };
}

export const barbers: Barber[] = [
  barberFromSquare({
    slug: "diego-gonzalez",
    teamMemberId: "urj2w30eu5y5hf",
    shortName: "Diego",
    instagram: "https://www.instagram.com/diegos_cutz",
  }),
  barberFromSquare({
    slug: "roger-bandz",
    teamMemberId: "fwow3m4x84v0av",
    shortName: "Roger",
  }),
  barberFromSquare({
    slug: "nic",
    teamMemberId: "q6iq1vqydsnh3i",
    shortName: "Nic",
  }),
  barberFromSquare({
    slug: "abel-zamora",
    teamMemberId: "qp7n4f35o9peok",
    shortName: "Abel",
  }),
  barberFromSquare({
    slug: "baba-vang",
    teamMemberId: "jha41c8j1vomw8",
    shortName: "Baba",
  }),
  barberFromSquare({
    slug: "devin-yang",
    teamMemberId: "b7osilh2mx8t94",
    shortName: "Devin",
  }),
  barberFromSquare({
    slug: "peda-thik",
    teamMemberId: "ju4ne94ja9cby3",
    shortName: "Peda",
    instagram: "https://www.instagram.com/pedacuts/",
  }),
  barberFromSquare({
    slug: "ryan-sanchez",
    teamMemberId: "5wnjvpjybeyc2r",
    shortName: "Ryan",
  }),
  barberFromSquare({
    slug: "tyler-ou",
    teamMemberId: "qxvkirxf8dlfli",
    shortName: "Tyler",
  }),
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
