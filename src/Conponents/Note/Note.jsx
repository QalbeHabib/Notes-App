import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "./note.css";

const Note = ({ text, date, id, deleteNoteHandler }) => {
  return (
    <div className="notes-content">
      <h4>{text}</h4>
      <div className="notes-footer">
        <small>{date}</small>

        <MdDeleteForever
          size="1.3rem"
          style={{ cursor: "pointer" }}
          onClick={() => deleteNoteHandler(id)}
        />
      </div>
    </div>
  );
};

export default Note;
