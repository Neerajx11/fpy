import s from "./App.module.css";
import Navbar from "./components/Navbar";
import PullToRefresh from "react-simple-pull-to-refresh";
import { useEffect, useState } from "react";
import StatusBar from "./components/StatusBar";

const BASE_URL = "https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17";

function App() {
  const [cardData, setCardData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(false);

  // fetch card details on initial render
  useEffect(() => {
    refreshHandler();
    setIsLoading(false);
  }, []);

  const refreshHandler = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setCardData(data);
      setErr(false);
    } catch (err) {
      setErr(true);
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <div className={s.main}>
      <Navbar />
      <PullToRefresh onRefresh={refreshHandler}>
        {/* show loading and error state */}
        <StatusBar isLoading={isLoading} err={err} />
        <div style={{ height: "600px" }}>Hello</div>
      </PullToRefresh>
    </div>
  );
}

export default App;
