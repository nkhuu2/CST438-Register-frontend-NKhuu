import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// function called when add student is clicked
class AddStudent extends Component {
      constructor(props) {
      super(props);
      this.state = {open: false, student:{ }};
    };
    
    handleClickOpen = () => {
      this.setState( {open:true} );
    };

    handleClose = () => {
      this.setState( {open:false} );
    };

    handleChangeName = (event) => {
      this.setState({student:{studentName: event.target.value}});
    }

    handleChangeEmail = (event) => {
        this.setState({ student: { ...this.state.student, studentEmail: event.target.value } });
      };
      

      handleAdd = () => {
        const { studentName, studentEmail } = this.state.student;
        this.props.addStudent({ name: studentName, email: studentEmail });
        this.handleClose();
      };

    render()  { 
      return (
          <div>
            <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
              Add Student
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Add Student</DialogTitle>
                <DialogContent  style={{paddingTop: 20}} >
                  <TextField autoFocus fullWidth label="Student Name" name="name" onChange={this.handleChangeName}  /> 
                  <TextField fullWidth label="Student Email" name="email" onChange={this.handleChangeEmail}  /> 
                </DialogContent>
                <DialogActions>
                  <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                  <Button id="Add" color="primary" onClick={this.handleAdd}>Add</Button>
                </DialogActions>
              </Dialog>      
          </div>
      ); 
    }
}

// required property:  addCourse is a function to call to perform the Add action
AddStudent.propTypes = {
  addStudent : PropTypes.func.isRequired
}

export default AddStudent;