/**
 * Portfolio copy. Replace the sample entries with your own.
 * To add a project: copy an object in `work` or `lab`,
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
  /** Hero image on the case-study page. Omit to skip (e.g. trailer-only). */
  cover?: ProjectImage;
  /** Shown on the home card only. Falls back to `cover` when unset. */
  cardCover?: ProjectImage;
  role: string;
  engine: string;
  platform: string;
  developmentTime: string;
  teamSize: string;
  summary: string;
  /** Trailer shown after the summary, before the cover image. */
  trailer?: ProjectVideo;
  /** Multiple hero videos (e.g. A/B). Shown side by side when there are two+. */
  trailers?: ProjectVideo[];
  designGoals: string[];
  sections: ProjectSection[];
  links?: { label: string; href: string }[];
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
      "I'm graduating from the **University of Houston** with a computer science degree focused on game design and development. I completed undergraduate research on procedural animation for colossal entities, and as a teaching assistant I mentor students while they produce games.",
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
        "Game development is still an underappreciated craft in Houston. I founded **Coog Interactive** because immersive arts deserved a real outlet on campus—and because I wanted a community that treats making games as a serious path.",
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
  lab: [
    {
      slug: "procedural-animation",
      title: "Research Assistant: Procedural Animation",
      subtitle:
        "Undergraduate research on how procedural animation for colossal entities changes realism and immersion in virtual environments.",
      cardCover: {
        src: "/covers/procedural-animation.svg",
        alt: "A pale triangle with a red joint and fading motion lines on a dark field.",
      },
      role: "Research assistant",
      engine: "",
      platform: "University of Houston",
      developmentTime: "Summer research grant",
      teamSize: "Faculty-advised solo build",
      summary:
        "Playing games like *God of War* and *Shadow of the Colossus*, I kept noticing that colossal encounters usually live on flat arenas. I wanted to know what happens to realism when a giant **procedurally adapts** to uneven terrain. That curiosity became a funded undergraduate research project with a professor who helped me see it through.",
      trailers: [
        {
          youtubeId: "NdfHJ-mie5Y",
          caption: "Colossal A.",
        },
        {
          youtubeId: "mM3cCfmMiII",
          caption: "Colossal B.",
        },
      ],
      designGoals: [
        "Isolate procedural animation as the variable—not a whole game’s worth of noise.",
        "Build an IK solver that keeps colossal feet and arms planted without breaking the body.",
        "Measure whether that motion changes how people rate realism and immersion.",
      ],
      sections: [
        {
          heading: "The question",
          paragraphs: [
            "Colossal enemies are often staged on level ground. The level design works, but the body rarely has to negotiate real terrain. I wanted to test a different premise: if a giant’s motion adapted to slopes, bumps, and walls, would players feel the world as more real?",
            "I joined an undergraduate research program, found a professor willing to advise the idea, and received a **summer grant** to build and study it. The first instinct was to wrap the whole question in a game. That would have flooded the study with combat, camera, and content variables. We cut that ambition on purpose and scoped to a survey where the only meaningful difference was the colossal entity moving through environments **with and without** the procedural layer.",
          ],
        },
        {
          heading: "Building the foot solver",
          paragraphs: [
            "With scope locked, I started on the **IK solver**—and fell straight into the math of procedural animation. After enough research to start building, I wrote a solver for the colossal’s feet so they could conform to bumpy ground.",
            "The first discovery was blunt: rotating and sliding foot bones to match terrain is not enough. The feet could plant, but the legs stretched and broke. I had to bring the knees and thighs into the solve. More research led to a method that used **raycasts** to drive bone targets from detection deltas, so the whole chain adapted instead of only the contact point. That fixed the idle foot problem.",
          ],
        },
        {
          heading: "Baking procedure onto animation",
          paragraphs: [
            "Idle was not enough. The solver had to survive real locomotion. We landed on a hybrid that kept authored animation as the base and **baked procedural correction on top**—authored motion for performance, procedure for terrain.",
            "Walking exposed new failures: the solve would sink too deep into the ground or float too high because step height was not accounted for in the procedural pass. With my professor’s guidance and another dive into animation math I was still learning, I optimized the solver so locomotion stayed stable across uneven ground. That closed part one of the research.",
          ],
        },
        {
          heading: "Arm bracing",
          paragraphs: [
            "In the time left, I pushed for arms. Walking beside giant walls, the colossal should brace to feel organic. Material on arm-based procedural animation was thinner than for feet, so I started by treating arms like the foot solve. Hands could brace—but the mesh broke because the bones did not respect stretch limits.",
            "I changed the approach so arms worked through the **elbows**, pushing back through the chain to keep bracing inside natural arm motion instead of tearing the body. Once bracing held, keeping that solve consistent while the body moved was simpler than the foot locomotion problem had been.",
          ],
        },
        {
          heading: "Measuring immersion",
          paragraphs: [
            "We then ran an **anonymous A/B survey**. Participants watched one of two clips of the same environments—**with** and **without** the procedural layer—without being told which version they had. Both groups answered the **same questions**, so the only controlled difference was whether the colossal body was adapting. Results favored the procedural build. Immersion and realism scores still took a hit from greybox assets and limited polish—we had deliberately stripped the look so people would judge the IK, not the art, and that tradeoff showed up in the data.",
            "Even with that caveat, the signal was clear: procedural adaptation on a colossal body **did** change how people rated realism and immersion in the virtual environment. The study answered the question we scoped. The larger design dream—colossal enemies that treat the whole level as dynamic terrain—is still the north star if I get to push this further.",
          ],
        },
        {
          heading: "What I took from it",
          paragraphs: [
            "This was a rare chance to flex technical craft on something I have cared about for years as a fan of colossal encounters. I learned how IK math behaves under animation, how immersion studies think about realism, and how undergraduate research actually runs—including the rigor of **IRB** approval and iterative methods under a grant timeline.",
            "Most of all, it rewarded going after a problem nobody around me was already solving: notice a gap in how games stage giants, turn it into a measurable question, and build the technical path until the data could speak.",
          ],
        },
      ],
    },

    {
      slug: "nebula-game-engine",
      title: "Nebula Game Engine",
      subtitle:
        "A from-scratch C++ engine with a layered architecture, OpenGL/Vulkan-ready rendering, a Qt editor, and a sample platformer built on top of it.",
      cardCover: {
        src: "/covers/nebula-engine.png",
        alt: "Nebula engine debug view: blue blocks on a red ground with wireframe bounds.",
      },
      role: "Engine programmer",
      engine: "C++",
      platform: "PC",
      developmentTime: "6 months",
      teamSize: "Solo",
      summary:
        "I wanted to understand engines from the inside—not only use one. After a four-person start stalled before features landed, I kept **Nebula** going alone: research first, then a scalable C++ architecture aimed at a small Mario-style game so every system had a real reason to exist.",
      trailer: {
        youtubeId: "ljsgRu91WDk",
        caption: "Nebula Game Engine overview.",
      },
      designGoals: [
        "Keep engine and game separated through a public header API and enforced layer rules.",
        "Make rendering backend-agnostic so OpenGL can run today and Vulkan can plug in later.",
        "Grow features against a concrete sample game, not a directionless tech demo.",
      ],
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/Nebula-Entertainment-Beta/Nebula",
        },
      ],
      sections: [
        {
          heading: "Why build an engine",
          paragraphs: [
            "The idea started bigger than a solo project: a team of four ready to build Nebula together. Schedules collapsed before we could ship features, and the easy move would have been to quit. I stayed with it as a personal deep dive into how engines actually work—windows, render loops, scenes, tooling—the machinery designers usually only meet through a finished product.",
            "I researched how other small engines are structured and decided early that Nebula had to be **scalable**: features stacked on clear boundaries, not a pile of one-off hacks. That decision shaped everything that followed.",
          ],
        },
        {
          heading: "Rendering from a triangle up",
          paragraphs: [
            "I started where I could see proof: a **rendering pipeline**. First milestone was a triangle in a window. From there I built out the stack designers never see—vertex layouts, buffers, shaders, textures, clear/draw/swap—until gameplay code could draw without calling raw `gl*` itself.",
            "The hard architectural bet was making that pipeline **API-agnostic**. OpenGL runs the engine today; Vulkan sits behind the same factories and stubs so a backend switch should not rewrite the game. Graphics context creation, render backends, and the abstract `Renderer` / `RenderAPI` layer are split on purpose: windowing is not rendering, and game code never imports OpenGL headers.",
          ],
        },
        {
          heading: "Engine versus game",
          paragraphs: [
            "Keeping engine code out of the game was harder than drawing the triangle. Early passes leaked concerns into the wrong places and forced rewrites. I carved a public API under `Nebula/include`—`Nebula.h`, application, scene, scripts—so **Nimbus**, the sample game, talks to the engine through headers only, not through GLFW, GLAD, or backend types.",
            "That separation is not a vibe; it is enforced. Layer docs and CI scripts block illegal includes so the game cannot construct GPU resources with backend factories or pull platform APIs through the side door. Maintaining that wall while still shipping features was one of the real technical fights of the project.",
          ],
        },
        {
          heading: "Application loop and hot reload",
          paragraphs: [
            "The **game loop** was the most stubborn systems problem. Every rendering or gameplay addition forced the application API to stay honest: load order, update order, when scenes mount, when input maps, when render systems fire. Getting that loop wrong made the whole engine feel brittle.",
            "I also chased **hot reload** habits so a C++ engine did not punish iteration with full rebuilds for every tweak. Prefabs helped modularize level pieces I could revise without rewriting scenes from scratch. The loop, the load path, and the content format had to grow together or the editor and game would diverge.",
          ],
        },
        {
          heading: "Editor and exposed values",
          paragraphs: [
            "I wanted Nebula to own an **editor**, not only a runtime. That meant a Qt tool shell—docks, scene view, play mode, picking, gizmos—sitting on the same public engine API as the game, without the editor linking game scripts directly. Each game hosts the editor with its own registration hooks.",
            "Exposing values into that editor was a late, sharp climb. First I had to stop overusing a catch-all main file; then I had to thread engine logic so fields could surface in the UI without collapsing the runtime into a single god object. Along the way I used a **singleton** for combat work, recognized it as the wrong shape, and tore it out. That correction mattered as much as the feature: the architecture had to stay teachable and separable.",
          ],
        },
        {
          heading: "Systems built for a real game",
          paragraphs: [
            "To stop the engine from becoming directionless, I anchored it to **Nimbus**: a small character that jumps, fights enemies, and plays in a Mario-esque loop. Features had to serve that fantasy—player and enemy scripts, bounce pads, checkpoints, wind volumes, scene serialization, ECS-style registries, physics integration, and audio services—each tracked against design docs and feature deadlines I held myself to.",
            "Working outside my usual design seat meant learning the inner wiring of engines on purpose: how a frame is ordered, why render interfaces stay clean of backend types, how scenes and scripts live across play mode, and how prefab overrides keep modular content editable. The hardship was the point. Curiosity pulled me into a domain that was not my expertise, and the engine is the record of staying there long enough to build real layers.",
          ],
        },
      ],
    },
    {
      slug: "babylons-call",
      title: "Babylon's Call",
      subtitle:
        "A 2D pixel Souls-like platformer set in the Tower of Babel—led an 8-person team from GDD through a full production ship.",
      cardCover: {
        src: "/covers/babylons-call.png",
        alt: "Babylon's Call title over a desert ziggurat and ruined city skyline.",
      },
      role: "Team lead & game designer",
      engine: "2D",
      platform: "PC (itch.io)",
      developmentTime: "4 months",
      teamSize: "8",
      summary:
        "My first full production game—course brief from **GDD to ship**. I led a team of **eight** across art, design, and engineering, and steered *Babylon's Call* into a revenge-driven 2D Souls-like: break the prison, climb the tower, and challenge the Storm Lord who corrupted everyone inside.",
      trailer: {
        youtubeId: "g4A-jXAi2SE",
        caption: "Babylon's Call trailer.",
      },
      designGoals: [
        "Ship a complete game with a cross-functional team, not a prototype left on the floor.",
        "Make movement the star—wall jumps, eight-way dash, and a grappling hook that rewards skill.",
        "Sell a Souls-like fantasy: punishing enemies, readable windows, and a boss fight worth remembering.",
      ],
      links: [
        {
          label: "Play on itch.io",
          href: "https://ibrahim610.itch.io/babylons-call",
        },
      ],
      sections: [
        {
          heading: "Leading the production",
          paragraphs: [
            "This was the start of making games as a full product. The course asked us to carry a title from a design document through production to something people could play end to end. As **team lead**, I owned the whole spine—art, design, and engineering—keeping eight people pointed at the same game instead of eight separate ones.",
            "We began with a tight idea: directional dashes. We prototyped early and playtested as soon as something moved. To keep features landing cleanly at scale, I worked with our technical lead to put **clear documentation and version-control standards** in place so everyone could ship work without stepping on each other. Process was part of the design job: if the pipeline breaks, the fantasy never reaches the player.",
          ],
        },
        {
          heading: "World, story, and look",
          paragraphs: [
            "With the prototype alive, we shaped the character and the story around him. I worked with the **art lead** and **narrative lead** so player design and motive stayed one conversation—not art in one room and plot in another. The game settled into a revenge arc: a once-defeated hero breaks free of prison and returns to challenge the tyranny of the **Storm Lord**, who rules the tower and has turned its residents into minions.",
            "We chose **2D pixel art** because it matched what our art lead could push hardest—and because we wanted an old arcade feel with a darker twist. Think a Mario-shaped movement fantasy dragged into something meaner: climb the Tower of Babel, survive what lives there, earn the rematch.",
          ],
        },
        {
          heading: "Movement first",
          paragraphs: [
            "Design started on the stick. We wanted the controller to feel good before the tower got crowded, so we studied *Hollow Knight* and *Celeste* for weight, wall play, and dash clarity. That research landed on **wall-to-wall jumping**, then kept the prototype’s core as an **eight-way directional dash**.",
            "To give movement a signature beyond the baselines, we looked at special abilities and locked the **grappling hook**. It was never required to finish a room—but used well, it opened sharper traversal lines and real **skill expression**. Players who invest in the hook get a different game than players who only dash, and that gap was intentional.",
          ],
        },
        {
          heading: "Enemy design",
          paragraphs: [
            "I drafted **concept art** for the enemies myself and worked with the art lead so the mythical creature language of the Tower of Babel had something concrete to build from. The creatures had to feel like they owned the tower: punishing patterns, small windows you learn, and a sense that surviving them is practice for something worse at the top.",
            "Every encounter was tuned to sell how empowered the tower’s residents are—and, by extension, how empowered the final boss must be. Learning those windows is the fantasy: you don’t overpower the tower on day one; you earn the right to stand in it.",
          ],
        },
        {
          heading: "Boss as the badge of honor",
          paragraphs: [
            "A Souls-like without a memorable boss is half a pitch. I built the finale around **surprise, challenge, and reward**—harsh ability windows the player can still read, clear **animation anticipation** so fairness stays ahead of frustration, and a **dynamic stage shift** where rain hits mid-fight to lift the epic tone.",
            "The surprise beat forces creativity: abilities that strip easy control unless the player adapts. Beating that fight is meant to feel like a badge—not a checkbox—so the revenge story lands in the player’s hands, not only in the script.",
          ],
        },
        {
          heading: "What leading taught me",
          paragraphs: [
            "Four months of production taught me how to **manage a cross-functional team**: keep art, design, and engineering talking early, project-manage features against scope, and take ideas from every seat without losing the spine of the game. Leadership here meant translation—turning eight voices into one shippable product.",
            "Leaving the course with a finished *Babylon's Call* mattered more than any single mechanic. It proved I could hold design intent, team process, and a production calendar at the same time—and still deliver a playable revenge climb people can open on itch.io.",
          ],
        },
      ],
    },
    {
      slug: "stealing-christmas",
      title: "Stealing Christmas",
      subtitle:
        "A 2D top-down holiday horror jam game: steal Christmas as the Grinch while Santa hunts you in the dark. Playable in browser—took second place.",
      cover: {
        src: "/covers/stealing-christmas-gameplay.png",
        alt: "Top-down pixel room: the Grinch near a giant Santa, a Christmas tree, gifts, and remaining objectives on screen.",
      },
      cardCover: {
        src: "/covers/stealing-christmas.png",
        alt: "Stealing Christmas title over a dark forest and aurora sky.",
      },
      role: "Game designer",
      engine: "2D",
      platform: "Browser (itch.io)",
      developmentTime: "Game jam",
      teamSize: "Friend group jam team",
      summary:
        "A Christmas game jam with friends—built to show what our new community could ship under a hard deadline. Theme was **bells**. We locked a Grinch-eyed horror fantasy fast: hide from Santa, silence the elves, and steal Christmas before the chase catches you.",
      designGoals: [
        "Turn the jam theme into a stealth fantasy players feel immediately.",
        "Make sound, light, and scale do the horror work—not just jumpscares.",
        "Give stealth routes real agency so the cat-and-mouse loop stays playable under time pressure.",
      ],
      links: [
        {
          label: "Play on itch.io",
          href: "https://junior4144.itch.io/stealing-christmas",
        },
      ],
      sections: [
        {
          heading: "Jam brief and design lock",
          paragraphs: [
            "We entered the jam as a friend group and as a showcase for the talent gathering in our community. Christmas jam. Theme drop: **bells**. Jam rules meant the design had to lock in the first meeting—no weeks of ideation, just a few holiday pitches and a hard call.",
            "I pushed a horror read of Christmas: play as the **Grinch**, not Santa’s helper. Bells became the alert system—elves who spot you **ring** and warn Santa. That single beat turned the theme into a hide-and-seek, cat-and-mouse chase: survive the dark, steal Christmas, don’t get caught.",
          ],
        },
        {
          heading: "Horror through systems",
          paragraphs: [
            "Under the jam clock we hunted design gaps that still read on first play. **Sound** had to be a survival tool, not wallpaper: Santa’s approach carries jingle-bell audio so you hear danger before you see it while moving through a dark space. Light sits tightly around the player—just enough to navigate, not enough to feel safe—so loneliness and dread stay in the frame.",
            "Scale did the rest of the genre work. Santa is **huge**; the player is small. That size gap sells the menace of being hunted without needing a long cutscene budget. Stealing Christmas wasn’t only about escaping—it was about feeling outmatched every time the chase closed in.",
          ],
        },
        {
          heading: "Tasks, vents, and stealth agency",
          paragraphs: [
            "Minigames became the **jobs** that advance the heist. Each completed task pays off with progress toward stealing Christmas, so the loop isn’t only hide-and-wait—it rewards finishing work under pressure and feeling the goal get closer.",
            "Pure patrol-and-wait stealth would have gone flat fast. We needed an escape valve when elves had you boxed in, so we borrowed a page from *Among Us*: **vents** for a quick exit from a sticky route. That gave stealth players a readable option beyond freezing until an elf turned around—and kept the chase fantasy lively inside a jam-length build.",
          ],
        },
        {
          heading: "Shipping under the clock",
          paragraphs: [
            "This project was a crash course in **time management**: prototype the fantasy early, cut what the deadline cannot carry, and design inside the constraint instead of inventing a feature list that never ships. Working that fast taught how to hear teammates clearly, trust the people who own their piece, and keep the creative energy pointed at a playable build.",
            "Constraint became the creative exercise. Bells, Christmas, horror, and a short calendar forced a sharp fantasy—and the team shipped a second-place jam game you can still play in the browser.",
          ],
        },
      ],
    },
  ] satisfies Project[],
};

export function getWorkProject(slug: string) {
  return site.work.find((project) => project.slug === slug);
}

export function getLabProject(slug: string) {
  return site.lab.find((project) => project.slug === slug);
}
