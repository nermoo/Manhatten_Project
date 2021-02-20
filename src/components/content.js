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
          const result = await response.json();
          const updatedCities = cities.concat(result);
          setItems(updatedCities);
        } catch(err) {
          console.error(err);
        }
      })();
    }
  }, [appi]);


    return (
        <ul>
          <h4>hello</h4>
        {cities.map(citi => (
          <li key={citi.city.id}>
            The city is is{citi.city.id} 
            The city name is{citi.city.name}
            The temparature is {citi.list[0].main.temp}
          </li>
        ))}
      </ul>
  
      
    )
  }


export default Content;