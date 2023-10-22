import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import './MainPage.css';

function AlgoBox() {
  const customFontStyle = {
    fontFamily: 'cursive, "Comic Sans MS", sans-serif', // Change to your desired font
    fontSize: '50px', // Change to your desired font size
    color: 'purple',

  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40vh',
      }}
    >
      <Typography variant="h3" gutterBottom>
        🤖 Enter the URL:
      </Typography>

      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField className="inputURL glow"
          variant="standard"
          size="large"
          InputProps={{
            style: {
              ...customFontStyle, 
              width: '100%', 
            },
          }}
        />

    <Button
     variant="contained"
     color="secondary"
     style={{ marginTop: '20px', fontSize: '1.25rem', padding: '15px 40px' }}
    >
    ANALYZE
    </Button>

      </form>
    </Container>
  );
}

export default AlgoBox;
