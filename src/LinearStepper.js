import React, { useState } from "react";
import Success from "./Success.jsx";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import { List, ListItem, ListItemText } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

const bGroup = [
  {
    value: 'O positive',
    label: 'O+',
  },
  {
    value: 'A positive',
    label: 'A+',
  },
  {
    value: 'B positive',
    label: 'B+',
  },
  {
    value: 'AB positive',
    label: 'AB+',
  },
]
//header step-nav
function getSteps() {
  return [
    "USER INFORMATION",
    "ADDRESS DETAILS",
    "Thank You",
  ];
}

//get data from user
export function GetStepContent(step) {

  const [user, setUser] =useState({
    firstName:"",lastName:"",middleName:"",
    email:"",age:"",height:"",gender:"",mobileNo:"",birthday:"",bGroup:"",
    weight:"",mStatus:"",address1:"",city:"",country:"",address2:"",state:"",pincode:"",

  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name= e.target.name;
    value= e.target.value;
    setUser({...user, [name]:value});

  }


  switch (step) {
    case 0:
      return (
        <>
          <Grid container spacing={2}>
            <Grid item md={6}>
            <TextField
            id="first-name"
            label="First Name"
            value={user.firstName}
            onChange={handleInputs}
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            name="firstName"
          />
            <TextField
              id="last-name"
              label="Last Name"
              variant="outlined"
              placeholder="Enter Your Last Name"
              fullWidth
              margin="normal"
              name="lastName"
              value={user.lastName}
            onChange={handleInputs}
            />
            <TextField
            id="email"
            label="Email"
            value={user.email}
            onChange={handleInputs}
            variant="outlined"
            placeholder="Email is a required field"
            fullWidth
            margin="normal"
            name="email"
          />
          <TextField
            id="age"
            label="Age"
            variant="outlined"
            placeholder="Age is a required field"
            fullWidth
            margin="normal"
            name="age"
            value={user.age}
            onChange={handleInputs}
          />
          <TextField
            id="height"
            label="Height"
            variant="outlined"
            placeholder="Height is a required field"
            fullWidth
            margin="normal"
            name="height"
            value={user.height}
            onChange={handleInputs}
          />
          <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="male"
            name="gender"
            value={user.gender}
            onChange={handleInputs}
          >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>

          </Grid>

            <Grid item md={6}>
            <TextField
            id="middle-name"
            label="Middle Name"
            variant="outlined"
            placeholder="MiddleName is a required field"
            fullWidth
            margin="normal"
            name="middleName"
            value={user.middlename}
            onChange={handleInputs}
          />
            <TextField
            id="mobile no"
            label="Mobile No"
            variant="outlined"
            placeholder="Mobile No is a required field"
            fullWidth
            margin="normal"
            name="mobileNo"
            value={user.mobileNo}
            onChange={handleInputs}
          />
          <TextField
            id="birthday"
            label="Birthday"
            variant="outlined"
            placeholder="Birthday is a required field"
            fullWidth
            margin="normal"
            name="birthday"
            value={user.birthday}
            onChange={handleInputs}
          />
         
          <div>
           <TextField
          id="outlined-select-blood group"
          select
          label="Select blood"
          defaultValue="EUR"
          helperText="Please select your blood group"
          name="bGroup"
          value={user.bGroup}
              onChange={handleInputs}
          >
            {bGroup.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
                   
          <TextField
            id="weight"
            label="Weight"
            variant="outlined"
            placeholder="Weight is a required field"
            fullWidth
            margin="normal"
            name="weight"
            value={user.weight}
            onChange={handleInputs}
          />
          <FormLabel id="demo-radio-buttons-group-label">Marital Status</FormLabel>
          <RadioGroup row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="male"
            // name="radio-buttons-group"
            name="mStatus"
            value={user.mStatus}
            onChange={handleInputs}
          >
          <FormControlLabel value="single" control={<Radio />} label="Single" />
          <FormControlLabel value="married" control={<Radio />} label="Married" />
          <FormControlLabel value="divorced" control={<Radio />} label="Divorced" />
          </RadioGroup>
            </Grid>
          </Grid>
        </>
      );

    case 1:
      return (
        <>
        <Grid container spacing={2}>
            <Grid item md={6}>            
            <TextField
              id="address1"
              label="Address 1"
              variant="outlined"
              placeholder="Enter Your Address line 1"
              fullWidth
              margin="normal"
              name="address1"
              value={user.address1}
            onChange={handleInputs}
            />
            <TextField
            id="city"
            label="City"
            variant="outlined"
            placeholder="Enter Your city Name"
            fullWidth
            margin="normal"
            name="city"
            value={user.city}
            onChange={handleInputs}
          />
            <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            name="country"
            value={user.country}
            onChange={handleInputs}
          />
            </Grid>
            <Grid item md={6}>
            <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address Line 2"
            fullWidth
            margin="normal"
            name="address2"
            value={user.address2}
            onChange={handleInputs}
          />
          <TextField
            id="state"
            label="State"
            variant="outlined"
            placeholder="Enter Your State Name"
            fullWidth
            margin="normal"
            name="state"
            value={user.state}
            onChange={handleInputs}
          />
          <TextField
            id="pinCode"
            label="PinCode"
            variant="outlined"
            placeholder="Enter Your PinCode "
            fullWidth
            margin="normal"
            name="pinCode"
            value={user.pinCode}
            onChange={handleInputs}
          />
          </Grid>
        </Grid>
          
        </>
      );
    case 2:
      return (
        <>
        <h1>Data added successfully</h1>
        <List>
        <ListItem>
          <ListItemText primary="FirstName" />
          <ListItemText  secondary={user.firstName} /><hr />
        </ListItem>
        <ListItem>
          <ListItemText primary="MiddleName" />
          <ListItemText  secondary={user.middleName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="LastName" />
          <ListItemText  secondary={user.lastName} /><hr />
        </ListItem>
        <ListItem>
          <ListItemText primary="MobileNo" />
          <ListItemText  secondary={user.mobileNo} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" />
          <ListItemText  secondary={user.email} /><hr />
        </ListItem>
        <ListItem>
          <ListItemText primary="Birthday" />
          <ListItemText  secondary={user.birthday} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Age" />
          <ListItemText  secondary={user.age} /><hr />
        </ListItem>
        <ListItem>
          <ListItemText primary="BloodGroup" />
          <ListItemText  secondary={user.bGroup} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Height" />
          <ListItemText  secondary={user.height} /><hr />
        </ListItem>
        <ListItem>
          <ListItemText primary="Weight" />
          <ListItemText  secondary={user.weight} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Gender" />
          <ListItemText  secondary={user.gender} />
        </ListItem>
        <ListItem>
          <ListItemText primary="MaritalStatus" />
          <ListItemText  secondary={user.mStatus} />
        </ListItem>
        <ListItem>
          <ListItemText primary="AddressLine1" />
          <ListItemText  secondary={user.address1} />
        </ListItem>
        <ListItem>
          <ListItemText primary="AddressLine2" />
          <ListItemText  secondary={user.address2} />
        </ListItem>
        <ListItem>
          <ListItemText primary="City" />
          <ListItemText  secondary={user.city} /><hr />
        </ListItem>
        <ListItem>
          <ListItemText primary="State" />
          <ListItemText  secondary={user.state} /><hr />
        </ListItem>
        <ListItem>
          <ListItemText primary="Country" />
          <ListItemText  secondary={user.country} /><hr />
        </ListItem>
        <ListItem>
          <ListItemText primary="PinCOde" />
          <ListItemText  secondary={user.pincode} /><hr />
        </ListItem>
        </List>
        </>
        );
    default:
      return "unknown step";
  }
}

const LinearStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  // const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  // const isStepSkipped = (step) => {
  //   return skippedSteps.includes(step);
  // };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    // setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepSkipped(activeStep)) {
  //     setSkippedSteps([...skippedSteps, activeStep]);
  //   }
  //   setActiveStep(activeStep + 1);
  // };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="left" color="#00FF00">
          Data added successfully
        </Typography>
      ) : (
        <>
          <form>{GetStepContent(activeStep)}</form>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>

          
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </>
      )}
    </div>
  );
};

export default LinearStepper;
