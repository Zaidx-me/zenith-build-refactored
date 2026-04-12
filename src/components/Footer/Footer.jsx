import { useEffect, useRef, useState } from 'react'
import './Footer.css'

function Footer() {
    const footerRef = useRef(null)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.2 }
        )

        const elements = footerRef.current?.querySelectorAll('.reveal')
        elements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('aryanjohnsharma@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <footer className="footer" ref={footerRef}>
            <div className="container footer-container reveal">
                
                {/* Top Section */}
                <div className="footer-top">
                    <div className="footer-top-left">
                        <p className="footer-creator">Created and designed by Aryan Sharma © 2026</p>
                        <div className="footer-actions">

                            <button onClick={handleCopyEmail} className="footer-btn footer-btn-outline">
                                <i className={copied ? "ri-check-line" : "ri-mail-line"}></i> {copied ? "Email Copied!" : "Copy Email"}
                            </button>
                            <div className="footer-socials">

                                <a href="https://aryanjohnsharma.github.io/" target="_blank" rel="noopener noreferrer" className="social-circle">
                                    <i className="ri-global-line"></i>
                                </a>
                                <a href="https://x.com/aryanjohnsharma" target="_blank" rel="noopener noreferrer" className="social-circle">
                                    <i className="ri-twitter-x-line"></i>
                                </a>
                                <a href="https://www.youtube.com/@aryanjohnsharma" target="_blank" rel="noopener noreferrer" className="social-circle">
                                    <i className="ri-youtube-line"></i>
                                </a>
                                <a href="https://t.me/aryanjohnsharma" target="_blank" rel="noopener noreferrer" className="social-circle">
                                    <i className="ri-telegram-line"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="footer-divider"></div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="footer-badges">
                        <span className="footer-badge">
                            <span className="badge-label mono">BUILT WITH</span> <i className="ri-reactjs-line" style={{color: '#61dafb', fontSize: '14px'}}></i> React.js
                        </span>
                        <span className="footer-badge">
                            <span className="badge-label mono">STYLED WITH</span> 
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="#38bdf8"/>
                            </svg> Tailwind CSS
                        </span>
                        <span className="footer-badge">
                            <span className="badge-label mono">DEPLOYED ON</span> <i className="ri-triangle-fill" style={{color: '#fff', fontSize: '12px'}}></i> Vercel
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
