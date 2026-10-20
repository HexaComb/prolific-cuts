/**
 * Square Bookings team-member profiles used for barber names, bios, and
 * fallback photos. Today this is a static snapshot of the public booking
 * page. Swap `snapshot` for a build-time ListTeamMemberBookingProfiles
 * response and leave the rest of the site alone.
 */
import snapshot from "./teamMemberBookingProfiles.json";

export type TeamMemberBookingProfile = {
  team_member_id: string;
  description: string | null;
  display_name: string;
  is_bookable: boolean;
  profile_image_url: string | null;
};

/** Square's first-name field for this team member is "Pera" — a typo. */
const displayNameOverrides: Record<string, string> = {
  ju4ne94ja9cby3: "Peda Thik",
};

/** Baba has no Square bio. Neutral line until one is published. */
const descriptionFallbacks: Record<string, string> = {
  jha41c8j1vomw8: "Baba cuts at Prolific Cuts on Shaw Ave in Clovis.",
};

export const teamMemberBookingProfiles =
  snapshot.team_member_booking_profiles as TeamMemberBookingProfile[];

export function bookingProfileFor(teamMemberId: string): TeamMemberBookingProfile {
  const profile = teamMemberBookingProfiles.find(
    (member) => member.team_member_id === teamMemberId,
  );
  if (!profile) {
    throw new Error(`Missing Square booking profile for ${teamMemberId}`);
  }
  return {
    ...profile,
    display_name: displayNameOverrides[teamMemberId] ?? profile.display_name,
    description: profile.description?.trim() || descriptionFallbacks[teamMemberId] || null,
  };
}
