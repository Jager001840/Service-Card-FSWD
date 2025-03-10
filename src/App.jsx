import React from 'react'
import './App.css'
import ServiceCard from './Components/ServiceCard.jsx'

function App() {

   const data = [
    {
      name: "Mark Johnson",
      review: "This service was amazing! Highly recommended."
    },
    {
      name: "Tailor Vivian",
      review: "This service was okayish, would recommend if in the area."
    },
    {
      name: "Vaasu Saini",
      review: "This service was not a pleasant experience for me"
    },
    {
      name: "John Dee",
      review: "This service was the worst thing happened to me"
    },

   ]
  return (
    <>
    <div id='WholeGrid'>
      {data.map((item,index)=>(
        <ServiceCard key= {index}{...item} />
      ))}
    </div>
    </>
  )
}

export default App