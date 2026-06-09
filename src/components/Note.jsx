import Box from '@mui/material/Box';
import { green, red, blue, orange } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import React, { useEffect, useState } from 'react';

import HandleImg from './HandleImg';



const tableContainerSx = {
  width: 450,
  whiteSpace: 'normal',
  wordBreak: 'break-word',
  border: '2px solid',
  borderRadius: 5,
  overflow: 'hidden', // Ensures borders don't clip rounded corners
  borderColor: 'divider',
};

const cellBaseSx = {
  borderRight: '2px solid',
  borderBottom: '2px solid',
  borderColor: 'divider',
  padding: 1.5,
  verticalAlign: 'top',
  '&:last-child': {
    borderRight: 0,
  },
};

const linedCellSx = {
  ...cellBaseSx,
  borderLeft: '2px solid #ffcccc',
  lineHeight: '24px',
  textWrap: 'wrap',
  whiteSpace: 'pre-wrap',
  height: 200,
  backgroundColor: '#ffffff',
  backgroundImage: 'linear-gradient(#87CEEB 1px, transparent 1px)',
  backgroundAttachment: 'local',
  backgroundSize: '100% 24px',
};

const summaryCellSx = {
  ...cellBaseSx,
  height: 100,
  borderRight: 0,
  whiteSpace: 'pre-wrap',
  backgroundColor: '#ffffff',
  backgroundImage: 'linear-gradient(#87CEEB 1px, transparent 1px)',
  backgroundAttachment: 'local',
  backgroundSize: '100% 24px',
};

export default function Note({ id, title, keyPoints, content, summary, updateNote, deleteNote }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editData, setEditData] = useState({
    title,
    keyPoints: Array.isArray(keyPoints) ? keyPoints.join(', ') : '',
    content,
    summary,
  });

  useEffect(() => {
    setEditData({
      title,
      keyPoints: Array.isArray(keyPoints) ? keyPoints.join(', ') : '',
      content,
      summary,
    });
  }, [title, keyPoints, content, summary]);

  const { 
    contentRef, 
    // cancelPress, 
    // startPress, 
    handleRightClick, handleDownloadImage, handlePrint } = HandleImg({ title });

  const handleDelete = (e) => {
    e.preventDefault();
    deleteNote(id);
  };

  const handleEditChange = (field, value) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveEdit = async () => {
    try {
      const keyPointsArray = editData.keyPoints
        .split(',')
        .map((point) => point.trim())
        .filter((point) => point);

      const updatedNote = {
        title: editData.title,
        keyPoints: keyPointsArray,
        content: editData.content,
        summary: editData.summary,
      };

      const savedNote = await updateNote(id, updatedNote);
      if (savedNote) {
        setEditData({
          title: savedNote.title || '',
          keyPoints: Array.isArray(savedNote.keyPoints) ? savedNote.keyPoints.join(', ') : '',
          content: savedNote.content || '',
          summary: savedNote.summary || '',
        });
      }
      setIsEditMode(false);
    } catch (error) {
      console.error('Failed to save note changes:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditData({
      title,
      keyPoints: Array.isArray(keyPoints) ? keyPoints.join(', ') : '',
      content,
      summary,
    });
    setIsEditMode(false);
  };

  const handleDialogClose = (event, reason) => {
    // Only close on Escape key, not on backdrop click
    if (reason === 'backdropClick') return;
  };


 return (    
    <Box

      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'relative',
        marginBottom: '1em',
      }}
      
    >
      
      <TableContainer 
            ref={contentRef}
      onContextMenu={handleRightClick}
      // onMouseDown={startPress}
      // onMouseUp={cancelPress}
      // onMouseLeave={cancelPress}
      // onTouchStart={startPress}
      // onTouchEnd={cancelPress}
      component={Paper}
      sx={tableContainerSx}>
        <Table sx={{ tableLayout: 'fixed' }}>
          <TableHead style={{ backgroundColor: '#13c8f5' }}>
            <TableRow>
              <TableCell sx={{ ...cellBaseSx, width: '25%' }}>
                <h2 style={{ margin: '0', textAlign: 'center' }}>Key Points</h2>
              </TableCell>
              <TableCell sx={{ ...cellBaseSx, width: '70%' }}>
                <table style={{ width: '100%', gap: 2, borderCollapse: 'separate', borderSpacing: '10px 0' }}>
