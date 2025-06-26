import { useState, useEffect } from 'react'
import './App.css'
import Card from './Components/Card'
import Header from './Components/Header'
import Hero from './Components/Hero'
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    getData()
  },[])

  function getData(){
    axios.get('https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population')
    .then(resp=>{
      console.log(resp.data[0])
      setCountries(resp.data.slice(1,6))
    })
  }

  const countryList = countries.map((country, index)=> (
    <Card key={index} country= {country} />
  ))

  return (
    <>
     <Header />
     <Hero />
     <div>
     {countryList}
     </div>
   
    </>
  )
}

export default App
