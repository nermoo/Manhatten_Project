import React from 'react';
import  { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

const Content=(props)=>{

  const [cities, setItems] = useState([]);

  // const API=api;
  const appi=props.api;
  console.log(props.api);
  console.log(cities)

  useEffect(() => {
    if (appi) {
      (async () => {
        try {
          const response = await fetch(appi);
          var result=[];
          result = await response.json();
          cities.shift();                               //clearing the cities array before insert new items
          const updatedCities =cities.concat(result)
          setItems(updatedCities);
          cities.map(weatherDataMapper);
        } catch(err) {
          console.error(err);
        }
      })();
    }
  }, [appi]);  //map all and assign icons.


    return (
        <ul>
        {cities.map(citi => (
          <li key={citi.city.id}>  
            The city id is  {citi.city.id}   
            The city name is  {citi.city.name}   
            The temparature is {(citi.list[0].main.temp-273.15).toFixed(2)}
          </li>
        ))}
      </ul>
  
      
    )
  }


export default Content;


function weatherDataMapper(data){

  const general={
    city:data.city.name,
    country:data.city.country,
    temperature:Math.round(data.list[0].main.temp),
    description:data.list[0].weather[0].description,
    humidity:data.list[0].main.humidity,
    icon:data.list[0].weather[0].icon,
    windSpeed:Math.round(data.list[0].wind.speed*3.6),
    feelsLike:Math.round(data.list[0].main.feels_like),


    
  }


  return general;
}