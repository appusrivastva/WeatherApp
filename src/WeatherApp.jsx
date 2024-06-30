import React, { useState } from 'react'
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo]=useState({    city:"delhi",
    feelslike: 27.28,
    humidity: 47,
    temp: 27.05,
   tempMax: 27.05,
   tempMin: 27.05,
   weather: "haze"})

   let updateInfo=(result)=>{
    setWeatherInfo(result)
   }
  
  
  
  
    return (
    <div style={{textAlign:"center"}}>
        <h2>Weather App by Apoorva</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  )
}
