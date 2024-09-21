import React, { useEffect, useState } from 'react';
import { Button, TextField, Typography, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './helper';

const Login = () => {
    const navigate = useNavigate(); // Initialize navigate

  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if the user is already logged in and redirect to the home page if they are
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      navigate('/');  // Redirect to home page if already logged in
    }
  }, [navigate]);

  const handleLogin = async () => {
    console.log(email, password);
    
      // Simple validation (replace with actual logic or API call)
      if (email&& password) {
        try {
            const data = await loginUser(email, password);
            console.log('data::', data);
            if (!data.ok) {
              setError('Invalid email or password');
              return;
            }
            const user = await data.json();
            console.log(user.undefined);
            
            const userName = user.undefined.dataUser.fullname || "User"; // Default to "User" if name is not available.

            localStorage.setItem('user', JSON.stringify({ ...user, name: userName }));
            // On success:
            navigate('/'); // Redirect to Home page
            
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Failed to log in. Please try again later.');
            return;
        }
      } else {
          setError('Invalid email or password');
      }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg max-w-4xl">
        <div className="p-8 w-96">
          <Typography variant="h4" component="h1" className="text-2xl font-bold">
            Hi, Welcome Back
          </Typography>
          <Typography variant="body1" className="text-gray-500 mt-2">
            Welcome back! Please enter your details.
          </Typography>

          <div className='mt-4 border border-gray-300 rounded-lg'>
            <Button 
                startIcon={<GoogleIcon />} 
                className="w-full"
            >
                Log in with Google
            </Button>
          </div>

          <div className="flex items-center mt-6">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="text-gray-500 mx-4">or</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          <TextField 
            label="Email" 
            // variant="outlined" 
            fullWidth 
            margin="normal"
            className="mt-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on change
          />
          <TextField 
            label="Password" 
            type="password" 
            // variant="outlined" 
            fullWidth 
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on change
          />

            {error && (
                <Typography color="error" className="mt-4 text-center">
                    {error}
                </Typography>
            )}

          <div className='text-right mb-4'>
            <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                Forgot Password
            </Link>
          </div>

          <Button 
            variant="contained" 
            color="primary" 
            className="mt-8 w-full py-2 bg-blue-500 text-white"
            onClick={handleLogin} // Call handleLogin on click
          >
            Log In
          </Button>

          <Typography variant="body2" className="mt-6 text-center text-gray-500">
            Don't have an account? 
            <Link href="/signup" className="text-blue-500 hover:underline"> Sign up</Link>
          </Typography>
        </div>

        <div className="hidden md:block w-96 p-8">
          <img src="/images/illustration.png" alt="illustration" className="w-full h-full object-contain"/>
        </div>
      </div>
    </div>
  );
}

export default Login;
