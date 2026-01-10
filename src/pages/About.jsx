import shikhar from "../assets/shikhar.png";
import swat from "../assets/swat.png";
import nish from "../assets/nish.png";
import sheelu from "../assets/sheelu.png";
import mridul from "../assets/mridul.png";
import sid from "../assets/sid.png";
function About() {
  return (
    <div className="container">
      <div className="row">
      
      <div className="col-5 mt-5 p-5" >
        <img className="logo-glow" src="/logo.png" width="470px" height="540px" alt="Kalesh logo loading..." />
      </div>

      <div className="col-2">

      </div>
      
      <div className="col-5 mt-5 ">
        <p className="" style={{fontSize : "2.2em", marginTop:"200px", marginLeft:"50px"}}>A Plateform Where Your Opinion Matters Not Your
                Identities</p>
        <button className="btn-kalesh me-3" style={{marginLeft:"50px"}}>
            App Coming Soon
          </button>
      </div>
      </div>

      <div className="row">
        <h1 className="text-center p-5">About Our Kalesh</h1>
        <div className="col-6">
          <p className="p-5 mt-1" style={{fontSize:"1.5em", textAlign:"justify"}}>In today’s digital ecosystem, most social
            media platforms are identity-driven and
            centered around public profiles, likes, and
            followers, which creates social pressure
            and discourages honest expression. Users
            often hesitate to share their real opinions
            due to fear of judgment, online backlash,
            screenshots, and long-term reputational
            impact. This environment particularly
            affects Gen-Z users, students, and
            introverts, who lack a safe and comfortable
            space to express themselves freely.
            Additionally, existing platforms prioritize
            reach based on popularity rather than
            content relevance, making it difficult for
            new users to be heard and preventing
            brands and institutions from receiving
            instant, unbiased audience feedback.</p>
        </div>


        <div className="col-6">
          <p className="p-5 mt-1" style={{fontSize:"1.5em", textAlign:"justify"}}>
            Kalesh solves this problem by offering a
            fully anonymous, real-time opinion and
            polling platform that removes identity
            pressure 
            and 
            promotes 
            authentic
            participation. Users can create live polls,
            vote instantly, and engage in discussions
            without revealing their identity, ensuring
            opinions are judged by content rather than
            personal 
            branding. 
            The 
            real-time
            engagement model allows users to
            participate immediately after joining, while
            colleges, brands, and creators gain access
            to honest and unbiased feedback. With
            strong moderation and safety controls,
            Kalesh provides a secure, judgment-free
            environment 
            that 
            enables 
            genuine
            expression and meaningful engagement.
          </p>
        </div>
      </div>

      <div className="row">
        <h1 className="text-center p-5">Team Behind Kalesh</h1>
        <div className="col-5 mt-3">
          <img src={shikhar} alt="Loading Failed..." width="730px" height="450px" style={{marginLeft:"-3.5em"}} />
        </div>

        <div className="col-1">

        </div>

        <div className="col-5 mt-5" >
          <div style={{marginTop:"40px"}}>
            <h2>Shikhar Dixit</h2>
          <p style={{fontSize:"1.5em", textAlign:"justify"}}>Shikhar Dixit is the CEO of Kalesh,
            responsible for setting the company’s
            vision and strategy. He leads product
            direction, business growth, and investor
            relations, ensuring Kalesh remains a safe,
            anonymous platform for real-time and
            honest Gen-Z expression.</p>

          <h5>Connect Him on <a href="https://www.linkedin.com/in/shikhar040/" target="_blank">Linkedin</a></h5>
          </div>
        </div>

        <div className="col-1">

        </div>
      </div>

      <div className="row mt-5" >
        <div className="col-6">
          <div className="" style={{marginLeft:"55px", marginTop:"70px"}}>
            <h2>Swatantra Singh</h2>
          <p style={{fontSize:"1.5em", textAlign:"justify"}}>Swatantra Singh serves as the CFO of
              Kalesh, managing the company’s financial
              strategy and sustainability. He oversees
              budgeting, 
              revenue 
              planning, 
              unit
              economics, and investor financials,
              ensuring disciplined growth and strong
              profitability as Kalesh scales.</p>
              <h5>Connect Him on <a href="https://www.linkedin.com/in/swatantra-singh308/" target="_blank">LinkedIn</a></h5>
          </div>
        </div>

        <div className="col-5">
          <img src={swat} alt="Loading Failed..." width="730px" height="450px" style={{marginLeft:"-25px"}} />
        </div>

        <div className="col-1">

        </div>
      </div>

      <div className="row">
        <div className="col-5 mt-3">
          <img src={nish} alt="Loading Failed..." width="730px" height="450px" style={{marginLeft:"-3.5em"}} />
        </div>

        <div className="col-1">

        </div>

        <div className="col-5 mt-5" >
          <div style={{marginTop:"40px"}}>
            <h2>Nishkarsh Mishra</h2>
          <p style={{fontSize:"1.5em", textAlign:"justify"}}>Nishkarsh Mishra is the COO of Kalesh,
              responsible for overseeing day-to-day
              operations and execution. He manages
              product rollout, team coordination, and
              go-to-market execution, ensuring smooth
              operations and scalable growth across
              campuses and partnerships.</p>

          <h5>Connect Him on <a href="https://www.linkedin.com/in/0nishkarshm/" target="_blank">Linkedin</a></h5>
          </div>
        </div>

        <div className="col-1">

        </div>
      </div>

      <div className="row mt-5" >
        <div className="col-6">
          <div className="" style={{marginLeft:"55px", marginTop:"70px"}}>
            <h2>Sheelu Singh</h2>
          <p style={{fontSize:"1.5em", textAlign:"justify"}}>Sheelu Singh is the Android Developer
              of the Kalesh app, responsible for
              building, optimizing, and maintaining
              the Android application to ensure a
              smooth, secure, and high-performance
              user experience.</p>
              <h5>Connect Him on <a href="https://www.linkedin.com/in/sheelu-singh-bbb788307/" target="_blank">LinkedIn</a></h5>
          </div>
        </div>

        <div className="col-5">
          <img src={sheelu} alt="Loading Failed..." width="730px" height="450px" style={{marginLeft:"-25px"}} />
        </div>

        <div className="col-1">

        </div>
      </div>

      <div className="row">
        <div className="col-5 mt-3">
          <img src={mridul} alt="Loading Failed..." width="730px" height="450px" style={{marginLeft:"-3.5em"}} />
        </div>

        <div className="col-1">

        </div>

        <div className="col-5 mt-5" >
          <div style={{marginTop:"40px"}}>
            <h2>Mridul Mishra</h2>
          <p style={{fontSize:"1.5em", textAlign:"justify"}}>Mridul Mishra is the Backend
            Developer at Kalesh, responsible for
            designing and maintaining server
            side systems, databases, and APIs to
            ensure secure, scalable, and reliable
            app performance.</p>

          <h5>Connect Him on <a href="https://www.linkedin.com/in/mridul-mishra-4717b828b/" target="_blank">Linkedin</a></h5>
          </div>
        </div>

        <div className="col-1">

        </div>
      </div>

      <div className="row mt-5" >
        <div className="col-6">
          <div className="" style={{marginLeft:"55px", marginTop:"70px"}}>
            <h2>Siddhant Shekhar</h2>
          <p style={{fontSize:"1.5em", textAlign:"justify"}}>Siddhant Shekhar is the Web Developer
                at Kalesh, responsible for developing
                and maintaining the web platforms,
                including the admin panel and support
                interfaces, 
                ensuring 
                functionality 
                smooth
                and seamless user
                experience.</p>
              <h5>Connect Him on <a href="https://www.linkedin.com/in/shekhar18/" target="_blank">LinkedIn</a></h5>
          </div>
        </div>

        <div className="col-5">
          <img src={sid} alt="Loading Failed..." width="730px" height="450px" style={{marginLeft:"-25px"}} />
        </div>

        <div className="col-1">

        </div>
      </div>

      
    </div>

  );
}

export default About;
