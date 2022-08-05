import s from "./App.module.css";
import Navbar from "./components/Navbar";
import PullToRefresh from "react-simple-pull-to-refresh";
import { useEffect, useState } from "react";

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
      let obj = {};
      // creating obj of array according to design type
      // Ex: obj={
      //    HC9:[],
      //    HC1:[],
      //   }
      data.card_groups.map((el) =>
        obj[el.design_type]
          ? obj[el.design_type].push(el)
          : (obj[el.design_type] = [el])
      );
      console.log(obj);
      setCardData(obj);
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
        {/* if error exist then show error component at top */}
        {err && (
          <div className={s.err}>
            Error : Unable to fetch data. Try again :\
          </div>
        )}
        <div style={{ height: "600px" }}>Hello</div>
      </PullToRefresh>
    </div>
  );
}

export default App;
