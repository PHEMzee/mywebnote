import React, { useState } from 'react';
import NoteTemplate from './NoteTemplate';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    keyPoints: [],
    content: '',
    summary: '',
  });
  const [currentPoint, setCurrentPoint] = useState('');
  const [pointAdded, setPointAdded] = useState("none");
  const [showButton, setShowButton] = useState(false);
  const [noting, setNoting] = useState(false);

  const handleFieldChange = (event) => {
setShowButton(true);
    const { name, value } = event.target;
    setNoting(true);
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const handlePointInputChange = (event) => {
setShowButton(true);
    setCurrentPoint(event.target.value);
    setPointAdded("block");
    setNoting(true);
  };

  const addKeyPoint = (event) => {
    event.preventDefault();
    const trimmed = currentPoint.trim();
    if (!trimmed) return;
    setNote((prev) => ({ ...prev, keyPoints: [...prev.keyPoints, trimmed] }));
    setCurrentPoint('');
    setPointAdded("none");
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
    props.addNote(note);
    setNote({ title: '', keyPoints: [], content: '', summary: '' });
    setCurrentPoint('');
    setShowButton(false);
    setNoting(false);
  };

  return (
    <div className="create-area">
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleFieldChange}
        />

        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          <input
            name="keyPoint"
            placeholder="Add key point"
            value={currentPoint}
            onChange={handlePointInputChange}
          />
          <ListItemButton variant="contained"  size="small" style={{display: {pointAdded}}} onClick={addKeyPoint}>
          <AddIcon  fontSize="inherit" />
          </ListItemButton>
          
        </div>
<Divider style={{ margin: '0.5rem 0' }} />

        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleFieldChange}
        />

        <textarea
          name="summary"
          placeholder="Summary"
          rows="2"
          value={note.summary}
          onChange={handleFieldChange}
        />

    {showButton && <button type="button" className={showButton ? "fly-in" : "fly-out"} onClick={handleSubmit}>
 <AddIcon/> </button>}

      </form>
      {noting && <NoteTemplate 
      id={note.id}
      title={note.title}
      keyPoints={note.keyPoints}
      content={note.content}
      summary={note.summary}
      showButton={showButton}
      removeKeyPoint={removeKeyPoint}
      note={note}
      />}
    </div>
  );
}

export default CreateArea;
