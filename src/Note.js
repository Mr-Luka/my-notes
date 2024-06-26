import React from "react";


const Note = props => {

    const updateTitle = e =>{
        const value = e.target.value;
        const editMeId = props.note.id;
        props.onType(editMeId, "title", value);
    }

    const updateDescription = e =>{
        const value = e.target.value;
        const editMeId = props.note.id;
        props.onType(editMeId, "description", value);
    }

    const deleteNote = ()=> {
        props.removeNote(props.note.id)
    }
    return (
        <li className="note">
            <input 
                className="note__title" 
                type="text" 
                placeholder="Title"
                value={props.note.title}
                onChange={updateTitle}
                />
            <textarea 
                className="note__description" 
                placeholder="Description..."
                value={props.note.description}
                onChange={updateDescription}
                />
            <span 
                className="note__delete"
                onClick={deleteNote}
                >X</span>
        </li>
    )
}

export default Note;