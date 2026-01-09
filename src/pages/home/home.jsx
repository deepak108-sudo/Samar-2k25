import LandingSection from './homeComponents/landingSection.jsx';
import ImageGallery from './homeComponents/imageGallery.jsx';
import Sponsors from './homeComponents/sponsors.jsx';
import Timeline from './homeComponents/timeline.jsx';
import About from './homeComponents/abouthome.jsx';
import HomeThreeBackground from '../../components/HomeThreeBackground.jsx';

function Home() {
    return (
        <>
            <HomeThreeBackground />
            <LandingSection />
            <ImageGallery />
            <About/>
            <Timeline/>
            <Sponsors/>
        </>
    );
}

export default Home;