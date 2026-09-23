import React from "react";

const Footer = () => {
  const appDownloadLink =
    "https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page";

  return (
    <footer className="garibook-footer">

      <div className="footer-container">

        {/* =====================================
            TOP FOOTER
        ===================================== */}

        <div className="footer-top">

          {/* Garibook Links */}

          <div className="footer-column">

            <h3>garibook</h3>

            <ul>
              <li>
                <a href="https://garibook.com/about-us">
                  About Us
                </a>
              </li>

              <li>
                <a href="#testimonials">
                  Customer Reviews
                </a>
              </li>

              <li>
                <a href="https://garibook.com/">
                  Career
                </a>
              </li>

              <li>
                <a href="#news">
                  Newsroom
                </a>
              </li>

              <li>
                <a href="https://garibook.com/">
                  Garibook Map
                </a>
              </li>
            </ul>

          </div>

          {/* Services */}

          <div className="footer-column">

            <h3>Services</h3>

            <ul>
              <li>
                <a href="#booking">
                  Intercity Rental
                </a>
              </li>

              <li>
                <a href="#booking">
                  Airport Pick and Drop
                </a>
              </li>

              <li>
                <a href="#booking">
                  Hourly Rental
                </a>
              </li>

              <li>
                <a href="https://garibook.com/">
                  Vehicle Management System (VMS)
                </a>
              </li>
            </ul>

          </div>

          {/* Become Our Partner */}

          <div className="footer-column">

            <h3>Become Our Partner</h3>

            <ul>
              <li>
                <a href="https://garibook.com/">
                  Become a Smart Driver
                </a>
              </li>

              <li>
                <a href="https://garibook.com/">
                  Become a member of Garibook Club
                </a>
              </li>

              <li>
                <a href="https://garibook.com/">
                  Garibook Business for Corporate Travel
                </a>
              </li>
            </ul>

          </div>

          {/* Contacts */}

          <div className="footer-column footer-contact">

            <h3>Contacts</h3>

            <a href="mailto:support@garibook.com">
              support@garibook.com
            </a>

            <p>
              Police Plaza Concord Tower
              <br />
              -01, 13th Floor, Plot-02, Road-
              <br />
              144, Gulshan, Dhaka-1212
            </p>

            <a href="tel:+8809678112233">
              +88 09 678 11 22 33
            </a>

          </div>

        </div>

        {/* =====================================
            MIDDLE FOOTER
        ===================================== */}

        <div className="footer-middle">

          {/* Download App */}

          <div className="footer-download">

            <h2>
              Download Our
              <br />
              Garibook Mobile App
            </h2>

            <a
              href={appDownloadLink}
              className="footer-download-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download App

              <span aria-hidden="true">→</span>
            </a>

          </div>

          {/* Product By */}

          <div className="footer-company">

            <h2>A Product By</h2>

            <div className="footer-company-info">

              <div className="footer-company-logo">
                <img src="public/images/nrb_no_background.svg" alt="NRB Solution Ltd." />
              </div>

              <div>
                <p>NRB Solution Ltd.</p>

                <a
                  href="https://garibook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website →
                </a>
              </div>

            </div>

          </div>

          {/* Powered By */}

          <div className="footer-company">

            <h2>Powered By</h2>

            <div className="footer-company-info">

              <div className="footer-company-logo">
                <img src="public/images/link3-two.png" alt="Link 3 Technologies" />
              </div>

              <div>
                <p>Link 3 Technologies</p>

                <a
                  href="https://garibook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website →
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* =====================================
            BOTTOM FOOTER
        ===================================== */}

        <div className="footer-bottom">

          {/* Logo */}

          <div className="footer-brand">
            <img src="images/Garibook_Logo.svg" alt="Garibook" />

            <span>garibook</span>
          </div>

          {/* Legal Links */}

          <div className="footer-legal">

            <a href="https://garibook.com/">
              Terms & Conditions
            </a>

            <a href="https://garibook.com/">
              Privacy Policy
            </a>

          </div>

          {/* Trade License */}

          <div className="footer-license">

            <p>
              Trade license number:
              <br />
              TRAD/DNCC/013806/2024
            </p>

          </div>

          {/* Copyright */}

          <div className="footer-copyright">

            <p>© 2026 Garibook.com</p>

          </div>

        </div>

      </div>

      {/* =====================================
          PAYMENT GATEWAY SECTION
      ===================================== */}

      {/* =====================================
    PAYMENT GATEWAY SECTION
===================================== */}

        <div className="footer-payment">
            <div className="footer-payment-container">

                <img
                src="https://garibook.com/assets/images/clients/ssl.png"
                alt="Garibook supported payment methods"
                className="footer-payment-image"
                loading="lazy"
                />

            </div>
        </div>

    </footer>
  );
};

export default Footer;