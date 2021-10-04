import styles from "./Quote.module.css";

const Quote = ({ quote, genre, author, onLoadQuote }) => {
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
          <div className={styles.quote}>
            <p>{quote}</p>
          </div>
          <p className={styles.author}>{author}</p>
          <p className={styles.genre}>{genre}</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
