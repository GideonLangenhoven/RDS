import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import GalleryPage from './pages/Gallery';
import Contact from './pages/Contact';
import './styles/main.css';
import './styles/pages.css';
import { ModalContext, ModalProvider } from './context/ModalContext';

function App() {
  const { isModalOpen } = useContext(ModalContext) || {};
  return (
    <div className="site-container">
      {!isModalOpen && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* Redirect any unknown paths to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function AppWithProvider() {
  return (
    <ModalProvider>
      <App />
    </ModalProvider>
  );
}


