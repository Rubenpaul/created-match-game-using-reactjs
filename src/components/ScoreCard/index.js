import './index.css'

const ScoreCard = props => {
  const {score, resetGame} = props

  const onClickScoreCard = () => {
    resetGame()
  }

  return (
    <li className="score-card-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="match-game-trophy-icon"
      />
      <p className="your-score">YOUR SCORE</p>
      <p className="score-count">{score}</p>
      <button
        type="button"
        className="play-again-button"
        onClick={onClickScoreCard}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="rest-icon"
        />
        PLAY AGAIN
      </button>
    </li>
  )
}

export default ScoreCard
