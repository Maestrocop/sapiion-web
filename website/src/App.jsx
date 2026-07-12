import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import WhySapiionPage from './pages/WhySapiionPage';
import SolutionsPage from './pages/SolutionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/why-sapiion" element={<WhySapiionPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/demo" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
