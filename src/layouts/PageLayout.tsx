import styles from "./pageLayout.module.css";

import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: LayoutProps) {
  return <main className={styles.container}>{children}</main>;
}
