function Home() {
  return (
    <div className="container-fluid py-5 px-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1>Speak Freely. Stay Anonymous.</h1>
          <p className="text-muted">
            Kalesh ek real-time anonymous opinion platform hai jahan users bina
            identity reveal kiye apni baat rakh sakte hain.
          </p>

          <button className="btn-kalesh me-3">
            Download App (Coming Soon)
          </button>

          <button className="btn-outline-kalesh">
            Join the Kalesh Community
          </button>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="/logo.png"
            className="img-fluid logo-glow"
            width="300"
            alt="Kalesh Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
