// import { Button, Container, Grid, TextField, Typography, makeStyles, Paper } from '@material-ui/core';
// import React from 'react';
// import { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';
// import MuiAlert from '@material-ui/lab/Alert';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import { useEffect } from 'react';

// function Alert(props) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />;
//   }


//   const useStyles = makeStyles(theme => ({
//     paper: {
//         padding: theme.spacing(2),
//         color: theme.palette.text.secondary,
//         margin: '0px auto',
//         maxWidth: 400
//     },
//     title: {
//         textAlign: "center",
//         color: "#8bc34a"
//     },
//     input: {
//         color: "#e0f5cf",
//         borderRightColor: '#FFF'
//     },
//     input__label: {
//         color: "#95cca5",
//         borderRightColor: '#FFF'
//     },
//     textfield: {
//         marginTop: 10,
//         color: 'green !important',
//         border: '1px solid grey',
//         borderRadius: theme.shape.borderRadius
//         // color:'secondary'
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//     },
// }))

// const Registration = () => {
//     const [newUser, setNewUser] = useState({})
//     const classes = useStyles()
//     const {registerUser, user, succes, loading, errorMessage, clearState} = useAuth()
//     const history = useHistory()
//     const handleChange = (e) => {
//         let newObj = {
//             ...newUser
//         }
//         newObj[e.target.name] = e.target.value
//         setNewUser(newObj)
//         console.log(newObj);
//     }
//     const signup = (e) => {
//         e.preventDefault()
//         try {
//             registerUser(newUser)
//         } catch (e) {
//             console.log(e); 
//         }
//     }
//     useEffect(() => {
//         if(succes){
//             history.push('/login')  
//         }

//         return () => {
//             clearState()
//         }
//     }, [succes])

//     return (
//         <div style={{padding: '60px', height:'100vh', backgroundImage: `url(https://i.pinimg.com/originals/98/b9/4b/98b94bffc2ae72382a9ea0e2bd4ec9d4.jpg)`, backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat', width: '100%' }} >
//              <Paper style={{ backgroundColor: 'rgba(52, 52, 52, 0)'}} className={classes.paper} elevation={3}>
//                 <h1 className={classes.title}>Registration</h1>
//             <form noValidate autoComplete='off' className={classes.form} onSubmit={signup} action="">
//                 <Grid container>
//                     <div>
//                     {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
                    
//                     </div>
//                     <Grid>
//                     <TextField 
//                     onChange={(e) => handleChange(e)} 
//                     name='email' 
//                     variant='outlined' 
//                     required 
//                     label='Email Address'
//                     fullWidth
//                     InputLabelProps={{className: classes.input__label}}
//                     inputProps={{ className: classes.input }}
//                     color='secondary'
//                     className={classes.textfield}
//                     />
//                     <TextField 
//                     onChange={(e) => handleChange(e)} 
//                     type='password' 
//                     name='password' 
//                     variant='outlined' 
//                     required label='Password'
//                     fullWidth
//                     InputLabelProps={{className: classes.input__label}}
//                     inputProps={{ className: classes.input }}
//                     color='secondary'
//                     className={classes.textfield}
//                     />
//                     <TextField 
//                     variant='outlined' 
//                     type='password' 
//                     required label='Password again'
//                     fullWidth
//                     InputLabelProps={{className: classes.input__label}}
//                     inputProps={{ className: classes.input }}
//                     color='secondary'
//                     className={classes.textfield}
//                     />
//                     <Typography style={{color: '#95cca5', margin: '10px auto 0', textAlign: "center"}}>
//                         Already have account? <Link style={{textDecoration: 'underline', color: "#53bb4c"}} to="/login">Sing in</Link>
//                     </Typography>
//                     </Grid>
//                     <Button style={{ color: '#e9fdd2', margin: '15px auto 0', backgroundColor: "#8bc34a" }} variant = 'contained' color='primary' type='submit' disabled={loading}>
//                         {loading ? <CircularProgress /> : 'Sign up'}
//                     </Button>
//                 </Grid>
//             </form>
//             </Paper>
//         </div>
//     );
// };

// export default Registration;

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useProducts } from "../../contexts/ProductContext";

const Login = () => {
  let authButton = {
    border: "none",
    outline: "none",
    width: "100%",
    padding: "15px 0",
    color: "#fff",
    fontSize: "16px",
    letterSpacing: "1px",
    background: "#c10921",
    cursor: "pointer",
  };
  let login = {
    width: "100%",
    minHeight: "100vh",
    padding: "0 20px",
    // background: "#e9e9e9",
    // backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/merchbgsoifjosirfjoisgvouggoejirgsoiengofina.jpg"})`,
    display: "flex",
  };
  let loginContainer = {
    padding: "60px",
    margin: "auto",
    width: "100%",
    maxWidth: "520px",
    minHeight: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/bk-21.jpg"})`,
    // background: "rgba(1, 1, 1, .7)",
    boxShadow: "0 40px 60px -20px rgba(0, 0, 0, 0.8)",
    borderRadius: "45px",
  };
  let authLabel = {
    color: "#333",
    fontFamily: '"Merienda"',
    margin: "14px 0",
    display: "block",
    fontSize: "22px",
    lineHeight: "1",
  };
  let authInput = {
    width: "100%",
    border: "none",
    outline: "none",
    fontSize: "19px",
    padding: "10px",
    background: "rgba(0,0,0, 0.1)",
    borderRadius: '10px',
    color: "#333",
    letterSpacing: "1px",
  };
  let btnContainer = {
    width: "100%",
    padding: "24px 0",
  };
  let authP = {
    margin: "14px 0 0 0",
    textAlign: "right",
    color: "#333",
    cursor: "pointer",
  };
  let authSpan = {
    color: "#c10921",
    fontWeight: "500",
    letterSpacing: "0.5px",
    marginLeft: "5px",
    cursor: "pointer",
    transition: "all 400ms ease-in-out",
  };
  let errorMsg = {
    color: "#eebb4f",
    fontSize: "16px",
};
const {
    user,
  email,
  setEmail,
  password,
  setPassword,
  handleLogIn,
  handleSignup,
  hasAccount,
  setHasAccount,
  emailError,
  passwordError,
  handleLogout,
} = useAuth();

const location = useLocation()
const {from} = location.state || {from :{pathname: '/'}}
const {history} = useProducts()
  useEffect(() => {
    if(user){
        history.push('/')
    }
},[user])

useEffect(() => {
    if(user){
        history.replace(from)
    }
},[user])

  return (
    <>
      <section style={login}>
        <div style={loginContainer}>
          <label
            style={{
              alignSelf: "center",
              color: "#333",
              fontFamily: '"Merienda"',
              margin: "14px 0",
              display: "block",
              fontSize: "30px",
              lineHeight: "1",
            }}
          >
            {" "}
            Registration
          </label>
          <label style={authLabel}>Username</label>
          <input
            style={authInput}
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p style={errorMsg}>{emailError}</p>
          <label style={authLabel}>Password</label>
          <input
            style={authInput}
            type="password"
            autoFocus
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={errorMsg}>{passwordError}</p>
          <div style={btnContainer}>
            
                <button style={authButton} onClick={handleSignup}>
                  Sign up
                </button>
                <p style={authP}>
                  Have an account ?
                  <span
                    style={authSpan}
                    onClick={() => history.push('/login')}
                  >
                    Sign in
                  </span>
                </p>
            
            <Link to="/forgotPassword">
              <p style={authP}>Forgot Password?</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;