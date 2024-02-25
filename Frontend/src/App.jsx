import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
      axios.get('/api/quotes').then((response)=>{
        setQuotes(response.data)
      }).catch((error)=>{
        console.log("Error is", error);
      })
  }, [])
  

return (
  <>
  <h1>Quotes are here</h1>
  <p>{quotes.length}</p>


  {
    quotes.map((quote,index)=>(
      <div key = {quote.id}>
        <h2>{quote.title}</h2>
        <p>{quote.text}</p>
      </div>

    ))
  }
  </>
  
  
)
}

export default App
