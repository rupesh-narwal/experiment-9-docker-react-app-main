import React, { useState } from "react"; 
import { useForm } from "react-hook-form"; 
import { 
TextField, 
Button, 
Box, 
Typography, 
Alert, 
CircularProgress, 
} from "@mui/material"; 
function LoginForm() { 
const [loading, setLoading] = useState(false); 
const [message, setMessage] = useState(""); 
const { 
register, 
handleSubmit, 
formState: { errors }, 
} = useForm(); 
const onSubmit = (data) => { 
setLoading(true); 
setMessage(""); 
setTimeout(() => { 
if (data.email === "admin@gmail.com" && data.password === "123456") { 
        setMessage("success"); 
      } else { 
        setMessage("error"); 
      } 
 
      setLoading(false); 
    }, 2000); 
  }; 
 
  return ( 
    <Box sx={{ width: "400px", margin: "100px auto" }}> 
      <Typography variant="h4" gutterBottom align="center"> 
        Login Form 
      </Typography> 
 
      <form onSubmit={handleSubmit(onSubmit)}> 
        <TextField 
          label="Email" 
          fullWidth 
          margin="normal" 
          {...register("email", { 
            required: "Email is required", 
            pattern: { 
              value: /\S+@\S+\.\S+/, 
              message: "Enter valid email", 
            }, 
          })} 
          error={!!errors.email} 
          helperText={errors.email?.message} 
        /> 
 
        <TextField 
          label="Password" 
          type="password" 
          fullWidth 
          margin="normal" 
          {...register("password", { 
            required: "Password is required", 
            minLength: { 
              value: 6, 
              message: "Minimum 6 characters", 
            }, 
          })} 
          error={!!errors.password} 
          helperText={errors.password?.message} 
        /> 
 
        <Button 
          type="submit" 
          variant="contained" 
          fullWidth 
          sx={{ mt: 2 }} 
          disabled={loading} 
        > 
          {loading ? <CircularProgress size={24} color="inherit" /> : "Login"} 
        </Button> 
      </form> 
 
      {message === "success" && ( 
        <Alert severity="success" sx={{ mt: 2 }}> 
          Login Successful 
        </Alert> 
      )} 
 
      {message === "error" && ( 
        <Alert severity="error" sx={{ mt: 2 }}> 
          Invalid Email or Password 
        </Alert> 
      )} 
    </Box> 
  ); 
} 
 
export default LoginForm; 