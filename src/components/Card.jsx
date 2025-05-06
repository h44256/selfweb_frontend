import styles from "../css/card.module.css";
import Surpreme from "./Surpreme";
import Riease from "./Riease";
import Chunyuan from "./Chunyuan";
import SupremeSide from "./SupremeSide";
import FlipCard from "./FlipCard";

function Card() {
  return (
    <>
      <div className={styles.company}>
        <FlipCard front={<Surpreme />} back={<SupremeSide />} />
        <Riease />
        <Chunyuan />
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
