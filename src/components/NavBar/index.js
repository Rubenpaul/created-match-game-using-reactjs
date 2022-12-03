import './index.css'

const NavBar = props => {
  const {score, timer} = props

  return (
    <nav className="nav-container">
      <li className="match-game-img-container">
        <img
          className="match-game-img"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </li>
      <li className="score-and-timer-container">
        <p className="score-card">
          Score: <span className="score">{score}</span>
        </p>
        <div className="timer-icon-container">
          <img
            className="timer-icon"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="timer-secs">{`${timer} sec`}</p>
        </div>
      </li>
    </nav>
  )
}

export default NavBar
