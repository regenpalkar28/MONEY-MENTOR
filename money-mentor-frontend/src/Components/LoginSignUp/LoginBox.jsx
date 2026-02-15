import React, { useState } from "react";
import { 
  TextField, Button, Box, Typography,
 } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomDialogBox from "./CustomDialogBox";

function LoginBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [dialog, setDialog] = useState({ open: false, title: "", message: "", btnText: "Ok", onClose: null });

  const handleDialogClose = () => {
    const cb = dialog.onClose;
    setDialog({ ...dialog, open: false });
    if (cb) cb();
  };

  const showDialog = (title, message, btnText="Ok", onClose = null) => {
    setDialog({ open: true, title, message, btnText, onClose });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
       if (data.msg === "User not found") {   
        showDialog(
          "User not found", 
          "This username is not associated with any account. You need to Sign-Up first...",
          "Sign Up",
           () => {
              navigate("/signup");
          });
        } else {
          showDialog("Login Failure" ,data.msg || "Check your credentials.");
        }
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);

      showDialog("Success", "Logged in successfully! Redirecting to profile...", "OK", () => {
        setUsername("");
        setPassword("");
        navigate("/dashboard");
      });
    } catch (err) {
      console.error(err);
      console.error(err);
      showDialog("Error", "Server not reachable. Please try again later.");
    }
  };

  return (
    <Box sx={{ width: '100%', p: 3 }}>
      <Box
        sx={{
          maxWidth: 500,
          width: '100%',
          p: 4,
          borderRadius: 3,
          backgroundColor: 'background.primary', // Deep pink background
        }}
      >
        <Typography 
          variant="h3" 
          textAlign="center"
          sx={{ 
            color: "#F4E1C6", // Pale wheat text
            mb: 3,
            fontWeight: 600,
          }}
        >
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: "#F4E1C6",
                },
                '&:hover fieldset': {
                  borderColor: "#F4E1C6",
                },
                '&.Mui-focused fieldset': {
                  borderColor: "#F4E1C6",
                },
              },
              '& .MuiInputLabel-root': {
                color: "#F4E1C6", // Pale wheat label
                fontFamily: 'serif',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: "#F4E1C6", // Keep pale wheat when focused
              },
              '& .MuiInputBase-input': {
                color: "#F4E1C6", // Pale wheat text
                fontFamily: 'serif',
              },
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: "#F4E1C6",
                },
                '&:hover fieldset': {
                  borderColor: "#F4E1C6",
                },
                '&.Mui-focused fieldset': {
                  borderColor: "#F4E1C6",
                },
              },
              '& .MuiInputLabel-root': {
                color: "#F4E1C6",
                fontFamily: 'serif',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: "#F4E1C6", // Keep pale wheat when focused
              },
              '& .MuiInputBase-input': {
                color: "#F4E1C6",
                fontFamily: 'serif',
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ 
              mt: 3,
              backgroundColor: "background.secondary", // Pale wheat button
              color: "background.primary", // Deep pink text
              fontWeight: 600,
              fontFamily: 'serif',
              '&:hover': {
                backgroundColor: "background.tertiary", // Tertiary color on hover
                color: "background.secondary",
              },
              '&:disabled': {
                backgroundColor: "#a6757a",
                color: "#F4E1C6",
                opacity: 0.5,
              }
            }}
            disabled={!username || !password}
          >
            Login
          </Button>
        </form>
      </Box>
      <CustomDialogBox 
        open={dialog.open} 
        title={dialog.title}
        message={dialog.message}
        btnText={dialog.btnText}
        onClose={handleDialogClose}
        />
    </Box>
  );
}

export default LoginBox;