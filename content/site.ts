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
        src: "/covers/coilbound.png",
        alt: "CoilBound title plate: bronze letters on scratched dark metal.",
      },
      cardCover: {
        src: "/covers/coilbound.png",
        alt: "CoilBound title plate: bronze letters on scratched dark metal.",
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
        src: "/covers/coog-interactive.png",
        alt: "Coog Interactive mark: a red and black cougar head dissolving into cyan circuit lines.",
      },
      cardCover: {
        src: "/covers/coog-interactive.png",
        alt: "Coog Interactive mark: a red and black cougar head dissolving into cyan circuit lines.",
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
        src: "/covers/teaching-assistant.png",
        alt: "Public-domain clip art of a video game controller.",
      },
      cardCover: {
        src: "/covers/teaching-assistant.png",
        alt: "Public-domain clip art of a video game controller.",
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
      slug: "procedural-animation",
      title: "Research Assistant: Procedural Animation",
      subtitle:
        "Researched how procedural animation on colossal entities affects immersion and realism in virtual environments.",
      cover: {
        src: "/covers/teaching-assistant.png",
        alt: "Public-domain clip art of a video game controller.",
      },
      cardCover: {
        src: "/covers/teaching-assistant.png",
        alt: "Public-domain clip art of a video game controller.",
      },
      role: "Research assistant",
      engine: "",
      platform: "",
      developmentTime: "",
      teamSize: "",
      summary: "",
      designGoals: [],
      sections: [],
    },
    {
      slug: "nebula-game-engine",
      title: "Nebula Game Engine",
      subtitle:
        "Built a custom C++ game engine with framework-agnostic systems, including rendering pipelines for OpenGL and Vulkan.",
      cover: {
        src: "/covers/nebula-engine.png",
        alt: "Nebula engine debug view: blue blocks on a red ground with wireframe bounds.",
      },
      cardCover: {
        src: "/covers/nebula-engine.png",
        alt: "Nebula engine debug view: blue blocks on a red ground with wireframe bounds.",
      },
      role: "Engine programmer",
      engine: "C++",
      platform: "PC",
      developmentTime: "",
      teamSize: "",
      summary: "",
      designGoals: [],
      sections: [],
    },
    {
      slug: "babylons-call",
      title: "Babylon's Call",
      subtitle:
        "A 2D Souls-like platformer with pixel art, set in the Tower of Babel.",
      cover: {
        src: "/covers/babylons-call.png",
        alt: "Babylon's Call title plate in pixel art on cracked parchment.",
      },
      cardCover: {
        src: "/covers/babylons-call.png",
        alt: "Babylon's Call title plate in pixel art on cracked parchment.",
      },
      role: "Game designer",
      engine: "",
      platform: "",
      developmentTime: "",
      teamSize: "",
      summary: "",
      designGoals: [],
      sections: [],
    },
    {
      slug: "stealing-christmas",
      title: "Stealing Christmas",
      subtitle:
        "A 2D top-down horror game about a Grinch stealing Christmas. Took second place in the game jam it entered.",
      cover: {
        src: "/covers/stealing-christmas.png",
        alt: "Stealing Christmas title over a dark forest and aurora sky.",
      },
      cardCover: {
        src: "/covers/stealing-christmas.png",
        alt: "Stealing Christmas title over a dark forest and aurora sky.",
      },
      role: "Game designer",
      engine: "",
      platform: "",
      developmentTime: "",
      teamSize: "",
      summary: "",
      designGoals: [],
      sections: [],
    },
  ] satisfies Project[],
};

export function getWorkProject(slug: string) {
  return site.work.find((project) => project.slug === slug);
}

export function getPersonalProject(slug: string) {
  return site.personal.find((project) => project.slug === slug);
}
