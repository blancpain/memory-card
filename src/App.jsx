import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getPics() {
      const response = await fetch("http://shibe.online/api/shibes?count=12");
      const data = await response.json();
      setCards(data);
    }
    getPics();
  }, []);

  const allCards = cards.map((card) => {
    return <Card src={card} key={nanoid()} className="card" alt="dog" />;
  });

  return (
    <div className="content">
      <Header />
      <main>{allCards}</main>
    </div>
  );
}

export default App;
