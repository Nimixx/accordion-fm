import Patern from "../patern/Pattern";
import styles from "./card.module.css";

export default function Card() {
  return (
    <article className={styles.card}>
      <Patern />
    </article>
  );
}
