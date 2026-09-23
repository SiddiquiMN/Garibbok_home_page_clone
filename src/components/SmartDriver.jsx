import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function SmartDriver() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".smart-driver-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        x: -50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".smart-driver-image", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        x: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      className="smart-driver-section"
      id="smart-driver"
      ref={sectionRef}
    >
      <div className="smart-driver-container">

        <h2 className="smart-driver-section-heading">
          Be a Smart Driver
        </h2>

        <div className="smart-driver-banner">

          {/* Left Side */}

          <div className="smart-driver-content">

            <h3>
              0% Commission
              <br />
              100% Freedom
            </h3>

            <a
              href="https://garibook.com/"
              className="smart-driver-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                Download Smart
                <br />
                Driver App
              </span>

              <span aria-hidden="true">→</span>
            </a>

          </div>

          {/* Right Side */}

          <div className="smart-driver-image-wrapper">

            <img
              src="https://garibook.com/assets/images/app-screen/no_commission_app_screen.png"
              alt="Garibook Smart Driver holding a smartphone"
              className="smart-driver-image"
              loading="lazy"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default SmartDriver;