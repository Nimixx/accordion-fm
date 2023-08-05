import styles from "./faq.module.css";
import Question from "../../layouts/Question";

import { useState } from "react";

const questions = [
  {
    question: "How many team members can I invite?",
    answer: "You can invite a maximum of 3 friends.",
  },
  {
    question: "What is the maximum upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message, and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support are available 24/7. Phone lines are open during normal business hours.",
  },
];

export default function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>FAQ</h1>
      <section>
        {questions.map((q, index) => (
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
