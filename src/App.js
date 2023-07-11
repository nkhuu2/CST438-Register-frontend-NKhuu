import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SchedList from './components/SchedList';
import Semester from './components/Semester';
import Home from './components/Home';
import Student from './components/Student';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/semester' component={Semester} />
        <Route path='/schedule' component={SchedList} />
        <Route path='/student' component={Student} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;