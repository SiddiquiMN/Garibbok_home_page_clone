import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Service information
const services = [
  {
    id: 1,
    title: "Airport Rentals",
    image:
      "https://garibook.com/assets/images/services/Airport%20Rental_Webp.webp",
    alt: "Airport car rental service",
  },
  {
    id: 2,
    title: "Family Trips",
    image:
      "https://garibook.com/assets/images/services/family_trips.webp",
    alt: "Family enjoying a comfortable car journey",
  },
  {
    id: 3,
    title: "Long Tours",
    image:
      "https://garibook.com/assets/images/services/Group%20Tour_Webp.webp",
    alt: "Group of travelers enjoying a long tour",
  },
];

// Reusable service card
function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <img
        src={service.image}
        alt={service.alt}
        className="service-image"
        loading="lazy"
      />

      <div className="service-overlay">
        <h3>{service.title}</h3>
      </div>
    </article>
  );
}

// Main Travel Services component
function TravelServices() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".services-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
          once: true,
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      className="travel-services-section"
      id="services"
      ref={sectionRef}
    >
      <div className="travel-services-container">
        <h2 className="services-heading">
          More Than Miles —
          <br />
          We Bring People Together
        </h2>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelServices;