import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './style.module.css';
import cx from 'classnames';

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
   console.log("recovered",recovered);

  if(!confirmed){
    return(
      <div>Loading...</div>
    )
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent='center'>
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

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.recovered)}>

          <CardContent>
            <Typography color={'textSecondary'} gutterBottom >Recovered</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={recovered.value} duration={2.5} seperator={','} />
              </Typography>
              <Typography color={'textSecondary'}>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant={'body2'} >Number of Recovered Cases</Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.deaths)}>
          <CardContent>
            <Typography color={'textSecondary'} gutterBottom >Deaths</Typography>
            <Typography variant='h5'> 
              <CountUp start={0} end={deaths.value} duration={2.5} seperator={','} /></Typography>
            <Typography color={'textSecondary'}>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant={'body2'} >Number of Deaths Cases</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>


  )
}
export default Cards;