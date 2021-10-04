import { useState, useEffect } from "react";
import Quote from "./Quote";

function App() {
  const [quotes, setQuotes] = useState();
  const [changeQuote, setChangeQuote] = useState();
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentAuthor, setCurrentAuthor] = useState("");
  const [currentGenre, setCurrentGenre] = useState("");
  useEffect(() => {
    fetchData();
  }, [changeQuote]);

  const fetchData = async () => {
    const response = await fetch(
      "https://quote-garden.herokuapp.com/api/v3/quotes/random"
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const responseData = await response.json();
    setQuotes(responseData.data[0]);
    setCurrentQuote(responseData.data[0].quoteText);
    setCurrentAuthor(responseData.data[0].quoteAuthor);
    setCurrentGenre(responseData.data[0].quoteGenre);
  };

  function onclickhandler() {
    setChangeQuote(quotes);
  }

  return (
    <div>
      <Quote
        onLoadQuote={onclickhandler}
        quote={currentQuote}
        author={currentAuthor}
        genre={currentGenre}
      />
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
