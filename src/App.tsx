import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MassTimes from './components/MassTimes';
import About from './components/About';
import Sacraments from './components/Sacraments';
import ParishLife from './components/ParishLife';
import History from './components/History';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MassTimes />
      <About />
      <Sacraments />
      <ParishLife />
      <History />
      <Contact />
      <Footer />
    </div>
  );
}
