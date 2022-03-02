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
    <DragDropContext>
      <div>
        <Header />

        <Droppable droppableId="dropID">
          {(provided) => {
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="notes-container"
            >
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
            </div>;
            <AddNotes newNote={newNote} />;
          }}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default NoteContainer;
