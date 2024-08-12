import { useState } from 'react'

import Footer from './components/Footer'
import RatingState from './components/RatingState'
import ThankYou from './components/ThankYou'

/**
 * @returns {JSX.Element}
 */
export default function App() {
  const sections = Object.freeze({
    rating: 'rating',
    thankYou: 'thankYou'
  })
  const [activeSection, setActiveSection] = useState(sections.rating)
  const [score, setScore] = useState(5)

  const handleSectionChange = () => setActiveSection(sections.thankYou)

  return (
    <div
      className='grid h-screen w-screen'
      style={{ gridTemplateRows: '1fr auto' }}
    >
      <div className='flex h-full w-full items-center justify-center'>
        {/* mobile 320px x 365px */}
        {/* mobile 320px x 410px */}
        <main className='bg-primary-dark-blue h-[365px] w-[320px] rounded-xl p-5 sm:h-[410px] sm:w-[420px] [&>div]:overflow-hidden'>
          {/* <!-- Rating state start --> */}
          <RatingState
            isActive={activeSection === sections.rating ? true : false}
            sectionChange={handleSectionChange}
            setScore={setScore}
            score={score}
          />
          {/* <!-- Rating state end --> */}
          {/* <!-- Thank you state start --> */}
          <ThankYou
            score={score}
            isActive={activeSection === sections.thankYou ? true : false}
          />
          {/* <!-- Thank you state end --> */}
        </main>
      </div>

      <Footer />
    </div>
  )
}
