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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position:"sticky",
    backgroundColor:"#ffffff",
    color:"black"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  switch:{
      float:"right",
      
  },
  brand:{
      flexGrow:1,
  }
}));

export default function MenuAppBar() {
    const classes=useStyles();

    return(
        <div>

            <AppBar className={classes.root}>
                <Toolbar>
                    <Typography 
                    className={classes.brand}>Nermo's weather App
                    </Typography>
                    <FormControlLabel 
                    className={classes.switch}
                    control={<Switch  name="checkedA" />}
                    label="&deg;C/&deg;F"
                    />
                </Toolbar>
                
            </AppBar>

        </div>
    )
}