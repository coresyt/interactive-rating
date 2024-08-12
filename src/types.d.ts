export interface RatingStateProps {
  isActive: boolean
  sectionChange: () => void
  setScore: React.Dispatch<React.SetStateAction<number>>
  score: number
}
export interface ThankYouProps {
  isActive: boolean
  score: number
}
