import { PersonalInfo } from "@/data/personalInfo";

const AboutSection: React.FC = () => {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-serif font-bold mb-8 text-center">
        Sobre mí
      </h2>
      <div className="bg-gradient-to-b from-stone-800 to-stone-900 rounded-2xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform">
        <p className="text-gray-300 leading-relaxed font-light">
          {PersonalInfo.about}
        </p>
      </div>
    </section>
  );
};

export { AboutSection };
