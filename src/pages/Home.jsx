function Home() {
  return (
    <div className="home-wrapper">
      {/* ================= HERO SECTION ================= */}
      <div className="home-hero container-fluid px-0">
        <div className="row align-items-center g-0">
          {/* LEFT CONTENT */}
          <div className="col-md-6 hero-content">
            <h1>India’s First Anonymous Social Media Platform</h1>

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
              src="/realtime_opinion_poll_on_kalesh.png"
              alt="Real-time Poll on kalesh"
              className="poll-image"
            />
          </div>

          {/* RIGHT CONTENT COLUMN */}
          <div className="col-md-6 poll-content">
            <h2>
              Live poll broadcasting with instant voting and maximum user
              engagement
            </h2>

            <p className="text-muted mt-3">
              Whether you’re a new user or a well-established influencer, we
              deliver fair, equal, and real engagement for everyone on the
              platform
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
              An anonymous platform that provides complete profile anonymity.
            </h2>

            <p className="text-muted mt-4">
              India’s first anonymous social media platform that allows users to
              create a fully anonymous profile for safe, private, and
              judgment-free online interaction.
            </p>
          </div>

          {/* RIGHT IMAGE COLUMN */}
          <div className="col-md-6 text-center">
            <img
              src="/kalesh_anonymous_Social_Profile.png"
              alt="kalesh_anonymous_Social_Profile"
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
              src="/end_to_end_encrypted_anonymous_individual_chat.png"
              alt="end_to_end_encrypted_anonymous_individual_chat"
              className="chat-image"
            />
          </div>

          {/* RIGHT CONTENT COLUMN */}
          <div className="col-md-6 chat-content">
            <h2>We chat securely and anonymously</h2>

            <p className="text-muted mt-4">
              When your vibe matches with a stranger, you connect through
              one-on-one private chats that are secure, anonymous, and
              judgment-free.
            </p>
          </div>
        </div>
      </div>

      {/* ===== CREATE POLLS INFO DIV ===== */}

      <div className="container-fluid px-5 py-5">
        <div className="row align-items-center">
          {/* LEFT CONTENT COLUMN */}
          <div className="col-md-6 create-content mb-4 mb-md-0">
            <h2>Create polls freely, your way</h2>
            <p className="text-muted mt-4">
              With real-time voting, instant reach, and high user engagement.
            </p>
          </div>

          {/* RIGHT IMAGE COLUMN */}
          <div className="col-md-6 text-center">
            <img
              src="/anonymous_opinion_poll_creation.png"
              alt="anonymous_opinion_poll_creation"
              className="create-poll-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
