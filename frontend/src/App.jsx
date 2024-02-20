import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [recod, setRecord] = useState([])

useEffect(()=>{
  axios.get('/api/naruto')
  .then((response)=>{
    setRecord(response.data)
  }).catch((err)=>{
    console.log(err)
  })
})
  return (
    <>
      <h1>Anime Record App</h1>
      <p>Record : {recod.length}</p>
      {
      recod.map((record)=>(
        <div key={record.name} >
        <p>{record.name}</p>
          <p>{record.mc}</p>
          <p>{record.discraption}</p>
          <p>{record.release_year}</p>
        </div>
    
      ))
      }  
    </>
  
  )
}

export default App
