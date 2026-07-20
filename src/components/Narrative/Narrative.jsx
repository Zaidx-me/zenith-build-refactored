import { useEffect, useRef } from 'react'
import './Narrative.css'

const stats = [
    { number: '13+', label: 'Projects' },
    { number: '3+', label: 'Years' },
    { number: '7+', label: 'Industries' },
]

const process = [
    {
        number: '01',
        title: "Discover",
        description: "We immerse in your business — goals, audience, competition, and constraints to define the strategy."
    },
    {
        number: '02',
        title: "Research",
        description: "Deep user research and market analysis to uncover opportunities and validate assumptions."
    },
    {
        number: '03',
        title: "Design",
        description: "Iterative prototyping and visual design until the experience feels right across every touchpoint."
    }
]

function Narrative() {
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
        <section id="about" className="narrative" ref={sectionRef}>
            <div className="container">
                {/* Section header */}
                <div className="narrative-header reveal">
                    <span className="section-label mono">About Us</span>
                    <h2 className="narrative-title">
                        We build<br />
                        digital <span className="accent">excellence</span>
                    </h2>
                </div>

                {/* About content */}
                <div className="problem-grid">
                    <div className="problem-card reveal reveal-delay-1">
                        <p className="problem-desc">
                            From startups to enterprises, we craft digital products that drive
                            real business outcomes — combining deep technical expertise with
                            sharp design thinking.
                        </p>
                    </div>
                    {stats.map((stat, index) => (
                        <div
                            className={`problem-card reveal reveal-delay-${index + 2}`}
                            key={stat.label}
                        >
                            <span className="problem-number mono">{stat.number}</span>
                            <h3 className="problem-title">{stat.label}</h3>
                        </div>
                    ))}
                </div>

                {/* Process steps */}
                <div className="solution reveal">
                    <div className="solution-line"></div>
                    <div className="solution-content">
                        <span className="section-label mono accent">How We Work</span>
                        <h3 className="solution-title">
                            From discovery to deployment,<br />
                            <span className="accent">we've got you covered.</span>
                        </h3>
                        <p className="solution-desc">
                            Our proven process ensures every project is delivered with precision,
                            quality, and on time. We don't just build — we partner with you.
                        </p>
                    </div>
                </div>

                {/* Why us */}
                <div className="why-us reveal">
                    <span className="section-label mono">Why Zenith Build</span>
                    <div className="why-us-grid">
                        <div className="why-us-card reveal reveal-delay-1">
                            <span className="why-us-number mono">01</span>
                            <h4 className="why-us-title">Outcome-Driven</h4>
                            <p className="why-us-desc">
                                We don't just write code — we solve business problems. Every feature
                                ties back to a measurable goal: more conversions, faster load times,
                                happier users.
                            </p>
                        </div>
                        <div className="why-us-card reveal reveal-delay-2">
                            <span className="why-us-number mono">02</span>
                            <h4 className="why-us-title">Full-Stack Capability</h4>
                            <p className="why-us-desc">
                                From pixel-perfect UI to cloud infrastructure, we handle the entire
                                stack. No handoffs, no gaps, no "that's not our department."
                            </p>
                        </div>
                        <div className="why-us-card reveal reveal-delay-3">
                            <span className="why-us-number mono">03</span>
                            <h4 className="why-us-title">Startup Speed</h4>
                            <p className="why-us-desc">
                                We ship fast without cutting corners. Agile sprints, continuous
                                deployment, and weekly demos keep you in the loop and moving forward.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Narrative
