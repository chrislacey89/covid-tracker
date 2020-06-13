import React from 'react';
import Grid from '@material-ui/core/Grid';

function About() {
  return (
    <>
      <h1 align="center">About</h1>
      <Grid container justify="center" spacing={0}>
        <Grid item xs={10}>
          <subtitle1>
            This is a simple React project designed to give a visual
            representation of how Covid-19 is effecting the world and the United
            State. It uses two differenct Covid-19 APIs and uses Chart.js to
            create the data visualizations.
          </subtitle1>
        </Grid>
      </Grid>
      <div />
    </>
  );
}

export default About;
