import React, { Component} from 'react';


componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
        const lat=position.coords.latitiude;
        const long=position.coords.longitude;
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  };


const location=(lat,long)=>{

    return(
        <div>
        
        <h2>{lat}</h2>
        <h2>{long}</h2>
        </div>
        
    );
}

export default location;