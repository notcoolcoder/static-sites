import React from "react";
import MainBarInput from "./MainBarInput";
import MainBarShowNote from "./MainBarShowNote";
import { Provider } from "../context";

function MainBar() {
  return (
    <div className="mainbar-outer">
      <Provider>
        <MainBarInput />
        <MainBarShowNote />
      </Provider>
    </div>
  );
}

export default MainBar;
