function Careers() {
  return (
    <div className="container-fluid careers-page px-0">

      {/* TOP HEADING */}
      <div className="container text-center py-5">
        <h1 className="careers-title">
          Build the future at the heart of change at <span>Kalesh.</span>
        </h1>
      </div>

      {/* CONTENT SECTION */}
      <div className="container py-5">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="careers-subtitle">Purposeful</h2>

            <p className="careers-text">
              Evolving our purpose to meet an enlightened workforce,
              customers and community.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center">
            <img
              src="/careers-purpose.jpg"
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
