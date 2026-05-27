import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Grid from '@mui/material/Grid';

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API_BASE = "/"; // using proxy in package.json

  useEffect(() => {
    async function loadNotes() {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`${API_BASE}notes`);
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
        setError(error?.response?.data?.message || error.message || 'Failed to fetch notes.');
      } finally {
        setLoading(false);
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

  const updateNote = async (id, updatedNote) => {
    try {
      const response = await axios.put(`${API_BASE}notes/${id}`, updatedNote);
      setNotes((prevNotes) =>
        prevNotes.map((note) => (note._id === id ? response.data : note))
      );
      return response.data;
    } catch (error) {
      console.error('Error updating note:', error);
      throw error;
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
        {loading && <p>Loading notes...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && notes.length === 0 && <p>No notes found.</p>}
        <Grid container spacing={2} sx={{ marginTop: 2, margin: 'auto', maxWidth: '100vw', justifyContent: 'space-evenly' }}>
        {notes.map((note) => (
              
              <Note
                key={note._id}
                id={note._id}
                title={note.title}
                keyPoints={note.keyPoints || []}
                content={note.content}
                summary={note.summary}
                updateNote={updateNote}
                deleteNote={deleteNote}
              />
            ))}
            </Grid>
      </main>
      <Footer />
    </>
  );
}

export default App;
