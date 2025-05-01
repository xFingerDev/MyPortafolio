import { ProjectLink } from "@/entities/Project";
import { FaAppStore, FaGithub, FaGlobe, FaGooglePlay } from "react-icons/fa";

const IconWithType = {
  github: <FaGithub className="inline mr-2" />,
  gplay: <FaGooglePlay className="inline mr-2" />,
  web: <FaGlobe className="inline mr-2" />,
  appstore: <FaAppStore className="inline mr-2" />,
};

const TextWithType = {
  github: "Ver Código",
  gplay: "Play Store",
  web: "Sitio Oficial",
  appstore: "App Store",
};

const CssWithType = {
  github: "bg-gray-700 hover:bg-gray-800 border border-gray-600",
  gplay:
    "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800",
  web: "bg-purple-600 hover:bg-purple-700",
  appstore:
    "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
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
