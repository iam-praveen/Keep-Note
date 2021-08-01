import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [isExpanded, setIsExpanded] = useState(false)

    const [note, setNote] = useState({
        title: "",
        content: ""
    }
    )

    function addNote(event) {
       const {name, value} = event.target;

       setNote(prevNote => {
           return {
               ...prevNote,
               [name]: value
           }
       })
    }
    
    function submitNote(event) {
        (props.onAdd(note))
        setNote({title: "",content: ""});
    }

    function showTask() {
        setIsExpanded(true);
    }

    return (
        <div className="createnote">
            {isExpanded && <input type="text" placeholder="Heading" onChange={addNote} name="title" id="ih" value={note.title} /> }
            
            <textarea placeholder="Start note taking.." onClick={showTask} onChange={addNote} name="content" id="ic" value={note.content} rows= {isExpanded ? 3 : 1} />
            {isExpanded && <button className="btn" onClick={submitNote}><AddIcon /></button> }
            
        </div>
    )
}

export default CreateNote