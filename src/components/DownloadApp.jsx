import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function DownloadApp() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".download-app-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".download-app-image", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        y: 60,
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
      className="download-app-section"
      id="download-app"
      ref={sectionRef}
    >
      <div className="download-app-container">

        <div className="download-app-banner">

          {/* Left Side: Text and Button */}

          <div className="download-app-content">

            <h2>
              Download
              <br />
              Garibook Mobile App
            </h2>

            <p>
              Download our Customer, Smart Driver and
              Enterprise App
            </p>

            <a
              href="https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page"
              className="download-app-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download App</span>

              <span aria-hidden="true">→</span>
            </a>

          </div>

          {/* Right Side: Original Smartphone Image */}

          <div className="download-app-image-wrapper">

            <img
              src="https://garibook.com/_next/static/media/app-with-logo.0f885eea.png"
              alt="Garibook mobile application displayed on a smartphone"
              className="download-app-image"
              loading="lazy"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default DownloadApp;