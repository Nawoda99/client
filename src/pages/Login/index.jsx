import React, { useEffect, useRef, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
// import bgimg from "../../images/loginbg2.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import instance from "../../config/instance";
import bgimage from "../../assests/img/bgimage.jpg";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toglePassword = () => {
    setShowPassword(!showPassword);
  };

  
  const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const paperStyle = {
    backgroundColor: "#21527280",
    padding: 20,
    width: "90%",
    height: "60%",
    maxHeight: 400,
    maxWidth: 500,
    margnLeft: "auto",
  };

  const avatarStyle = {
    backgroundColor: "#1bbd7e",
    height: "60px",
    width: "60px",
  };
  const btnstyle = { margin: "8px 0" };

  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [helperText, setHelperText] = useState("Choose wisely");
  const [error, setError] = useState(false);

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
    // await axios
    // .post("http://localhost:3001/users/login",values)
    // .then((response)=>{
    //     if(response.status===201)
    //         {
    //             setHelperText("Login Success");
    //             setError(true);
    //         }
    //         else {
    //             if (!response) {
                 
    //               setHelperText("No Server response.");
    //             } else {
    //               setHelperText(response.data.error);
    //             }
    //             setError(true);
    //           }
    // })
    // .catch((err) => {
    //     // if (err.response.status === 401) {
    //     //   setHelperText("Unauthorized.");
    //     //   setError(true);
    //     // } else {
    //     //   setHelperText("Login failed.");
    //     // }
    //   });
    const res = await instance
    .post("/users/login",values)
    console.log(res);
    }
    
    catch(err){
        
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box style={boxStyle}>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="105vh"
          gap="5px"
        >
          <Box
            gridColumn={{
              xs: "span 12",
              sm: "span 12",
              md: "span 12",
              lg: "span 6",
              xl: "span 6",
            }}
            display={{
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            }}
            alignItems="center"
            justifyContent="center"
          ></Box>
          <Box
            gridColumn={{
              xs: "span 12",
              sm: "span 12",
              md: "span 12",
              lg: "span 6",
              xl: "span 6",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Paper elevation={10} style={paperStyle}>
              <Grid container spacing={2} align="center">
                <Grid item xs={12}>
                  <Avatar style={avatarStyle}>
                    <AccountCircleIcon style={avatarStyle} />
                  </Avatar>

                  <Typography variant="h4" mt={1}>
                    Log In
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Username"
                    autoComplete="username"
                    fullWidth
                    required
                    name="username"
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="current-password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleInput}
                    fullWidth
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton onClick={toglePassword}>
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                    fullWidth
                  >
                    Log in
                  </Button>
                  <Grid item xs={12} gap="30px" margin={1}>
                  <Box>
                    {error && (
                      <Alert
                        severity={error ? "error" : "success"}
                        onClose={() => {
                          setError(false);
                        }}
                      >
                        {helperText}
                      </Alert>
                    )}
                  </Box>
                  
                </Grid>
                  
                </Grid>

                
                
              </Grid>
            </Paper>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default Login;