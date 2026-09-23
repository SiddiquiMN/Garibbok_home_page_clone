import { useState } from "react";

// ========================================
// SERVICE CATEGORIES
// ========================================

const serviceCategories = [
  "Rides",
  "Garibook Business",
  "Garibook Club",
  "VMS",
];

// ========================================
// RIDE SERVICES
// ========================================

const rideServices = [
  {
    id: 1,
    title: "Intercity Car Rental",
    description:
      "Travel between cities with comfort and confidence.",
    icon: "https://garibook.com/assets/images/cars/intercity_car_rental.svg",
  },

  {
    id: 2,
    title: "Ride share",
    description:
      "Go anywhere in the city, quickly and easily.",
    icon: "https://garibook.com/assets/images/cars/rideshare.svg",
  },

  {
    id: 3,
    title: "Airport Rental",
    description:
      "Whether you're flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
    icon: "https://garibook.com/assets/images/cars/airport_rental.svg",
  },

  {
    id: 4,
    title: "Hourly Rental",
    description:
      "Rent a car by the hour, tailored to your needs.",
    icon: "https://garibook.com/assets/images/cars/hourly_rental.svg",
  },
];

// ========================================
// OTHER SERVICE TABS
// ========================================

const serviceDetails = {
  "Garibook Business": {
    title: (
      <>
        Modern Car Rentals
        <br />
        for Business
      </>
    ),

    description:
      "Simplify your corporate transportation, ensure on-time team mobility, and gain control with our VMS.",

    image:
      "https://garibook.com/assets/images/services/busines.jpeg",

    imageAlt:
      "Garibook Business corporate transportation",

    link: "https://garibook.com/",
  },

  "Garibook Club": {
    title: (
      <>
        Turn Your Car into
        <br />
        Earnings with Garibook
        <br />
        Club
      </>
    ),

    description:
      "Garibook Club is more than just a community. Join a vibrant network of car enthusiasts, all fueled by the same passion: the open road and the thrill of making money doing what they love.",

    image:
      "https://garibook.com/assets/images/services/garibook_club.jpg",

    imageAlt:
      "Garibook Club car owners and business partners",

    link: "https://garibook.com/",
  },

  VMS: {
    title: (
      <>
        Vehicle Management
        <br />
        System - VMS
      </>
    ),

    description:
      "Just like Garibook Business makes traveling easy for your team, our Vehicle Management System (VMS) helps you take care of your own cars. VMS is a great tool that works with Garibook Business to make sure your vehicles are used the best way possible.",

    image:
      "https://garibook.com/assets/images/vms/Frame_1000001473.png",

    imageAlt:
      "Garibook Vehicle Management System dashboard",

    link: "https://garibook.com/",
  },
};

// ========================================
// COMPONENT
// ========================================

function OurServices() {
  const [activeCategory, setActiveCategory] =
    useState("Rides");

  const activeService = serviceDetails[activeCategory];

  return (
    <section
      className="our-services-section"
      id="services"
    >
      <div className="our-services-container">

        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <h2 className="our-services-title">
          Our Services
        </h2>

        {/* =====================================
            SERVICE CATEGORY TABS
        ===================================== */}

        <div
          className="our-services-tabs"
          role="tablist"
          aria-label="Our Services"
        >
          {serviceCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={
                activeCategory === category
              }
              className={`our-services-tab ${
                activeCategory === category
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* =====================================
            SERVICES CONTENT
        ===================================== */}

        <div
          className="our-services-content"
          role="tabpanel"
        >

          {/* =====================================
              RIDES TAB
          ===================================== */}

          {activeCategory === "Rides" && (
            <div className="our-services-rides">

              <h3 className="our-services-subtitle">
                Every Ride
                <br />
                One Platform
              </h3>

              <div className="our-services-grid">

                {rideServices.map((service) => (
                  <div
                    className="our-service-card"
                    key={service.id}
                  >

                    <div className="our-service-icon">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="our-service-icon-image"
                        loading="lazy"
                      />
                    </div>

                    <h4>{service.title}</h4>

                    <p>{service.description}</p>

                  </div>
                ))}

              </div>

            </div>
          )}

          {/* =====================================
              BUSINESS / CLUB / VMS TABS
          ===================================== */}

          {activeService && (
            <div
              className={`our-services-detail ${
                activeCategory === "VMS"
                  ? "our-services-vms"
                  : ""
              }`}
              key={activeCategory}
            >

              {/* LEFT CONTENT */}

              <div className="our-services-detail-content">

                <h3>
                  {activeService.title}
                </h3>

                <p>
                  {activeService.description}
                </p>

                <a
                  href={activeService.link}
                  className="our-services-detail-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More

                  <span aria-hidden="true">
                    →
                  </span>
                </a>

              </div>

              {/* RIGHT IMAGE */}

              <div className="our-services-detail-image">

                <img
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  loading="lazy"
                />

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default OurServices;