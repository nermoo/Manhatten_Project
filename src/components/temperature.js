import React from 'react';
import { useSelector } from 'react-redux';


const Temperature=(props)=>{
    //araken ganna update krana state eka methnat aran eka methnadi condition ekkin check krla output eke decide krnda 
    const temp=props.temp;
    const buttonState= useSelector(state=>state.tempSwitch);
    var unit="";
    if(buttonState==false){
        unit="C";
        return (
            <div>
                {Math.round(temp-273.15)}&deg;{unit}
            </div>
        )
    }else{
        unit="F"
        return(
            <div>
                {Math.round((temp-273.15) * 9/5 + 32)}&deg;{unit}
            </div>
        )
    }
}

export default Temperature;