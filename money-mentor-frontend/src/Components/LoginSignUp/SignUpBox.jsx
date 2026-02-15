import React, { useState } from "react";
import { 
  TextField, Button, Box, Typography,
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomDialogBox from './CustomDialogBox';

function SignUpBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfPass] = useState("");
  const navigate = useNavigate();
  const [dialog, setDialog] = useState({ 
    open: false, 
    title: "", 
    message: "", 
    btnText: "Ok", 
    onClose: null 
    });

    const handleDialogClose = () => {
    const cb = dialog.onClose;
    setDialog({ open: false, title: "", message: "", onClose: null });
    if (cb) cb();
  };

    const showDialog = (title, message, onClose = null) => {
    setDialog({ open: true, title, message, onClose });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.msg === "Username already taken") {
          showDialog("Username already taken", "This username already has an account. Redirecting to login...", () => {
            navigate("/login");
          });
        } else {
          showDialog("Signup Failed", data.msg || "Signup failed");
        }
        return;
      }

      showDialog("Success", "Signup successful! Redirecting to login...", () => {
        setUsername("");
        setPassword("");
        setConfPass("");
        navigate("/login");
      });
    } catch (err) {
      console.error(err);
      showDialog("Error", "Server not reachable. Please try again later.");
    }
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box
        sx={{
          maxWidth: 500,
          width: '100%',
          p: 4,
          borderRadius: 3,
          backgroundColor: "#5B122D", // Deep pink background
        }}
      >
        <Typography 
          variant="h4" 
          textAlign="center"
          sx={{ 
            color: "#F4E1C6", // Pale wheat text
            mb: 3,
            fontWeight: 600,
          }}
        >
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit} autocomplete="off">
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
                color: "#F4E1C6",
                fontFamily: 'serif',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: "#F4E1C6",
              },
              '& .MuiInputBase-input': {
                color: "#F4E1C6",
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
                color: "#F4E1C6",
              },
              '& .MuiInputBase-input': {
                color: "#F4E1C6",
                fontFamily: 'serif',
              },
            }}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            value={confirmPass}
            onChange={(e) => setConfPass(e.target.value)}
            margin="normal"
            error={confirmPass && password !== confirmPass}
            helperText={
              confirmPass && password !== confirmPass
                ? "Passwords don't match"
                : ""
            }
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
                '&.Mui-error fieldset': {
                  borderColor: "#ff6b6b", // Red for error
                },
              },
              '& .MuiInputLabel-root': {
                color: "#F4E1C6",
                fontFamily: 'serif',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: "#F4E1C6",
              },
              '& .MuiInputLabel-root.Mui-error': {
                color: "#ff6b6b", // Red label for error
              },
              '& .MuiInputBase-input': {
                color: "#F4E1C6",
                fontFamily: 'serif',
              },
              '& .MuiFormHelperText-root': {
                color: "#ff6b6b", // Red helper text
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
              backgroundColor: "#F4E1C6",
              color: "#5B122D",
              fontWeight: 600,
              fontFamily: 'serif',
              '&:hover': {
                backgroundColor: "#a6757a",
                color: "#F4E1C6",
              },
              '&:disabled': {
                backgroundColor: "#a6757a",
                color: "#F4E1C6",
                opacity: 0.5,
              }
            }}
            disabled={!username || !password || password !== confirmPass}
          >
            Sign Up
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

export default SignUpBox;