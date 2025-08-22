export type ProjectObj = {
  title: string;
  sub_title?: string;
  technology: string[];
  desc: string;
  href?: string;
};

export type SkillObj = {
  category: string;
  skills: string[];
};

export type CarouselObj = {
  img_path: string;
  alt: string;
};

export const project_list: ProjectObj[] = [
  {
    title: "This website!",
    sub_title: "Static website",
    technology: ["React + Vite", "Tailwind CSS"],
    desc: "My website will serve to showcase my most up-to-date resume. Stay tuned for future updates!",
    href: "https://github.com/yddet-www/my-resume",
  },
  {
    title: "IIT iGEM Tech Team Lead",
    sub_title: "Web & backend deployment",
    technology: [
      "React + Vite",
      "Tailwind CSS",
      "Python",
      "Uvicorn + FastAPI",
      "GitLab CI",
      "Docker",
      "Traefik",
    ],
    desc: "For the upcoming iGEM 2025 competition, I lead the club's 'Tech Team'. This entails developing the required wiki-page for the team, as well as deploying it both in iGEM's GitLab and IIT's server. The latter lead to the integration of a RAG-based chatbot (credit to Atishay Jain) as well as its backend-to-frontend integration using Traefik.",
    href: "https://igem.iit.edu/iitchicago/",
  },
  {
    title: "YouTify",
    sub_title: "Spotify to YouTube playlist converter",
    technology: ["Flutter", "SQLite", "YouTube Data API v3", "Spotify Web API"],
    desc: "As a final course project and a long-lasting whim of having two platforms hosting my song playlist, I created a mobile app to do exactly that by copying my Spotify playlist onto YouTube.",
    href: "https://github.com/yddet-www/youtify",
  },
  {
    title: "Housing Teller",
    sub_title: "Housing price prediction model ",
    technology: ["Python", "LightGBM", "scikit-learn", "Flask"],
    desc: "Another course project where we were tasked to create a ML model. I created a prototype model predicting the housing price within Chicago with real data gathered from Cook County and Chicago Health Atlas. The model had an R² of 0.75 and RMSE of $85K (38%) after performing Bayesian hyperparameter optimization.",
    href: "https://github.com/Team-2-CS-484/housing-teller",
  },
  {
    title: "Weather App",
    sub_title: "Python-based weather forecasting application",
    technology: [
      "Python",
      "Tkinter",
      "MySQL",
      "National Weather Service API",
      "Geocode API",
    ],
    desc: "Another final course project; I created a rudimentary weather tracking application using Python, utilizing Tkinter for GUI. The application is backed with a MySQL database to store past weather reports queried by the user.",
    href: "https://github.com/yddet-www/weather-app",
  },
];

export const skill_list: SkillObj[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Dart", "Java", "C", "Haskell", "TypeScript"],
  },
  {
    category: "Web & App Development",
    skills: ["React", "Vite", "Next.js", "Flutter", "Tailwind CSS", "Node.js"],
  },
  {
    category: "Backend & APIs",
    skills: ["Flask", "Uvicorn", "REST APIs", "MySQL", "SQLite"],
  },
  {
    category: "Tools & DevOps",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "Traefik",
      "AWS",
      "Google Cloud Console",
    ],
  },
  {
    category: "Data Science & ML",
    skills: ["LightGBM", "scikit-learn", "Pandas", "NumPy", "Jupyter"],
  },
];

export const coursework_list: string[] = [
  "Probability",
  "Operating Systems",
  "Linear Optimization",
  "Database Organization",
  "Software Engineering I",
  "Introduction to Algorithms",
  "Mobile Applications Development",
  "Introduction to Machine Learning",
  "Economics of Capital Investments",
  "Programming Language & Translators",
  "Programming Paradigms and Patterns",
  "Introduction to Artificial Intelligence",
  "Introduction to Parallel and Distributed Computing",
];

export const snapshot_list: CarouselObj[] = [
  { img_path: "/assets/snapshots/my-resume-ss.png", alt: "My website!" },
  {
    img_path: "/assets/snapshots/igem-iit-ss.png",
    alt: "Our iGEM team's wikipage",
  },
  {
    img_path: "/assets/snapshots/housing-teller-ss2.png",
    alt: "Our housing prediction tool ",
  },
  {
    img_path: "/assets/snapshots/youtify-ss.png",
    alt: "The Spotify-to-YouTube playlist converter, YouTify",
  },
];
