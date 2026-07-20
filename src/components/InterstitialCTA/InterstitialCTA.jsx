import { useEffect, useRef } from 'react'
import './InterstitialCTA.css'
import Button from '../Button/Button'
import CalBookingButton from '../CalBookingButton/CalBookingButton'

function InterstitialCTA({ heading, subtext, showCalButton = true }) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

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

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="interstitial-cta" ref={ref}>
            <div className="container">
                <div className="interstitial-inner reveal">
                    <h2 className="interstitial-heading">
                        {heading || (
                            <>Ready to build something <span className="accent">extraordinary</span>?</>
                        )}
                    </h2>
                    {subtext && (
                        <p className="interstitial-subtext">{subtext}</p>
                    )}
                    <div className="interstitial-actions">
                        <Button href="#contact" variant="primary" magnetic>
                            Start a Project <i className="ri-arrow-right-line"></i>
                        </Button>
                        {showCalButton && (
                            <CalBookingButton className="interstitial-cal">
                                <span className="interstitial-cal-title">Book Free Call</span>
                                <span className="interstitial-cal-chip mono">15 min</span>
                            </CalBookingButton>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InterstitialCTA
