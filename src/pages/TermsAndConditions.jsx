import { useEffect } from 'react';

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluid px-md-5 px-3 py-5 text-light" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(255,106,0,0.2))', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px' }}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-9 px-md-5 px-3">
          <h1 className="text-center mb-4" style={{ borderBottom: '4px solid #ff6a00', paddingBottom: '1rem', color: '#ff6a00' }}>Terms & Conditions</h1>

          <p className="text-center mb-4"><strong>Last Updated:</strong> [Insert Date]</p>

          <p>
            Welcome to <strong>Kalesh</strong>. These Terms and Conditions ("Terms") govern your access to and use of the Kalesh website, mobile application, and related services (collectively, the "Platform"). By accessing or using Kalesh, you agree to be bound by these Terms. If you do not agree, please do not use the Platform.
          </p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>1. About Kalesh</h2>
          <p>
            Kalesh is an <strong>anonymous social media platform</strong> that allows users to create, participate in, and engage with <strong>real-time polls, discussions, and interactions</strong> without publicly revealing their identity. Kalesh prioritizes free expression while maintaining user safety and legal compliance.
          </p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>2. Eligibility</h2>
          <p>You must be at least 16 years old to use Kalesh.</p>
          <p>By using the Platform, you confirm that:</p>
          <ul>
            <li>You meet the minimum age requirement</li>
            <li>You are legally capable of entering into a binding agreement</li>
            <li>You are using the Platform for lawful purposes only</li>
          </ul>
          <p>Kalesh reserves the right to restrict or terminate access if eligibility requirements are violated.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>3. Account Registration & Anonymity</h2>
          <ul>
            <li>Kalesh operates on an <strong>anonymous identity model</strong>.</li>
            <li>Users are not required to publicly display personal identifiers such as name, photo, or social handles.</li>
            <li>Internally, Kalesh may collect limited information (such as mobile number or device identifiers) <strong>only for security, moderation, and abuse prevention purposes</strong>.</li>
            <li>Users must not attempt to impersonate others, create multiple accounts to manipulate engagement, or misuse anonymity.</li>
          </ul>
          <p><strong>Anonymity does not mean lack of accountability.</strong></p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>4. User Conduct & Responsibilities</h2>
          <p>
            While using Kalesh, you agree <strong>not to post, share, or engage in content that</strong>:
          </p>
          <ul>
            <li>Is illegal, abusive, threatening, hateful, or violent</li>
            <li>Promotes harassment, bullying, or discrimination</li>
            <li>Contains sexually explicit material involving minors</li>
            <li>Encourages self-harm, suicide, or dangerous activities</li>
            <li>Spreads misinformation, spam, or malicious links</li>
            <li>Violates intellectual property or privacy rights</li>
            <li>Attempts to deanonymize, expose, or harm other users</li>
          </ul>
          <p>Kalesh maintains a <strong>zero-tolerance policy</strong> for severe violations.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>5. Content Ownership & License</h2>
          <ul>
            <li>You <strong>retain ownership</strong> of the content you create on Kalesh.</li>
            <li>By posting content, you grant Kalesh a <strong>non-exclusive, worldwide, royalty-free license</strong> to use, display, distribute, and moderate such content for operating and improving the Platform.</li>
            <li>Kalesh does not claim ownership of user opinions or poll responses.</li>
          </ul>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>6. Moderation, Reporting & Enforcement</h2>
          <ul>
            <li>Kalesh uses <strong>automated systems and human moderation</strong> to maintain platform safety.</li>
            <li>Users may report content or behavior that violates these Terms.</li>
            <li>Kalesh reserves the right to:
              <ul>
                <li>Remove or restrict content</li>
                <li>Suspend or permanently ban accounts</li>
                <li>Cooperate with legal authorities when required by law</li>
              </ul>
            </li>
          </ul>
          <p>Decisions taken for safety or compliance may be final.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>7. No Expectation of Privacy for Public Content</h2>
          <p>
            While Kalesh provides anonymity, <strong>content shared publicly on the Platform may be viewed, shared, or discussed by other users</strong>.
            Users should avoid sharing sensitive personal or confidential information.
          </p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>8. Third-Party Links & Services</h2>
          <p>
            Kalesh may contain links or integrations to third-party websites or services. Kalesh is not responsible for the content, policies, or practices of third parties. Use them at your own risk.
          </p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>9. Platform Availability & Changes</h2>
          <p>Kalesh may:</p>
          <ul>
            <li>Modify, suspend, or discontinue features at any time</li>
            <li>Introduce new services, limits, or policies</li>
            <li>Experience downtime due to maintenance or technical issues</li>
          </ul>
          <p>Kalesh is provided on an "as-is" and "as-available" basis.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>10. Disclaimer of Warranties</h2>
          <p>Kalesh does not guarantee:</p>
          <ul>
            <li>Accuracy or reliability of user-generated content</li>
            <li>Continuous or error-free operation</li>
            <li>That opinions expressed reflect factual correctness</li>
          </ul>
          <p>All opinions shared on Kalesh belong solely to the users who post them.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>11. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Kalesh shall not be liable for:</p>
          <ul>
            <li>Any indirect, incidental, or consequential damages</li>
            <li>Loss of data, reputation, or business</li>
            <li>User-generated content or interactions</li>
          </ul>
          <p>Use of the Platform is at your own discretion and risk.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>12. Termination</h2>
          <p>Kalesh reserves the right to suspend or terminate your access:</p>
          <ul>
            <li>For violation of these Terms</li>
            <li>For misuse of anonymity</li>
            <li>For legal or safety reasons</li>
          </ul>
          <p>Termination may occur without prior notice in serious cases.</p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>13. Governing Law & Jurisdiction</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with the <strong>laws of India</strong>. Any disputes shall be subject to the exclusive jurisdiction of courts located in <strong>India</strong>.
          </p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>14. Changes to These Terms</h2>
          <p>
            Kalesh may update these Terms from time to time. Continued use of the Platform after updates constitutes acceptance of the revised Terms.
          </p>

          <h2 style={{ borderLeft: '4px solid #ff6a00', paddingLeft: '1rem', marginTop: '2rem', marginBottom: '1rem', color: '#ff6a00' }}>15. Contact Information</h2>
          <div style={{ backgroundColor: 'rgba(45, 55, 72, 0.7)', padding: '1.5rem', borderRadius: '6px', marginTop: '2rem' }}>
            <p>For questions, concerns, or legal notices, please contact:</p>
            <p><strong>Email:</strong> [official email]</p>
            <p><strong>Company Name:</strong> Kalesh</p>
            <p><strong>Location:</strong> India</p>
          </div>

          <div style={{ backgroundColor: 'rgba(66, 153, 225, 0.1)', borderLeft: '4px solid #ff6a00', padding: '1rem', margin: '2rem 0', borderRadius: '0 4px 4px 0' }}>
            <p><strong>Important Note on Anonymity</strong></p>
            <p>
              Kalesh is built to protect anonymous expression — not to protect harmful behavior. Freedom of speech exists alongside responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;