import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './style.module.css';
import cx from 'classnames';


const GenericCard = ({className,value,lastUpdate,cardTitle,cardsubtitle}) =>{
    return(
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card,className)}>
        <CardContent>
          <Typography color={'textSecondary'} gutterBottom >{cardTitle}</Typography>
          <Typography variant='h5'>
            <CountUp
             start={0}
             end={value}
             duration={2.5}
             separator={','}
          /></Typography>
          <Typography color={'textSecondary'}>{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant={'body2'} >{cardsubtitle}</Typography>

        </CardContent>
      </Grid>
    )
}

export default GenericCard;