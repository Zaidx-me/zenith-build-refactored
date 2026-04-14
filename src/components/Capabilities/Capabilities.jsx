import { useEffect, useRef } from 'react'
import './Capabilities.css'
import CurvedLoop from '../CurvedLoop'

const capabilities = [
    {
        icon: 'ri-film-line',
        title: 'Precision Editing',
        description: 'Premiere Pro & DaVinci Resolve. Pacing that keeps viewers watching.',
    },
    {
        icon: 'ri-magic-line',
        title: 'Motion & VFX',
        description: 'After Effects mastery. Graphics that elevate production value.',
    },
    {
        icon: 'ri-smartphone-line',
        title: 'Short-Form',
        description: 'Reels, TikToks, Shorts. Hook-driven, retention-optimized.',
    },
    {
        icon: 'ri-brain-line',
        title: 'AI Enhancement',
        description: 'Upscaling, noise reduction, intelligent compression.',
    },
    {
        icon: 'ri-sound-module-line',
        title: 'Sound Design',
        description: 'Audio is half the experience. Soundscapes that hit.',
    },
    {
        icon: 'ri-image-line',
        title: 'Thumbnails',
        description: 'Click-worthy thumbnails designed for CTR.',
    },
]

const tools = ['PREMIERE PRO', 'AFTER EFFECTS', 'DAVINCI RESOLVE', 'PHOTOSHOP', 'TOPAZ AI', 'CAPCUT']

function Capabilities() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '-50px' }
        )

        const elements = sectionRef.current?.querySelectorAll('.reveal')
        elements?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <section id="capabilities" className="capabilities" ref={sectionRef}>
            <div className="container">
                <div className="cap-header-row reveal">
                    <span className="section-label mono">Capabilities</span>
                    <h2 className="capabilities-title">
                        What we <span className="accent">bring to the table</span>
                    </h2>
                </div>

                <div className="cap-grid">
                    {capabilities.map((cap, index) => (
                        <div
                            className={`cap-card reveal reveal-delay-${(index % 3) + 1}`}
                            key={index}
                        >
                            <div className="cap-icon">
                                <i className={cap.icon}></i>
                            </div>
                            <div className="cap-text">
                                <h3 className="cap-title">{cap.title}</h3>
                                <p className="cap-desc">{cap.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tool curved loop */}
                <div className="reveal" style={{ margin: '1rem 0' }}>
                    <CurvedLoop
                        marqueeText={tools.join(' ✦ ') + ' ✦ '}
                        speed={0.8}
                        curveAmount={0}
                        direction="left"
                        interactive
                        className="capabilities-loop-text"
                    />
                </div>
            </div>
        </section>
    )
}

export default Capabilities
