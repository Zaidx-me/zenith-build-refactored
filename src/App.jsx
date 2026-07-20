import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Narrative from './components/Narrative/Narrative'
import Work from './components/Work/Work'
import Testimonial from './components/Testimonial/Testimonial'
import Capabilities from './components/Capabilities/Capabilities'
import InterstitialCTA from './components/InterstitialCTA/InterstitialCTA'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import Dither from './components/Dither'
import CalBookingButton from './components/CalBookingButton/CalBookingButton'
import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Dither Background - Full screen, receives pointer events */}
      <div className="dither-background">
        <Dither
          waveColor={[0, 0.09803921568627451, 0.8392156862745098]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.2}
          colorNum={5}
          pixelSize={2}
          waveAmplitude={0.3}
          waveFrequency={2.5}
          waveSpeed={0.1}
        />
      </div>

      {/* Content layer - pointer events pass through to Dither */}
      <div className="content-layer">
        <Header />
        <main>
          <Hero />
          <Narrative />
          <Work />
          <InterstitialCTA
            heading={<>Liked what you <span className="accent">saw</span>?</>}
            subtext="Let's turn your idea into a product people love. No commitment, no pressure — just a conversation."
          />
          <Testimonial />
          <Capabilities />
          <InterstitialCTA
            heading={<>Ready to build something <span className="accent">extraordinary</span>?</>}
            subtext="We take on a limited number of projects each month to ensure quality. Let's see if we're the right fit."
          />
          <CTA />
        </main>
        <Footer />
      </div>
      <CalBookingButton floating showFreeBadge>
        Book Free Call
      </CalBookingButton>
    </div>
  )
}

export default App
