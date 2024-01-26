import React from "react";
import MainBarInput from "./MainBarInput";
import MainBarShowNote from "./MainBarShowNote";

function MainBar() {
  return (
    <div className="mainbar-outer">
      <MainBarInput />
      <MainBarShowNote />
    </div>
  );
}

export default MainBar;
