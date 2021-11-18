import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [position, setPosition] = useState(0)
  const [money] = useState(100)
  const sushiDiaplay = sushis.slice(position, position + 4)
  const handleMoreBtn = () => {
    if(position >= sushis.length-4){
      setPosition(0)
    } else {
      setPosition(position => position + 4)
    }
  }
  const plates = new Array(100 - sushis.length).fill(1)

  useEffect(() => {
    fetch(API)
    .then((resp) => resp.json())
    .then((data) => setSushis(data))
  }, [])

  function eatSushi(clickedSushi){
    if (money >= clickedSushi.price){
      fetch(`http://localhost:3001/sushis/${clickedSushi.id}`, {
        method:"DELETE"
      })
      .then((resp) => resp.json())
      .then(() => {
        const updatedSushi = sushis.filter(sushi => sushi.is !== clickedSushi.id)
        setSushis(updatedSushi)
      })
    } else if (money < clickedSushi.price) {
      alert("Not today broke boy")
    }
  }
  return (
    <div className="app">
      <SushiContainer
      sushis={sushiDiaplay}
      eatSushi={eatSushi}
      handleMoreBtn={handleMoreBtn}
      />
      <Table 
      plates={plates}
      money={money}
      />
    </div>
  );
}

export default App;
