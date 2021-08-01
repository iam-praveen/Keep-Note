import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const DisplayNote = (props) => {
    function handleClick() {
        props.onDelete(props.id);
    }
    return (
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button className="btn" onClick={handleClick} ><DeleteIcon /></button>
        </div>
    )
}

export default DisplayNote
