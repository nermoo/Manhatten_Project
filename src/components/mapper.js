import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect,useState } from 'react';



const Mapper=(props)=>{

    const name =props.city

    useEffect(()=>{
        
    

    },[])


    // if(Object.keys(mappedObj)===undefined){
    //     return (
    //         <h2>hello bois this means the object is not empty</h2>
    //     )
    // }
    // else{
    //     return (
    //         <h2>yo im empty</h2>
    //     )
    // }
    return(
        <div>
            <h1>hello</h1>
            <h1>{name}</h1>
              //content eke map krla, map krna gamanma mapper eka call kranda hadamu
               ethkota array eke thynne eka object ekk nisa map eka run wenne eka parai.object ekk eliyata ganne 
               nathi nisa wadi aulk yna ekk na.mkda array ek kohomath thynwane. ethkota ara mapper eke thyna function eka mekata(content) gnda one
               eke mapper call krnkota wena wenama props call krnam mekata props widihata aragena nikamna return eke call krnda puluwan
        </div>
        
    )
}


export default Mapper;

