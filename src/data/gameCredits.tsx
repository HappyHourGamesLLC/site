// src/data/gameCredits.ts
export interface GameCredit {
  title: string;
  studio: string;
  year: string;
  imageUrl: string;
  description: string;
  teamMembers: string[];
  link?: string;
}

export const gameCredits: GameCredit[] = [
  {
    title: "Risk of Rain 2",
    studio: "Hopoo Games",
    year: "2020",
    imageUrl: "/images/games/ror2.png",
    description: "A third-person roguelike shooter where players battle hordes of alien monsters on a mysterious planet. Features unique character abilities, procedurally generated levels, and escalating difficulty.",
    teamMembers: ["Carlos Correa"],
    link: "https://www.youtube.com/watch?v=4_UI_gmGCJ8"
  },
  {
    title: "Silent Hill 2",
    studio: "Bloober Team / Ghostpunch Games",
    year: "2024",
    imageUrl: "/images/games/silenthill2.jpg",
    description: "A psychological horror masterpiece following James Sunderland as he searches for his deceased wife in the fog-shrouded town of Silent Hill. Known for its disturbing atmosphere and emotional storytelling.",
    teamMembers: ["Carlos Correa"],
    link: "https://www.youtube.com/watch?v=7f5qac5f3mE"
  },
  {
    title: "Graven",
    studio: "Slipgate Ironworks",
    year: "2023",
    imageUrl: "/images/games/graven.avif",
    description: "A dark fantasy action-adventure FPS inspired by classic 90s shooters. Players wield powerful spells and weapons as they explore a world filled with eldritch horrors and environmental puzzles.",
    teamMembers: ["Edward Gonzalez", "Carlos Correa", "Alex Batista"],
    link: "https://www.youtube.com/watch?v=OgnRXTUYyuo"
  },
  {
    title: "The Witcher IP",
    studio: "CD Projekt Red",
    year: "2023-2024",
    imageUrl: "/images/games/witcher.webp",
    description: "An award-winning open-world RPG following monster hunter Geralt of Rivia. Known for its rich storytelling, complex characters, and beautifully realized fantasy world filled with meaningful player choices.",
    teamMembers: ["Alex Batista"],
    link: ""
  }
];

export default gameCredits;