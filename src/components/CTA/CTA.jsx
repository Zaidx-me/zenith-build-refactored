import React, { useEffect, useRef } from 'react';
import './CTA.css';
import ContactForm from '../ContactForm/ContactForm';

function CTA() {
    const ctaRef = useRef(null);

    useEffect(() => {
        const cta = ctaRef.current;
        if (!cta) return;

        const handleMouseMove = (e) => {
            const rect = cta.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            cta.style.setProperty('--mouse-x', `${x}%`);
            cta.style.setProperty('--mouse-y', `${y}%`);
        };

        cta.addEventListener('mousemove', handleMouseMove);
        return () => cta.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="contact-section" id="contact" ref={ctaRef}>
            <div className="container">
                <div className="contact-layout">
                    <div className="contact-info reveal">
                        <span className="section-label mono">Connect With Us</span>
                        <h2 className="contact-title">
                            Let's talk
                        </h2>
                        <p className="contact-desc">
                            Ready to start your next project? Fill out the form and we'll get back to you within a couple of days.
                        </p>
                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <i className="ri-mail-line"></i>
                                <span>contact@zenithbuild.com</span>
                            </div>
                            <div className="contact-detail-item">
                                <i className="ri-map-pin-line"></i>
                                <span>Remote / On-site</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-wrapper reveal reveal-delay-1">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;
