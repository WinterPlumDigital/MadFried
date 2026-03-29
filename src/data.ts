export type Project = {
  title: string;
  type: string;
  role?: string;
  youtubeId?: string;
};

export const portfolioData: Record<number, Project[]> = {
  2025: [
    { title: "Dancing With Myself, Single Shot Project", type: "Music Video", role: "Director of Photography + Camera Operator", youtubeId: "pI4aBPVFTdU" },
    { title: "MIRA Student Short Film", type: "Short Film", role: "Director of Photography", youtubeId: "90CZyy651Ts" },
    { title: "Sultans of Swing Cover (Live Music Video)", type: "Live Music Video", role: "Camera Operation", youtubeId: "A-68jnP_vqE" },
    { title: "Tush Cover (Live Music Video)", type: "Live Music Video", role: "Camera Operation", youtubeId: "c4jmG69QI64" },
    { title: "Breakup Song Cover (Live Music Video)", type: "Live Music Video", role: "Camera Operation", youtubeId: "s-izRq7bYSY" },
    { title: "Peaceful Easy Cover (Live Music Video)", type: "Live Music Video", role: "Camera Operation", youtubeId: "vqBVwf15reA" },
    { title: "Jumpin Jack Cover (Live Music Video)", type: "Live Music Video", role: "Camera Operation", youtubeId: "W5UCSc8q_kg" },
  ],
  2024: [
    { title: "Exquisite Corpse 9", type: "Experimental", role: "Director of Photography", youtubeId: "ZBGd-6TneZM" },
  ],
  2023: [
    { title: "Kiss Her", type: "Short Film", role: "Assistant Director + Production Assistant", youtubeId: "WufCNPYDSsU" },
  ],
};

export const skills = [
  "Cinematography",
  "Video Editing",
  "Scriptwriting",
  "Live Event Filming",
  "Music Video Production",
  "Storyboarding",
];
