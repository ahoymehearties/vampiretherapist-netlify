import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Check if consent was already given
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleDismiss = () => {
        localStorage.setItem('cookieConsent', 'true');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-consent-banner">
            <p>We use third-party cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.</p>
            <button onClick={handleDismiss}>Okay</button>
        </div>
    );
};

export default CookieConsent;
