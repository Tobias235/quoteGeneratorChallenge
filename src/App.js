import { useState, useEffect } from "react";
import Quote from "./Quote";

function App() {
  const [currentQuote, setCurrentQuote] = useState(
    "A diplomat is a man who always remembers a woman's birthday but never remembers her age."
  );
  const [currentAuthor, setCurrentAuthor] = useState("Robert Frost");
  const [currentGenre, setCurrentGenre] = useState("age");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://quote-garden.herokuapp.com/api/v3/quotes"
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const responseData = await response.json();
    console.log(responseData.data[4]);
  };

  return (
    <div>
      <Quote quote={currentQuote} author={currentAuthor} genre={currentGenre} />
      <footer>
        <p>
          created by{" "}
          <a href="https://devchallenges.io/portfolio/Tobias235">Tobias235</a> -
          devChallenges.io
        </p>
      </footer>
    </div>
  );
}

export default App;
