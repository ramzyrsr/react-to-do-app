import React, { useState } from 'react';
import { Button, TextField, Typography, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import { registerUser } from './helper';

const SignUp = () => {
  const navigate = useNavigate(); // Initialize navigate

  // state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility


  const handleSignUp = async () => {
    // Simple validation (replace with actual logic or API call)

    const validateEmail = (value) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(value);
    };

    if (email && !validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    } else {
      setError('');
    }

    try {
      if (name && email && password && password === retypePassword) {
        const data = await registerUser(name, email, password);
        if (!data.ok) {
          setError('Invalid email or password');
          return;
        }

        setModalOpen(true); // Open the modal on successful registration
  
        // Navigate to the login page after a short delay
        setTimeout(() => {
          navigate('/login');
        }, 600); // Delay for 0.6 second
      } else {
        setError('Please fill in all fields correctly.');
        return;
      }
    } catch (error) {
      setError('Please fill in all fields correctly.');
    }
  };

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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField 
            label="Email" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            className="mt-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField 
            label="Password" 
            type="password" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField 
            label="Retype Password" 
            type="password" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
          />

          {error && (
              <Typography color="error" className="mt-4 text-center">
                  {error}
              </Typography>
          )}

          <div className='mt-4'>
            <Button 
                variant="contained" 
                color="primary" 
                className="mt-6 w-full py-2 bg-blue-500 text-white"
                onClick={handleSignUp}
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

      {/* Modal for registration success */}
      <Modal
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)}
        message="Successfully registered!"
      />
    </div>
  );
}

export default SignUp;
