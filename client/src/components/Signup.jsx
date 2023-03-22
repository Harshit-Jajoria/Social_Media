// import { AddCircleOutline } from '@mui/icons-material';
// import {
//   Avatar,
//   Button,
//   Grid,
//   Paper,
//   TextField,
//   Typography,
// } from '@mui/material';
// import React from 'react';

// const Signup = () => {
//   const paperStyle = {
//     padding: '30px 20px',
//     width: 12,
//     margin: '20px auto',
//   };
//   return (
//     <Grid>
//       <Paper elevation={20} style={paperStyle}>
//         <Grid align="center">
//           <Avatar sx={{ backgroundColor: 'lightgreen' }}>
//             <AddCircleOutline />
//           </Avatar>
//           {/* <h2 style={{color: "red" , margin:10}}>Sign Up</h2> */}
//           <h2 style={{ margin: 10 }}>Sign Up</h2>
//           <Typography>
//             Please fill your details below to sing up your account!
//           </Typography>
//         </Grid>
//         <Grid align={'center'}>
//           <form action="">
//             {/* <TextField type={'text'} sx={{ m: 1.8, width: '500px' }} label="Name" />
//             <TextField type={'email'}sx={{ m: 1.8, width: '500px' }} label="Email Address" />
//             <TextField type={'text'} sx={{ m: 1.8, width: '500px' }} label="Location" />
//             <TextField type={'text'} sx={{ m: 1.8, width: '500px' }} label="Occupation" />
//             <TextField type={'password'} sx={{ m: 1.8, width: '500px' }} label="Password" />
//             <TextField type={'password'} sx={{ m: 1.8, width: '500px' }} label="Confirm Password"/>
//             <Button type="submit" variant='contained' color="primary" > Sign Up</Button> */}
//             <Grid xs={12} sm={6} item>
//               <TextField type={'text'} label=" First Name" />
//             </Grid>
//             <Grid xs={12} sm={6} item>
//               <TextField type={'text'} label=" Last Name" />
//             </Grid>
//             <Grid xs={12} item>
//               <TextField type={'email'} label="Email Address" />
//             </Grid>
//             <Grid xs={12} item>
//               <TextField type={'text'} label="Location" />
//             </Grid>

//             <Grid xs={12} item>
//               <TextField type={'text'} label="Occupation" />
//             </Grid>
//             <Grid xs={12} item>
//               <TextField type={'password'} label="Password" />
//             </Grid>
//             <Grid xs={12} item>
//               <TextField type={'password'} label="Confirm Password" />
//             </Grid>
//             <Button type="submit" variant="contained" color="primary">

//               Sign Up
//             </Button>
//           </form>
//         </Grid>
//       </Paper>
//     </Grid>

//   );
// };

// export default Signup;

import { AddCircleOutline, EditOutlined } from '@mui/icons-material';
import { Typography, Paper, TextField, Button, Avatar } from '@mui/material';
import { Box } from '@mui/system';
import Dropzone from 'react-dropzone';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import uploadImage from '../firebase/uploadImage';

const registerSchema = yup.object().shape({
  firstName: yup.string().min(2).max(25).required('required'),
  lastName: yup.string().min(2).max(25).required('required'),
  email: yup.string().email('invalid email').required('required'),
  password: yup.string().min(6).required('required'),
  confirmPassword: yup
    .string()
    .min(6)
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('required'),
  location: yup.string().required('required'),
  occupation: yup.string().required('required'),
  picture: yup.string().required('required'),
});

