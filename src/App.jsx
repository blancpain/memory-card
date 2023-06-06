import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    async function getPics() {
      const response = await fetch("http://shibe.online/api/shibes?count=20");
      const data = await response.json();
      setPics(data);
    }
    getPics();
  }, []);

  const allPics = pics.map((pic) => {
    return <img src={pic} key={nanoid()} className="card" alt="dog" />;
  });
  return <main>{allPics}</main>;
}

export default App;
