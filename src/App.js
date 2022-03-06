import React, { useState, useEffect } from "react";
import NoteContainer from "./Conponents/Notes Container/NoteContainer";
import "./App.css";

const App = () => {
  var uniq = new Date().getTime();

 

  const [notes, setNotes] = useState([]);

  const storeNewNotes = (text) => {
    const date = new Date().toLocaleTimeString();

    const updateNote = {
      id: uniq,
      text: text,
      date: date,
    };
    console.log(notes)

    const newNotes = [...notes, updateNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };

  // Accessing data from local storage
  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("Notes-item-data"));
    if (saveNotes) {
      setNotes(saveNotes);
    }
  }, []);
  // Store Data in local Storage

  useEffect(() => {
    localStorage.setItem("Notes-item-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="container">
      <NoteContainer
        notesArr={notes}
        deleteNoteHandler={deleteNote}
        newNote={storeNewNotes}
      />

    </div>
  );
};

export default App;
