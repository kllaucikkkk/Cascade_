import Hero from './components/MainSite/Hero';
import Section1 from './components/MainSite/Section1';
import Section2 from './components/MainSite/Section2';
import Section3 from './components/MainSite/Section3';
import Section4 from './components/MainSite/Section4';
import Footer from './components/MainSite/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
