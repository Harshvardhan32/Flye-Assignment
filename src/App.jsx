import ServiceSection from "./components/ServiceSection";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import ProjectSection from "./components/ProjectSection";
import CompanyGrowthSection from "./components/CompanyGrowthSection";
import FeedbackSection from "./components/FeedbackSection";
import Footer from "./components/Footer";

const App = () => {

    return (
        <div className="flex flex-col gap-4">
            <HeroSection />
            <ServiceSection />
            <FeatureSection />
            <ProjectSection />
            <CompanyGrowthSection />
            <FeedbackSection />
            <Footer />
        </div>
    );
};

export default App;