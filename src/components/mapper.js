import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect,useState } from 'react';
import { TextField,
        Card,
        Button,
        Typography,
        CardActions,
        CardContent,} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';


const useStyles=makeStyles({
    card:{
        margin:10,
        width:"max-content"
    }
})


const Mapper=(props)=>{
    const classes=useStyles();


    return(
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h2">
                    {props.city},{props.country}
                </Typography>
                <Typography variant="h5" component="h2">
                    The temperature is {props.temperature}
                </Typography>

            </CardContent>
        </Card>
        
        
    )
}


export default Mapper;

