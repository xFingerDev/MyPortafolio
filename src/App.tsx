import { AboutSection } from "@/sections/AboutSection";
import { FooterSection } from "@/sections/FooterSection";
import { PersonalProjectSection } from "@/sections/PersonalProjectSection";
import { PresentationSection } from "@/sections/PresentationSection";
import { WorkSection } from "@/sections/WorkSection";

function App() {
  return (
    <div className="min-h-screen bg-stone-700 from-indigo-50 to-blue-100 w-full">
      <PresentationSection />

      <main className="w-full px-4 pt-12 max-w-5xl mx-auto">
        <AboutSection />

        <WorkSection />
        <PersonalProjectSection />
      </main>

      <FooterSection />
    </div>
  );
}

export default App;
