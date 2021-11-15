import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeurl = url;

    if (country) {
        changeurl = `${url}/countries/${country}`
    }

    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeurl);
        const modifieddata = {confirmed,recovered,deaths,lastUpdate};

        return modifieddata;

    }
    catch (error) {
        console.log(error)
    }
}

export const fetchdailydata = async () =>{
    try{

        const {data} =  await axios.get(`${url}/daily`);
        const modifieddata = data.map((dailydata,index)=>({
            confirmed:dailydata.confirmed.total,
            deaths:dailydata.deaths.total,
            date:dailydata.reportDate
        }))

        return modifieddata;
        //console.log(modifieddata)
    }
    catch(err){

    }
}

export const fetchCountriesdata =async () =>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`);
        
        return countries.map((country)=>country.name);
        
    }
    catch(err)
    {
        console.log(err);
    }
   
}

