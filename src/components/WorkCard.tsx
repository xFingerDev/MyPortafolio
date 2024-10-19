import { Work } from "@/entities/Work";
import { HiOutlineExternalLink } from "react-icons/hi";
import { TechBadge } from "./TechBadge";

const WorkCard: React.FC<{ work: Work }> = ({ work }) => {
  return (
    <article
      key={work.company}
      className="bg-gradient-to-b from-stone-800 to-stone-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center">
        <h3 className="text-2xl font-bold font-serif ">{work.company}</h3>
        <p className="ml-2 text-stone-400 font-medium mb-1">{work.period}</p>
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto"
        >
          <HiOutlineExternalLink className="h-6 w-6 text-stone-400 hover:text-white transition-colors" />
        </a>
      </div>

      <p className="text-xl text-stone-500 mb-2">{work.role}</p>
      <p className="text-gray-300 leading-relaxed font-light mb-6">
        {work.description}
      </p>
      <div className="flex flex-wrap gap-3">
        {work.technologies.map((tech) => (
          <TechBadge tech={tech} />
        ))}
      </div>
      {work.projects && work.projects.length > 0 && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">Proyectos</h4>
          <ul className="list-disc list-inside text-stone-300">
            {work.projects.map((project, index) => (
              <li key={index} className="mb-1">
                {project}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

export { WorkCard };
