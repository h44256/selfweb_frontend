import { useState } from "react";
import styles from "../css/flipcard.module.css";

function FlipCard({ front, back, defaultFlipped = false }) {
  const [flipped, setFlipped] = useState(defaultFlipped);

  return (
    <div
      className={`${styles.flipCard} ${flipped ? styles.flipped : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          {front}
          <div className={styles.tip}>點擊卡片翻面</div>
        </div>
        <div className={styles.flipCardBack}>
          {back}
          <div className={styles.tip}>點擊卡片翻面</div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
