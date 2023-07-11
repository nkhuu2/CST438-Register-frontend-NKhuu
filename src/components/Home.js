import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

//Homepage that has student and semester menu
const Home = () => {
    return (
        <div>
            <AppBar position="static" color="default">
                <Toolbar style={{ justifyContent: 'center' }}>
                <Typography variant="h6" color="inherit">
                    Homepage
                </Typography>
                </Toolbar>
            </AppBar>
            <br />
            <nav>
                <Button variant="contained" color="primary" component={Link} to="/student">
                Student Menu
                </Button>
                <br /><br />
                <Button variant="contained" color="primary" component={Link} to="/semester">
                Semester Menu
                </Button>
            </nav>
        </div>
    );
};

export default Home;
