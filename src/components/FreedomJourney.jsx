import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const bookingSteps = [
  {
    id: 1,
    title: "Choose the Car",
    description: "Pick what suits your comfort.",
    icon: "https://garibook.com/assets/icon/car.svg",
    color: "#1554ff",
  },
  {
     id: 2,
    title: "Choose the Driver",
    description: "Based on ratings and reviews.",
    icon: "https://garibook.com/assets/icon/drive.svg",
    color: "#ffcc00",
  },
  {
    id: 3,
    title: "Choose the Fare",
    description: "Select the bid that fits your budget.",
    icon: "https://garibook.com/assets/icon/price.svg",
    color: "#22c55e",
  },
];

function FreedomJourney() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      timeline
        .from(".freedom-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".freedom-image",
          {
            y: 60,
            opacity: 0,
            scale: 0.95,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".booking-step",
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.4"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      className="freedom-section"
      id="how-it-works"
      ref={sectionRef}
    >
      <div className="freedom-container">

        <h2 className="freedom-heading">
          Freedom in Every Journey
        </h2>

        <div className="freedom-image-wrapper">
          <img
            src="https://garibook.com/assets/images/banner/garibook_freedom.webp"
            alt="Passengers enjoying a comfortable car journey"
            className="freedom-image"
            />
        </div>

        <div className="booking-steps">

          {bookingSteps.map((step) => (
            <div className="booking-step" key={step.id}>

                  <div
                    className="step-icon"
                    style={{ backgroundColor: step.color }}
                  >
                    <img
                      src={step.icon}
                      alt=""
                      className="step-icon-image"
                      aria-hidden="true"
                    />
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                </div>
              ))}

            </div>
           </div>
        </section>
        );
        }

export default FreedomJourney;