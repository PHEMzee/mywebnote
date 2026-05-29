import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import AddTaskIcon from '@mui/icons-material/AddTask';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';

import NoteTemplate from './NoteTemplate';


function CreateArea({ addNote }) {
  const [note, setNote] = useState({
    title: '',
    keyPoints: [],
    content: '',
    summary: '',
  });
  const [currentPoint, setCurrentPoint] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [noting, setNoting] = useState(false);
  const [addPoints, setAddPoints] = useState(false);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;

    setShowButton(true);
    setNoting(true);
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const handlePointInputChange = (event) => {
    const { value } = event.target;
    setCurrentPoint(value);
    setAddPoints(value.length > 0);

    setShowButton(true);
    setNoting(true);
  };

  const addKeyPoint = (event) => {
    event.preventDefault();

    const trimmed = currentPoint.trim();
    if (!trimmed) return;

    setNote((prev) => ({
      ...prev,
      keyPoints: [...prev.keyPoints, trimmed],
    }));
    setCurrentPoint('');
  };

  const removeKeyPoint = (index) => {
    setNote((prev) => {
      const keyPoints = [...prev.keyPoints];
      keyPoints.splice(index, 1);
      return { ...prev, keyPoints };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addNote(note);
    setNote({ title: '', keyPoints: [], content: '', summary: '' });
    setCurrentPoint('');
    setShowButton(false);
    setNoting(false);
  };

  // Handle CreateArea Text compose new line on Shift + Enter
  const handleNewLineText = (event) => {
    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault();

      const textarea = event.target;
      const { name, value } = textarea;
      const cursorPos = textarea.selectionStart;
      const newValue = `${value.slice(0, cursorPos)}\n${value.slice(cursorPos)}`;

      setNote((prev) => ({ ...prev, [name]: newValue }));

      setTimeout(() => {
        textarea.selectionStart = cursorPos + 1;
        textarea.selectionEnd = cursorPos + 1;
      }, 0);
    }
  };

  return (
    <div className="create-area">
      <form onSubmit={handleSubmit}>
        <h4 style={{justifySelf: 'center', marginBottom: '5px'}}>Type new notes here...</h4>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleFieldChange}
        />

        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', alignItems: 'center' }}>
          <input
            name="keyPoint"
            placeholder="Add key point and press Enter"
            value={currentPoint}
            onChange={handlePointInputChange}
          />{ addPoints && (
          <Tooltip 
          title="Add To Point List"
          placement="top-end"
          offset={[0, 10]}
          >
          <IconButton
            onClick={addKeyPoint}
            aria-label="Add To Point List"
            color="primary"
            bottom="auto"
          >
            <AddTaskIcon fontSize="small" />
            
          </IconButton>
          </Tooltip>)}
        </div>

        <Divider style={{ margin: '0.5rem 0' }} />

        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleFieldChange}
          onKeyDown={handleNewLineText}
          style={{whiteSpace: 'pre-wrap'}}
        />

        <textarea
          name="summary"
          placeholder="Summary"
          rows="2"
          value={note.summary}
          onChange={handleFieldChange}
          style={{whiteSpace: 'pre-wrap'}}
        />

        {showButton && (
          <button 
          id="formBtn"
          type="button" className={showButton ? 'fly-in' : 'fly-out'} onClick={handleSubmit}>
            <AddIcon />
          </button>
        )}

      </form>
      {noting && (
        <NoteTemplate
          id={note.id}
          title={note.title}
          keyPoints={note.keyPoints}
          content={note.content}
          summary={note.summary}
          showButton={showButton}
          removeKeyPoint={removeKeyPoint}
          note={note}
        />
      )}
    </div>
  );
}

export default CreateArea;
