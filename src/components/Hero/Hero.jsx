import { useEffect, useRef } from 'react'
import './Hero.css'
import Button from '../Button/Button'
import CalBookingButton from '../CalBookingButton/CalBookingButton'

function Hero() {
    const heroRef = useRef(null)

    useEffect(() => {
        const hero = heroRef.current
        if (!hero) return

        const handleMouseMove = (e) => {
            const rect = hero.getBoundingClientRect()
            const x = ((e.clientX - rect.left) / rect.width) * 100
            const y = ((e.clientY - rect.top) / rect.height) * 100
            hero.style.setProperty('--mouse-x', `${x}%`)
            hero.style.setProperty('--mouse-y', `${y}%`)
        }

        hero.addEventListener('mousemove', handleMouseMove)
        return () => hero.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section className="hero" ref={heroRef}>
            <div className="hero-spotlight"></div>

            <div className="container">
                <div className="hero-content">
                    {/* Eyebrow */}
                    <div className="hero-eyebrow">
                        <span className="eyebrow-line"></span>
                        <span className="mono">Digital Agency</span>
                    </div>

                    {/* Main title */}
                    <h1 className="hero-title">
                        <span className="title-line">
                            <span className="title-word">ZENITH</span>
                            <span className="title-word accent">BUILD</span>
                        </span>
                    </h1>

                    {/* Problem statement */}
                    <p className="hero-problem">
                        Your users deserve better than a mediocre website.
                        <span className="highlight"> We build digital products that actually work.</span>
                    </p>

                    {/* Subtitle */}
                    <p className="hero-subtitle">
                        We craft digital experiences that blend bold creativity with strategic thinking.
                        <span className="highlight"> From startups to enterprises.</span>
                    </p>

                    {/* CTA Group */}
                    <div className="hero-cta">
                        <Button href="#work" variant="primary" magnetic>
                            View Work <i className="ri-arrow-right-line"></i>
                        </Button>
                        <CalBookingButton className="hero-booking-button">
                            <span className="hero-booking-title">Hire Developers</span>
                            <span className="hero-booking-chip mono">Let's Talk</span>
                        </CalBookingButton>
                    </div>

                    {/* Trust bar */}
                    <div className="hero-trust">
                        <span className="trust-label mono">Tech Stack</span>
                        <div className="trust-logos">
                            <span className="trust-logo">React</span>
                            <span className="trust-divider">•</span>
                            <span className="trust-logo">Next.js</span>
                            <span className="trust-divider">•</span>
                            <span className="trust-logo">Node.js</span>
                            <span className="trust-divider">•</span>
                            <span className="trust-logo">TypeScript</span>
                        </div>
                    </div>
                </div>

                {/* Stats strip */}
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-number">13+</span>
                        <span className="stat-label mono">Projects Delivered</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <span className="stat-number">3+</span>
                        <span className="stat-label mono">Years Experience</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <span className="stat-number">7+</span>
                        <span className="stat-label mono">Industries Served</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero-scroll">
                <span className="mono">Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    )
}

export default Hero
