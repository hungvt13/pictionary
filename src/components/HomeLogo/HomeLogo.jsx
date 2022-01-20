import React from 'react';
import Paper from '@mui/material/Paper';

import HomeImg from '../../assets/home-img.jpg';

const HomeLogo = () => (
  <Paper variant="outlined" elevation={3} style={{ margin: '20px'}}>
    <img src={HomeImg} alt="" srcSet="" style={{ maxWidth: 'clamp(400px , 500px, 80vw)', height: 'auto' }}/>
  </Paper>
);

export default HomeLogo;
