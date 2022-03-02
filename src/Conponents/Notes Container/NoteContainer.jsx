import React from "react";
import Note from "../Note/Note";
import Header from "../Header/Header";
import "./noteContainer.css";
import AddNotes from "../AddNotes/AddNotes";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const NoteContainer = ({
  notesArr,
  newNote,
  deleteNoteHandler,
  handleSearch,
}) => {
  return (
    <div>
      <Header />
      <AddNotes newNote={newNote} />;
      <div className="notes-container">
        {notesArr.map((note) => (
          <div key={note.id}>
            <Note
              text={note.text}
              date={note.date}
              id={note.id}
              deleteNoteHandler={deleteNoteHandler}
            />
          </div>
        ))}
      </div>
      ;
    </div>
  );
};

export default NoteContainer;
