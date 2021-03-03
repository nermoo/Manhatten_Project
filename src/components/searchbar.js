import React,{ useState,useEffect } from 'react';
import Cities from './citylist';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Content from './content';
import SearchIcon from '@material-ui/icons/Search';


const SearchBar=()=>{

  const [city,setcity]=useState("Kurunegala");
  const [apii,setapi]=useState(``);
  
 

    const apiFtecher = e => {
      setcity(e.target.value);
      console.log(city);
     }

  console.log(apii);

  useEffect(()=>{
    setapi(`http://api.openweathermap.org/data/2.5/forecast?q=${city},LK&mode=json&appid=5c4420d5c8a61c16e5ee37e4ca265763`)
  },[city])

    return (
        <div style={{ width: 300 }}>
      <Autocomplete
        id="free-solo-2-demo"
        disableClearable
        options={Cities.map((option) => option.name)} 
        renderInput={(params) => (
          <div
          display="flex"
          position="relative"
          >
          <TextField
            id="standard-basic" 
            {...params}
            label="city"
            margin="normal"
            InputProps={{ ...params.InputProps, type: 'search' }}
            // onChange={apiFtecher}
            onBlur={apiFtecher}
          />
          <SearchIcon/>
      </div>
          
        )}
      />
      
        <Content api={apii}/>
    </div>
    );

}

export default SearchBar;