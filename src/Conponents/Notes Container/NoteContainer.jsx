import React from "react";
import Note from "../Note/Note";
import Header from "../Header/Header";
import "./noteContainer.css";
import AddNotes from "../AddNotes/AddNotes";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const NoteContainer = ({ notesArr, newNote, deleteNoteHandler }) => {
  return (
    <div>
      <DragDropContext>
      <Header />
        <AddNotes newNote={newNote} />
        
        <Droppable droppableId="DropID">

          {(provided) => (
            <div>
            <div className="notes-container">
              {notesArr.map((note) => (
                <div key={note.id}>
                  <Note text={note.text} date={note.date} id={note.id} deleteNoteHandler={deleteNoteHandler} />
                </div>
              ))}
            </div>
          </div>
          )}
        
          </Droppable>
      </DragDropContext>
    </div>
  );
};

export default NoteContainer;