<tbody><tr>

                <td style={{ padding: 0, border: 'none', alignContent: 'flex-start' }}> 
                <h2 style={{ margin: 0, padding: 0, textWrap: 'nowrap' }}>Title:
                </h2>
                </td>
                <td><span id='titleTitle'>{title}</span>
                </td></tr>
</tbody>
                </table>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* Main Body Row */}
            <TableRow sx={{ textWrap: 'wrap' }}>
              <TableCell
                sx={{
                  ...cellBaseSx,
                  lineHeight: '24px', 
                  height: 320,
                  paddingTop: 0.2,
                  borderRight: 'none',
                }}
              >
    {keyPoints && keyPoints.length > 0 ? (
                  <ul style={{
    justifySelf: 'anchor-center'
}}>
                    {keyPoints.map((point, idx) => (
                      <span key={`${id}-kp-${idx}`}>
                      <li><strong>{point}</strong></li>
                      <Divider />
                      </span>
                    ))}
                  </ul>
                ) : (
                  <p style={{ fontStyle: 'italic' }}>No key points added</p>
                )}
              </TableCell>
              <TableCell
                sx={{
                  ...linedCellSx,
                  paddingTop: 0.2,
                }}
              >
                {content}
              </TableCell>
            </TableRow>

            {/* Summary Row - colSpan makes it take the full width */}
            <TableRow>
              <TableCell
                colSpan={2}
                sx={{
                  ...summaryCellSx,
                  p: 0.7,
                  paddingLeft: 1.5,
                  lineHeight: '24px',
                }}
              >
                <h2 style={{ margin: 0, fontSize: '1rem' }}>Summary:</h2>
                {summary}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Stack
        direction="column"
        spacing={0.5}
        sx={{
          top: 0,
          right: '0',
          margin: 0,
          border: '2px solid rgba(224, 224, 224, 7)',
          boxShadow: '5',
        }}
      >
        <IconButton sx={{ p: 0, color: green[500] }}>
          <FileDownloadIcon onClick={handlePrint} />
        </IconButton>
        <Divider />
        <IconButton sx={{ p: 0, color: blue[500] }}>
          <AddPhotoAlternateIcon 
          onClick={handleDownloadImage} />
        </IconButton>
        <Divider />
        <IconButton sx={{ p: 0, color: orange[500] }} onClick={() => setIsEditMode(true)}>
          <EditIcon />
        </IconButton>
        <Divider />
        <IconButton sx={{ p: 0, color: red[500] }}>
          <DeleteIcon 
          onClick={handleDelete} />
        </IconButton>
      </Stack>

      <Dialog open={isEditMode} onClose={handleDialogClose} fullWidth maxWidth="sm" disableEscapeKeyDown>
        <DialogTitle>Edit Note</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
          <TextField
            label="Title"
            fullWidth
            value={editData.title}
            onChange={(e) => handleEditChange('title', e.target.value)}
          />
          <TextField
            label="Key Points (comma-separated)"
            fullWidth
            multiline
            rows={3}
            value={editData.keyPoints}
            onChange={(e) => handleEditChange('keyPoints', e.target.value)}
          />
          <TextField
            label="Content"
            fullWidth
            multiline
            rows={4}
            value={editData.content}
            onChange={(e) => handleEditChange('content', e.target.value)}
          />
          <TextField
            label="Summary"
            fullWidth
            multiline
            rows={3}
            value={editData.summary}
            onChange={(e) => handleEditChange('summary', e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelEdit} startIcon={<CancelIcon />}>
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} startIcon={<SaveIcon />} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
