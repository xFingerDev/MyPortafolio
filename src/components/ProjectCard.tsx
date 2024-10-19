import { Project } from "@/entities/Project";
import { ProjectLinkButton } from "./ProjectLinkButton";
import { TechBadge } from "./TechBadge";

const DecorativeDivider: React.FC = () => (
  <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-[#F3E8FF]/50 to-transparent h-full mx-4" />
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <article
      key={project.title}
      className="bg-gradient-to-b from-stone-800 to-stone-900 flex flex-col md:flex-row gap-8 col-span-1 md:col-span-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 md:p-8 "
    >
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover rounded-t-lg md:rounded-xl shadow-sm hover:scale-[1.02] transition-all duration-300 "
        />
      </div>

      <DecorativeDivider />

      <div className="md:w-1/2 flex flex-col justify-center space-y-6 px-8 pb-8">
        <h3 className="text-2xl font-serif font-bold text-gray-100 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 leading-relaxed font-light">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge tech={tech} />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          {project.links.map((link) => (
            <ProjectLinkButton link={link} />
          ))}
        </div>
      </div>
    </article>
  );
};

export { ProjectCard };
