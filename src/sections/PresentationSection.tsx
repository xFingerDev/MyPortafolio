import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { TbSourceCode } from "react-icons/tb";
import { PersonalInfo } from "../data/personalInfo";

const links = [
  {
    href: PersonalInfo.linkedin,
    icon: FaLinkedin,
    external: true,
    toast: "LinkedIn",
  },
  {
    href: PersonalInfo.github,
    icon: FaGithub,
    external: true,
    toast: "GitHub",
  },
  { href: `mailto:${PersonalInfo.email}`, icon: MdEmail, toast: "Email" },
  { href: "/cv.pdf", icon: HiDocumentArrowDown, download: true, toast: "CV" },
  {
    href: PersonalInfo.githubPortafolio,
    icon: TbSourceCode,
    external: true,
    toast: "Código fuente",
  },
];

const PresentationSectionReferences: React.FC = () => {
  return (
    <div className="flex justify-center space-x-6 mt-8">
      {links.map((link, index) => (
        <div key={index} className="relative group">
          <a
            href={link.href}
            className="hover:text-stone-300 transition-colors"
            {...(link.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            {...(link.download && { download: true })}
          >
            <link.icon size={24} />
          </a>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform">
            <div className="bg-stone-800 whitespace-nowrap text-white text-sm py-1 px-2 rounded">
              {link.toast}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const PresentationSection: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-bl from-stone-600 to-stone-500 text-white py-16">
      <div className="w-full mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in font-serif">
          Raul Segui Tejeda
        </h1>
        <p className="text-2xl text-stone-200">
          Solo soy un simple desarollador
        </p>
        <PresentationSectionReferences />
      </div>
    </header>
  );
};

export { PresentationSection };