const initialValuesRegister = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  location: '',
  occupation: '',
  picture: '',
};
const Signup = () => {
  // const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
  //   accept: 'image/*',
  //   maxFiles: 1,
  // });

  const styles = {
    paper: {
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    nameContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    nameField: {
      width: '48%',
      margin: '10px 0',
    },
    textField: {
      margin: '10px 0',
      width: '100%',
    },
    formControl: {
      margin: '10px 0',
      width: '100%',
    },
    submitButton: {
      width: '100%',
      margin: '20px 0',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },

    back: {
      margin: -10,
      backgroundColor: 'lightblue',
    },
  };
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: initialValuesRegister,
    validationSchema: registerSchema,
    onSubmit: async (values, onSubmitProps) => {
      // Smjh nhi aaya ek baar formdata ki yt vdo dekh lio
      // this allows us to send form info with image
      let formData = new FormData();

      for (let value in values) {
        if (value !== 'confirmPassword' || value !== 'picture')
          formData.append(value, values[value]);
      }
      const date = new Date();
      const timestamp = date.toISOString();
      const pictureName = `picture-${timestamp}-${values.picture.name}`;
      try {
        // show a message to inform the user that the data is being uploaded
        const loadingId = toast.loading('Uploading the data...', {
          position: 'top-center',
          pauseOnHover: true,
          autoClose: false, // disable auto-close
          color: 'yellow', 
        })
    
        const res = await uploadImage(values['picture'], pictureName);
        console.log(res);
        formData.append('picturePath', res);
    
        const url = process.env.REACT_APP_BACKEND_URL;
        const savedUser = await axios.post(`${url}/auth/register`, formData);
        console.log(savedUser.data);
        onSubmitProps.resetForm();
    
        // dismiss the info message as soon as the savedUser is submitted successfully
        toast.dismiss(loadingId);
    
        // show a success message if the data was added successfully
        toast.success('Account Created Successfully', {
          position: 'top-center',
          pauseOnHover: true,
        });
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    
    },
  });

  return (
    <div style={styles.back}>
      <Paper elevation={10} style={styles.paper}>
        <Box style={styles.box}>
          <Avatar sx={{ backgroundColor: 'lightgreen' }}>
            <AddCircleOutline />
          </Avatar>
          <Typography variant="h3">Sign up</Typography>
          <Typography variant="h6" sx={{ m: 1 }}>
            Enter your details to sign up
          </Typography>
        </Box>
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <div style={styles.nameContainer}>
            <TextField
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={Boolean(touched.firstName) && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              variant="outlined"
              style={styles.nameField}
            />
            <TextField
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={Boolean(touched.lastName) && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              variant="outlined"
              style={styles.nameField}
            />
          </div>
          <TextField
            label="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            name="email"
            error={Boolean(touched.email) && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            variant="outlined"
            style={styles.textField}
            autoComplete="new-password"
          />
          <TextField
            label="Occupation"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.occupation}
            name="occupation"
            error={Boolean(touched.occupation) && Boolean(errors.occupation)}
            helperText={touched.occupation && errors.occupation}
            variant="outlined"
            style={styles.textField}
          />
          {/* <div style={styles.textField}>
            <div
              {...getRootProps({
                className: 'dropzone',
                style:
                  acceptedFiles.length > 0
                    ? styles.dropzoneActive
                    : styles.dropzone,
              })}
            >
              <input {...getInputProps()} />
              {acceptedFiles.length === 0 ? (
                <p>Drag and drop a photo, or click to select a file</p>
              ) : (
                <p>{acceptedFiles[0].name}</p>
              )}
            </div>
          </div> */}
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) =>
              setFieldValue('picture', acceptedFiles[0])
            }
          >
            {({ getRootProps, getInputProps }) => (
              <Box
                {...getRootProps()}
                border={`0.5px solid grey`}
                borderRadius={1}
                m={1}
                p="0.2rem 1rem"
                sx={{
                  width: '94.3%',
                  '&:hover': { border: `2px dashed grey`, cursor: 'pointer' },
                }}
              >
                <input {...getInputProps()} />
                {!values.picture ? (
                  <p>Add Picture Here</p>
                ) : (
                  <Box>
                    <Typography>{values.picture.name}</Typography>
                    <EditOutlined />
                  </Box>
                )}
              </Box>
            )}
          </Dropzone>

          <TextField
            label="Location"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.location}
            name="location"
            error={Boolean(touched.location) && Boolean(errors.location)}
            helperText={touched.location && errors.location}
            variant="outlined"
            style={styles.textField}
          />
          <TextField
            label="Password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            name="password"
            error={Boolean(touched.password) && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            variant="outlined"
            type="password"
            style={styles.textField}
            autoComplete="new-password"
          />
          <TextField
            label="Confirm Password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.confirmPassword}
            name="confirmPassword"
            error={
              Boolean(touched.confirmPassword) &&
              Boolean(errors.confirmPassword)
            }
            helperText={touched.confirmPassword && errors.confirmPassword}
            variant="outlined"
            type="password"
            style={styles.textField}
            autoComplete="new-password"
          />
          <Button variant="contained" type="submit" style={styles.submitButton}>
            Sign Up
          </Button>
        </form>
        <Typography
          variant="h6"
          sx={{
            color: '#4665e0',
            textDecoration: 'underline',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() => {
            navigate('/');
          }}
        >
          Already have an account , Sign here{' '}
        </Typography>
      </Paper>
      <ToastContainer />
    </div>
  );
};

export default Signup;
