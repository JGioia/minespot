import React, {useState} from "react";

export const HarvestPage = () => {
  const [points, setPoints] = useState(0);
  return (
    <div>
      <button onClick={() => setPoints(points + 1)}>click cookie</button>
      <div>{points}</div>
    </div>
  )
}