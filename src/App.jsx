import NavigationTransition from './components/common/NavigationTransition';
import ScrollProgress from './components/common/ScrollProgress';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import CorporateTrainingSection from './components/sections/CorporateTrainingSection';
import CoursesSection from './components/sections/CoursesSection';
import HeroSection from './components/sections/HeroSection';
import PlacementSection from './components/sections/PlacementSection';
import ServicesSection from './components/sections/ServicesSection';
import { useActiveSection } from './hooks/useActiveSection';

const sectionIds = ['home', 'about', 'services', 'courses', 'placement', 'corporate', 'contact'];

const App = () => {
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="relative overflow-x-hidden bg-[linear-gradient(180deg,#f6fbff_0%,#eff7ff_45%,#f8fbff_100%)]">
      <div className="aurora-backdrop" />
      <ScrollProgress />
      <NavigationTransition />
      <Navbar activeSection={activeSection} />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CoursesSection />
        <PlacementSection />
        <CorporateTrainingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
