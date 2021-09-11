
import './App.css';
import FeaturedSection from './components/FeaturedSection/FeaturedSection';
import Header from './components/Header/Header.js'
import HeroSection from './components/HeroSection/HeroSection';
import ProductCards from './components/ProductCards/ProductCards';
import IntroSection from './components/IntroSection/IntroSection';
import ArticleSection from './components/ArticleSection/ArticleSection';

import big_feature_1 from './assets/images/big-feature-1.webp'
import big_feature_2 from './assets/images/big-feature-2.webp'
import big_feature_3 from './assets/images/big-feature-3.webp'
import { ReactComponent as big_icon_1 } from './assets/icons/big-feature-1.svg'
import { ReactComponent as big_icon_2 } from './assets/icons/big-feature-2.svg'
import { ReactComponent as big_icon_3 } from './assets/icons/big-feature-3.svg'
import { ReactComponent as big_icon_4 } from './assets/icons/big-feature-4.svg'



function App() {

  const article_1 = {
    image: big_feature_1,
    image_first: true,
    heading: 'We\'re not about pseudoscience and half- truths',
    description: 'From Omega-3 DHA from microalgae to regeneratively-farmed pea protein, our scientists studied diets and genetics to make daily essentials based on what we need.',
    link1: true,
    link1_text: 'Who We Are',
    features: false
  }

  const article_2 = {
    image: big_feature_2,
    image_first: false,
    heading: 'You deserve traceability',
    description: 'We share our sources, studies, and suppliers — daily essentials backed by the first visible supply chain of its kind.',
    link1: true,
    link1_text: 'Meet Our Ingredients',
    link2: true,
    link2_text: 'Our Clinical Study',
    features: false
  }

  const article_3 = {
    image: big_feature_3,
    image_first: true,
    heading: 'Clean and simple, delivered',
    description: 'Easy-to-start. Easy-to-cancel. Our team of scientists and nutritional experts are on a mission to turn your new healthy habit into a Ritual.*',
    link1: false,
    link2: false,
    features: true,
    feature_icon_1: big_icon_1,
    feature_name_1: 'Free Shipping',
    feature_icon_2: big_icon_2,
    feature_name_2: 'Control your delivery date',
    feature_icon_3: big_icon_3,
    feature_name_3: 'Free and easy cancellation',
    feature_icon_4: big_icon_4,
    feature_name_4: '30-day money back guarantee'
  }
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductCards />
      <IntroSection />
      <ArticleSection article={article_1} />
      <ArticleSection article={article_2} />
      <FeaturedSection />
      <ArticleSection article={article_3} />
    </div>
  );
}

export default App;
