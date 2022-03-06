import React, { useState } from "react";
import Note from "../Note/Note";
import Header from "../Header/Header";
import "./noteContainer.css";
import AddNotes from "../AddNotes/AddNotes";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const NoteContainer = ({ notesArr, newNote, deleteNoteHandler }) => {
  
 

  const [  , setUser] = useState(notesArr) 

  const dragHandle = (result) => {
    if(!result.destination ) return
    const tempUser = [...notesArr]
    const [selectRow] = tempUser.splice(result.source.index,1)
    tempUser.splice(result.destination.index,0 ,selectRow)
    console.log(result.source.index,result.destination.index, selectRow ,tempUser)
    
   console.log(setUser(tempUser)) 

  }
  return (
    <div>
      <DragDropContext onDragEnd={dragHandle}>
      <Header />
        <AddNotes newNote={newNote} />
        
        <Droppable droppableId="dropID">

          {(provided) => (
           

            <div  {...provided.droppableProps} ref={provided.innerRef} className="notes-container">
                {notesArr.map((note,idx) => (

                <Draggable draggableId={note.id.toString()} index={idx} key={idx.toString()} >
                  
                    {(provided) => {
                      return  <div ref={provided.innerRef}  {...provided.draggableProps}   {...provided.dragHandleProps} >
                      
                      <Note text={note.text} date={note.date} id={note.id} deleteNoteHandler={deleteNoteHandler}/>
                    </div>
                     
                  }}
                  </Draggable>
              
              ))}
              {provided.placeholder}
            </div>
          
          )}
          </Droppable>
      </DragDropContext>
    </div>
  );
};

export default NoteContainer;
