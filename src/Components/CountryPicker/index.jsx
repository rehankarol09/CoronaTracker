import React, { useEffect, useState } from 'react'
import { fetchCountriesdata } from '../../api';
import {FormControl, NativeSelect} from '@material-ui/core'
import styles from './style.module.css';


const Country  = ({handleCountries}) => {

  const [countriesdata,setCountriesdata] = useState([]);

  useEffect(()=>{

    const fetchapi =  async ()=>{
      setCountriesdata(await fetchCountriesdata());
    }

    fetchapi();
  },
  [setCountriesdata]);

  //console.log(countriesdata);

  return(
    <div>
        <FormControl className={styles.FormControl}>
          <NativeSelect defaultValue='' 
          onChange={(e)=>(handleCountries(e.target.value))}
          >
            <option value=''>Global</option>
            {
              countriesdata?
              countriesdata.map((country,index)=>(
                <option value={country} key={index}>{country}</option>
              )):null
            }
          </NativeSelect>
        </FormControl>
    </div>
   )
  }
  export default Country;