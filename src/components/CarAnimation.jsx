import { useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// ========================================
// ORIGINAL GARIBOOK ASSETS
// ========================================

const carImage =
  "https://garibook.com/_next/static/media/Sedan_GiF.9efd9ae4.gif";

const cityImage =
  "https://garibook.com/_next/static/media/frame_1.312c65e3.png";

// ========================================
// STATISTICS
// ========================================

const statistics = [
  {
    id: 1,
    value: 300000,
    label: "Trip Requests",
  },
  {
    id: 2,
    value: 850000,
    label: "Total Customers",
  },
  {
    id: 3,
    value: 35000,
    label: "Active Drivers",
  },
  {
    id: 4,
    value: 64,
    label: "District Covered",
  },
];

// ========================================
// CAR ANIMATION COMPONENT
// ========================================

function CarAnimation() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const cityContainerRef = useRef(null);
  const cityTrackRef = useRef(null);

  const [cityLoaded, setCityLoaded] = useState(false);

  // ========================================
  // HEADING AND STATISTICS ANIMATION
  // ========================================

  useGSAP(
    () => {
      // Heading animation

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },

        y: 50,
        opacity: 0,

        duration: 1,
        ease: "power3.out",
      });

      // Statistics counting animation

      const counters = gsap.utils.toArray(
        ".car-animation-stat-value"
      );

      counters.forEach((counter) => {
        const targetValue = Number(
          counter.getAttribute("data-value")
        );

        const counterObject = {
          value: 0,
        };

        gsap.to(counterObject, {
          value: targetValue,

          duration: 2,
          ease: "power2.out",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },

          onUpdate: () => {
            counter.textContent =
              Math.floor(
                counterObject.value
              ).toLocaleString() + "+";
          },
        });
      });
    },

    {
      scope: sectionRef,
    }
  );

  // ========================================
  // INFINITE CITY SKYLINE ANIMATION
  // ========================================

  useGSAP(
    () => {
      if (!cityLoaded) return;

      const cityContainer = cityContainerRef.current;
      const cityTrack = cityTrackRef.current;

      if (!cityContainer || !cityTrack) return;

      // Get the original skyline image

      const originalImage = cityTrack.querySelector(
        ".car-animation-city-image"
      );

      if (!originalImage) return;

      let cityAnimation = null;

      let resizeObserver = null;

      // ========================================
      // SETUP CITY ANIMATION
      // ========================================

      const setupCityAnimation = () => {
        // Stop previous animation

        if (cityAnimation) {
          cityAnimation.kill();
          cityAnimation = null;
        }

        // Remove previously generated skyline copies

        cityTrack.innerHTML = "";

        // Get image dimensions

        const imageWidth = originalImage.naturalWidth;
        const imageHeight = originalImage.naturalHeight;

        const containerHeight = cityContainer.clientHeight;
        const containerWidth = cityContainer.clientWidth;

        if (
          !imageWidth ||
          !imageHeight ||
          !containerHeight ||
          !containerWidth
        ) {
          return;
        }

        // Calculate displayed image width

        const displayedImageWidth =
          (imageWidth / imageHeight) * containerHeight;

        // Calculate how many images are needed
        // to fill the entire screen

        const requiredImages =
          Math.ceil(
            containerWidth / displayedImageWidth
          ) + 3;

        // ========================================
        // CREATE SKYLINE IMAGES
        // ========================================

        for (let i = 0; i < requiredImages; i++) {
          const image = document.createElement("img");

          image.src = cityImage;

          image.alt = "";

          image.className =
            "car-animation-city-image";

          image.draggable = false;

          image.style.width =
            `${displayedImageWidth}px`;

          image.style.height =
            `${containerHeight}px`;

          cityTrack.appendChild(image);
        }

        // ========================================
        // RESET CITY POSITION
        // ========================================

        gsap.set(cityTrack, {
          x: 0,
        });

        // ========================================
        // CONTINUOUS CITY MOVEMENT
        // ========================================

        cityAnimation = gsap.to(cityTrack, {
          x: -displayedImageWidth,

          duration: 25,

          ease: "none",

          repeat: -1,
        });
      };

      // Initialize animation

      setupCityAnimation();

      // ========================================
      // RESPONSIVE RESIZE HANDLING
      // ========================================

      resizeObserver = new ResizeObserver(() => {
        setupCityAnimation();
      });

      resizeObserver.observe(cityContainer);

      // ========================================
      // CLEANUP
      // ========================================

      return () => {
        if (cityAnimation) {
          cityAnimation.kill();
        }

        if (resizeObserver) {
          resizeObserver.disconnect();
        }
      };
    },

    {
      scope: sectionRef,
      dependencies: [cityLoaded],
      revertOnUpdate: true,
    }
  );

  // ========================================
  // COMPONENT JSX
  // ========================================

  return (
    <section
      className="car-animation-section"
      ref={sectionRef}
      id="car-animation"
    >

      {/* =====================================
          CONTENT CONTAINER
      ===================================== */}

      <div className="car-animation-container">

        {/* Heading */}

        <h2
          className="car-animation-heading"
          ref={headingRef}
        >
          From Everyday Rides to Meaningful
          <br />
          Journeys
        </h2>

        {/* =====================================
            STATISTICS
        ===================================== */}

        <div className="car-animation-statistics">

          {statistics.map((stat) => (
            <div
              className="car-animation-stat"
              key={stat.id}
            >

              <h3
                className="car-animation-stat-value"
                data-value={stat.value}
              >
                0+
              </h3>

              <p>{stat.label}</p>

            </div>
          ))}

        </div>

      </div>

      {/* =====================================
          INFINITE MOVING CITY SKYLINE
      ===================================== */}

      <div
        className="car-animation-city"
        ref={cityContainerRef}
        aria-hidden="true"
      >

        <div
          className="car-animation-city-track"
          ref={cityTrackRef}
        >

          <img
            src={cityImage}
            alt=""
            className="car-animation-city-image"
            draggable="false"
            onLoad={() => setCityLoaded(true)}
          />

        </div>

      </div>

      {/* =====================================
          FIXED CAR
      ===================================== */}

      <div className="car-animation-car">

        <img
          src={carImage}
          alt="Animated Garibook car"
          draggable="false"
        />

      </div>

    </section>
  );
}

export default CarAnimation;