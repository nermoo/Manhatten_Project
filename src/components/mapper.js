import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect,useState } from 'react';



const Mapper=(props)=>{

    const currentCity=props.cities;
    const [mappedObj,setmappedObj]=useState({ });

    useEffect(()=>{
        const mapped=currentCity.map(weatherDataMapper);
        setmappedObj(mapped[0]);
        // console.log(mapped);
        console.log(mappedObj.city);
        console.log("ok");

    },[])


    return (
        <ul>
            <li>yo wassup</li>
            <li>{mappedObj.city}</li>
        </ul>
    );

}


export default Mapper;

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