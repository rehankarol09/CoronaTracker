import React from 'react';
import { Grid} from '@material-ui/core';
import styles from './style.module.css';
import GenericCard from './Card/index';


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
         <GenericCard
         className={styles.infected}
         value={confirmed.value}
         lastUpdate={lastUpdate}
         cardTitle='Infected'
         cardsubtitle='Active Infected Cases'
         />
         <GenericCard
         className={styles.recovered}
         value={recovered.value}
         lastUpdate={lastUpdate}
         cardTitle='Recovered'
         cardsubtitle='Recovered Cases'
         />

         <GenericCard
         className={styles.deaths}
         value={deaths.value}
         lastUpdate={lastUpdate}
         cardTitle='Deaths'
         cardsubtitle='Total Deaths'
         />

      </Grid>
    </div>


  )
}
export default Cards;