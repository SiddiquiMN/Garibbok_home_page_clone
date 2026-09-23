import { useState } from "react";

// Original Garibook testimonial videos
const testimonials = [
  {
    id: 1,
    name: "Atif Haider",
    videoId: "CsxeEof1T3M",
    thumbnail:
      "https://img.youtube.com/vi/CsxeEof1T3M/hqdefault.jpg",
  },
  {
    id: 2,
    name: "Mohammad Habibur Rahman",
    videoId: "JsBwaJ_VIcA",
    thumbnail:
      "https://img.youtube.com/vi/JsBwaJ_VIcA/hqdefault.jpg",
  },
  {
    id: 3,
    name: "Sadia Afrin",
    videoId: "8ma9XEGhi5s",
    thumbnail:
      "https://img.youtube.com/vi/8ma9XEGhi5s/hqdefault.jpg",
  },
];

// Reusable Testimonial Card
function TestimonialCard({ testimonial, onPlay }) {
  return (
    <article className="testimonial-card">

      <button
        type="button"
        className="testimonial-video"
        onClick={() => onPlay(testimonial.videoId)}
        aria-label={`Play ${testimonial.name}'s testimonial`}
      >
        <img
          src={testimonial.thumbnail}
          alt={`${testimonial.name} video thumbnail`}
          className="testimonial-thumbnail"
          loading="lazy"
        />

        <span className="testimonial-play-button" aria-hidden="true">
          ▶
        </span>
      </button>

      <h3 className="testimonial-name">
        {testimonial.name}
      </h3>

    </article>
  );
}

// Main Testimonials Component
function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;

  const nextSlide = () => {
    setCurrentIndex((previous) =>
      Math.min(
        previous + 1,
        testimonials.length - visibleCount
      )
    );
  };

  const previousSlide = () => {
    setCurrentIndex((previous) =>
      Math.max(previous - 1, 0)
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <section
      className="testimonials-section"
      id="testimonials"
    >
      <div className="testimonials-container">

        {/* Section Header */}

        <div className="testimonials-header">

          <div className="testimonials-heading-wrapper">

            <h2 className="testimonials-heading">
              Our Passengers Speak For Us
            </h2>

            <p className="testimonials-description">
              Our journey was made possible by our amazing
              passengers. Their experiences inspire us to
              make every journey more comfortable and
              memorable.
            </p>

          </div>

         <div className="testimonials-navigation">
            
                <button
                    type="button"
                    className="testimonial-nav-button prev-button"
                    aria-label="Previous testimonials"
                >
                    ←
                </button>

                {/* Next Button */}
                <button
                    type="button"
                    className="testimonial-nav-button next-button"
                    aria-label="Next testimonials"
                >
                    →
                </button>

            </div>

        </div>

        {/* Testimonial Cards */}

        <div className="testimonials-grid">

          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              onPlay={setActiveVideo}
            />
          ))}

        </div>

      </div>

      {/* Video Modal */}

      {activeVideo && (
        <div
          className="testimonial-modal"
          onClick={() => setActiveVideo(null)}
        >

          <div
            className="testimonial-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label="Passenger testimonial video"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="testimonial-modal-close"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              ✕
            </button>

            <div className="testimonial-video-wrapper">

              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1`}
                title="Garibook passenger testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Testimonials;