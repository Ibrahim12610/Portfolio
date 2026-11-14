/**
 * Portfolio copy. Replace the sample entries with your own.
 * To add a project: copy an object in `work` or `personal`,
 * give it a new slug, and drop a cover image in `public/covers`.
 * Wrap words in **double asterisks** to set them heavier.
 */

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: ProjectImage;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  cover: ProjectImage;
  /** Shown on the home card only. The project page keeps `cover`. */
  cardCover?: ProjectImage;
  role: string;
  engine: string;
  platform: string;
  developmentTime: string;
  teamSize: string;
  summary: string;
  designGoals: string[];
  sections: ProjectSection[];
};

export type ResumeRole = {
  organization: string;
  title: string;
  dates: string;
  location?: string;
  points: string[];
};

export type ResumeSchool = {
  school: string;
  credential: string;
  dates: string;
  detail?: string;
};

export const site = {
  profile: {
    name: "Ibrahim Faisal",
    greeting: "Hi,\nI'm",
    month: "Nov",
    year: "2026",
    role: "Game designer",
    disciplines: ["Gameplay designer", "Level designer"],
    portrait: "/ibrahim.jpg",
    about: [
      "I'm a game designer on **Storm Frame Zero** at **Shadows Optional**. I'm also designing **CoilBound**, an indie game.",
      "I'm graduating from the **University of Houston** with a computer science degree focused on game design and development. I previously researched procedural animation, and as a teaching assistant I mentor students while they produce games.",
      "I care about game development and the community around it. I founded **Coog Interactive** to grow that community in Houston, and my goal is to make games that become global phenomena and show how much this industry matters to culture.",
    ],
    email: "faisalibrahim610@gmail.com",
    phone: "",
    location: "",
    contactNote:
      "I'm always looking to build new relationships, meet more people, and find new opportunities. I look forward to hearing from you.",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ibrahim-faisal-475a74292/",
      },
    ],
  },
  resume: {
    pdf: "",
    summary:
      "A one-line resume summary goes here. Say what you do and the kind of work you want next.",
    experience: [
      {
        organization: "Studio or company",
        title: "Role title",
        dates: "2024 — Present",
        location: "City",
        points: [
          "One concrete thing you owned, with the outcome if you have it.",
          "Another line about the work, the team, or the constraint you designed around.",
          "A third line is enough. Keep each one to a single idea.",
        ],
      },
      {
        organization: "Earlier studio",
        title: "Earlier role",
        dates: "2022 — 2024",
        location: "City",
        points: [
          "What you made, who it was for, and what changed because of it.",
          "A tool, a method, or a collaboration worth naming.",
        ],
      },
    ] satisfies ResumeRole[],
    education: [
      {
        school: "School name",
        credential: "Degree or program",
        dates: "2018 — 2022",
        detail: "Honors, focus, or a line of context.",
      },
    ] satisfies ResumeSchool[],
    skills: [
      { group: "Tools", items: "Tool, tool, tool" },
      { group: "Practice", items: "Skill, skill, skill" },
    ],
    awards: [
      "Year — Award or recognition",
      "Year — Talk, publication, or exhibition",
    ],
  },
  work: [
    {
      slug: "coilbound",
      title: "CoilBound",
      subtitle: "A narrative-driven steampunk RPG, made in Unreal Engine 5.",
      cover: {
        src: "/covers/current.svg",
        alt: "A black field cut by a red diagonal band and three pale horizontal lines.",
      },
      role: "Game designer",
      engine: "Unreal Engine 5",
      platform: "",
      developmentTime: "",
      teamSize: "",
      summary: "",
      designGoals: [],
      sections: [],
    },
    {
      slug: "storm-frame-zero",
      title: "Storm Frame Zero",
      subtitle:
        "A co-op space third-person shooter where you fight to protect Earth from Jupiter.",
      cover: {
        src: "/covers/harbor.svg",
        alt: "A red sun sitting on a black horizon, with three pale posts in the foreground.",
      },
      cardCover: {
        src: "/covers/storm-frame-zero.png",
        alt: "Stormframe Zero key art: a red mech beside the title and the line When Calisto cries, so do the stars.",
      },
      role: "Game designer",
      engine: "Unity",
      platform: "PC",
      developmentTime: "11 months (ongoing)",
      teamSize: "5",
      summary: "",
      designGoals: [],
      sections: [
        {
          heading: "My role",
          paragraphs: [
            "I am the game designer on **Storm Frame Zero** at **Shadows Optional**. On a team of five, I design how the co-op fight plays: the combat, the enemies, and the hazards players deal with together while protecting Earth from Jupiter.",
          ],
        },
        {
          heading: "My contributions",
          bullets: [
            "Designed and implemented enemy and boss AI.",
            "Designed and implemented networked hazards and other level elements.",
            "Designed and implemented melee combat.",
          ],
        },
      ],
    },
    {
      slug: "coog-interactive",
      title: "Coog Interactive",
      subtitle:
        "A University of Houston community I founded for Houston's game developers to gather, learn, and grow an overlooked local industry.",
      cover: {
        src: "/covers/notes.svg",
        alt: "A pale grid with one red rectangle and a black circle.",
      },
      role: "Founder",
      engine: "",
      platform: "",
      developmentTime: "",
      teamSize: "",
      summary: "",
      designGoals: [],
      sections: [],
    },
    {
      slug: "teaching-assistant",
      title: "Teaching Assistant / Mentor",
      subtitle:
        "Mentored multiple teams in game design and the production pipelines of modern games.",
      cover: {
        src: "/covers/current-loop.svg",
        alt: "Three labeled boxes in a cycle.",
      },
      role: "Teaching assistant",
      engine: "",
      platform: "",
      developmentTime: "",
      teamSize: "",
      summary: "",
      designGoals: [],
      sections: [],
    },
  ] satisfies Project[],
  personal: [
    {
      slug: "kitchen-radio",
      title: "Kitchen Radio",
      subtitle: "A weekend instrument that only plays while you are in the room.",
      cover: {
        src: "/covers/radio.svg",
        alt: "Concentric black circles on a pale ground, with a red center.",
      },
      role: "Solo",
      engine: "The browser, Web Audio",
      platform: "Browser",
      developmentTime: "A weekend",
      teamSize: "1",
      summary:
        "Personal projects use the same page as the work. Kitchen Radio is a sample of something less official: a small instrument, a jam, a study. Clicking the image opens this same write-up.",
      designGoals: [
        "Sound should stop when you leave, so the piece does not become furniture.",
        "One gesture, one result. No mixer.",
      ],
      sections: [
        {
          heading: "The rule",
          paragraphs: [
            "A microphone watches the room. While it hears you, a slow chord holds. When the room goes quiet, the chord releases. There is nothing to click. Being there is the input.",
          ],
        },
      ],
    },
    {
      slug: "night-market",
      title: "Night Market",
      subtitle: "A two-night prototype about browsing without a map.",
      cover: {
        src: "/covers/market.svg",
        alt: "A black skyline of pale vertical bars, one of them red.",
      },
      role: "Designer and programmer",
      engine: "Godot",
      platform: "PC",
      developmentTime: "2 days",
      teamSize: "1",
      summary:
        "Night Market is the second personal slot. Stalls face away from a main path. You find them by sound and by what other shoppers are carrying, not by an icon on a minimap.",
      designGoals: [
        "Hide the full layout on purpose.",
        "Make a purchase leave a trace another stall can react to.",
      ],
      sections: [
        {
          heading: "What I kept",
          paragraphs: [
            "The map is three alleys. I cut a crafting system that ate the second night and left the carrying trace: buy spices, and the cook down the alley calls out a different dish. Small, readable, done.",
          ],
        },
      ],
    },
  ] satisfies Project[],
};

export function getWorkProject(slug: string) {
  return site.work.find((project) => project.slug === slug);
}

export function getPersonalProject(slug: string) {
  return site.personal.find((project) => project.slug === slug);
}
