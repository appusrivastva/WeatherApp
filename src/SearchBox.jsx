import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css'
export default function SearchBox({updateInfo}) {
   // const API_KEY="1031e82180981b48e6b9fba105594774"
   const API_KEY="5979b2493850a4b22d6193eca41f602b";
   const API_URL="https://api.openweathermap.org/data/2.5/weather";
 

   let [city,setCity]=useState("");
   let [error,setError]=useState(false)
 let handleChange=(e)=>{
    setCity(e.target.value)

 }
 let handleSubmit=async (e)=>{
      try{
        e.preventDefault();
        console.log(city)
        setCity("");
        let newInfo=await getWeatherInfo()
        updateInfo(newInfo)
      }
      catch(err){
        setError(true)
        
      }
 }

 
 let getWeatherInfo=async()=>{
    try{
      let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      let jsonres=await response.json()
      console.log(jsonres)
      let result={
        city:city,
       temp:jsonres.main.temp,
       tempMin:jsonres.main.temp_min,
       tempMax:jsonres.main.temp_max,
       humidity:jsonres.main.humidity,
       weather:jsonres.weather[0].description,
       feelslike:jsonres.main.feels_like
    
      }
     
      console.log(result)
      return result;
    }
    catch(err){
      throw err;
    }
}
 
 
 
 
 
 
 
 
 
 
    return (
    <div className='box'>
     
        <form onSubmit={handleSubmit}>
        <TextField id="city" onChange={handleChange} value={city} label="City Name" variant="outlined" required/>
        <br /><br />
        <Button variant="contained" type='submit'>Search</Button>
        {error && <p style={{color:"red"}}>no such place exist!</p>}
        </form>
    </div>
  )
}
