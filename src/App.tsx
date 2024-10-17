import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import SocialProof from './components/SocialProof';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <AboutUs />
        <SocialProof />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;