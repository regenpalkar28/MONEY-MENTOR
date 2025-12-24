import React, {useState} from "react";
import { TextField, Button, Box, Typography } from '@mui/material';

function LoginBox() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login attempt:', { username, password });
        // Add login logic here 
    }

    return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4, p: 3 }}>
        <Typography variant="h4" textAlign="center">Login</Typography>
        <form onSubmit={handleSubmit}> 
            <TextField 
                fullWidth
                label="Username"
                value={username}
                onChange={handleUsernameChange}
                margin="normal"
            />
            <TextField 
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                margin="normal"
            />
            <Button 
                type="submit"
                variant="contained" 
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                disabled = {!username || !password}
            >
                Login
            </Button>
        </form>
    </Box>
    );
}

export default LoginBox;