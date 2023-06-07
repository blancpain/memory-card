export default function Header() {
  return (
    <nav className="header">
      <div className="header--title-container">
        <h1 className="title">Shiba Memory Game</h1>
        <h3>
          Get points by clicking on an image but do not click more than once!
        </h3>
      </div>
      <div className="header--scoreboard">
        <p className="score">Current score: 0</p>
        <p className="score">Best score: 0</p>
      </div>
    </nav>
  );
}
