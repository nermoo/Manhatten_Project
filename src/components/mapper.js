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
        margin:10
    }
})


const Mapper=(props)=>{
    const classes=useStyles();


    return(
        <Grid item container>
            <Grid item xs={12}>
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
        </Grid>
        </Grid>
        
        
    )
}


export default Mapper;

