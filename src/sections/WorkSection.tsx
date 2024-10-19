import { WorkCard } from "@/components/WorkCard";
import { workExperience } from "@/data/workExperience";

const WorkSection: React.FC = () => {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-serif font-bold mb-8 text-center">
        Experiencia Laboral
      </h2>
      <div className="space-y-8">
        {workExperience.map((work) => (
          <WorkCard work={work} />
        ))}
      </div>
    </section>
  );
};

export { WorkSection };
