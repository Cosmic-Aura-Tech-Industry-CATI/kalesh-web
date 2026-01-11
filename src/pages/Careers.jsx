function Careers() {
  return (
    <div className="container-fluid careers-page px-0">
      {/* TOP HEADING */}
      <div className="container text-center py-5">
        <h1 className="careers-title">
          Build the future at the heart of change at <h1><span>Kalesh.</span></h1>
        </h1>
      </div>

      {/* CONTENT SECTION */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-md-6 mb-4 ">
            <h2 className="careers-subtitle ">Purposeful</h2>
            <p className="careers-text mb-5 fs-5 ">
              Evolving Our Purpose: We continuously refine our mission to
              empower an enlightened workforce, engage conscious customers, and
              build a stronger, more connected community.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center mb-5">
            <img
              src="/purpose_Fuels_passion_Career.png"
              alt="Purpose fuels passion"
              className="img-fluid careers-image"
            />
          </div>
        </div>
      </div>

      {/* CAREER QUOTE SECTION */}
      <div className="container py-5">
        <div className="career-quote-wrapper">
          <span className="career-quote-mark top">"</span>
          <p className="career-quote-text">
            We are on an exciting journey to become India's first fully
            anonymous platform. Our commitment to leading with empathy,
            resilience, and purpose enables us to create a positive impact
            for our employees, customers, partners, and the communities we
            serve.
          </p>
          <div className="career-quote-author">
            <i className="fa-solid fa-user"></i>
            <span>Mr. Anonymous</span>
          </div>
          <span className="career-quote-mark bottom">"</span>
        </div>
      </div>

      {/* JOIN OUR TEAM FORM SECTION WITH GOLDEN-ORANGE THEME */}
      <div className="container py-5">
        <div className="career-form-wrapper text-center">
          <h2 className="career-form-title mb-3">Join our growing team</h2>
          <p className="career-form-subtitle mb-2">
            Be part of something extraordinary
          </p>
          <p className="career-form-text mb-5">
            We're always looking for exceptional talent, <br />
            send us your resume.
          </p>

          {/* FORM WITH GOLDEN-ORANGE BORDER */}
          <div className="golden-orange-form-container">
            <div className="form-decoration-top"></div>
            <form className="career-form">
              <div className="form-group-golden mb-4">
                <label className="golden-orange-label">
                  <i className="fas fa-user-circle label-icon"></i>
                  Name
                </label>
                <div className="golden-input-wrapper">
                  <input 
                    type="text" 
                    className="golden-orange-input"
                    placeholder="Enter your full name"
                  />
                  <span className="golden-input-icon">
                    <i className="fa-regular fa-user"></i>
                  </span>
                </div>
              </div>

              <div className="form-group-golden mb-4">
                <label className="golden-orange-label">
                  <i className="fas fa-envelope label-icon"></i>
                  E-mail ID
                </label>
                <div className="golden-input-wrapper">
                  <input 
                    type="email" 
                    className="golden-orange-input"
                    placeholder="Enter your email address"
                  />
                  <span className="golden-input-icon">
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                </div>
              </div>

              <div className="form-group-golden mb-4">
                <label className="golden-orange-label">
                  <i className="fas fa-phone label-icon"></i>
                  Phone No
                </label>
                <div className="golden-input-wrapper">
                  <input 
                    type="tel" 
                    className="golden-orange-input"
                    placeholder="Enter your phone number"
                  />
                  <span className="golden-input-icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                </div>
              </div>

              <div className="form-group-golden mb-5">
                <label className="golden-orange-label">
                  <i className="fas fa-file-upload label-icon"></i>
                  Resume
                </label>
                <div className="golden-file-upload">
                  <label htmlFor="resume-upload" className="file-upload-label">
                    <div className="file-upload-content">
                      <i className="fa-solid fa-cloud-arrow-up file-upload-icon"></i>
                      <span className="file-upload-text">
                        Click to upload your resume
                      </span>
                      <span className="file-upload-hint">
                        PDF, DOC, DOCX up to 5MB
                      </span>
                    </div>
                    <div className="file-upload-border"></div>
                    <input 
                      type="file" 
                      id="resume-upload" 
                      className="file-upload-input"
                      accept=".pdf,.doc,.docx"
                    />
                  </label>
                </div>
              </div>

              <button type="submit" className="golden-orange-submit-btn">
                <span className="btn-text">APPLY NOW</span>
                <span className="btn-glow"></span>
                <i className="fa-solid fa-arrow-right btn-icon"></i>
              </button>
            </form>
            <div className="form-decoration-bottom"></div>
          </div>

          <p className="career-warning mt-4">
            <i className="fa-solid fa-triangle-exclamation warning-icon"></i>
            WARNING – Fraudulent Job Offers. Be aware of unsolicited and
            fraudulent job offers
          </p>
        </div>
      </div>

      {/* SOCIAL FOLLOW SECTION */}
      <div className="container-fluid social-follow-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <p className="social-label">SOCIAL</p>
              <h2 className="social-heading">
                Follow us for the latest updates
              </h2>
            </div>
            <div className="col-md-6 text-md-end social-icons mt-4">
              <a href="#" aria-label="X" className="social-icon-link">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook" className="social-icon-link">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram" className="social-icon-link">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube" className="social-icon-link">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;