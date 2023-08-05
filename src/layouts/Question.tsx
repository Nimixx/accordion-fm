import styles from "./question.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

type QuestionProps = {
  question: string;
  answer: string;
  onClick: () => void;
  isExpanded: boolean;
};

export default function Question({
  question,
  answer,
  onClick,
  isExpanded,
}: QuestionProps) {
  return (
    <article>
      <button
        onClick={onClick}
        className={`${styles.question} ${isExpanded && styles.question__open}`}
      >
        <h4>{question}</h4>
        <span>
          {isExpanded ? (
            <ChevronDown className={styles.arrow__up} />
          ) : (
            <ChevronDown className={styles.arrow__down} />
          )}
        </span>
      </button>
      {isExpanded && <p className={styles.answer}>{answer}</p>}
      <div className={styles.divider}></div>
    </article>
  );
}
