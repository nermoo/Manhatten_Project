import React from 'react';
import  { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

const Content=(api)=>{

  const [cities, setItems] = useState([]);

  const API=api;
  console.log(API);

  
  useEffect(() => {
  //  setItems([]);  //clearing cities array.deleting previuos data from the array
    fetch(API)
      .then(res => res.json(console.log(res)))
      .then(
        (result) => {
          console.log(cities)
          setItems(cities => cities.concat(result));
          
        },
      )
  },[API]);

  console.log(cities)

    return (
        <ul>
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