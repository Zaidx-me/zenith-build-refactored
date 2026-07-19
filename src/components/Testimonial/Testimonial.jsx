import { useEffect, useRef } from 'react'
import './Testimonial.css'

const testimonials = [
    {
        quote: "We were stuck for three weeks trying to integrate the JazzCash and PayFast APIs into our custom headless e-commerce build. Zenith stepped in, debugged the webhook issues in just a few days, and got us live right before our major Eid campaign.",
        author: "Saad Iftikhar",
        role: "Co-founder, ZariFab Store"
    },
    {
        quote: "My supervisor was incredibly strict about the memory management requirements for our C++ compiler project. The Zenith guys walked me through the pointer optimizations on a Google Meet call so I could confidently defend it in my viva. Ended up scoring an A.",
        author: "Zainab Qureshi",
        role: "Computer Engineering Student, NUST"
    },
    {
        quote: "We needed a custom dashboard that connected directly with the WhatsApp Cloud API to automate client leads. Zenith built a flawless Next.js web app for us. They are transparent with their pricing and actually stick to their timelines.",
        author: "Fahad Mahmood",
        role: "Director, EstateLink Islamabad"
    },
    {
        quote: "We hired Zenith to revamp our delivery app after the previous developers left it full of bugs and memory leaks. They completely restructured the messy React Native codebase and fixed the map rendering lag. Now the app runs smoothly on older budget Android phones.",
        author: "Ali Hassan",
        role: "Operations Lead, QuickDrop Logistics"
    },
    {
        quote: "As a creative agency, our clients often ask for complex web animations and custom Framer setups. We now outsource all our heavy web development to Zenith. Their attention to detail on UI/UX translates perfectly into code.",
        author: "Mahnoor Tariq",
        role: "Lead Designer, Alt-Creative"
    },
    {
        quote: "I was completely burned out trying to balance my final semester exams while building a full-stack MERN application for my FYP. Zenith took over the backend development. The code was clean, properly commented, and deployed seamlessly on AWS.",
        author: "Bilal Javed",
        role: "Senior IT Student, UET Lahore"
    }
]

function Testimonial() {
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
            { threshold: 0.1 }
        )

        const elements = sectionRef.current?.querySelectorAll('.reveal')
        elements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <section className="testimonial" ref={sectionRef}>
            <div className="container">
                <div className="testimonial-header reveal">
                    <div className="quote-mark">"</div>
                    <span className="testimonial-label mono">Testimonials</span>
                    <h2 className="testimonial-title">
                        What our <span className="accent">clients say</span>
                    </h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <div
                            className={`testimonial-card reveal reveal-delay-${(index % 3) + 1}`}
                            key={t.author}
                        >
                            <div className="testimonial-card-accent"></div>
                            <p className="testimonial-card-quote">
                                "{t.quote}"
                            </p>
                            <div className="testimonial-card-author">
                                <div className="testimonial-card-avatar">
                                    {t.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="testimonial-card-info">
                                    <span className="testimonial-card-name">{t.author}</span>
                                    <span className="testimonial-card-role mono">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonial
