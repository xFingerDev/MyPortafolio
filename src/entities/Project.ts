export interface ProjectLink {
  type: "web" | "github" | "gplay" | "appstore";
  url: string;
}

export interface Project {
  title: string;
  status: "Abandoned" | "On Hold" | "Completed" | "In Progress";
  description: string;
  image: string;
  technologies: string[];
  links: ProjectLink[];
}
