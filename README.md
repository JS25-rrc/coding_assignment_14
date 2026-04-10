**1. Clone the repository**
```bash
git clone https://github.com/JS25-rrc/coding_assignment_14.git
cd coding_assignment_14
```

**2. Build the Docker image**
```bash
docker build -t singh_jasanpreet_coding_assignment14 .
```

**3. Run the container**
```bash
docker run -d -p 5575:5575 --name singh_jasanpreet_coding_assignment14 singh_jasanpreet_coding_assignment14
```

**4. Open in browser**
```
http://localhost:5575
```

**5. Stop and remove**
```bash
docker stop singh_jasanpreet_coding_assignment14
docker rm singh_jasanpreet_coding_assignment14
```

---

## Local Development

### Prerequisites
- Node.js 18+
- npm

### Setup
```bash
npm install
npm run prepare
npm run dev
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server at localhost:5173 |
| `npm run storybook` | Start Storybook at localhost:6006 |
| `npm test` | Run Vitest tests |
| `npm run build` | Production build to /dist |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Auto-format with Prettier |
| `npm run format:check` | Check Prettier formatting |

---

## Portfolio Sections

| Page | Content |
|---|---|
| **Home** | Name, bio, school, location, quick links |
| **Work** | SneakVault, UI Component Library, CI/CD Pipeline |
| **Skills** | Languages, frameworks, tools |
| **Resources** | MDN, Docker docs, GitHub Actions, The Odin Project |
| **Dev Setup** | VS Code extensions, terminal, preferred font |

---

## Code Quality Pipeline

### Pre-commit Hooks (Husky)
Every `git commit` automatically runs:
1. Prettier formatting check
2. ESLint check
3. Vitest tests

If any check fails the commit is blocked.

```bash
npm run format     # fix Prettier issues
npm run lint:fix   # fix ESLint issues
```

### GitHub Actions
Defined in `.github/workflows/ci.yml`. Runs on every push or pull request to any branch. Same three checks plus a production build. Fails on GitHub even if Husky was bypassed with `--no-verify`.

---

## Previous Assignments

| Assignment | Repo |
|---|---|
| SneakVault | https://github.com/JS25-rrc/SneakVault |
| UI Component Library | https://github.com/JS25-rrc/singh_jasanpreet_ui_garden |
| CI/CD Build Pipeline | https://github.com/JS25-rrc/coding_assignment_13 |

---

## Docker Details

| Property | Value |
|---|---|
| Container name | `singh_jasanpreet_coding_assignment14` |
| Working directory | `/singh_jasanpreet_final_site` |
| Port | `5575` |
| Build image | `node:18-alpine` |
| Serve image | `nginx:alpine` |
| Build output | `/dist` |
| Build tool | Vite |
