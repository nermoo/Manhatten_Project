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
          cities.shift();
          const updatedCities =cities.concat(result)
          setItems(updatedCities);
        } catch(err) {
          console.error(err);
        }
      })();
    }
  }, [appi]);


    return (
        <ul>
        {cities.map(citi => (
          <li key={citi.city.id}>  
            The city id is  {citi.city.id}   
            The city name is  {citi.city.name}   
            The temparature is {citi.list[0].main.temp}
          </li>
        ))}
      </ul>
  
      
    )
  }


export default Content;