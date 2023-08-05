import "./styles/global.styles.css";
import "./styles/reset.styles.css";

import styles from "./app.module.css";

import Card from "./components/ui/card/Card";
import PageLayout from "./layouts/PageLayout";
import BoxImage from "./assets/illustration-box-desktop.svg";

function App() {
  return (
    <PageLayout>
      <Card />
      <img className={styles.box} src={BoxImage} alt="" />
    </PageLayout>
  );
}

export default App;
