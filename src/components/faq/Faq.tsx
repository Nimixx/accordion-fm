import styles from "./faq.module.css";
import Question from "../../layouts/Question";
import { useState, useEffect } from "react";
import faqData from "./faqData.json";

export default function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setExpandedIndex(null);
    } else if (expandedIndex !== null) {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
        const newIndex =
          event.key === "ArrowUp"
            ? (expandedIndex - 1 + faqData.length) % faqData.length
            : (expandedIndex + 1) % faqData.length;
        setExpandedIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedIndex]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const container = document.querySelector(`.${styles.container}`);

      if (container && !container.contains(target)) {
        setExpandedIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>FAQ</h1>
      <section className={styles.question__wrapper}>
        {faqData.map((q, index) => (
          <Question
            key={index}
            question={q.question}
            answer={q.answer}
            onClick={() =>
              setExpandedIndex((prevIndex) =>
                prevIndex === index ? null : index
              )
            }
            isExpanded={index === expandedIndex}
          />
        ))}
      </section>
    </section>
  );
}
