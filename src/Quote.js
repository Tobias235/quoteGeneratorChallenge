import styles from "./Quote.module.css";

const Quote = ({
  genre,
  author,
  title,
  quotes,
  onLoadAllQuotes,
  onLoadQuote,
}) => {
  return (
    <div>
      <div className={styles.icon}>
        <p>Random</p>
        <span onClick={onLoadQuote} className="material-icons">
          autorenew
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.centered}>
          {title && <h1>{author}</h1>}
          {quotes.map((quote) => (
            <div className={styles.quote} key={quote._id}>
              <p>{quote.quoteText}</p>
            </div>
          ))}
          {!title && (
            <p onClick={onLoadAllQuotes} className={styles.author}>
              {author}
            </p>
          )}
          {!title && <p className={styles.genre}>{genre}</p>}
        </div>
      </div>
    </div>
  );
};

export default Quote;
