import "./styles/global.styles.css";
import "./styles/reset.styles.css";

import Card from "./components/card/Card";
import PageLayout from "./layouts/PageLayout";

function App() {
  return (
    <PageLayout>
      <Card />
    </PageLayout>
  );
}

export default App;
