import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import SoftwareDevelopment from '@/pages/SoftwareDevelopment';
import DebuggingAutomation from '@/pages/DebuggingAutomation';
import DataDigitalSupport from '@/pages/DataDigitalSupport';
import ContentLanguage from '@/pages/ContentLanguage';
import Work from '@/pages/Work';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import QuickTask from '@/pages/QuickTask';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-ink-950">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/debugging-automation" element={<DebuggingAutomation />} />
            <Route path="/services/data-digital-support" element={<DataDigitalSupport />} />
            <Route path="/services/content-language" element={<ContentLanguage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/quick-task" element={<QuickTask />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
