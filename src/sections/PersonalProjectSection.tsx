import { ProjectCard } from "@/components/ProjectCard";
import { personalProjects } from "@/data/personalProjects";

const PersonalProjectSection: React.FC = () => {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-serif font-bold mb-8 text-center">
        Proyectos Personales
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {personalProjects
          .filter(({ hidde }) => !hidde)
          .map((project) => (
            <ProjectCard project={project} />
          ))}
      </div>
    </section>
  );
};

export { PersonalProjectSection };
