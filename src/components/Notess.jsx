import React from "react";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ClearIcon from '@mui/icons-material/Clear';

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: '0',
  border: '0.05em solid',
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'left',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...((theme.applyStyles && theme.applyStyles('dark')) || {}),
}));

function Note({ id, title, keyPoints, content, summary, deleteNote }) {
  const handleDelete = (e) => {
    e.preventDefault();
    deleteNote(id);
  };

  return (
        <article className="note">

    <Paper>
      <Container>
        <Box
          sx={{
            bgcolor: '#cfe8fc',
            // maxWidth: '480px',
            width: '320px',
            // minHeight: '100%',
            border: '1px, solid',
          }}
        >
          <Grid container spacing={0} minHeight={'100%'}>
              <Grid size={4}>
                <Item
                  style={{
                    justifyItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ fontSize: '1.1rem', margin: '0' }}>🟃🟃🟃🟃🟃</span>
                  <h2 style={{ margin: '0' }}>Key Point</h2>
                </Item>
              </Grid>
              <Grid size={8}>
                <Item>
                  <h2 style={{ margin: '0' }}>Title: <span> {title}</span></h2>
                  <h4 style={{ margin: '0' }}>Introduction:</h4>
                </Item>
              </Grid>

            <Grid size={4}>
              <Item style={{ minHeight: '300px' }}>
                <h4 style={{ marginTop: 0 }}>Key Points</h4>
                {keyPoints && keyPoints.length > 0 ? (
                  <ul>
                    {keyPoints.map((point, idx) => (
                      <li key={`${id}-kp-${idx}`}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ fontStyle: 'italic' }}>No key points added</p>
                )}
              </Item>
            </Grid>
            <Grid size={8}>
              <Item style={{ minHeight: '300px' }}>
                {/* <textarea name="" id="" cols="36" rows="20"></textarea> */}
                <span> {content}</span>  
              </Item>
            </Grid>
            <Grid size={12}>
              <Item style={{ minHeight: '100px' }}>
                <h2 style={{ margin: '0' }}>Summary:</h2>
                <span
                  style={{ width: '100%' }}
                  name=""
                  id=""
                  // cols="55"
                  // rows="5"
                >{summary}</span>
              </Item>
            </Grid>
          </Grid>

        <button
          type="button"
          className="delete-button"
          onClick={handleDelete}
          aria-label="Delete note"
        >
          <ClearIcon />
        </button>
        </Box>
      </Container>
    </Paper>


    </article>
  );
}

Note.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string,
  keyPoints: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string,
  summary: PropTypes.string,
  deleteNote: PropTypes.func.isRequired,
};

Note.defaultProps = {
  title: '',
  keyPoints: [],
  content: '',
  summary: '',
};

export default Note;
