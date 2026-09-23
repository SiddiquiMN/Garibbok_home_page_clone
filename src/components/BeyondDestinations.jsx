import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Original Garibook blog images
const blogs = [
  {
    id: 1,
    image:
      "https://garibookadmin.com/admin/assets/images/blogs/6aabc714e2a79.webp",
    title: "ভ্রমণের নতুন অভিজ্ঞতা",
    date: "",
    description:
      "গাড়িবুকের সাথে উপভোগ করুন আপনার পরবর্তী ভ্রমণ।",
    url: "https://garibook.com/blogs/%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%A1-%E0%A6%B6%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%82%E0%A7%9F%E0%A7%87-%E0%A6%AC%E0%A6%A6%E0%A6%B2%E0%A7%87-%E0%A6%AF%E0%A6%BE%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%E0%A6%B0-%E0%A6%B6%E0%A6%B9%E0%A7%81%E0%A6%B0%E0%A7%87-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%AC%E0%A6%B9%E0%A6%A8-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE",
  },
  {
    id: 2,
    image:
      "https://garibookadmin.com/admin/assets/images/blogs/260920175045_g3UDrxr4bz.webp",
    title: "প্রাকৃতিক সৌন্দর্যের মাঝে ভ্রমণ",
    date: "",
    description:
      "আবিষ্কার করুন বাংলাদেশের সুন্দর ভ্রমণ গন্তব্য।",
    url: "https://garibook.com/blogs/%E0%A6%B8%E0%A6%BF%E0%A6%B2%E0%A7%87%E0%A6%9F%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%B6%E0%A6%A8%E0%A7%80%E0%A7%9F-%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%A8-%E0%A6%B8%E0%A6%AE%E0%A7%82%E0%A6%B9-%E0%A6%96%E0%A6%BE%E0%A6%AC%E0%A6%BE%E0%A6%B0-%E0%A6%93-%E0%A6%A5%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE",
  },
  {
    id: 3,
    image:
      "https://garibookadmin.com/admin/assets/images/blogs/260920175752_kbpbDIIOGX.webp",
    title: "বাংলাদেশের ঐতিহাসিক দর্শনীয় স্থান",
    date: "",
    description:
      "বাংলাদেশের ঐতিহাসিক স্থানগুলো ঘুরে দেখুন গাড়িবুকের সাথে।",
    url: "https://garibook.com/blogs/%E0%A6%A8%E0%A6%93%E0%A6%97%E0%A6%BE%E0%A6%81%E0%A6%B0-%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%B6%E0%A6%A8%E0%A7%80%E0%A7%9F-%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%A8-%E0%A6%B8%E0%A6%AE%E0%A7%82%E0%A6%B9-%E0%A6%96%E0%A6%BE%E0%A6%AC%E0%A6%BE%E0%A6%B0-%E0%A6%93-%E0%A6%A5%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE",
  },
];

// Reusable Blog Card
function BlogCard({ blog }) {
  return (
    <article className="blog-card">

      <div className="blog-image-wrapper">
        <img
          src={blog.image}
          alt={blog.title}
          className="blog-image"
          loading="lazy"
        />
      </div>

      <div className="blog-content">

        {blog.date && (
          <p className="blog-date">{blog.date}</p>
        )}

        <h3 className="blog-title">
          {blog.title}
        </h3>

        <p className="blog-description">
          {blog.description}
        </p>

      </div>

    </article>
  );
}

// Main Component
function BeyondDestinations() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".blogs-heading", {
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

      gsap.from(".blog-card", {
        scrollTrigger: {
          trigger: ".blogs-grid",
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
      className="beyond-destinations-section"
      id="blogs"
      ref={sectionRef}
    >
      <div className="beyond-destinations-container">

        {/* Section Header */}

        <div className="blogs-header">

          <div className="blogs-heading-wrapper">

            <h2 className="blogs-heading">
              Beyond Destinations
            </h2>

            <p className="blogs-description">
              Discover travel hacks, guides, and inspirations
              for your next intercity trip with Garibook.
            </p>

          </div>

          <a
            href="https://garibook.com/"
            className="blogs-view-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Show All Blogs
            <span aria-hidden="true">→</span>
          </a>

        </div>

        {/* Blog Cards */}

        <div className="blogs-grid">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default BeyondDestinations;