import styles from "../css/card.module.css";
import Surpreme from "./Surpreme";
import SupremeSide from "./SupremeSide";
import Riease from "./Riease";
import RieaseSide from "./RieaseSide";
import Chunyuan from "./Chunyuan";
import FlipCard from "./FlipCard";

function Card() {
  return (
    <>
      <div className={styles.company}>
        <FlipCard front={<Surpreme />} back={<SupremeSide />} />
        <FlipCard front={<Riease />} back={<RieaseSide />} />
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
