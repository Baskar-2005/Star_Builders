import { useState, useEffect } from 'react';
import LoadingExperience from './components/LoadingExperience';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import DreamHomeJourney from './components/DreamHomeJourney';
import ConstructionProcess from './components/ConstructionProcess';
import FeaturedProjects from './components/FeaturedProjects';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import MaterialShowcase from './components/MaterialShowcase';
import CostEstimator from './components/CostEstimator';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ConsultationSection from './components/ConsultationSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ConsultationModal from './components/ConsultationModal';
import { Project } from './types';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Modal States
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  // Pre-filled budget state from AI Estimator
  const [estimatorBudget, setEstimatorBudget] = useState<string | undefined>(undefined);
  const [estimatorSqft, setEstimatorSqft] = useState<number | undefined>(undefined);
  const [estimatorProjectType, setEstimatorProjectType] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'why-us', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApplyEstimateToForm = (budget: string, sqft: number, type: string) => {
    setEstimatorBudget(budget);
    setEstimatorSqft(sqft);
    setEstimatorProjectType(type);
    // Smooth scroll to contact consultation section
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-800 font-['Poppins',sans-serif] selection:bg-[#D4AF37]/20 selection:text-[#8C6D1F]">
      {/* 3-Second Cinematic Loading Sequence */}
      {!loadingComplete && (
        <LoadingExperience onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Main Website View */}
      {loadingComplete && (
        <>
          <Navbar
            activeSection={activeSection}
            onOpenConsultation={() => setConsultationModalOpen(true)}
          />

          <main>
            <Hero
              onExploreProjects={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenConsultation={() => setConsultationModalOpen(true)}
              onOpenEstimator={() => {
                const el = document.getElementById('estimator');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <AboutSection
              onLearnMore={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <ServicesSection
              onOpenConsultation={() => setConsultationModalOpen(true)}
            />

            <WhyChooseUs />

            <DreamHomeJourney />

            <ConstructionProcess />

            <FeaturedProjects
              onSelectProject={(project) => setSelectedProject(project)}
              onOpenConsultation={() => setConsultationModalOpen(true)}
            />

            <BeforeAfterSlider />

            <MaterialShowcase />

            <CostEstimator
              onApplyEstimateToForm={handleApplyEstimateToForm}
            />

            <GallerySection />

            <TestimonialsSection />

            <ConsultationSection
              initialBudget={estimatorBudget}
              initialSqft={estimatorSqft}
              initialProjectType={estimatorProjectType}
            />

            <FAQSection />
          </main>

          <Footer />

          {/* Modals */}
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onOpenConsultation={() => setConsultationModalOpen(true)}
          />

          <ConsultationModal
            isOpen={consultationModalOpen}
            onClose={() => setConsultationModalOpen(false)}
          />
        </>
      )}
    </div>
  );
}
