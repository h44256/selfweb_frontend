import styles from "../css/card.module.css";
import Surpreme from "./Surpreme";
import SupremeSide from "./SupremeSide";
import Riease from "./Riease";
import RieaseSide from "./RieaseSide";
import Chunyuan from "./Chunyuan";
import FlipCard from "./FlipCard";
import ChunYuanSide from "./ChunYuanSide";

function Card() {
  return (
    <>
      <div className={styles.cardContainer}>
        <FlipCard front={<Surpreme />} back={<SupremeSide />} />
        <FlipCard
          front={<Riease />}
          back={<RieaseSide />}
          defaultFlipped={true}
        />
        <FlipCard front={<Chunyuan />} back={<ChunYuanSide />} />
      </div>
    </>
    // <>
    //   <div className={styles.company}>
    //     <div className={styles.cardGroup}>
    //       <Surpreme />
    //       <SupremeSide />
    //     </div>
    //     <Riease />
    //     <Chunyuan />
    //   </div>
    // </>
  );
}
export default Card;
