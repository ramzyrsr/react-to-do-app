import React from 'react';
import { Button, TextField, Typography, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg max-w-4xl">
        <div className="p-8 w-96">
          <Typography variant="h4" component="h1" className="text-2xl font-bold">
            Create Your Account
          </Typography>
          <Typography variant="body1" className="text-gray-500 mt-2">
            Welcome back! Please enter your details.
          </Typography>

          <div className='mt-4 border border-gray-300 rounded-lg'>
            <Button 
                startIcon={<GoogleIcon />} 
                className="w-full"
            >
                Sign up with Google
            </Button>
          </div>

          <div className="flex items-center mt-6">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="text-gray-500 mx-4">or</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          <TextField 
            label="Name" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            className="mt-4"
          />
          <TextField 
            label="Email" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            className="mt-4"
          />
          <TextField 
            label="Password" 
            type="password" 
            variant="outlined" 
            fullWidth 
            margin="normal"
          />
          <TextField 
            label="Retype Password" 
            type="password" 
            variant="outlined" 
            fullWidth 
            margin="normal"
          />

          <div className='mt-4'>
            <Button 
                variant="contained" 
                color="primary" 
                className="mt-6 w-full py-2 bg-blue-500 text-white"
            >
                Sign Up
            </Button>
          </div>

          <Typography variant="body2" className="mt-6 text-center text-gray-500">
            Already have an account? 
            <Link href="/login" className="text-blue-500 hover:underline"> Sign In</Link>
          </Typography>
        </div>

        <div className="hidden md:block w-96 p-8">
          <img src="/images/illustration.png" alt="illustration" className="w-full h-full object-contain"/>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
