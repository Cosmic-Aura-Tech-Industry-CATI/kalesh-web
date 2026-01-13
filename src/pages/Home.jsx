import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          Kalesh – India’s First Anonymous Opinion & Live Polling Platform
        </title>

        <meta
          name="description"
          content="Kalesh is India’s first anonymous social media platform for real-time opinions and live polls. Share honestly, vote instantly, and express freely without identity or judgment."
        />

        <link rel="canonical" href="https://thekalesh.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Kalesh – Anonymous Opinions & Live Polls" />
        <meta
          property="og:description"
          content="Vote, share opinions, and engage anonymously with real-time live polls on Kalesh."
        />
        <meta property="og:url" content="https://thekalesh.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thekalesh.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kalesh – Anonymous Opinion Platform" />
        <meta
          name="twitter:description"
          content="India’s first real-time anonymous opinion and polling social platform."
        />
        <meta name="twitter:image" content="https://thekalesh.com/og-image.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Kalesh",
            "url": "https://thekalesh.com",
            "description": "India’s first anonymous opinion and real-time polling social platform for Gen Z."
          }
        `}
        </script>
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <div className="home-wrapper">
        {/* ================= HERO SECTION ================= */}
        <div className="container-fluid home-hero px-0">
          <div className="container">
            <div className="row align-items-center gy-5 gy-lg-0">
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                <div className="hero-content px-3 px-md-0">
                  <h1 className="hero-title">
                    India&apos;s First Anonymous Social Media Platform
                  </h1>

                  <p className="hero-subtitle mt-3 mt-md-4">
                    A platform where your opinion matters, not your identity.
                  </p>

                  <div className="hero-buttons d-flex flex-column flex-sm-row gap-3 mt-4 mt-md-5">
                    <button className="btn-kalesh">
                      Download App (Coming Soon)
                    </button>

                    <button className="btn-outline-kalesh">
                      Join the Kalesh Community
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6 order-1 order-lg-2">
                <div className="hero-image text-center px-3 px-md-0">
                  <img
                    src="/logo.png"
                    className="img-fluid logo-glow"
                    alt="Kalesh anonymous social media platform logo"
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔽 REST OF YOUR SECTIONS (UNCHANGED UI) */}
        {/* Your existing sections stay exactly as they are */}

        {/* ================= INFO SECTION ================= */}
        <div className="kalesh-info-section">
          <div className="container">
            {/* FULL WIDTH TOP IMAGE */}
            <div className="info-image-row mt-4 mt-md-5">
              <img
                src="/logoupper.png"
                alt="Kalesh Top Banner"
                className="info-full-image"
                loading="lazy"
              />
            </div>

            {/* CONTENT */}
            <div className="info-content text-center px-3 px-md-5">
              <h2 className="info-title mb-3">No Profile Pressure</h2>
              <h2 className="info-title mb-3">No Judgment</h2>
              <h2 className="info-title mb-3 mb-md-4">Just Honest Opinions</h2>
            </div>

            {/* FULL WIDTH BOTTOM IMAGE */}
            <div className="info-image-row mb-4 mb-md-5">
              <img
                src="/logolower.png"
                alt="Kalesh Bottom Banner"
                className="info-full-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ===== REAL-TIME POLL INFO DIV ===== */}
        <div className="container-fluid section-poll py-4 py-md-5">
          <div className="container">
            <div className="row align-items-center gy-5 gy-lg-0">
              {/* LEFT IMAGE COLUMN */}
              <div className="col-12 col-lg-6">
                <div className="poll-image-container text-center">
                  <img
                    src="/realtime_opinion_poll_on_kalesh.png"
                    alt="Real-time Poll on kalesh"
                    className="poll-image img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT COLUMN */}
              <div className="col-12 col-lg-6">
                <div className="poll-content px-3 px-lg-5">
                  <h2 className="section-title">
                    Live poll broadcasting with instant voting and maximum user
                    engagement
                  </h2>

                  <p className="section-description mt-3 mt-md-4">
                    Whether you're a new user or a well-established influencer, we
                    deliver fair, equal, and real engagement for everyone on the
                    platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== PROFILE ANONYMITY INFO DIV ===== */}
        <div className="container-fluid section-profile py-4 py-md-5">
          <div className="container">
            <div className="row align-items-center gy-5 gy-lg-0">
              {/* LEFT CONTENT COLUMN */}
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                <div className="profile-content px-3 px-lg-5">
                  <h2 className="section-title">
                    An anonymous platform that provides complete profile anonymity.
                  </h2>

                  <p className="section-description mt-3 mt-md-4">
                    India's first anonymous social media platform that allows
                    users to create a fully anonymous profile for safe, private,
                    and judgment-free online interaction.
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE COLUMN */}
              <div className="col-12 col-lg-6 order-1 order-lg-2">
                <div className="profile-image-container text-center">
                  <img
                    src="/kalesh_anonymous_Social_Profile.png"
                    alt="kalesh_anonymous_Social_Profile"
                    className="profile-image img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== ANONYMOUS CHAT INFO DIV ===== */}
        <div className="container-fluid section-chat py-4 py-md-5">
          <div className="container">
            <div className="row align-items-center gy-5 gy-lg-0">
              {/* LEFT IMAGE COLUMN */}
              <div className="col-12 col-lg-6">
                <div className="chat-image-container text-center">
                  <img
                    src="/end_to_end_encrypted_anonymous_individual_chat.png"
                    alt="end_to_end_encrypted_anonymous_individual_chat"
                    className="chat-image img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT COLUMN */}
              <div className="col-12 col-lg-6">
                <div className="chat-content px-3 px-lg-5">
                  <h2 className="section-title">
                    We chat securely and anonymously
                  </h2>

                  <p className="section-description mt-3 mt-md-4">
                    When your vibe matches with a stranger, you connect through
                    one-on-one private chats that are secure, anonymous, and
                    judgment-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CREATE POLLS INFO DIV ===== */}
        <div className="container-fluid section-create py-4 py-md-5">
          <div className="container">
            <div className="row align-items-center gy-5 gy-lg-0">
              {/* LEFT CONTENT COLUMN */}
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                <div className="create-content px-3 px-lg-5">
                  <h2 className="section-title">Create polls freely, your way</h2>
                  <p className="section-description mt-3 mt-md-4">
                    With real-time voting, instant reach, and high user
                    engagement.
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE COLUMN */}
              <div className="col-12 col-lg-6 order-1 order-lg-2">
                <div className="create-image-container text-center">
                  <img
                    src="/anonymous_opinion_poll_creation.png"
                    alt="anonymous_opinion_poll_creation"
                    className="create-poll-image img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
