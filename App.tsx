import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ServiceDetail from './components/ServiceDetail';
import AboutUs from './components/AboutUs';
import StudyAbroad from './components/StudyAbroad';
import MBBSAbroad from './components/MBBSAbroad';
import ContactForm from './components/ContactForm';
import TestPrep from './components/TestPrep';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/study-abroad" element={<StudyAbroad />} />
            <Route path="/mbbs-abroad" element={<MBBSAbroad />} />
            <Route path="/test-prep" element={<TestPrep />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<div className="pt-20"><ContactForm /></div>} />
            <Route path="/service/:id" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
        <AIChatBot />
      </div>
    </HashRouter>
  );
}

export default App;