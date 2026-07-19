import { useEffect, useRef } from 'react'
import './Work.css'
import Button from '../Button/Button'

const workItems = [
    {
        index: '01',
        title: 'APPLICATOR',
        category: 'Mobile Apps',
        metric: 'React Native',
        href: 'https://applicator.netlify.app',
        description: 'AI-powered job application assistant for Android'
    },
    {
        index: '02',
        title: 'MAKTABA',
        category: 'Mobile Apps',
        metric: 'Expo',
        href: 'https://github.com/Zaidx-me/maktaba',
        description: 'Free Urdu book reading app with 3,000+ local books'
    },
    {
        index: '03',
        title: 'WHATBOT',
        category: 'API',
        metric: 'NestJS',
        href: 'https://github.com/Zaidx-me/whatbot',
        description: 'Open-source WhatsApp API Gateway with pluggable architecture'
    },
    {
        index: '04',
        title: 'ZAREEN PORTFOLIO',
        category: 'Web',
        metric: 'Remix',
        href: 'https://zareen.qzz.io',
        description: 'Personal design portfolio with 3D interactive background'
    },
    {
        index: '05',
        title: 'HIDAYA SEEKER',
        category: 'Web',
        metric: 'React & React Native',
        href: 'https://www.hidayaseeker.com/',
        description: 'Modern Islamic platform for Quran and prayer times'
    },
    {
        index: '06',
        title: 'MUM FLOORING STUDIO',
        category: 'Web',
        metric: 'Next.js',
        href: 'https://mumflooringstudio.co.uk/',
        description: 'Professional flooring company website for UK market'
    }
]

function Work() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '-50px' }
        )

        const elements = sectionRef.current?.querySelectorAll('.reveal')
        elements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <section id="work" className="work" ref={sectionRef}>
            <div className="container">
                <div className="work-header reveal">
                    <div className="work-header-left">
                        <span className="section-label mono">Selected Work</span>
                        <h2 className="work-title">
                            Transformations<br />
                            <span className="text-muted">that perform</span>
                        </h2>
                    </div>
                </div>

                <div className="work-grid">
                    {workItems.map((item, idx) => (
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`work-item reveal reveal-delay-${idx + 1}`}
                            key={item.index}
                        >
                            <div className="work-item-header">
                                <span className="work-index mono">{item.index}</span>
                                <div className="work-meta">
                                    <span className="work-category">{item.category}</span>
                                    <span className="work-metric mono">{item.metric}</span>
                                </div>
                            </div>
                            <h3 className="work-item-title">{item.title}</h3>
                            <p className="work-item-desc">{item.description}</p>
                            <div className="work-item-arrow">
                                <i className="ri-arrow-right-up-line"></i>
                            </div>
                        </a>
                    ))}
                    
                    <a 
                        href="https://github.com/Zaidx-me" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="portfolio-window reveal reveal-delay-4"
                    >
                        {/* macOS title bar */}
                        <div className="window-titlebar">
                            <div className="window-dots">
                                <span className="dot dot-red"></span>
                                <span className="dot dot-yellow"></span>
                                <span className="dot dot-green"></span>
                            </div>
                            <span className="window-title mono">projects — GitHub</span>
                        </div>
                        
                        {/* Window body */}
                        <div className="window-body">
                            <div className="window-folder-icon">
                                <i className="ri-github-fill"></i>
                            </div>
                            <div className="window-info">
                                <span className="window-heading">All Projects</span>
                                <span className="window-sub mono">View open source work on GitHub</span>
                            </div>
                            <div className="window-cta">
                                <span className="window-cta-text mono">Open</span>
                                <i className="ri-arrow-right-up-line"></i>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Work
