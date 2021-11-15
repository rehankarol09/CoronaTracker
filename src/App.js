import React from "react";
import { Cards, Country, Chart } from './Components/index';
import styles from './App.module.css';
import { fetchData } from './api/index';
import images from './Images/image.png';

class App extends React.Component {

    state = {
        data: {},
        country:''
    }

    async componentDidMount() {
        const fetchdata = await fetchData();

        this.setState({data:fetchdata}); 
    }

    handleCountries = async (country)=>{
          //console.log(country)

          const fetchapi = await fetchData(country);
          this.setState({data:fetchapi,country:country})

    }

    render() {

        const {data,country}=this.state;
        return (
            <>
                <div className={styles.container}>
                    <img src={images} alt='' className={styles.image}/>
                    <Cards data={data}/>
                    <Country handleCountries={this.handleCountries} />
                    <Chart data={data} country={country}/>
                </div>
            </>
        )
    }
}

export default App;