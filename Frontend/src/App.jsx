import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes,setJokes]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log('Error fetching jokes:',error);
    })
  })

  return (
    <>
    <h1>Backend connect to Frontend</h1>
    <p>{jokes.length}</p>

    {
      jokes.map((joke)=>{
        return(
        <div key={joke.id}>
          <h3>Q: {joke.question}</h3>
          <p>A: {joke.answer}</p>
        </div>
        )
      })
    }
  </>
  )
}

export default App
