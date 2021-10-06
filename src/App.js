import { useState, useEffect } from "react";
import Quote from "./Quote";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [title, setTitle] = useState(false);
  const [currentAuthor, setCurrentAuthor] = useState("");
  const [currentGenre, setCurrentGenre] = useState("");
  useEffect(() => {
    randomQuoteHandler();
  }, []);

  const fetchData = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const responseData = await response.json();
    console.log(responseData.data);
    setQuotes(responseData.data);
    setCurrentAuthor(responseData.data[0].quoteAuthor);
    setCurrentGenre(responseData.data[0].quoteGenre);
  };

  const randomQuoteHandler = async () => {
    setTitle(false);
    const url = "https://quote-garden.herokuapp.com/api/v3/quotes/random";

    await fetchData(url);
  };

  const handleAllQuotes = async (author) => {
    setTitle(true);
    const url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`;
    await fetchData(url);
  };

  return (
    <div>
      <Quote
        onLoadQuote={randomQuoteHandler}
        onLoadAllQuotes={handleAllQuotes}
        author={currentAuthor}
        genre={currentGenre}
        quotes={quotes}
        title={title}
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
