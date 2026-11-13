# Portfolio

A personal site with three tabs: Work, Resume, and Contact. Work opens on an about section, then work projects, then personal projects. Clicking a project image opens that project’s page. From the work tab the page comes up over the site. The address is shareable, and a direct visit shows the same write-up on its own.

The layout follows a light editorial portfolio: tracked capitals, a red period, and a lot of paper. Each project page uses a case-study block: role, engine, platform, development time, team size, a summary, design goals, then the longer sections.

Sample copy is in place so the pages have a shape. Replace it before sharing the site.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where to edit

Everything you will change lives in [`content/site.ts`](content/site.ts).

- **Name, greeting, date, role, about** — `profile`
- **Work projects** — `work`
- **Personal projects** — `personal`
- **Resume** — `resume`
- **Contact** — `profile.email`, `profile.phone`, `profile.location`, `profile.links`, `profile.contactNote`

Words wrapped in `**double asterisks**` render heavier.

### Add a project

Copy an object in `work` or `personal`. Set a new `slug` (lowercase, hyphens). Put a cover at `public/covers/your-image.jpg` and point `cover.src` at it. JPG, PNG, and SVG all work. The image you click on the work tab is `cover`. Extra images inside the write-up go on a section’s `image` field.

Leave a string empty to hide that fact. An empty `designGoals` list hides that block.

### Resume PDF

Drop a file in `public/` (for example `public/resume.pdf`) and set `resume.pdf` to `"/resume.pdf"`. A download link appears on the Resume tab.

## Pages

| Tab | Address | What it shows |
| --- | --- | --- |
| Work | `/` | About, work, personal |
| Resume | `/resume` | Experience, education, skills, awards |
| Contact | `/contact` | Email, phone, location, links |
| A work project | `/work/[slug]` | The case study |
| A personal project | `/personal/[slug]` | The same kind of case study |
