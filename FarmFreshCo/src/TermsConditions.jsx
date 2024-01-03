import React from 'react';
import Animation from './aboutUsAnimation.gif';

const TermsConditions = () => {
  return (
    <div className="terms-container">
      <h2>Terms & Conditions</h2>
      
      <img src={Animation} alt="Vegetables" className="terms-image" style={{maxWidth: '50%',height: 'auto'}}/>

      <h3>1. Acceptance of Terms</h3>
      <p>
        By accessing or using the FarmFresco website, you agree to comply with and be bound by these Terms and Conditions.
        If you do not agree with any part of these terms, please do not use our website.
      </p>

      <h3>2. Use of the Website</h3>
      <p>
        FarmFresco grants you a limited, non-exclusive, non-transferable, and revocable license to use the website for
        your personal use only. You may not use the website for any other purpose without our express written consent.
      </p>

      <h3>3. Products and Pricing</h3>
      <p>
        FarmFresco strives to provide accurate product information and pricing, but errors may occur. We reserve the
        right to correct any errors and change product prices at any time without notice.
      </p>

      <h3>4. Privacy Policy</h3>
      <p>
        Your use of the FarmFresco website is also governed by our Privacy Policy. Please review our Privacy Policy to
        understand our practices.
      </p>

      <h3>5. Disclaimer of Warranties</h3>
      <p>
        The FarmFresco website is provided "as is" without any warranties, express or implied. We do not warrant the
        accuracy, completeness, or reliability of any content on the site.
      </p>

      <h3>6. Changes to Terms</h3>
      <p>
        FarmFresco reserves the right to modify or replace these Terms and Conditions at any time. It is your
        responsibility to check the terms periodically for changes.
      </p>

      <h3>7. Contact Information</h3>
      <p>
        If you have any questions about these Terms and Conditions, please contact us at support@farmfresco.com.
      </p>
    </div>
  );
};

export default TermsConditions;
