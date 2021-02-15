import React from 'react';
import  { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

const Content=()=>{

  const [cities, setItems] = useState([]);
//   const [city,setcity]=useState()

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=Kurunegala,LK&mode=json&appid=5c4420d5c8a61c16e5ee37e4ca265763")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(cities => cities.concat(result));
        },
      )
  },[]);
  console.log ();

    return (
      <ul>
        {cities.map(citi => (
          <li key={citi.city.id}>
            {citi.city.id} {citi.city.name}
            The wind speed is{citi.list[0].main.temp}
          </li>
        ))}
      </ul>
    );
  }


export default Content;