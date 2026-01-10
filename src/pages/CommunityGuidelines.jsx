import { useEffect } from 'react';

function CommunityGuidelines() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluid px-md-5 px-3 py-5 text-light" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(255,106,0,0.2))', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px' }}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-9 px-md-5 px-3">
          <h1 className="text-center mb-4" style={{ borderBottom: '4px solid #ff6a00', paddingBottom: '1rem', color: '#ff6a00' }}>Community Guidelines</h1>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ color: '#ffcc99' }}>Welcome to Kalesh 💡</h3>
            <p>
              Kalesh is a place for <strong>real opinions, honest polls, and open conversations — without identity pressure</strong>.  
              To keep this space safe, respectful, and fun for everyone, we ask all users to follow these guidelines.
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#ff6a00', marginTop: '1rem' }}>
              Anonymity is a freedom, not a license to harm.
            </p>
          </div>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>1. What Kalesh Is For</h2>
          <p>Kalesh is built for:</p>
          <ul>
            <li>Sharing honest opinions through polls</li>
            <li>Voting freely without judgment</li>
            <li>Anonymous discussions that respect others</li>
            <li>Expressing thoughts you wouldn't feel safe sharing elsewhere</li>
          </ul>
          <p>We encourage <strong>bold ideas, diverse views, and real conversations.</strong></p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>2. Be Respectful (Even When You Disagree)</h2>
          <p>You can disagree strongly — that's okay.</p>
          <p>But you <strong>must not</strong>:</p>
          <ul>
            <li>Harass, insult, or threaten others</li>
            <li>Use hate speech or slurs</li>
            <li>Target people or groups based on religion, caste, gender, sexuality, race, disability, or nationality</li>
          </ul>
          <p style={{ fontStyle: 'italic', padding: '0.5rem 1rem', backgroundColor: 'rgba(255, 106, 0, 0.1)', borderRadius: '4px' }}>
            <strong>Debate ideas, not people.</strong>
          </p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>3. No Harassment or Bullying</h2>
          <p>Harassment ruins anonymity for everyone.</p>
          <p>Do <strong>not</strong>:</p>
          <ul>
            <li>Repeatedly attack or mock someone</li>
            <li>Encourage others to gang up on a user</li>
            <li>Shame, intimidate, or humiliate others</li>
            <li>Use polls or chats to target individuals</li>
          </ul>
          <p style={{ color: '#ffcc99', fontStyle: 'italic' }}>If it feels like bullying — it probably is.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>4. No Illegal or Dangerous Content</h2>
          <p>For everyone's safety, the following are <strong>not allowed</strong>:</p>
          <ul>
            <li>Violence, threats, or encouragement of harm</li>
            <li>Content involving sexual exploitation of minors</li>
            <li>Promotion of self-harm or suicide</li>
            <li>Drugs, weapons, or criminal activities</li>
            <li>Extremism or terrorism</li>
          </ul>
          <p style={{ color: '#ff9999', fontWeight: 'bold' }}>
            Such content may lead to <strong>immediate account termination</strong> and legal action if required.
          </p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>5. Protect Privacy — Yours & Others'</h2>
          <p>Kalesh is anonymous by design.</p>
          <p>Do <strong>not</strong>:</p>
          <ul>
            <li>Share your phone number, address, or personal details</li>
            <li>Share someone else's private information</li>
            <li>Try to reveal or guess another user's identity</li>
            <li>Post screenshots or personal data from outside the app</li>
          </ul>
          <p style={{ fontStyle: 'italic', padding: '0.5rem 1rem', backgroundColor: 'rgba(255, 106, 0, 0.1)', borderRadius: '4px' }}>
            Respect privacy the way you want yours respected.
          </p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>6. No Spam or Manipulation</h2>
          <p>Please don't:</p>
          <ul>
            <li>Post the same poll or message repeatedly</li>
            <li>Use bots, scripts, or fake engagement</li>
            <li>Create multiple accounts to manipulate results</li>
            <li>Post scams, misleading links, or promotions</li>
          </ul>
          <p>Kalesh is about <strong>real opinions</strong>, not fake reach.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>7. Sensitive & NSFW Content</h2>
          <p>We understand real conversations can involve sensitive topics.</p>
          <p>However:</p>
          <ul>
            <li>Sexual content must not be explicit</li>
            <li>Content involving minors is strictly forbidden</li>
            <li>Graphic or disturbing content may be removed</li>
          </ul>
          <p>We aim to keep Kalesh <strong>safe for a broad Gen-Z audience</strong>.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>8. Use Reporting — Don't Fight Back</h2>
          <p>If you see something that breaks these guidelines:</p>
          <ul>
            <li>Use the <strong>Report</strong> feature</li>
            <li>Block the user if needed</li>
          </ul>
          <p>Do not retaliate or escalate — our moderation team will handle it.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>9. Moderation & Enforcement</h2>
          <p>To keep Kalesh safe:</p>
          <ul>
            <li>Content may be reviewed by automated systems or moderators</li>
            <li>Violations can result in:
              <ul>
                <li>Content removal</li>
                <li>Temporary restrictions</li>
                <li>Permanent account bans</li>
              </ul>
            </li>
          </ul>
          <p>Severe or repeated violations may lead to <strong>immediate removal</strong>.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>10. One Simple Rule to Remember</h2>
          <div style={{ backgroundColor: 'rgba(66, 153, 225, 0.1)', padding: '1.5rem', borderRadius: '6px', textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ffcc99' }}>
              If you wouldn't say it face-to-face respectfully, don't say it here — even anonymously.
            </p>
          </div>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>11. Why These Rules Exist</h2>
          <p>Kalesh only works when:</p>
          <ul>
            <li>People feel safe sharing honestly</li>
            <li>Anonymity is not abused</li>
            <li>Opinions don't turn into attacks</li>
          </ul>
          <p>These rules protect your freedom to speak and everyone's right to feel safe.</p>

          <div style={{ backgroundColor: 'rgba(255, 106, 0, 0.1)', borderLeft: '4px solid #ff6a00', padding: '1.5rem', margin: '3rem 0', borderRadius: '0 6px 6px 0', textAlign: 'center' }}>
            <h3 style={{ color: '#ff6a00', marginBottom: '1rem' }}> Final Note 🟧️</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              Kalesh is not about being loud. It's about being real.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              Speak freely. Listen openly. Respect boundaries.
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#ffcc99', marginTop: '1rem' }}>
              Welcome to the Kalesh community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityGuidelines;