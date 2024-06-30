
// import './App.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert';
import WeatherApp from './WeatherApp';
import bgvideo from "./assets/bgvideo.mp4";


function App() {
  // let handleclick=()=>{
  //   console.log("button is clicked")
  // }
  return (
    <div >
        <div style={{ position: "relative", height: "100%" }}>
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            objectFit: "cover",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <source src={bgvideo} type="video/mp4" />
        </video>
        <div style={{ 
          position: "absolute", 
          top: "0", 
          left: "0", 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center" 
        }}>
          <WeatherApp />
        </div>
      </div>
    



    {/* <h1>Material Ui design</h1>
    <Button variant='outlined' size='medium'>Outline btn</Button>
    <Button variant='contained' onClick={handleclick} size='large'>Click me</Button>
    <Button variant='contained' color='error' size='small'>error</Button>
    <Button variant='contained' disabled>disabled</Button> */}

    {/* delete icon  */}
    {/* <Button variant='contained' startIcon={<DeleteIcon/>}>Delete</Button> */}
    {/* <Alert severity="error">delete option is here</Alert> */}
      </div>
  )
}

export default App
