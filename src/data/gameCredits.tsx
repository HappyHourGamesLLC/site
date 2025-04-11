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
    title: "Vail VR",
    studio: "AEXLAB",
    year: "2024",
    imageUrl: "/images/games/vailvr.jpg",
    description: "The highest rated virtual reality shooter featuring best-in-class mechanics, precisely tuned interactions, and immersive physics systems. This premium VR combat experience sets the standard for tactical gunplay and movement in virtual environments",
    teamMembers: ["Haczar Criollo"],
    link: "https://www.youtube.com/watch?v=O0THl-8tmPQ"
  },
  {
    title: "Witcher Project Sirus",
    studio: "CD Projekt Red",
    year: "2023-2024",
    imageUrl: "/images/games/witcher.webp",
    description: "A spin-off adventure in the Witcher universe with multiplayer elements and unique storytelling approach. Developed by The Molasses Flood under CD Projekt Red's guidance, Project Sirius blends the dark fantasy world of The Witcher with innovative gameplay mechanics.",
    teamMembers: ["Alex Batista"],
    link: ""
  }
];

export default gameCredits;