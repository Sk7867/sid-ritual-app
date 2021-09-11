
import './App.css';
import FeaturedSection from './components/FeaturedSection/FeaturedSection';
import Header from './components/Header/Header.js'
import HeroSection from './components/HeroSection/HeroSection';
import ProductCards from './components/ProductCards/ProductCards';
import IntroSection from './components/IntroSection/IntroSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductCards />
      <IntroSection />
      <FeaturedSection />
    </div>
  );
}

export default App;
