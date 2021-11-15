import { useEffect, useState } from "react"
import React from 'react';
import { fetchdailydata } from "../../api";
import {Line,Bar} from 'react-chartjs-2';
import styles from './style.module.css';

/**
* @author
* @function Chart
**/

export const Chart = ({data:{confirmed,recovered,deaths},country}) => {

  const [dailydata,setDailyData] = useState([]);

  useEffect(()=>{
   const fetchapi = async ()=>{
       setDailyData(await fetchdailydata());
   }

   fetchapi();

  },[])



  const barchart = (
    confirmed?
    (
      <Bar
           data={{
             labels:['Infected','Recovered','Deaths'],
             datasets:[{
               label:'People',
               backgroundColor:[
                 'rgba(255,0,0,0.5)',
                 'rgba(0,255,0,0.5)',
                 'rgba(0,0,255,0.5)'
               ],
               data:[confirmed.value,recovered.value,deaths.value]
             }]
           }}

           options={{
             legend:{display:false},
             title:{display:true,text:`Current state in ${country}`}
           }}
      />
    ):null
  )




  const linechart = (
    dailydata ?
      (<Line
        data={{
          labels: dailydata.map(({ date }) => date),
          datasets:[{
              data:dailydata.map(({confirmed})=>confirmed),
              label:'Infected',
              fill:true,
              borderColor:'#3333ff'
          }, {
            data:dailydata.map(({deaths})=>deaths),
              label:'Deaths',
              fill:true,
              borderColor:'red',
              backgroundColor:'rgba(255,0,0,0.5)'
          }],

        }}


      />)
      : null
  )


  return(
    <div className={styles.container}>
      {country?barchart:linechart}
    </div>
   )
  }

  export default Chart;