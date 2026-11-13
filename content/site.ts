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
    greeting: "Hello,\nI'm",
    month: "Nov",
    year: "2026",
    role: "Your current role",
    disciplines: ["Discipline one", "Discipline two"],
    about: [
      "This about section is ready for a short bio. Two or three sentences is the right length: what you do now, where you have been, and what you want the work to show.",
      "Phrases you wrap in the content file are set **heavier**, the way studio names and project titles read on the reference site. **Replace these sentences** when you send your own.",
    ],
    email: "hello@example.com",
    phone: "",
    location: "",
    contactNote:
      "Replace this with a sentence about what you are open to. The address below is the one people will write.",
    links: [
      { label: "LinkedIn", href: "https://example.com/linkedin" },
      { label: "GitHub", href: "https://example.com/github" },
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
      slug: "harbor-line",
      title: "Harbor Line",
      subtitle: "A co-op expedition about reading the weather before you move.",
      cover: {
        src: "/covers/harbor.svg",
        alt: "A red sun sitting on a black horizon, with three pale posts in the foreground.",
      },
      role: "Lead systems designer",
      engine: "Unreal Engine 5",
      platform: "PC",
      developmentTime: "12 weeks",
      teamSize: "6",
      summary:
        "Harbor Line is a two-player expedition along a flooded coast. Sample case study: this page shows how a work project reads once someone clicks the image. I owned the weather system, the shared navigation tools, and the encounter pacing from the first dock to the last lighthouse.",
      designGoals: [
        "Make the forecast something you act on, not a meter you ignore.",
        "Keep both players necessary without locking one of them into a support role.",
        "Let a failed reading cost time, not the whole run.",
      ],
      sections: [
        {
          heading: "What I owned",
          paragraphs: [
            "The coast is a sequence of docks, channels, and one lighthouse. Players share a boat and a paper chart. One person reads the sky. The other commits the boat to a line. Neither view is complete on its own.",
            "I wrote the rules for the forecast, the cost of a bad line, and the way encounters escalate if you arrive late. Programming paired on the prototype. I stayed in the tuning and the encounter sketches.",
          ],
        },
        {
          heading: "The forecast",
          paragraphs: [
            "Early builds put a countdown on the HUD. Players waited it out. The second pass removed the number and left three readable signs: wind on the water, birds leaving a spit, and the color of the near cloud.",
          ],
          image: {
            src: "/covers/harbor-plan.svg",
            alt: "A plan of the route: dock, channel, spit, and lighthouse, with a red path between them.",
            caption: "Route plan. The red line is the committed heading.",
          },
          bullets: [
            "Signs update on a shared clock, so both players see the same sky.",
            "A reading is a choice. You lock a heading, then live with the crossing time.",
            "The lighthouse is the only place a bad reading can be repaired.",
          ],
        },
        {
          heading: "Iteration",
          paragraphs: [
            "Playtests kept stalling at the second channel. The signs were true, but they were too far apart to compare. I moved the bird spit into the same view as the cloud bank and cut one optional inlet that nobody used.",
            "The last week went into the recovery. Missing the lighthouse used to end the run. It now beaches you, costs the chart a tear, and sends you back with a worse boat. Failure stays legible.",
          ],
        },
        {
          heading: "Outcome",
          paragraphs: [
            "Pairs started talking about the sky before they talked about the enemies. That was the result I was tuning for. The sample stops here. Your version can add footage, a build, or the metric you actually moved.",
          ],
        },
      ],
    },
    {
      slug: "red-current",
      title: "Red Current",
      subtitle: "A combat prototype about committing to a strike.",
      cover: {
        src: "/covers/current.svg",
        alt: "A black field cut by a red diagonal band and three pale horizontal lines.",
      },
      role: "Combat designer",
      engine: "Unity",
      platform: "PC",
      developmentTime: "8 weeks",
      teamSize: "4",
      summary:
        "Red Current is a one-room combat prototype. You build speed on a line, then spend it on a single committed strike. This sample shows the same fact row, goals, and write-up you will use for a second work project.",
      designGoals: [
        "Make commitment readable before the hit lands.",
        "Give a missed strike a recovery that is tense, not empty.",
        "Keep the room learnable in under a minute.",
      ],
      sections: [
        {
          heading: "The loop",
          paragraphs: [
            "Three beats: read the opponent's line, commit, recover. A strike that matches their guard breaks it. A strike that misses leaves you on the wrong foot for a full beat.",
          ],
          image: {
            src: "/covers/current-loop.svg",
            alt: "Three labeled boxes in a cycle: Read, Commit, and Recover.",
            caption: "The loop the room is built to teach.",
          },
        },
        {
          heading: "What changed",
          paragraphs: [
            "The first version let you cancel a commit. Nobody felt the cost, so they mashed. Removing the cancel made the first successful read feel like a decision instead of a reflex check.",
          ],
          bullets: [
            "Startup of the strike is long enough to see, short enough to risk.",
            "Recovery is where the opponent gets their turn. It is not a stun for its own sake.",
            "The room has one guard type so the lesson stays singular.",
          ],
        },
      ],
    },
    {
      slug: "field-notes",
      title: "Field Notes",
      subtitle: "A research tool for marking what playtesters actually did.",
      cover: {
        src: "/covers/notes.svg",
        alt: "A pale grid with one red rectangle and a black circle.",
      },
      role: "Designer and researcher",
      engine: "Figma, a small web app",
      platform: "Browser",
      developmentTime: "6 weeks",
      teamSize: "2",
      summary:
        "Field Notes is a lighter sample. Same page, fewer sections. Use this shape when a project needs the facts and a short account, not a long postmortem.",
      designGoals: [
        "Capture a note without leaving the session.",
        "Keep the tags boring and stable so notes stay comparable.",
      ],
      sections: [
        {
          heading: "How it was used",
          paragraphs: [
            "During tests, one person ran the session and the other dropped a pin on a shared timeline: hesitation, delight, break. Tags were a fixed list. Free text stayed optional so the record did not depend on anyone's prose.",
          ],
        },
      ],
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
