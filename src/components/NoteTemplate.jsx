import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';  
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { green, red } from '@mui/material/colors';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Stack from '@mui/material/Stack';


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
  backgroundColor: '#ffffff',
  backgroundImage: 'linear-gradient(#87CEEB 1px, transparent 1px)',
  backgroundAttachment: 'local',
  backgroundSize: '100% 24px',
};

export default function NoteTemplate ({ id, note, title, keyPoints, content, summary, showButton, handleSubmit, removeKeyPoint }) {
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
        //   ref={contentRef} 
          component={Paper} sx={tableContainerSx}>
            <Table sx={{ tableLayout: 'fixed' }}>
              <TableHead style={{ backgroundColor: '#13c8f5' }}>
                <TableRow>
                  <TableCell sx={{ ...cellBaseSx, width: '25%' }}>
                    <h3 style={{ margin: '0' }}>Key Points</h3>
                  </TableCell>
                  <TableCell sx={{ ...cellBaseSx, width: '70%' }}>
                    <h2 style={{ margin: 0, padding: 0 }}>
                      Title: <span> {title}</span>
                    </h2>
                  </TableCell>
                </TableRow>
              </TableHead>
    
              <TableBody>
                {/* Main Body Row */}
                <TableRow sx={{ textWrap: 'wrap' }}>
                  <TableCell
                    sx={{
                      ...cellBaseSx,
                      height: 320,
                      paddingTop: 0.2,
                      borderRight: 'none',
                    }}
                  >
                    {note.keyPoints.length > 0 && (
                              <List style={{maxWidth: 'none', padding: 0}}>
                                {note.keyPoints.map((point, idx) => (
                                  <ListItem sx={{ p: 0, m: 0 }} key={`kp-${idx}`}
    secondaryAction={
      <IconButton onClick={() => removeKeyPoint(idx)} edge="end" aria-label="delete">
        <ClearIcon fontSize='small' />
      </IconButton>
    }
  >
    <ListItemText primary={point}/>
  </ListItem>
  ))}
                                
</List>

                            )}
                    
        {/* {keyPoints && keyPoints.length > 0 ? (
                      <ul>
                        {keyPoints.map((point, idx) => (
                          <li key={`${id}-kp-${idx}`}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p style={{ fontStyle: 'italic' }}>No key points added</p>
                    )} */}
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
          {/* <Stack
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
            <IconButton sx={{ p: 0, color: red[500] }}>
              <DeleteIcon 
              onClick={handleDelete} />
            </IconButton>
          </Stack> */}
        </Box>
)
}