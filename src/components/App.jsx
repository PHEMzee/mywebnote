import React, { useState } from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
  };

  return (
    <>
      <Header />
      <main>
        <CreateArea addNote={addNote} />
        {notes.map(({ title, keyPoint, content, summary }, index) => (
          <Note
            key={index}
            id={index}
            title={title}
            keyPoint={keyPoint}
            content={content}
            summary={summary}
            deleteNote={deleteNote}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
