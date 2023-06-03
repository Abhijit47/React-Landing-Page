import React from 'react';
import './App.css';
import CTA from './components/CTA/CTA';
import Feature from './components/Features/Feature';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HowItWorks from './components/Howitworks/HowItWorks';
import Navbar from './components/Navbar/Navbar';
import Testimonials from './components/Testimonials/Testimonials';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Feature />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
