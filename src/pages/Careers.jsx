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
          <div className="col-md-6 mb-4  mb-md-0 ">
            <h2 className="careers-subtitle">Purposeful</h2>

            <p className="careers-text mb-5 ">
              Evolving Our Purpose: We continuously refine our mission to
              empower an enlightened workforce, engage conscious customers, and
              build a stronger, more connected community
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center mb-5 ">
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
          
          {/* TOP LEFT QUOTE */}
          <span className="career-quote-mark top">“</span>

          <p className="career-quote-text">
            We are on an exciting journey to become India’s first fully
            anonymous platform. Our commitment to leading with empathy,
            resilience, and purpose enables us to create a positive impact
            for our employees, customers, partners, and the communities we
            serve.
          </p>

          {/* AUTHOR */}
          <div className="career-quote-author">
            <i className="fa-solid fa-user"></i>
            <span>Mr. Anonymous</span>
          </div>

          {/* BOTTOM RIGHT QUOTE */}
          <span className="career-quote-mark bottom">”</span>
        </div>
      </div>


            {/* JOIN OUR TEAM FORM SECTION */}
      <div className="container py-5">
        <div className="career-form-wrapper text-center">

          <h2 className="career-form-title">Join our growing team</h2>
          <p className="career-form-subtitle">
            Be part of something extraordinary
          </p>
          <p className="career-form-text">
            We’re always looking for exceptional talent, <br />
            send us your resume.
          </p>

          {/* FORM */}
          <form className="career-form">
            <div className="career-form-row">
              <label>Name :</label>
              <input type="text" placeholder="" />
            </div>

            <div className="career-form-row">
              <label>E-mail ID :</label>
              <input type="email" placeholder="" />
            </div>

            <div className="career-form-row">
              <label>Phone No :</label>
              <input type="tel" placeholder="" />
            </div>

            <div className="career-form-row">
              <label>Resume :</label>
              <div className="resume-input ">
                <input type="file" />
                <i className="fa-solid fa-paperclip"></i>
              </div>
            </div>

            <button type="submit" className="career-apply-btn">
              APPLY NOW
            </button>
          </form>

          <p className="career-warning">
            WARNING – Fraudulent Job Offers. Be aware of unsolicited and
            fraudulent job offers
          </p>

        </div>
      </div>

      {/* SOCIAL FOLLOW SECTION */}
<div className="container-fluid social-follow-section">
  <div className="container">
    <div className="row align-items-center">

      {/* LEFT TEXT */}
      <div className="col-md-6 mb-4 mb-md-0">
        <p className="social-label">SOCIAL</p>
        <h2 className="social-heading">
          Follow us for the latest updates
        </h2>
      </div>

      {/* RIGHT ICONS */}
      <div className="col-md-6 text-md-end social-icons mt-4">
        <a href="#" aria-label="X">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="#" aria-label="Facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" aria-label="YouTube">
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
