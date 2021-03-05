import logo from './logo.svg';
import { Grid } from '@material-ui/core';
import './App.css';
import Content from './components/content';
import Searchbar from './components/searchbar';
import Navbar from './components/navbar';

function App() {
  return (
    <Grid container direction='column'>
      {/* methna thwa ekk dala navbar ek dann one  */}
      <Grid item container>
        <Grid item xs={1} sm={2}/>
        <Grid item xs={10} sm={8}>
          {/* //content ek enda one methenta */}
          <Searchbar/>
        </Grid>
        <Grid item xs={1} sm={2}/>
      </Grid>
    </Grid>
  );
}

export default App;