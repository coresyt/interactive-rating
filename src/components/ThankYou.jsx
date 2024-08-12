import '../css/ThankYou.css'
import IllustrationThankYou from './IllustrationThankYou'

/**
 * @param {import('../types').ThankYouProps} props
 * @returns {JSX.Element}
 */
export default function ThankYou({ isActive, score }) {
  return (
    <div
      className='container-thankyou'
      style={!isActive ? { display: 'none' } : {}}
    >
      <header className='header-thankyou'>
        <IllustrationThankYou className='h-[100px] object-cover' />
        <p className='header-text-thankyou'>You selected {score} out of 5</p>
      </header>
      <h2 className='text-primary-white mb-3 text-3xl sm:text-4xl'>
        Thank you!
      </h2>
      <p className='text-primary-light-grey text-sm sm:w-[340px] sm:text-base'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  )
}
