import React, {useEffect, useState} from "react";
import "./styles.css";
import Deck from "./Deck";
import { PROMO_ID } from "./data";

const getThumbUrl = (id) => {
  return `https://storage.googleapis.com/discoverilla-galaxy/thumbnail/128x128/${id}.jpg`
}

const getVisionJsonURL = (id) => {
  return `https://storage.googleapis.com/discoverilla-galaxy/vision/${id}.json`
}

export default function App() {
  const [data, setData] = useState([]);
  
  useEffect(async () => {
    let init_data = [];
    for(let i = 0; i < PROMO_ID.length; i++) {
      await fetch(getVisionJsonURL(PROMO_ID[i].id)).then(res => {
        return res.json()
      }).then((data) => { 
        const item = { 
          url: data.link,
          imgUrl: getThumbUrl(PROMO_ID[i].id)
        }

        init_data.push(item);
      })
    }
    setData(init_data)
  }, [])


  return (
    <div className="App">
      <div id="coverBlack"></div>
      <div id='chrono-div'>
        <Deck data={data}/>
      </div>
    </div>
  );
}
