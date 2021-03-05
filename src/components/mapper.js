import React from 'react';
import ReactDOM from 'react-dom';
import { TextField,
        Card,
        Button,
        Typography,
        CardActions,
        CardContent,
        Grid} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';


const useStyles=makeStyles({
    card:{
        margin:10,
        backgroundColor:"#f59042",

    }
})


const Mapper=(props)=>{
    const week=["Monday","Tuesday","Wendsday","Thursday","Friday","Saturday","Sunday"];
    var TD="";
    const today=new Date();
    const date=today.getDate();
    const time=today.getHours() + ":" + today.getMinutes()
    const day=week[date-1];
    if(today.getHours()<12){
        TD="AM"
    }else{
        TD="PM"
    }

    const classes=useStyles();


    return(
        <Grid item container>
            <Grid item xs={12}>
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h2">
                    {props.city},{props.country}
                </Typography>
                <Typography variant="h6" component="h2">
                    {day}, {time} {TD}
                </Typography>
                <Typography variant="h5" component="h2">
                    The temperature is {Math.round(props.temperature-273.15)}
                    //time eke ara 10 adu ewage issarahata 0 ena widihata hadanna one icons ara thynwa widihatama url ekn ganna one. stack overflow eke qustion eka thybba
                </Typography>

            </CardContent>
        </Card>
        </Grid>
        </Grid>
        
        
    )
}


export default Mapper;

