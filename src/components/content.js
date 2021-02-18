import React from 'react';
import  { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

const Content=(api)=>{

  const [cities, setItems] = useState([]);
  console.log(api);
  

  // useEffect(()=>{
  //   cities=[];
  // })

  
  useEffect((api) => {
    fetch(`${api}`)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(cities => cities.concat(result));
        },
      )
  });

  console.log(cities);

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