import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import BookingForm from "./components/BookingForm";
import FreedomJourney from "./components/FreedomJourney";
import TravelServices from "./components/TravelServices";
import BookingFeatures from "./components/BookingFeatures";
import SmartDriver from "./components/SmartDriver";
import NewsSection from "./components/NewsSection";
import Testimonials from "./components/Testimonials";
import BeyondDestinations from "./components/BeyondDestinations";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import CarAnimation from "./components/CarAnimation";
import OurServices from "./components/OurServices";
import BackToTop from "./components/BackToTop";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("car");

  return (
    <div className="app">

      <Header />

      <main>

        <section className="hero-section">
          <Hero />

          <BookingForm
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </section>

        <CarAnimation />

        <OurServices />

        <FreedomJourney />

        <TravelServices />

        <BookingFeatures />

        <SmartDriver />

        <NewsSection />

        <Testimonials />

        <BeyondDestinations />

        <DownloadApp />

      </main>

      <Footer />
      
      <BackToTop />

    </div>
  );
}

export default App;