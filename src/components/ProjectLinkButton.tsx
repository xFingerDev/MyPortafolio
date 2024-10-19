import { ProjectLink } from "@/entities/Project";
import { FaGithub, FaGlobe, FaGooglePlay } from "react-icons/fa";

const IconWithType = {
  github: <FaGithub className="inline mr-2" />,
  gplay: <FaGooglePlay className="inline mr-2" />,
  web: <FaGlobe className="inline mr-2" />,
};

const TextWithType = {
  github: "Ver Código",
  gplay: "Ver en Play Store",
  web: "Ver Web",
};

const CssWithType = {
  github: "bg-gray-700 hover:bg-gray-800 border border-gray-600",
  gplay:
    "bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800",
  web: "bg-green-600 hover:bg-green-700",
};

const ProjectLinkButton: React.FC<{ link: ProjectLink }> = ({ link }) => {
  const { url, type } = link;
  return (
    <a
      key={url}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-6 py-2.5 rounded-lg transition-all duration-300 font-medium flex items-center whitespace-nowrap ${
        CssWithType[type as keyof typeof CssWithType]
      } text-white hover:scale-[1.12]`}
    >
      <>
        {IconWithType[type as keyof typeof IconWithType]}
        {TextWithType[type as keyof typeof TextWithType]}
      </>
    </a>
  );
};

export { ProjectLinkButton };
