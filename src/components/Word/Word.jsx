import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// eslint-disable-next-line no-unused-vars
const Word = ({ word, translate }) => (
  <Paper variant="outlined" style={{ marginBottom: '20px' }}>
    <Grid 
      container 
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ margin: '10px 20px', padding: '20px 0px', width: 'clamp(380px , 480px, 80vw)', minHeight: '40vh' }}
    >
      <Grid item xs={12} style={{ marginBottom: '20px' }}>
        <Typography variant="h3" >
          {word}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={word ? 'h4' : 'h3'} >
          {translate}
        </Typography>
      </Grid>
    </Grid>
  </Paper>
);

Word.propTypes = {
  word: PropTypes.string,
  translate: PropTypes.string,
};

export default Word;
