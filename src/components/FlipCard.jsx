import { useState } from "react";
import styles from "../css/flipcard.module.css";

function FlipCard({ front, back, defaultFlipped = false }) {
  const [flipped, setFlipped] = useState(defaultFlipped);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  return (
    <div
      className={`${styles.flipCard} ${flipped ? styles.flipped : ""}`}
      onClick={handleClick}
    >
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          {front}
          <div
            className={`${styles.tip} ${
              !hasInteracted ? styles.tipActive : ""
            }`}
          >
            點擊卡片翻面
          </div>
        </div>
        <div className={styles.flipCardBack}>
          {back}
          <div
            className={`${styles.tip} ${
              !hasInteracted ? styles.tipActive : ""
            }`}
          >
            點擊卡片翻面
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
