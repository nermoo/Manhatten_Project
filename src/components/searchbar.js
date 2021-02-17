import React,{ useState } from 'react';
import Cities from './citylist';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Content from './content';


const SearchBar=()=>{

  const [city,setcity]=useState("");
  const [api,setapi]=useState(`http://api.openweathermap.org/data/2.5/forecast?q=Kurunegala,LK&mode=json&appid=5c4420d5c8a61c16e5ee37e4ca265763`)
  console.log(city);

  Content(city);

  const apiFtecher=()=>{
    return (
      setapi(`http://api.openweathermap.org/data/2.5/forecast?q=${city},LK&mode=json&appid=5c4420d5c8a61c16e5ee37e4ca265763`)
    );
  }

  




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
            onChange={e=>setcity(e.target.value)}
            onBlur={e=>setcity(e.target.value)}
          />
        )}
      />
    </div>
    );

}

export default SearchBar;