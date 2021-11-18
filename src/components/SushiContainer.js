import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, eatSushi, handleMoreBtn, isEaten}) {
  return (
    <div className="belt">
      {sushis.map((sushi) => (
        <Sushi
        key={sushi.id}
        sushi={sushi}
        eatSushi={eatSushi}
        />
      ))}
      {/* Render Sushi components here! */}
      <MoreButton handleMoreBtn={handleMoreBtn}/>
    </div>
  );
}

export default SushiContainer;
