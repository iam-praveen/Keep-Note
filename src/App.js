import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import CreateNote from './components/CreateNote'
import DisplayNote from './components/DisplayNote'


function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if(savedNotes) {
      setNotes(savedNotes);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  function addNote(note) {
    setNotes(prevNote => {
      return [...prevNote, note]
    })
  }

  function deleteNote (id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <div className="notes">
        <CreateNote onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return <DisplayNote key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
        })}
      </div>
      
    </div>
  );
}

export default App;
