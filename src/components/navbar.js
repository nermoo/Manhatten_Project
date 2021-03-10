import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Searchbar from './searchbar';
import { WiSunrise } from "weather-icons-react";
import { useState,useEffect} from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position:"sticky",
    backgroundColor:"#f59042",
    color:"black"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  Switch:{
      float:"right",
      '$$checked':{
        color:"black",
        boxColor:"black"
      },
      '&$checked + $track': {
        backgroundColor: "black",
      },
      
  },
  brand:{
      flexGrow:1,
      fontSize:23
  }
}));

export default function MenuAppBar() {
    const classes=useStyles();
    const [temp,setTemp]=useState(false);
    var tempsi="";

    const tempHandler=()=>{
      setTemp((prev)=>!(prev))
    }

    useEffect(()=>{
      if(temp==false){
        tempsi="C";
      }else{
        tempsi="F";
      }
      console.log(tempsi);
    },[temp])
    return(
        <div>

            <AppBar className={classes.root}>
                <Toolbar>
                    <Typography 
                    className={classes.brand}>weather SL
                    <WiSunrise size={24} color='#000' />
                    </Typography>
                    <FormControlLabel 
                    className={classes.switch}
                    control={<Switch checked={temp} onChange={tempHandler} />}
                    label="&deg;C/&deg;F"
                    />
                </Toolbar>
                
            </AppBar>

        </div>
    )
}