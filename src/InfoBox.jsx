import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({info}) {
  const INIT_URL=
  "https://images.unsplash.com/photo-1693711836001-99859bb7185a?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

 const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"

 const HOT_URL="https://unsplash.com/photos/a-woman-drinking-water-from-a-bottle-A05bPJ3ntHY"

 const RAINY_URL="https://images.unsplash.com/photo-1536329978773-2f8ac431f330?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

 
  
  
  
  
  
  
  
    return (
    <div className='infoBox'>
        
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAINY_URL:(info.temp>15?HOT_URL:COLD_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min_Temp:{info.tempMin}</p>
         <p>Max_Temp:{info.tempMax}</p>
         <p>The weather can be describe as <i>{info.weather}</i> and feels like:{info.feelslike}</p>

        </Typography>
      </CardContent>
  
    </Card>
</div>
      
    </div>
  )
}
