export type InstagramPost = {
  src: string;
  href: string;
  alt: string;
  caption: string;
  position: string;
};

/** Stills from https://www.instagram.com/prolificcutsbarbershop/ as of 16 October 2026. */
export const instagram = {
  handle: "@prolificcutsbarbershop",
  href: "https://www.instagram.com/prolificcutsbarbershop/",
  posts: [
    {
      src: "/instagram/team.jpg",
      href: "https://www.instagram.com/prolificcutsbarbershop/p/C_TuVSUyE0g/",
      alt: "The Clovis Roundup page “Local barbers help cut back-to-school costs,” with the Prolific Cuts team in white shirts.",
      caption: "The team, in the Clovis Roundup.",
      position: "center 22%",
    },
    {
      src: "/instagram/leo.jpg",
      href: "https://www.instagram.com/pedacuts/reel/DeVt452i1TW/",
      alt: "A smiling boy in a red cape with a fresh fade, in the shop.",
      caption: "It’s more than just a haircut.",
      position: "center 22%",
    },
    {
      src: "/instagram/braids.jpg",
      href: "https://www.instagram.com/diegos_cutz/reel/DeVJvfUyJPF/",
      alt: "A taper being lined under cornrow braids, with a gold clipper and a blue glove.",
      caption: "A taper under the braids.",
      position: "center 42%",
    },
    {
      src: "/instagram/taper.jpg",
      href: "https://www.instagram.com/diegos_cutz/reel/DeTHm8cM2xg/",
      alt: "Side view of a short dark fade, in a red and white checkered cape.",
      caption: "A fade in the chair.",
      position: "center 58%",
    },
    {
      src: "/instagram/shop.jpg",
      href: "https://www.instagram.com/prolificcutsbarbershop/reel/DcIefURo_O6/",
      alt: "The Prolific Cuts storefront at dusk, barber pole lit, shop name on the plaza sign.",
      caption: "The pole and the sign on Shaw.",
      position: "center 88%",
    },
    {
      src: "/instagram/family.jpg",
      href: "https://www.instagram.com/pedacuts/reel/DbMN5y5yKug/",
      alt: "A boy smiling beside the chair while a baby in a blue cape gets a haircut.",
      caption: "Diego, and a first cut for the baby.",
      position: "center 78%",
    },
  ] satisfies InstagramPost[],
};
