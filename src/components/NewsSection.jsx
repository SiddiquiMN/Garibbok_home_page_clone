import { useState } from "react";

const newsArticles = [
  {
    id: 1,
    image:
      "https://garibookadmin.com/admin/assets/images/newsrooms/241205180904_liOX1GKSQy.webp",
    date: "December 05, 2024",
    title: "গাড়িবুক: বাংলাদেশে ইন্টারসিটি ভ্রমণে স্বাধীনতার নতুন পথচলা",
    description:
      "বাংলাদেশে ইন্টারসিটি ভ্রমণের অভিজ্ঞতাকে আরও সহজ ও আরামদায়ক করতে গাড়িবুক নিয়ে এসেছে নতুন সম্ভাবনা।",
    publisher: "প্রথম আলো",
    articleUrl: "https://garibook.com/blogs/%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%A1-%E0%A6%B6%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%82%E0%A7%9F%E0%A7%87-%E0%A6%AC%E0%A6%A6%E0%A6%B2%E0%A7%87-%E0%A6%AF%E0%A6%BE%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%E0%A6%B0-%E0%A6%B6%E0%A6%B9%E0%A7%81%E0%A6%B0%E0%A7%87-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%AC%E0%A6%B9%E0%A6%A8-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE",
  },
  {
    id: 2,
    image:
      "https://garibookadmin.com/admin/assets/images/newsrooms/67516d3a81863.jpeg",
    date: "December 04, 2024",
    title: 'Digital App to offer "Chander Gari"',
    description:
      "For the first time in Bangladesh, tourists can now book the iconic Chander Gari through an online platform.",
    publisher: "Dhaka Tribune",
    articleUrl: "https://epaper.dhakatribune.com/epaper/details/115797",
  },
  {
    id: 3,
    image:
      "https://garibookadmin.com/admin/assets/images/newsrooms/241204165747_E5W7U2wzVE.jpeg",
    date: "December 04, 2024",
    title: 'বাংলাদেশে প্রথমবার "চাঁদের গাড়ি" গাড়িবুক অ্যাপে',
    description:
      "বাংলাদেশের পর্যটকদের জন্য অনলাইনে চাঁদের গাড়ি বুকিংয়ের সুবিধা নিয়ে এসেছে গাড়িবুক।",
    publisher: "বাংলার কণ্ঠ",
    articleUrl: "https://www.kalerkantho.com/online/corporatecorner/2024/11/18/1448094",
  },
  {
    id: 4,
    image:
      "https://garibookadmin.com/admin/assets/images/newsrooms/250129124335_Df1YeHs6Nk.png",
    date: "",
    title: "Garibook in the News",
    description:
      "Discover more news and updates about Garibook and its services.",
    publisher: "Garibook",
    articleUrl: "https://www.kalerkantho.com/online/corporatecorner/2025/01/28/1473908",
  },
];

function NewsCard({ article }) {
  return (
    <article className="news-card">
      <div className="news-image-wrapper">
        <img
          src={article.image}
          alt={article.title}
          className="news-image"
          loading="lazy"
        />
      </div>

      <div className="news-content">
        {article.date && (
          <p className="news-date">{article.date}</p>
        )}

        <h3 className="news-title">{article.title}</h3>

        <p className="news-description">
          {article.description}
        </p>

        <div className="news-card-footer">
          <span className="news-publisher">
            {article.publisher}
          </span>

          {article.articleUrl ? (
            <a
              href={article.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="news-read-link"
            >
              Read Article <span aria-hidden="true">→</span>
            </a>
          ) : (
            <span className="news-link-unavailable">
              Article link unavailable
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;

  const nextSlide = () => {
    setCurrentIndex((previous) =>
      Math.min(
        previous + 1,
        newsArticles.length - visibleCount
      )
    );
  };

  const previousSlide = () => {
    setCurrentIndex((previous) =>
      Math.max(previous - 1, 0)
    );
  };

  const visibleArticles = newsArticles.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <section className="news-section" id="news">
      <div className="news-container">

        <div className="news-header">
          <h2 className="news-heading">
            We Featured by Top News
            <br />
            Platforms
          </h2>

          <div className="news-navigation">
            <button
              type="button"
              className="news-nav-button"
              onClick={previousSlide}
              disabled={currentIndex === 0}
              aria-label="Previous news articles"
            >
              ←
            </button>

            <button
              type="button"
              className="news-nav-button"
              onClick={nextSlide}
              disabled={
                currentIndex >=
                newsArticles.length - visibleCount
              }
              aria-label="Next news articles"
            >
              →
            </button>
          </div>
        </div>

        <div className="news-grid">
          {visibleArticles.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default NewsSection;