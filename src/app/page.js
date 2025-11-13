import AboutSection from '@/component/AboutSection';
import ContactSection from '@/component/ContactSection';
import ExperienceSection from '@/component/ExperienceSection';
import { Footer } from '@/component/Footer';
import HomeSection from '@/component/HomeSection';
import NavBar from '@/component/NavBar';
import ProjectsSection from '@/component/ProjectsSection';
import SkillsSection from '@/component/SkillSection';

export default function Home() {
    return (
        <div>
            <NavBar />
            <div>
                <HomeSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <ContactSection />
            </div>
            <Footer />
        </div>
    );
}
