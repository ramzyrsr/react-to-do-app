import { Button, TextField, Typography } from "@mui/material";

const ForgotPassword = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="flex bg-white rounded-lg shadow-lg max-w-4xl">
                <div className="p-8 w-96">
                    <div>
                        <img src="/images/lock.png" alt="lock" className=""/>
                    </div>
                    <Typography variant="h4-bold" component="h1" className="text-2xl font-bold">
                        Reset Your Password
                    </Typography>
                    <h5 className="text-gray-500 text-sm">Forgot your password? Please enter your email</h5>

                    <TextField
                        label="Email" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal"
                        className="mt-4"
                    />

                    <div className='mt-10'>
                        <Button
                            variant="contained" 
                            color="primary" 
                            className="mt-6 w-full py-2 bg-blue-500 text-white font-bold"
                        >
                            Reset Password
                        </Button>
                    </div>
                </div>
                <div className="hidden md:block w-96 p-8">
                    <img src="/images/illustration.png" alt="illustration" className="w-full h-full object-contain"/>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;