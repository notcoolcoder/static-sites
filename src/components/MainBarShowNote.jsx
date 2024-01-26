import React from "react";
import ShowNoteList from "./ShowNoteList";

function MainBarShowNote() {
  return (
    <div className="mainbar-show-notes-outer">
      <h4 className="mainbar-note-heading">My Notes</h4>
      <p className="mainbar-helper-text">Recently viewed</p>

      <ShowNoteList />
    </div>
  );
}

export default MainBarShowNote;
