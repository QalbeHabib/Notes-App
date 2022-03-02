import React, { useState } from "react";
import "./addNotes.css";
const AddNotes = ({ newNote }) => {
  const [notetext, setNoteText] = useState("");
  const charactorLimit = 50;
  // 2nd Step
  const saveNote = () => {
    // 3rd Step

    if (notetext.trim().length > 0) {
      newNote(notetext);
      setNoteText(""); //TO empty the input area
    } else {
      alert("Please Add  Note...");
    }
  };

  // Enable Enter key to save the note
  const saveBtn = (e) => {
    if (e.keyCode === 13) {
      saveNote(); // Enter Btn (Keyboard btn) and Save btn (UI component) both are calling the saveNote() function
    }
  };

  // 1st Step
  return (
    <div className="new-note">
      <div>
        <textarea
          value={notetext}
          onChange={(e) => {
            if (charactorLimit - e.target.value.length >= 0) {
              setNoteText(e.target.value);
              // console.log(notetext);
            }
            // console.log(e.target.value); to target the input value
          }}
          onKeyDown={saveBtn} // to Find the keyCode of event (keyboard key)
          cols="34"
          rows="6"
          placeholder="Type to add  note..."
        ></textarea>
      </div>
      <div className="note-footer">
        <small>{charactorLimit - notetext.length} remaining</small>
        <button className="save-btn" onClick={saveNote}>
          save
        </button>
      </div>
    </div>
  );
};

export default AddNotes;
