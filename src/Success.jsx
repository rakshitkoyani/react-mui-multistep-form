import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import LinearStepper from './LinearStepper';
import GetStepContent from './LinearStepper';
import userEvent from '@testing-library/user-event';
function Success({email,name}) {
  // const {
  //   values: { firstName }
  // } 
  const firstName = "roasdf";
// const email=user.email
  return (
    
    <>
    <h1>Data added successfully</h1>
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="FirstName" />
                <ListItemText  secondary={firstName} /><hr />
              </ListItem>
              <ListItem>
                <ListItemText primary="MiddleName" />
                <ListItemText  secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="LastName" />
                <ListItemText  secondary={firstName} /><hr />
              </ListItem>
              <ListItem>
                <ListItemText primary="MobileNo" />
                <ListItemText  secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" />
                <ListItemText  secondary={email} /><hr />
              </ListItem>
              <ListItem>
                <ListItemText primary="Birthday" />
                <ListItemText  secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Age" />
                <ListItemText  secondary={firstName} /><hr />
              </ListItem>
              <ListItem>
                <ListItemText primary="BloodGroup" />
                <ListItemText  secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Height" />
                <ListItemText  secondary={firstName} /><hr />
              </ListItem>
              <ListItem>
                <ListItemText primary="Weight" />
                <ListItemText  secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Gender" />
                <ListItemText  secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="MaritalStatus" />
                <ListItemText  secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="AddressLine1" />
                <ListItemText  secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="AddressLine2" />
                <ListItemText  secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" />
                <ListItemText  secondary={firstName} /><hr />
              </ListItem>
              <ListItem>
                <ListItemText primary="State" />
                <ListItemText  secondary={firstName} /><hr />
              </ListItem>
              <ListItem>
                <ListItemText primary="Country" />
                <ListItemText  secondary={firstName} /><hr />
              </ListItem>
              <ListItem>
                <ListItemText primary="PinCOde" />
                <ListItemText  secondary={firstName} /><hr />
              </ListItem>
              </List>
    </>
  )
}

export default Success