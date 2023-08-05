import Faq from "../faq/Faq";
import Patern from "../patern/Pattern";
import PatternMobile from "../patern/PatternMobile";
import styles from "./card.module.css";

export default function Card() {
  return (
    <article className={styles.card}>
      <Patern />
      <PatternMobile />
      <Faq />
    </article>
  );
}
