import styles from "./Quote.module.css";

const Quote = ({
  genre,
  author,
  title,
  quotes,
  onLoadAllQuotes,
  onLoadQuote,
}) => {
  const handleAuthor = () => {
    onLoadAllQuotes(author);
  };

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
              <p>"{quote.quoteText}"</p>
            </div>
          ))}
          {!title && (
            <div className={styles.authorContainer} onClick={handleAuthor}>
              <div className={styles.authorDetails}>
                <p className={styles.author}>{author}</p>
                <p className={styles.genre}>{genre}</p>
              </div>
              <div className={styles.arrow}>
                <span className="material-icons">arrow_forward</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quote;
