import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyIceCream } from "../redux";
export const IceContainer = () => {
  const numOfIcecream = useSelector((state) => state.iceCream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No of IceCream - {numOfIcecream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy</button>
    </div>
  );
};
