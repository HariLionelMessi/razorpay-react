import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeatureSection from "./components/FeatureSection"
import FeatureDark from "./components/FeatureDark"
function App() {

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <FeatureSection />
        <FeatureDark />
      </div>

    </>
  )
}

export default App
