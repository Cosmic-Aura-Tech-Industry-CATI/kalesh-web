import { useEffect } from 'react';

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluid px-md-5 px-3 py-5 text-light" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(255,106,0,0.2))', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px' }}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-9 px-md-5 px-3">
          <h1 className="text-center mb-4" style={{ borderBottom: '4px solid #ff6a00', paddingBottom: '1rem', color: '#ff6a00' }}>Privacy Policy</h1>

          <p className="text-center mb-4"><strong>Last Updated:</strong> [Insert Date]</p>

          <p>
            Kalesh respects your privacy and is committed to protecting it. This Privacy Policy explains how Kalesh collects, uses, stores, shares, and safeguards information when you access or use our website, mobile application, and related services (collectively, the "Platform").
          </p>

          <p>
            Kalesh is built as an <strong>anonymous social media platform</strong>, and privacy protection is a core design principle of our product.
          </p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>1. Our Privacy Philosophy</h2>
          <p>
            Kalesh is designed to allow users to express opinions <strong>without public identity exposure</strong>. We intentionally minimize personal data collection and apply strong safeguards to protect users from identification, misuse, or exploitation.
          </p>
          <p><strong>Anonymity on Kalesh means:</strong></p>
          <ul>
            <li>No public profiles with real names</li>
            <li>No visible phone numbers or emails</li>
            <li>No public follower or identity graphs</li>
          </ul>
          <p>However, anonymity does <strong>not</strong> mean absence of safety, moderation, or legal compliance.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>2. Information We Collect</h2>
          <p>We collect only the information necessary to operate, secure, and improve the Platform.</p>

          <h3 style={{ color: '#ffcc99', marginTop: '1.5rem' }}>2.1 Information You Provide</h3>
          <ul>
            <li>Mobile number or login credentials (used for account verification only)</li>
            <li>Feedback, support messages, or reports submitted to us</li>
            <li>Content you voluntarily create (polls, votes, messages)</li>
          </ul>

          <h3 style={{ color: '#ffcc99', marginTop: '1.5rem' }}>2.2 Automatically Collected Information</h3>
          <p>When you use Kalesh, we may collect:</p>
          <ul>
            <li>Device information (device type, OS version)</li>
            <li>App usage data (features used, session duration)</li>
            <li>IP address (for security, abuse prevention, and legal compliance)</li>
            <li>Log files and crash reports</li>
          </ul>

          <h3 style={{ color: '#ffcc99', marginTop: '1.5rem' }}>2.3 What We Do NOT Collect</h3>
          <ul>
            <li>Real names or profile photos</li>
            <li>Contact lists</li>
            <li>Location tracking (precise GPS)</li>
            <li>Biometric data</li>
            <li>Social media account access</li>
          </ul>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>3. How We Use Your Information</h2>
          <p>Your information is used strictly for the following purposes:</p>
          <ul>
            <li>To operate and maintain the Platform</li>
            <li>To enable anonymous participation in polls and discussions</li>
            <li>To prevent spam, abuse, fraud, and misuse of anonymity</li>
            <li>To moderate harmful or illegal content</li>
            <li>To improve app performance, stability, and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
          <p>We do not sell personal data to third parties.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>4. Anonymity & Internal Identifiers</h2>
          <p>
            While Kalesh does not display user identities publicly, we may internally associate accounts with:
          </p>
          <ul>
            <li>Encrypted identifiers</li>
            <li>Verification credentials</li>
          </ul>
          <p>
            This is done solely for security, moderation, and legal enforcement and is never visible to other users.
          </p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>5. Content Visibility & User Responsibility</h2>
          <p>Content posted on Kalesh may be:</p>
          <ul>
            <li>Publicly visible within the Platform</li>
            <li>Viewed, shared, or discussed by other users</li>
          </ul>
          <p>Users should avoid sharing:</p>
          <ul>
            <li>Personal identifiers</li>
            <li>Sensitive or confidential information</li>
            <li>Information that could reveal identity indirectly</li>
          </ul>
          <p>Kalesh is not responsible for information users voluntarily disclose.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>6. Content Moderation & Safety</h2>
          <p>To protect users:</p>
          <ul>
            <li>Automated tools may scan content for policy violations</li>
            <li>Human moderators may review reported content</li>
            <li>Repeat or severe violations may result in account restriction or termination</li>
          </ul>
          <p>Moderation actions are taken to balance free expression with safety.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>7. Data Sharing & Disclosure</h2>
          <p>We do <strong>not</strong> share user data except in limited circumstances:</p>
          <ul>
            <li>With service providers (cloud hosting, analytics) under strict confidentiality</li>
            <li>When required by law, court order, or government authority</li>
            <li>To protect the safety, rights, or integrity of Kalesh or its users</li>
          </ul>
          <p>All third parties are required to follow data protection obligations.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>8. Data Storage & Security</h2>
          <p>We implement industry-standard security measures including:</p>
          <ul>
            <li>Encrypted data storage</li>
            <li>Secure servers and access controls</li>
            <li>Regular security monitoring</li>
          </ul>
          <p>Despite best efforts, no system is 100% secure. Users acknowledge inherent internet risks.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>9. Data Retention</h2>
          <p>We retain data:</p>
          <ul>
            <li>Only for as long as necessary to operate the Platform</li>
            <li>To comply with legal or regulatory requirements</li>
            <li>To resolve disputes or enforce policies</li>
          </ul>
          <p>Inactive or terminated accounts may have data deleted or anonymized.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>10. User Rights</h2>
          <p>Depending on applicable law, users may have the right to:</p>
          <ul>
            <li>Access stored information</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent where applicable</li>
          </ul>
          <p>Requests can be submitted through official support channels.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>11. Children's Privacy</h2>
          <p>
            Kalesh is <strong>not intended for children under 16 years of age</strong>.  
            We do not knowingly collect data from minors. If such data is identified, it will be removed promptly.
          </p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>12. Cookies & Tracking (Website)</h2>
          <p>Our website may use cookies or similar technologies to:</p>
          <ul>
            <li>Improve site functionality</li>
            <li>Analyze traffic and performance</li>
          </ul>
          <p>Users can control cookies through browser settings.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>13. Third-Party Links</h2>
          <p>
            Kalesh may contain links to third-party websites or services. We are not responsible for their privacy practices. Users should review third-party policies independently.
          </p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>14. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be reflected with an updated "Last Updated" date. Continued use of the Platform indicates acceptance of the revised policy.
          </p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>15. Legal Compliance</h2>
          <p>This Privacy Policy is governed by:</p>
          <ul>
            <li>Information Technology Act, 2000 (India)</li>
            <li>IT Rules, 2021</li>
            <li>Applicable data protection principles</li>
          </ul>
          <p>Disputes are subject to Indian jurisdiction.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>16. Contact Us</h2>
          <div style={{ backgroundColor: 'rgba(45, 55, 72, 0.7)', padding: '1.5rem', borderRadius: '6px', marginTop: '1rem' }}>
            <p>For privacy-related questions or concerns, contact:</p>
            <p><strong>Email:</strong> [official email]</p>
            <p><strong>Company Name:</strong> Kalesh</p>
            <p><strong>Country:</strong> India</p>
          </div>

          <div style={{ backgroundColor: 'rgba(66, 153, 225, 0.1)', borderLeft: '4px solid #ff6a00', padding: '1rem', margin: '2rem 0', borderRadius: '0 4px 4px 0' }}>
            <p><strong>Final Note</strong></p>
            <p>
              Kalesh is built to protect anonymous expression — while ensuring safety, legality, and accountability. Privacy is a right, but misuse of anonymity is not permitted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;