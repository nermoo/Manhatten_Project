import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { WiSunrise } from "weather-icons-react";
import { useDispatch } from 'react-redux';
import { tempSw} from '../actions';


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
        backgroundColor: "black", //this need to be improved.
      },
      
  },
  brand:{
      flexGrow:1,
      fontSize:23
  }
}));

export default function MenuAppBar() {

    const dispatch= useDispatch();
    const classes=useStyles();

  //-------these are commented out because the job is done by the redux.-----

    // const [temp,setTemp]=useState(false);
    // var tempsi="";
    // const tempHandler=()=>{
    //   setTemp((prev)=>!(prev))
    // }

    // useEffect(()=>{
    //   if(temp===false){
    //     tempsi="C";
    //   }else{
    //     tempsi="F";
    //   }
    //   console.log(tempsi);
    // },[temp])



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
                    control={<Switch onChange={()=>dispatch(tempSw())} />} //dispatch an request for the redux store to change the value of the tempsw
                    label="&deg;C/&deg;F"
                    />
                </Toolbar>
                
            </AppBar>

        </div>
    )
}