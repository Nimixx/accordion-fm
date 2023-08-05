import styles from "./faq.module.css";
import Question from "../../layouts/Question";
import { useState, useEffect } from "react";
import faqData from "./faqData.json";

export default function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && expandedIndex !== null) {
        setExpandedIndex(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedIndex]);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>FAQ</h1>
      <section>
        {faqData.map((q, index) => (
          <Question
            key={index}
            question={q.question}
            answer={q.answer}
            onClick={() => handleClick(index)}
            isExpanded={index === expandedIndex}
          />
        ))}
      </section>
    </section>
  );
}
