import sneakvaultImg from '../assets/sneakvault.png';
import uigardenImg from '../assets/uigarden.png';

export const personalInfo = {
  name: 'Jasanpreet Singh',
  title: 'Full Stack Web Developer',
  program: 'Full Stack Web Development',
  school: 'Red River College Polytechnic',
  location: 'Winnipeg, MB',
  github: 'https://github.com/JS25-rrc',
  bio: 'I am a Full Stack Web Development student at Red River College Polytechnic. I want to build AI-powered products that solve real problems and make a measurable difference. My goal is to start a company that creates software people actually need.',
};

export const workProjects = [
  {
    id: 1,
    title: 'SneakVault',
    description:
      'A full stack sneaker e-commerce web application built with the PHP, XAMPP, and SQLite. Features product listings, search, cart functionality, and user authentication.',
    image: sneakvaultImg,
    link: 'https://github.com/JS25-rrc/SneakVault',
    tech: ['PHP', 'SQLite', 'XAMPP'],
  },
  {
    id: 2,
    title: 'UI Component Library',
    description:
      'A reusable React component library built with TypeScript and Storybook. Includes documented and tested components like buttons, dropdowns, radio groups, tables, and hero sections.',
    image: uigardenImg,
    link: 'https://github.com/JS25-rrc/singh_jasanpreet_ui_garden',
    tech: ['React', 'TypeScript', 'Storybook', 'Jest', 'styled-components'],
  },
  {
    id: 3,
    title: 'CI/CD Build Pipeline',
    description:
      'Extended the component library with a full code quality pipeline using Husky pre-commit hooks, ESLint, Prettier, and GitHub Actions. Deployed via Docker with a multi-stage build served on port 8018.',
    image: uigardenImg,
    link: 'https://github.com/JS25-rrc/coding_assignment_13',
    tech: ['Husky', 'ESLint', 'Prettier', 'GitHub Actions', 'Docker', 'Nginx'],
  },
];

export const skills = {
  languages: ['TypeScript', 'JavaScript', 'Java', 'Python', 'PHP'],
  frameworks: ['React', 'Next.js', 'Express.js', 'Flask', 'Django'],
  tools: ['Git', 'GitHub Actions', 'Docker', 'Virtual Machines', 'AWS'],
};

export const resources = [
  {
    title: 'MDN Web Docs',
    icon: '📖',
    summary: 'Most reliable reference for HTML, CSS, and JavaScript.',
    link: 'https://developer.mozilla.org',
  },
  {
    title: 'Docker Documentation',
    icon: '🐳',
    summary: 'Official Docker docs covering Dockerfiles and multi-stage builds.',
    link: 'https://docs.docker.com',
  },
  {
    title: 'GitHub Actions Docs',
    icon: '⚙️',
    summary: 'Everything needed to build CI/CD pipelines.',
    link: 'https://docs.github.com/en/actions',
  },
  {
    title: 'The Odin Project',
    icon: '⚔️',
    summary: 'Free open-source full stack curriculum for filling gaps in fundamentals.',
    link: 'https://www.theodinproject.com',
  },
];

export const devSetup = {
  vscode: [
    { name: 'ESLint', description: 'Real-time linting in the editor' },
    { name: 'Prettier - Code Formatter', description: 'Auto-format on save' },
    { name: 'GitLens', description: 'Inline Git blame and history' },
    { name: 'Docker', description: 'Manage containers from VS Code' },
    { name: 'Postman', description: 'Full-featured API testing and development directly in VS Code' },
  ],
  terminal: 'Git Bash',
  font: 'JetBrains Mono',
};
