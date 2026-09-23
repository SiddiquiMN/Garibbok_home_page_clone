import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Original Garibook feature images
const features = [
  {
    id: 1,
    title: "Explore Various Ride Services",
    image: "https://garibook.com/assets/images/services/explore.jpeg",
    className: "feature-large",
  },
  {
    id: 2,
    title: "Freedom",
    image: "https://garibook.com/assets/images/services/freedom.jpg",
    className: "feature-small",
  },
  {
    id: 3,
    title: "Safe Travel",
    image: "https://garibook.com/assets/images/services/safe_travel.svg",
    className: "feature-bottom",
  },
  {
    id: 4,
    title: "Choose Your Preferred Car",
    image: "https://garibook.com/assets/images/services/prefarred_car.jpg",
    className: "feature-bottom",
  },
  {
    id: 5,
    title: "Smooth Experience",
    image: "https://garibook.com/assets/images/services/smooth.jpg",
    className: "feature-bottom",
  },
];

// Reusable Feature Card
function FeatureCard({ feature }) {
  return (
    <article className={`feature-card ${feature.className}`}>
      <img
        src={feature.image}
        alt={feature.title}
        className="feature-image"
        loading="lazy"
      />
    </article>
  );
}

// Main Booking Features Component
function BookingFeatures() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".features-heading", {
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

      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".features-grid",
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
      className="booking-features-section"
      id="features"
      ref={sectionRef}
    >
      <div className="booking-features-container">

        {/* Section Header */}

        <div className="features-header">
          <h2 className="features-heading">
            From Booking to Arrival, It's
            <br />
            All in Your Hands
          </h2>

          <a
            href="https://garibook.com/"
            className="features-download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download App
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Feature Cards */}

        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default BookingFeatures;