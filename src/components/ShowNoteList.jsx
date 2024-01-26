import React, { useContext } from "react";
import { StoreLocal } from "../context";
import { fetchs } from "../assets/Data";

function timeAgo(timestamp) {
  const now = new Date();
  const past = new Date(parseInt(timestamp));
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = now - past;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return +Math.round(elapsed / msPerYear) + " years ago";
  }
}

function ShowNoteList() {
  const storeData = useContext(StoreLocal);
  console.log("storeData:", storeData.store);

  const handleEdit = (id) => {
    console.log("id:", id);
    storeData.dispatch({ type: "EDIT", value: id });
  };
  return (
    <div className="show-note-list">
      {fetchs.map((note, index) => (
        <div className="note-list-box" key={index}>
          <div className="note-list-title">
            {note.title}
            <div>
              <span onClick={() => handleEdit(index)}>Edit</span>
              <span>Delete</span>
            </div>
          </div>
          <div className="note-list-content">{note.content}</div>
          <div className="show-time">{timeAgo(note.date)}</div>
        </div>
      ))}{" "}
    </div>
  );
}

export default ShowNoteList;
