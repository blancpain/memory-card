// eslint-disable-next-line react/prop-types
export default function Header({ currentScore, bestScore }) {
  return (
    <nav className="header">
      <div className="header--title-container">
        <h1 className="title">Shiba Memory Game</h1>
        <h3>
          Get points by clicking on an image but do not click more than once!
        </h3>
      </div>
      <div className="header--scoreboard">
        <p className="score">Current score: {currentScore}</p>
        <p className="score">Best score: {bestScore}</p>
      </div>
    </nav>
  );
}
