import React, { useContext } from "react";
import { StoreLocal } from "../context";

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

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength - 3) + "...";
  } else {
    return text;
  }
}

function ShowNoteList() {
  const storeData = useContext(StoreLocal);
  console.log("storeData:", storeData.store);

  const handleEdit = (id) => {
    console.log("id:", id);
    storeData.dispatch({ type: "EDIT", value: id });
  };

  const handleDelete = (id) => {
    console.log("id:", id);
    storeData.dispatch({ type: "DELETE", value: id });
  };
  return (
    <div className="show-note-list">
      {storeData?.store?.note?.map((note, index) => (
        <div className="note-list-box" key={index}>
          <div className="note-list-title">
            {truncateText(note.title, 8)}
            <div>
              <span onClick={() => handleEdit(index)}>Edit</span>
              <span onClick={() => handleDelete(index)}>Delete</span>
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
