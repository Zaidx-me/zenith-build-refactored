import { useEffect, useRef } from 'react'
import './Capabilities.css'
import CurvedLoop from '../CurvedLoop'

const capabilities = [
    {
        icon: 'ri-palette-line',
        title: 'UI/UX Design',
        description: 'User-centered interfaces that balance aesthetics with usability.',
    },
    {
        icon: 'ri-code-line',
        title: 'Web Development',
        description: 'Fast, accessible, and scalable web applications with modern stacks.',
    },
    {
        icon: 'ri-smartphone-line',
        title: 'Mobile Apps',
        description: 'Cross-platform and native mobile experiences for iOS and Android.',
    },
    {
        icon: 'ri-database-2-line',
        title: 'Backend & APIs',
        description: 'Robust server-side architecture, RESTful and GraphQL APIs.',
    },
    {
        icon: 'ri-line-chart-line',
        title: 'Growth Strategy',
        description: 'Data-driven growth audits, conversion optimization, and analytics.',
    },
    {
        icon: 'ri-earth-line',
        title: 'Brand Design',
        description: 'Visual identity systems and brand guidelines across touchpoints.',
    },
]

const tools = ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'REACT NATIVE', 'NESTJS', 'PRISMA', 'TAILWIND CSS']

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
