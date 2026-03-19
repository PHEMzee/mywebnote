import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const API_BASE = "/"; // using proxy in package.json

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await axios.get(`${API_BASE}notes`);
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    }
    loadNotes();
  }, []);

  const addNote = async (note) => {
    try {
      const response = await axios.post(`${API_BASE}notes`, note);
      setNotes((prevNotes) => [response.data, ...prevNotes]);
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_BASE}notes/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <>
      <Header />
      <main>
        <CreateArea addNote={addNote} />
        {notes.map((note) => (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            keyPoint={note.keyPoint}
            content={note.content}
            summary={note.summary}
            deleteNote={deleteNote}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
