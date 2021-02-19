import React from 'react';
import  { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

const Content=(api)=>{

  const [cities, setItems] = useState([]);

  const API=api;
  console.log(API);
  

  // useEffect(()=>{
  //   cities=[];
  // })

  
  useEffect(() => {
    fetch(API)
      .then(res => res.json(console.log(res)))
      .then(
        (result) => {
          setItems(cities => cities.concat(result));
        },
      )
  },[API]);

  console.log(cities)
  // api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid={API key}

    return (
      // <ul>
      //   {cities.map(citi => (
      //     <li key={citi.city.id}>
      //       {citi.city.id} {citi.city.name}
      //       The wind speed is{citi.list[0].main.temp}
      //     </li>
      //   ))}
      // </ul>
      <h2>hello</h2>
    );
  }


export default Content;