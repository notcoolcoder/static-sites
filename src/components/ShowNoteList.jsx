import React, { useContext } from "react";
import { StoreLocal } from "../context";
import { fetchs } from "../assets/Data";
import moment from "moment";

function ShowNoteList() {
  const storeData = useContext(StoreLocal);
  console.log('storeData:', storeData.store)

  const handleEdit = (id) => {
    console.log("id:", id);
    storeData.dispatch({type: "EDIT", value: id})
  };
  return (
    <div className="show-note-list">
      {fetchs.map((note, index) => (
        <div className="note-list-box" key={index}>
          <p className="note-list-title">
            {note.title}{" "}
            <div>
              <span onClick={() => handleEdit(index)}>Edit</span>
              <span>Delete</span>
            </div>
          </p>
          <p className="note-list-content">{note.content}</p>
          <p>{note.date}</p>
        </div>
      ))}{" "}
    </div>
  );
}

export default ShowNoteList;
