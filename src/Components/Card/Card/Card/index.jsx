import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './style.module.css';
import cx from 'classnames';


const Card = () =>{
    return(
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.infected)}>
        <CardContent>
          <Typography color={'textSecondary'} gutterBottom >Infected</Typography>
          <Typography variant='h5'>
            <CountUp
             start={0}
             end={confirmed.value}
             duration={2.5}
             separator={','}
          /></Typography>
          <Typography color={'textSecondary'}>{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant={'body2'} >Number of Active Cases</Typography>

        </CardContent>
      </Grid>
    )
}