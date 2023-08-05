import styles from "./pattern.module.css";
import PatternSrc from "../../../assets/bg-pattern-desktop.svg";
import DesignSrc from "../../../assets/illustration-woman-online-desktop.svg";

export default function Patern() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.pattern} src={PatternSrc} alt="pattern img bg" />
      </div>
      <img className={styles.woman__image} src={DesignSrc} alt="woman design" />
    </section>
  );
}
