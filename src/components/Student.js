import React, { Component } from 'react';
import Button from '@mui/material/Button';
import {SERVER_URL} from '../constants.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddStudent from './AddStudent';


//
class Student extends Component {
    constructor(props) {
      super(props);
      this.state = { student: [] };
    } 
    
    // Add student
    addStudent = (student) => {
        const token = Cookies.get('XSRF-TOKEN');
 
        fetch(`${SERVER_URL}/student/add`,
        { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json',
                   'X-XSRF-TOKEN': token  }, 
            body: JSON.stringify(student)
        })
        .then(res => {
        if (res.ok) {
          toast.success("Student successfully added", {
              position: toast.POSITION.BOTTOM_LEFT
          });
        } else {
          toast.error("Error when adding student", {
              position: toast.POSITION.BOTTOM_LEFT
          });
          console.error('Post http status =' + res.status);
        }})
        .catch(err => {
        toast.error("Error when adding student", {
            position: toast.POSITION.BOTTOM_LEFT
        });
        console.error(err);
    })
  } 

    render () {   
    
        return ( 
        <div>
            <AppBar position="static" color="default">
                <Toolbar style={{ justifyContent: 'center' }}>
                    <Typography variant="h6" color="inherit">
                        Student Menu
                    </Typography>
                </Toolbar>
            </AppBar>
            <Button>
                <AddStudent addStudent={this.addStudent}  />
	        </Button>
            <ToastContainer autoClose={1500} />   
        </div>
       );
    }
}

export default Student;