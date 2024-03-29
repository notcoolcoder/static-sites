import React, { useContext, useEffect, useState } from "react";
import { StoreLocal } from "../context";

const INITIAL = {
  title: "",
  content: "",
  id: undefined,
};

function MainBarInput() {
  const { store, dispatch } = useContext(StoreLocal);
  const [note, setNote] = useState(INITIAL);

  useEffect(() => {
    if (store.edit > -1) {
      store.note.map((list, index) => {
        if (index === store.edit) {
          setNote({ title: list.title, content: list.content, id: store.edit });
        }
      });
    }
  }, [store.edit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (note.id > -1) {
      dispatch({ type: "DELETE", value: note.id });
      dispatch({
        type: "ADD",
        payload: {
          title: note.title,
          content: note.content,
          date: Date.now(),
        },
      });
      dispatch({ type: "EDIT", value: -1 });
      setNote(INITIAL);
    } else {
      dispatch({
        type: "ADD",
        payload: {
          title: note.title,
          content: note.content,
          date: Date.now(),
        },
      });
    }

    setNote(INITIAL);
  };

  return (
    <div className="mainbar-input-outer">
      <div className="mainbar-box-outline">
        <span className="mainbar-heading-text">Add a Note</span>
        <span className="mainbar-text-hidden">{note.id}</span>
        <input
          type="text"
          placeholder="Title"
          className="mainbar-input"
          name="title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          placeholder="Take a note..."
          className="mainbar-input"
          name="content"
          value={note.content}
          onChange={handleChange}
          cols="50"
        ></textarea>
        <button onClick={handleAdd} className="mainbar-btn mb">
          Add
        </button>
      </div>
    </div>
  );
}

export default MainBarInput;
