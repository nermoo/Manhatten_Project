import React,{ useState } from 'react';
import Cities from './citylist';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Content from './content';


const SearchBar=()=>{

  const [city,setcity]=useState("");
  const [api,setapi]=useState(``);
  
 

    const apiFtecher = e => {
      const city =(e.target.value);
      console.log(city);
      return (
       setapi(`http://api.openweathermap.org/data/2.5/forecast?q=${city},LK&mode=json&appid=5c4420d5c8a61c16e5ee37e4ca265763`)
       );
     }

     Content(api);
  

  
//try to get the geo location and show weather forcast of the current location. that will be easy.
//first we have to get the coordinates of the current location to the application
//and then make the api call 



    return (
        <div style={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={Cities.map((option) => option.name)} 
        renderInput={(params) => (
          <TextField
            {...params}
            label="city"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
            // onChange={apiFtecher}
            onBlur={apiFtecher}
          />
        )}
      />
    </div>
    );

}

export default SearchBar;