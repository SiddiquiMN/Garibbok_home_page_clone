import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const heroHeadings = [
  ["Assurance of", "Effortless Travel"],
  ["Luxury trips with", "Comfort"],
  ["Your Journey starts", "Here..."],
];

const TYPE_SPEED = 85;
const PAUSE_AFTER_TYPING = 2000;

function Hero() {
  const heroRef = useRef(null);

  const [headingIndex, setHeadingIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);

  const currentHeading = heroHeadings[headingIndex].join("\n");

  useGSAP(
    () => {
      gsap.from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-button", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });
    },
    { scope: heroRef }
  );

  useEffect(() => {
    const isFinished = characterCount >= currentHeading.length;

    const timeout = window.setTimeout(
      () => {
        if (isFinished) {
          // Instantly clear the heading and start typing the next one.
          setHeadingIndex(
            (index) => (index + 1) % heroHeadings.length
          );
          setCharacterCount(0);
        } else {
          // Type the current heading from left to right.
          setCharacterCount((count) => count + 1);
        }
      },
      isFinished ? PAUSE_AFTER_TYPING : TYPE_SPEED
    );

    return () => window.clearTimeout(timeout);
  }, [characterCount, currentHeading]);

  return (
    <div className="hero-container" ref={heroRef}>
      <div className="hero-left">
        <h1 className="hero-title">
          <span className="hero-typed-text">
            {currentHeading.slice(0, characterCount)}
          </span>

          <span
            className="hero-typing-cursor"
            aria-hidden="true"
          >
            |
          </span>
        </h1>
      </div>

      <div className="hero-right">
        <p className="hero-description">
          Choose your city, pick your car and enjoy the
          journey with Garibook&apos;s best drivers.
        </p>

        <a href="#booking" className="hero-button">
          Download Now
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

export default Hero;