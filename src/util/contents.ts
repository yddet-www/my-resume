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
  href: string;
  alt: string;
}

export const project_list: ProjectObj[] = [
  {
    title: "This website",
    sub_title: "Static website",
    technology: ["React + Vite", "Tailwind CSS"],
    desc: "This website will serve to showcase my most up-to-date resume. Stay tuned for future updates!",
    href: "#",
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
    href: "#",
  },
  {
    title: "YouTify",
    sub_title: "Spotify to YouTube playlist converter",
    technology: ["Flutter", "SQLite", "YouTube Data API v3", "Spotify Web API"],
    desc: "As a final course project and a long-lasting whim of having two platforms hosting my song playlist, I created a mobile app to do exactly that by copying my Spotify playlist onto YouTube.",
    href: "#",
  },
  {
    title: "Housing Teller",
    sub_title: "Housing price prediction model ",
    technology: ["Python", "LightGBM", "scikit-learn", "Flask"],
    desc: "Another course project where we were tasked to create a ML model. I created a prototype model predicting the housing price within Chicago with real data gathered from Cook County and Chicago Health Atlas. The model had an R² of 0.75 and RMSE of $85K (38%) after performing Bayesian hyperparameter optimization.",
    href: "#",
  },
  {
    title: "Weather App",
    sub_title: "Python-based weather tracking application",
    technology: [
      "Python",
      "Tkinter",
      "MySQL",
      "National Weather Service API",
      "Geocode API",
    ],
    desc: "Another final course project; I created a rudimentary weather tracking application using Python, utilizing Tkinter for GUI. The application is backed with a MySQL database to store past weather reports queried by the user.",
    href: "#",
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
  "Mobile Applications Development",
  "Software Engineering I",
  "Database Organization",
  "Programming Language & Translators",
  "Introduction to Algorithms",
  "Operating Systems",
  "Introduction to Parallel and Distributed Computing",
  "Economics of Capital Investments",
  "Linear Optimization",
  "Probability",
];
