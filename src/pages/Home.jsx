function Home() {
  return (
    <div className="home-wrapper">
      {/* ================= HERO SECTION ================= */}
      <div className="home-hero container-fluid px-0">
        <div className="row align-items-center g-0">
          {/* LEFT CONTENT */}
          <div className="col-md-6 hero-content">
            <h1>India’s first anonymous app</h1>

            <p className="text-muted mt-4 fs-5">
              A platform where your opinion matters, not your identity.
            </p>

            <div className="hero-buttons">
              <button className="btn-kalesh">Download App (Coming Soon)</button>

              <button className="btn-outline-kalesh">
                Join the Kalesh Community
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 hero-image text-center">
            <img
              src="/logo.png"
              className="img-fluid logo-glow"
              alt="Kalesh Logo"
            />
          </div>
        </div>
      </div>

      {/* ================= INFO SECTION ================= */}

      {/*---<div className="kalesh-divider"></div> ---*/}

      <div className="kalesh-info-section">
        {/* FULL WIDTH TOP IMAGE */}
        <div className="info-image-row mt-5">
          <img
            src="/logoupper.png"
            alt="Kalesh Top Banner"
            className="info-full-image"
          />
        </div>

        {/* CONTENT */}
        <div className="info-content text-center">
          <h2 className="mb-3">No Profile Pressure</h2>
          <h2 className="mb-3">No Judgment</h2>
          <h2 className="mb-3">Just Honest Opinions</h2>
        </div>

        {/* FULL WIDTH BOTTOM IMAGE */}
        <div className="info-image-row mb-4">
          <img
            src="/logolower.png"
            alt="Kalesh Bottom Banner"
            className="info-full-image"
          />
        </div>
      </div>

      {/* ===== REAL-TIME POLL INFO DIV ===== */}

      <div className="container-fluid px-5 py-5">
        <div className="row align-items-center">
          {/* LEFT IMAGE COLUMN */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/poll-mobile.png"
              alt="Real-time Poll Preview"
              className="poll-image"
            />
          </div>

          {/* RIGHT CONTENT COLUMN */}
          <div className="col-md-6 poll-content">
            <h2>
              Real-time poll broadcasting with instant voting and high user
              engagement
            </h2>

            <p className="text-muted mt-3">
              Whether you are a new user or an established influencer, we
              provide real engagement with complete fairness for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* ===== PROFILE ANONYMITY INFO DIV ===== */}

      <div className="container-fluid px-5 py-5">
        <div className="row align-items-center">
          {/* LEFT CONTENT COLUMN */}
          <div className="col-md-6 profile-content mb-4 mb-md-0">
            <h2>
              An anonymous platform that offers complete profile anonymity.
            </h2>

            <p className="text-muted mt-4">
              India’s first anonymous platform that lets you create an anonymous
              social media profile.
            </p>
          </div>

          {/* RIGHT IMAGE COLUMN */}
          <div className="col-md-6 text-center">
            <img
              src="/profile-mobile.png"
              alt="Anonymous Profile Preview"
              className="profile-image"
            />
          </div>
        </div>
      </div>

      {/* ===== ANONYMOUS CHAT INFO DIV ===== */}

      <div className="container-fluid px-5 py-5">
        <div className="row align-items-center">
          {/* LEFT IMAGE COLUMN */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/chat-mobile.png"
              alt="Anonymous Chat Preview"
              className="chat-image"
            />
          </div>

          {/* RIGHT CONTENT COLUMN */}
          <div className="col-md-6 chat-content">
            <h2>We chat anonymously</h2>

            <p className="text-muted mt-4">
              When our vibes match with a stranger, we chat one-on-one
              individually and anonymously.
            </p>
          </div>
        </div>
      </div>

      {/* ===== CREATE POLLS INFO DIV ===== */}

      <div className="container-fluid px-5 py-5">
        <div className="row align-items-center">
          {/* LEFT CONTENT COLUMN */}
          <div className="col-md-6 create-content mb-4 mb-md-0">
            <h2>Create polls freely, your way.</h2>
          </div>

          {/* RIGHT IMAGE COLUMN */}
          <div className="col-md-6 text-center">
            <img
              src="/create-poll-mobile.png"
              alt="Create Poll Preview"
              className="create-poll-image"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
