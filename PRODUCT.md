# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro on Cloudflare Workers. The user left the stack open and required a Cloudflare deploy. Astro is the fit because the site is a marketing landing page plus one indexable page per barber, with no app backend.

## Users

A person in or near Clovis, California who is considering a haircut and needs to see what the shop offers, how long a service takes, and how to book a specific barber. That includes adults, parents booking for kids, and anyone who wants to know they will be welcomed before they walk in.

## Product Purpose

A public website for Prolific Cuts at 493 W Shaw Ave, Ste A, Clovis, CA 93612. It sends visitors to the shop’s Square booking pages and to an individual page for each barber who currently books under the shop. Success is a visitor who understands the services and durations, picks a barber, and leaves for that barber’s Square page.

## Positioning

Prolific Cuts is a shared shop where each barber keeps their own book. The site’s job is to make that easy to see: one shop, separate barbers, a single Square menu of services and times, and a room that is meant to be welcoming to every kind of person who needs a cut.

## Operating Context

Visitors arrive comparing shops, often on a phone, and need an address, hours, a service with a duration, and a booking link. Booking happens on Square, not on this site. Walk-ins happen at the shop; public reviews say appointments are the safer plan when the room is busy. Each barber’s bookable hours live on their Square profile and do not match a single shop-wide day.

## Capabilities and Constraints

- Deployable to Cloudflare Workers.
- Primary booking links go to Square Appointments for this address: shop root, per-barber `/staff/{id}`, and per-service links.
- A team section links to an on-site page for each confirmed barber. Those pages link out to that barber’s Square book.
- Shop phone: (559) 939-8704.
- Shop hours, from directories that agree with each other: Monday 10:00 AM–6:00 PM, Tuesday–Saturday 8:00 AM–6:00 PM, Sunday 9:00 AM–4:00 PM. One directory lists Monday from 8:00 AM. Show the agreed hours and mark Monday’s open time as needing confirmation.
- Do not use the Square Appointments account named “Prolific cutz” (mobile service, phone (318) 953-5354, Central time). That is a different business.
- The Google listing’s website, https://pc-108642.square.site/, is a Square online cart titled “PC” and did not publish a service menu. Link it as the listed website, not as the booking menu. Booking is https://book.squareup.com/appointments/ffx6wytyanadvd/location/A9J0R0GQAC0G3/services
- Prices and durations are the Square shop menu. Starting prices can change. Do not invent a shop-wide promotional price.
- Barber bios and Square photo URLs come from a static snapshot of Square team-member booking profiles (`src/data/square/teamMemberBookingProfiles.json`), shaped like ListTeamMemberBookingProfiles so a later build-time API fetch can replace the file. Display-name override: always show “Peda” (Square’s first-name field says “Pera”). Prefer local photos in `public/barbers`.
- Square has no reviews API. Shop-level Google reviews live in one config value (`googleReviews` in `src/data/shop.ts`): URL, optional rating, optional count. Do not invent a rating or count. Drop per-barber rating chips; Google ratings are shop-level.
- Where a fact is missing, leave a clearly marked placeholder. Do not invent bios, last names, likenesses, reviews, or testimonials.

## Brand Commitments

- The business name on the shop is Prolific Cuts.
- The site must read as customer service first, and as extremely welcoming to every kind of person who might need a cut. That is a positioning commitment from the client, not a clinical certification. Do not add an “autism-friendly” or similar badge unless the shop states it.
- Visual commitment, chosen by the client: the Beard X barbershop layout, played straight. Near-black field, cream bands, heavy condensed caps, a sand book button, and a centered full-bleed shop film on the first screen. Do not add a shop, cart, newsletter, invented portraits, or a twist. Ruffians (ruffians.co.uk) remains the earlier photography bar they named.
- Earlier note, kept as evidence of the shop rather than as the site’s look: reviews describe a bright, clean, spacious room. There is no logo file. The welcome still has to be true in the copy and in who can book.
- Owner: Peda Thik. Square’s booking page lists him as a bookable barber. The staff record’s first-name field says “Pera”; always display Peda. His personal Instagram is https://www.instagram.com/pedacuts/. The shop account is https://www.instagram.com/prolificcutsbarbershop/ (Prolific Cuts, 493 W Shaw Ave, about 4,633 followers on 16 October 2026). Do not use https://www.instagram.com/prolificcuts/ — that profile is “Prolific Cuts & Styles” and is a different shop. The homepage “From the chair” stills are from the shop account’s grid on that date. Do not turn the Fresno Bee graphics on that grid into a site-wide award badge.

## Evidence on Hand

Shop

- Address: 493 W Shaw Ave, Ste A, Clovis, CA 93612.
- Phone: (559) 939-8704. A second number, (559) 668-3998, appears on one older directory only. Do not feature it.
- Directories report a Google rating around 4.9; review counts on those sites disagree (about 99–147). Do not publish a number on the site until a live Google Maps listing is confirmed. The reviews link is a Maps search for the shop name and address.
- Accessibility reported by directories: wheelchair-accessible parking, entrance, and restroom. Credit and debit cards accepted.
- Public reviews describe patience with children, including toddlers and first haircuts, a clean room, and barbers who talk people through the cut.
- Booking: https://book.squareup.com/appointments/ffx6wytyanadvd/location/A9J0R0GQAC0G3/services

Square Appointments staff at https://book.squareup.com/appointments/ffx6wytyanadvd/location/A9J0R0GQAC0G3/services, snapshot 20 October 2026. Everyone books here. Roger’s Square last name is Saldivar; the on-site page slug is still `roger-bandz`.

- Abel Zamora, Baba Vang, Devin Yang, Diego Gonzalez, Nic Tabiolo, Peda Thik, Roger Saldivar, Ryan Sanchez, Tyler Ou.
- Square services, starting prices: men’s haircut $30 / 45 min, kids’ haircut $30 / 45 min, haircut and beard $40 / 1 hour, all nine. Hot towel $50 / 45 min and full Prolific service $75 / 2 hours, everyone except Nic and Ryan. Before or after hours $60 / 45 min, Peda and Abel only.
- Baba has a photo and no bio on that page. The site uses a short neutral line until Square publishes one.
- Services that used to live only on other booking menus (perms, color/bleach, custom designs, multi-haircut deals, à la carte black mask / hair wash / eyebrows) are not listed unless they appear on Square.

## Product Principles

- Send people to a real barber’s book. The site does not pretend to take the appointment.
- Show a service with its time. A price without a duration fails the visit.
- Welcome is a fact about how the room treats people, shown through who can book and what parents already say, not through a slogan stack.
- Missing facts stay visibly missing.
- One shop, one Square menu. Do not invent a second price list.

## Accessibility & Inclusion

The shop’s public listings describe a wheelchair-accessible entrance, parking, and restroom. The client asked the site to make clear that the experience is welcoming to every kind of person who needs a cut, including children and people who are new to a barbershop. The site itself must be usable with a keyboard, readable type, and text that is not carried by color alone.
