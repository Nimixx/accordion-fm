import styles from "./patternMobile.module.css";
import patternSrc from "../../assets/bg-pattern-mobile.svg";
import womanSrc from "../../assets/illustration-woman-online-mobile.svg";

export default function PatternMobile() {
  return (
    <>
      <img className={styles.pattern} src={patternSrc} alt="pattern mobile" />
      <img className={styles.woman} src={womanSrc} alt="" />
    </>
  );
}
