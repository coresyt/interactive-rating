import '../css/RatingState.css'
import IconStar from './IconStar'

/**
 * @param {import('../types').RatingStateProps} props
 * @returns {JSX.Element}
 */
export default function RatingState({
  isActive,
  sectionChange,
  setScore,
  score
}) {
  return (
    <div className='sm:m-5' style={!isActive ? { display: 'none' } : {}}>
      <header className='bg-primary-light-grey/10 mb-6 flex h-10 w-10 items-center justify-center rounded-full sm:mb-10'>
        <IconStar />
      </header>
      <h2 className='text-primary-white mb-5 text-2xl'>How did we do?</h2>
      <p className='text-primary-light-grey mb-4 w-[270px] text-sm leading-5 sm:w-[300px]'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className='mb-5 flex gap-6' id='rating-container'>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            id={num}
            className={`button-numbers ${score === num ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()

              setScore(parseInt(e.currentTarget.id))
              e.currentTarget.classList.add('active')

              let parentElement = document.getElementById('rating-container')
              let oldScoreElement
              const oldScore = parseInt(e.currentTarget.id) - 1

              if (
                parentElement instanceof HTMLDivElement &&
                parentElement.childNodes[oldScore] instanceof HTMLButtonElement
              )
                oldScoreElement = parentElement.childNodes[oldScore]

              oldScoreElement.classList.remove('active')
            }}
          >
            {num}
          </button>
        ))}
      </div>
      <button
        onClick={(e) =>
          setTimeout(() => {
            e.preventDefault()
            sectionChange()
          }, 25)
        }
        className='button-rating'
      >
        Submit
      </button>
    </div>
  )
}
