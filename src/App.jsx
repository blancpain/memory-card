import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Card from "./components/Card";
import LoadingAnimation from "./components/LoadingAnimation";

function App() {
  const [allCards, setAllCards] = useState([]);
  const [currentCards, setCurrentCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPics() {
      const response = await fetch("https://shibe.online/api/shibes?count=30");
      const data = await response.json();
      setAllCards(data);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsLoading(false);
    }
    getPics();
  }, []);

  // we set the dep array to allCards to ensure this is called
  // only when allCards change
  useEffect(() => {
    generateRandomCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCards]);

  function generateRandomCards() {
    if (allCards.length > 0) {
      // we use a Set to ensure no duplicates
      let randomCards = new Set();

      while (randomCards.size < 12) {
        let randomNum = Math.floor(Math.random() * 30);
        randomCards.add(allCards[randomNum]);
      }
      setCurrentCards(Array.from(randomCards));
    }
  }

  function handleClick(e) {
    const { id } = e.target;

    if (selectedCards.includes(id)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setSelectedCards([]);
      generateRandomCards();
    } else {
      setSelectedCards((prevState) => [...prevState, id]);
      setCurrentScore(currentScore + 1);
      generateRandomCards();
    }
  }

  const allCardElements = currentCards.map((card) => {
    return (
      <Card
        src={card}
        key={nanoid()}
        id={card}
        className="card"
        alt="dog"
        clickHandler={handleClick}
      />
    );
  });

  return (
    <div className="content">
      {isLoading && <LoadingAnimation />}
      <Header currentScore={currentScore} bestScore={bestScore} />
      <main>{allCardElements}</main>
    </div>
  );
}

export default App;
