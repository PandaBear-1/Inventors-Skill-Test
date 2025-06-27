import CardRow from "./CardRow"
import { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios';

function Body() {

 const [countries, setCountries] = useState([])
 const [searchResult, setSearchResult ] = useState('')
 const [selectedRegion, setSelectedRegion] = useState('')

  useEffect(()=>{
    getData()
  },[])

  function getData(){
    axios.get('https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population')
    .then(resp=>{
      setCountries(resp.data)
    })
  }

 const filteredCountries = countries.filter((country) => {
      const matchesName = country.name.official.toLowerCase().includes(searchResult.toLowerCase())
      const matchesRegion = selectedRegion == '' || country.region == selectedRegion

  return matchesName && matchesRegion;
})



  function handleChange(event) {
    setSearchResult(event.currentTarget.value)
}



  return (
    <div className="bg-[#1F1C2C]  " >

        <label className="block w-full md:w-1/2 mb-4 pt-4 pl-10">
            <span className="text-white text-sm mb-1 block">Filter by Region</span>
            <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">All Regions</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Antarctic">Antarctic</option>
            </select>
        </label>

        <label className="block w-full md:w-1/2 mb-4 pt-10 pl-10">
            <span className="text-white text-sm mb-1 block">Where are you from?</span>
            <input
                type="text"
                placeholder="Enter your country"
                name="text"
                onChange={handleChange}
                value={searchResult.text}
                className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </label>



        <CardRow showButtons = {false} >
           {searchResult && <div>
             <h2 className=" text-4xl pl-10" >Search Result</h2>
            {filteredCountries.length > 0 ?
            (filteredCountries
            .map((country, index) => <Card key = {index} country = {country}/> ))
            : (
                <p className="text-white text-center mt-10 text-lg pl-10">
                  No countries match your search in the selected region.
                </p>
              )
            }
            </div>}
        </CardRow> 

      <CardRow >
          { countries.map((country, index)=> index <= 10 && (
          <Card key={index} country= {country} />
      ))}
      </CardRow>

      <CardRow> 
          { countries.map((country, index)=> index > 10 && index <= 20 && (
              <Card key={index} country= {country} />
          ))}
      </CardRow>

      <CardRow>
      { countries.map((country, index)=> index > 20 && index <= 30 && (
          <Card key={index} country= {country} />
      ))}
      </CardRow> 

      <CardRow>
      { countries.map((country, index)=> index > 30 && index <= 40 && (
          <Card key={index} country= {country} />
      ))}
      </CardRow> 

    </div>
  )
}

export default Body