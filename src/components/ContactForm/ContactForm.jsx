import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        setSending(true)

        const form = e.currentTarget
        const data = new FormData(form)

        try {
            const res = await fetch('/api/contact', { method: 'POST', body: data })
            const json = await res.json()

            if (json.errors) {
                setError(json.errors.email || json.errors.message || json.errors.message?.[0] || 'Something went wrong.')
            } else if (json.success) {
                setSent(true)
                form.reset()
            }
        } catch {
            setError('Network error. Please try again.')
        } finally {
            setSending(false)
        }
    }

    if (sent) {
        return (
            <div className="contact-form-success">
                <div className="contact-success-icon">
                    <i className="ri-check-line"></i>
                </div>
                <h3 className="contact-success-title">Message sent</h3>
                <p className="contact-success-desc">
                    Thanks for reaching out. We'll get back to you within a couple of days.
                </p>
                <button
                    onClick={() => setSent(false)}
                    className="contact-success-btn"
                >
                    Send another
                </button>
            </div>
        )
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" autoComplete="off" tabIndex={-1} className="contact-form-honey" />

            <div className="contact-form-row">
                <input
                    type="text"
                    name="fromName"
                    placeholder="Name"
                    required
                    className="contact-form-input"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="contact-form-input"
                />
            </div>
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="contact-form-input"
            />
            <textarea
                name="message"
                rows={5}
                placeholder="Message"
                required
                className="contact-form-textarea"
            />

            {error && (
                <p className="contact-form-error">{error}</p>
            )}

            <button
                type="submit"
                disabled={sending}
                className="contact-form-submit"
            >
                {sending ? (
                    <>
                        <i className="ri-loader-4-line contact-form-spin"></i>
                        Sending
                    </>
                ) : (
                    <>
                        Send Message
                        <i className="ri-send-plane-fill"></i>
                    </>
                )}
            </button>
        </form>
    )
}

export default ContactForm
