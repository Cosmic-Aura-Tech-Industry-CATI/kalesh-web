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
    </div>
  );
}

export default Careers;
