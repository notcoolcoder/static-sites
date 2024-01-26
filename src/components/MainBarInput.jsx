import React, { useContext } from "react";
import { StoreLocal } from "../context";
import { fetchs } from "../assets/Data";

function MainBarInput() {
  const { store } = useContext(StoreLocal);
  console.log("store:", store);
  return (
    <div className="mainbar-input-outer">
      {JSON.stringify(fetchs.filter((notes, index) => index === store.edit))}
    </div>
  );
}

export default MainBarInput;
