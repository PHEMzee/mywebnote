import react, {useState} from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
    const [newNotes, setNewNotes] = useState([])
  
    const addNote = (inNote) => {
setNewNotes(prevNotes => {
    return [...prevNotes, inNote]});
    }
    const deleteNote = (id) => {
        return setNewNotes(prevNotes => {
            return prevNotes.filter((newNote, index) => {
                return index !== id
            })
        })
    }
   return <>
        <Header />
        <CreateArea 
        addNote={addNote}
        />
        {newNotes.map((newNote, index) => <Note key={index} id={index} title={newNote.title}
        keyPoint={newNote.keyPoint}
        content={newNote.content}
        deleteNote={deleteNote}
        />)}
        <Footer />
    </>
}

export default App;
