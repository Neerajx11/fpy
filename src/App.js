import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PullToRefresh from "react-simple-pull-to-refresh";
import StatusBar from "./components/StatusBar";
import Skeleton from "./components/Skeleton";
import ContextualCards from "./components/ContextualCards";

import s from "./App.module.css";

const BASE_URL = "https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17";

function App() {
  const [cardData, setCardData] = useState([]);
  const [err, setErr] = useState(false);

  // fetch card details on initial render
  useEffect(() => {
    refreshHandler();
  }, []);

  // fetch card details on refresh and stores it in cardData
  const refreshHandler = async () => {
    try {
      const res = await fetch(BASE_URL);
      const { card_groups: data } = await res.json();
      setCardData(data);
      setErr(false);
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };

  return (
    <div className={s.main}>
      <Navbar />
      <PullToRefresh className={s.ptrm} onRefresh={refreshHandler}>
        {/* shows error state */}
        <StatusBar err={err} />
        {/* main body */}
        <div className={s.body}>
          {!cardData.length ? (
            <Skeleton />
          ) : (
            <ContextualCards cardGroups={cardData} />
          )}
        </div>
      </PullToRefresh>
    </div>
  );
}

export default App;
