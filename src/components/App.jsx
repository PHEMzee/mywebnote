import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

import Note from './Note';
import Header from './Header';
import Footer from './Footer';
import CreateArea from './CreateArea';
import { createNote, deleteNote as deleteNoteApi, fetchNotes, updateNote as updateNoteApi } from '../api/notesApi';

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadNotes = async () => {
      setLoading(true);
      setError('');

      try {
        const data = await fetchNotes();
        if (isMounted) setNotes(data);
      } catch (err) {
        console.error('Error fetching notes:', err);
        if (isMounted) {
          setError(err?.response?.data?.message || err.message || 'Failed to fetch notes.');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadNotes();

    return () => {
      isMounted = false;
    };
  }, []);

  const addNote = async (note) => {
    try {
      const savedNote = await createNote(note);
      setNotes((prevNotes) => [savedNote, ...prevNotes]);
    } catch (err) {
      console.error('Error saving note:', err);
    }
  };

  const updateNote = async (id, updatedNote) => {
    try {
      const savedNote = await updateNoteApi(id, updatedNote);
      setNotes((prevNotes) =>
        prevNotes.map((note) => (note._id === id ? savedNote : note))
      );
      return savedNote;
    } catch (err) {
      console.error('Error updating note:', err);
      throw err;
    }
  };

  const deleteNote = async (id) => {
    try {
      await deleteNoteApi(id);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (err) {
      console.error('Error deleting note:', err);
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
