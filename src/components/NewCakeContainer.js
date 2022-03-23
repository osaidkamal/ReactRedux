import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyCake } from "../redux";
export const NewCakeContainer = () => {
  const [num, setNum] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No of Cakes -{numOfCakes}</h2>
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      ></input>
      <button onClick={() => dispatch(buyCake(num))}>Buy {num} cake</button>
    </div>
  );
};
