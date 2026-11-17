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

export type ProjectVideo = {
  youtubeId: string;
  caption?: string;
};

export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: ProjectImage;
  video?: ProjectVideo;
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
      role: "Creative director & lead designer",
      engine: "Unreal Engine 5",
      platform: "PC",
      developmentTime: "4 months (ongoing)",
      teamSize: "3",
      summary:
        "On a team of three, I set the creative direction for **CoilBound** and own the design of its stealth, systems, levels, and story. The throughline is simple rules that give players room to invent their own solutions.",
      designGoals: [
        "Keep stealth tense without slowing the game to a crawl.",
        "Build depth from a few readable interactions, not a crowded ability list.",
        "Let players discover the world and its story through space, routes, and dialogue instead of UI waypoints.",
      ],
      sections: [
        {
          heading: "My role",
          paragraphs: [
            "As **creative director** and **lead designer**, I oversee every design layer of CoilBound: the verbs of play, the story beats, and how those beats land inside the level. I prototype mechanics, spaces, and enemy encounters early, then cut or commit based on what actually feels worth keeping.",
          ],
        },
        {
          heading: "Shadow traversal",
          paragraphs: [
            "I wanted CoilBound to feel like a sneaking game without trapping the player in a slow loop. Pure stealth made the pace drag. Pure action killed the tension. The answer was the **shadow mechanic**: while standing in darkness, the player can become a shadow and slip from one pool of shade to the next.",
            "That single rule kept the rush I wanted and still rewarded staying unseen. It also forced the rest of the game to grow around it. I reworked pieces of the protagonist’s story and reshaped sections of the level so shadow travel felt authored into the world, not bolted on.",
          ],
          video: {
            youtubeId: "kkiRzNmvxxo",
            caption: "Shadow traversal prototype — moving between pools of darkness.",
          },
        },
        {
          heading: "Systemic interactions",
          paragraphs: [
            "After that, I focused on systems that stay simple on the surface and get deep once players start combining them. I studied how *Breath of the Wild*’s chemistry engine turns a few clear rules into dozens of player-authored moments, then designed CoilBound’s own interaction set with the same mindset.",
            "A few of the rules players can invent with: **gas and fire** detonate into explosions; **electricity** can charge and manipulate **ice**; ice freezes water into walkable platforms on the surface; and gas erodes ice on contact. None of those need a special ability wheel—they come from putting elements next to each other.",
            "That work lived in design docs, prototypes, and a long pass of testing what combinations were fun versus noise. To reward curiosity, I built puzzles and spaces that quietly ask for those interactions without spelling out the solution.",
          ],
          video: {
            youtubeId: "4RcEsU_6Muc",
            caption: "Prototype pass of CoilBound’s chemistry-style interactions.",
          },
        },
        {
          heading: "Level design",
          paragraphs: [
            "The level is built for **environmental storytelling** and player agency. Multiple routes cut through the same space, and each one reveals a different slice of the narrative.",
            "Take the main path and you meet enemies and hostages that pull you into a rescue. Take the quieter alley and you find civilians vandalizing the district as revolt; follow that thread and you reach another branch of the same story. The quests are structured so a player can still complete the full narrative, but **how** they arrive at it is their choice.",
            "I also use dialogue and story beats as navigation. Instead of immersion-breaking markers, the level steers you the way *Half-Life* does: through what people say and where the space points you. Early patrols talk about the hostages in places the player cannot miss, so searching for them becomes the first goal without a quest marker saying so.",
          ],
          image: {
            src: "/covers/coilbound-level-layout.png",
            alt: "Top-down CoilBound level layout labeled with the main road route, alley route, river crossing, execution platform, and final tower.",
            caption: "Level layout — main road vs alley routes, encounters, and story beats across the district.",
          },
        },
        {
          heading: "Narrative design",
          paragraphs: [
            "The story stays locked on the protagonist. The city feels like it is on its last chance, and the character carries a self-appointed duty that only they fully believe in—an angel-of-justice impulse closer to modern vigilante fiction than to a clean superhero fantasy. That duty is personal, almost private, which lets the player feel it while the world treats it differently.",
            "To protect player agency, I keep cinematics rare. Story beats land through **scripted events**, environment, and NPC dialogue. Patrol officers speak with contempt; civilians speak as if they have already been ground down. Those voices carry the city’s hierarchy without a cutscene lecture, and the broken streets and people do the rest.",
          ],
          video: {
            youtubeId: "L5_bIZ_1JMY",
            caption: "Scripted narrative beat prototype — story through space and dialogue.",
          },
        },
      ],
    },
    {
      slug: "storm-frame-zero",
      title: "Storm Frame Zero",
      subtitle:
        "An online co-op roguelike space third-person shooter where you fight to protect Earth from Jupiter.",
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
      summary:
        "At **Shadows Optional**, a five-person indie team, I own the gameplay design of **Storm Frame Zero**—weapons, enemy AI, boss encounters, and how that fight holds up from solo runs to online co-op. On a studio this size I also script systems, weigh in on art direction, and help keep production on a testable schedule.",
      designGoals: [
        "Make every fight feel like a coordinated enemy force, not a crowd of solo attackers.",
        "Extend single-player combat into co-op without diluting pressure or unique encounter beats.",
        "Keep roguelike runs varied through mission types and modular weapons, not only harder numbers.",
      ],
      sections: [
        {
          heading: "My role",
          paragraphs: [
            "As the game designer I split my time between the **feel of single-player and multiplayer combat**—iterating weapons, enemy packs, and encounters across each roguelike level—and **scripting** those enemies and bosses so the intended experience actually lands in-engine.",
            "In a studio of five, the role stretches past pure design docs. I give notes on art, jump into programming when a mechanic needs a working prototype, and sit in production meetings so features hit the build when the whole team can playtest them.",
          ],
        },
        {
          heading: "Enemy coordination",
          paragraphs: [
            "To make combat feel battle-forward—and like humanity’s last stand against an army—I focused first on how enemies work **together**. The first pass had units scan nearby allies and sync attack patterns inside a radius. It read as coordinated, but it was too expensive to run.",
            "I replaced that with a **grid-based check** that runs less often, then rebuilt coordination around tactics driven by ally count. The result plays less like loose mobs and more like a hive: denser groups change behavior, pressure stays readable, and the fight sells an organized force without torching performance.",
          ],
        },
        {
          heading: "Co-op extensions",
          paragraphs: [
            "Moving that design into multiplayer meant playtesting the solo rules hard, then extending them instead of inventing a second game. Encounter tactics now orient around the **nearest player**, so each person still feels hunted in their own pocket of the fight while both can set up plays the other can exploit.",
            "The same thinking shaped repairs. Solo, players return to base for a finite set of ammo reloads. In co-op, giving every player that full pool made levels too soft. I made repairs **shared**: the team decides who spends them, and someone has to cover the other while they do. That single constraint raised difficulty back to target and pushed real camaraderie into the loop.",
          ],
        },
        {
          heading: "Enemies and bosses",
          paragraphs: [
            "Every enemy is designed as a **unit inside a squad**, not a standalone punch bag. Dogfighters follow a wing leader and commit in fast, precise groups. Each enemy type gets its own AI profile so like units—and mixed packs—can still coordinate cleanly as the roster scales.",
            "For the first boss I wanted empowerment: their mega-weapon, not another large grunt. An early pass with a small attack set felt thin in playtests. I grew the silhouette to sell authority, then widened the kit—**rocket barrages**, **rifle barrages**, and a **phase-transition stun blast**—so the fight feels expansive and shows the boss harnessing the same storm players fear.",
          ],
        },
        {
          heading: "Roguelike missions",
          paragraphs: [
            "Roguelike levels go stale if every run is only “clear enemies, exit.” We aimed for missions that sell a back-and-forth war: taking the fight toward Jupiter, then feeling the cost of that push.",
            "That meant defend-the-ship missions, hunts against enemy ships and fortresses, and stages built from **wreckage of older fleets**—graveyards of past attempts and enemy stations that mark how far the battle has already traveled. Variety comes from objective and space, not only from spawn tables.",
          ],
        },
        {
          heading: "Weapons and balance",
          paragraphs: [
            "Because the game is a roguelike, weapon design had to stay **modular**: many tools that stay fun alone and stronger in mix-and-match loadouts. That work lived in design docs and repeated playthroughs—tuning type values, cutting weak options, and sharpening keepers like missile variants and the sniper until each run’s kit felt distinct.",
            "Balancing solo against co-op meant raising encounter pressure for more players without flattening the fights that should stay special. Bosses, for example, **scale dynamically with player count** instead of simply spawning a second boss, so the encounter stays unique while the difficulty still tracks the party.",
          ],
        },
        {
          heading: "Production",
          paragraphs: [
            "I also help run the studio clock: keep deadlines honest, land features in builds early enough for full-team playtests, guard against overscope, and support outreach so the project finds people who fit the work. On a five-person team, protecting the design from budget and schedule blowups is part of making the game shippable.",
          ],
        },
      ],
    },
    {
      slug: "coog-interactive",
      title: "Coog Interactive",
      subtitle:
        "A University of Houston community I founded so Houston’s game developers—and the people who want to become them—have a place to gather, learn, and build.",
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
      platform: "University of Houston",
      developmentTime: "Ongoing",
      teamSize: "",
      summary:
        "Game development is still an underappreciated craft in Houston. I founded **Coog Interactive** because immersive arts deserved a real outlet on campus—and because I wanted a community that treats making games as a serious path, not a side hobby.",
      designGoals: [
        "Give students a lasting home for game development at a university that did not have one.",
        "Build a culture of shipping: teams, skills, and games that transfer into industry work.",
        "Widen the circle past Computer Science so Digital Media, Communications, Engineering, and beyond can show up.",
      ],
      sections: [
        {
          heading: "Starting from an idea",
          paragraphs: [
            "It began the way most communities do: one person with a conviction and an empty room. I believed UH needed to celebrate immersive arts, and that students who cared about games needed somewhere to meet each other.",
            "I started recruiting where the energy already was—the game development class—asking peers to help stand the org up. One classmate said yes. My TA connected me with others who had floated the same dream. I reached out, pulled that group together, and we hit the university’s minimum membership to become an official community. Then the real work started: keep it alive long enough to matter.",
          ],
        },
        {
          heading: "A culture worth building",
          paragraphs: [
            "Marketing alone would not hold people. We needed a culture. I studied what worked elsewhere—conversations with game professors and with university clubs that had already sustained this kind of scene—and kept landing on the same idea: **innovation through making**.",
            "Our model became practical on purpose. Help willing members form teams. Teach them how to finish games. Aim those projects toward work that could eventually be commercialized. The point was never only a social hour. It was a bridge from campus skills into the industry, and a longer bet that Houston could grow into a real hub for game development if someone lit the catalyst and kept feeding it.",
          ],
        },
        {
          heading: "Getting people in the door",
          paragraphs: [
            "Ambition does not fill a room by itself. UH is a commuter campus, attention is scarce, and many students were locked on a difficult CS job market that made “games as a career” sound risky. Being known inside Computer Science was not enough when the people we needed lived in other schools I could not casually walk into.",
            "So I ran a real outreach push: flyers, professors, adjacent communities, and anyone who could open a classroom door. Word moved past the building we started in. Students from Digital Media, Communications, and Engineering started showing up. That cross-campus mix is when Coog Interactive stopped feeling like a CS side club and started feeling like a city-facing community.",
          ],
        },
        {
          heading: "Game jams and regular practice",
          paragraphs: [
            "Once we finally had critical mass, I pushed us into **game jams**. That was the breakthrough for engagement—people poured in from across schools, and the energy was too good to spend on a one-off. We followed with more regular events so newcomers were not left excited and stranded: sessions that taught the craft of making games, not only the idea of liking them.",
          ],
        },
        {
          heading: "Industry and the wider city",
          paragraphs: [
            "We also reached past campus into Houston’s working scene—studios and remote industry folks who still call this city home. That opened doors for talks, mentorship, and visibility. Podcasts picked us up. A Houston magazine did too. None of that was the goal by itself; it was proof the community had become real enough for the city to notice.",
            "The moment that still sits with me is simple: members deep in conversation about game development, and people from the industry walking in to speak with them. That was the catalyst I had been trying to start—not a finished hub, but a living room where Houston’s next game developers could find each other.",
          ],
        },
        {
          heading: "What it meant",
          paragraphs: [
            "The relationships from Coog Interactive are some of the best I have. Seeing people light up about the same work that drives me made the lonely early days worth it. It reminded me why I want this career in the first place: games matter more when they are made in community.",
            "Leading the officer team taught me how to market an idea, manage people across different projects, and guide a group without crushing the joy that brought them in. Those leadership habits—and the social craft of starting something this size from nothing—are skills I will carry into every studio floor I walk onto.",
          ],
        },
      ],
    },
    {
      slug: "teaching-assistant",
      title: "Teaching Assistant / Mentor",
      subtitle:
        "Mentored roughly twenty student teams through game design, production, and the craft of finishing a game in four months.",
      cover: {
        src: "/covers/teaching-assistant.png",
        alt: "Public-domain clip art of a video game controller.",
      },
      cardCover: {
        src: "/covers/teaching-assistant.png",
        alt: "Public-domain clip art of a video game controller.",
      },
      role: "Teaching assistant & mentor",
      engine: "",
      platform: "University of Houston",
      developmentTime: "4-month course cycles",
      teamSize: "~20 student projects",
      summary:
        "This role taught me a form of game design you only get by teaching it. Students treated me as a mentor from day one, which forced me to widen my craft fast—and to give advice worth the trust they put in me.",
      designGoals: [
        "Help each team ship the best game they can inside a four-month production window.",
        "Teach design judgment: what to keep, what to cut, and what actually plays.",
        "Give back the spark—treat games as a serious craft students can grow into, not only a class assignment.",
      ],
      sections: [
        {
          heading: "Learning by teaching",
          paragraphs: [
            "The questions started immediately—and they were not polite warmup questions. Students asked about systems I had never touched, genres I had not shipped, and production problems that do not show up in a personal prototype. That pressure was a gift. If I was going to stand in front of eager developers, my answers had to be earned.",
            "So I studied past the edges of my comfort zone: art-direction lectures, technical practice, pipeline habits, and the boring production details that keep a team alive. Mentoring became a second curriculum for me. The more I helped, the more I had to know—and the more game design itself came into focus.",
          ],
        },
        {
          heading: "Guiding twenty projects",
          paragraphs: [
            "I became the throughline mentor for about **twenty different student projects**, meeting teams where they were and walking them toward a finishable scope. After lectures I stayed late with anyone who wanted extra time. I playtested builds, ran blind QA sessions so they could watch honest first reactions, and sat with them on mechanics, dialogue, and art choices that would actually serve the game.",
            "I also sat through rounds of prototype presentations—often ten in a stretch—and gave each team dedicated feedback instead of a generic note. The administrative side of being a TA mattered, but it was never the point. Like the professor, I wanted these developers to feel the beauty of making games, learn a professional way to build them, and leave with something that could even move toward commercialization.",
          ],
        },
        {
          heading: "Production in four months",
          paragraphs: [
            "These projects had a hard clock: **four months** to reach production without dying of ambition. We kept a production checklist every team had to confirm, and I went team-to-team checking what they were missing—tools, milestones, owners—so nobody was stuck guessing what “ready” meant.",
            "A big part of the mentoring was scope discipline: what to build, what not to build, and how to protect the fun while still hitting a shippable vertical. That is design leadership in miniature, repeated twenty times under deadline.",
          ],
        },
        {
          heading: "Docs, craft, and genres",
          paragraphs: [
            "I spent long stretches reviewing **game design documents** and **storyboards**, coaching teams on what makes a GDD useful and what a storyboard should prove if the project wants to stand out. Feedback was rarely “make it cooler.” It was “make this readable, testable, and true to the genre you are in.”",
            "That meant helping students learn the technical side when they were stuck, and helping them learn taste: what tends to work in a genre, what usually fails, and how to steal the right lessons without copying a hollow shell. Design, production, and craft advice had to travel together or the project stalled.",
          ],
        },
        {
          heading: "Becoming T-shaped",
          paragraphs: [
            "The more students leaned on me as a mentor, the more ambitious I got about my own range. I pushed to understand every major seat on a game team well enough to advise it, while going deeper on **game design**—the center of most of these projects. That is how the role made me more **T-shaped**: broad across disciplines, sharp where the design decisions lived.",
            "Giving back to that community—and watching real games come out of it—is why I still cherish the work. Teaching game design did not only help them. It made me a more complete developer: someone who can guide a team, hold a production line, and keep learning on purpose because other people’s games depend on it.",
          ],
        },
      ],
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
        alt: "Babylon's Call title over a desert ziggurat and ruined city skyline.",
      },
      cardCover: {
        src: "/covers/babylons-call.png",
        alt: "Babylon's Call title over a desert ziggurat and ruined city skyline.",
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
