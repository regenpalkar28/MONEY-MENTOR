import React, {useEffect} from "react";
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import HomeLogo from "./HomePage/HomeLogo";
import ProfilePicture from "./Profile/ProfilePicture";

function Header() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const [pfp, setPfp] = React.useState(localStorage.getItem('profilePicture'));

    useEffect(() => {
        const handleSync = () => {
            setPfp(localStorage.getItem('profilePicture'));
        };

        window.addEventListener('storage', handleSync);
        // Also check on a small interval or focus if needed
        window.addEventListener('focus', handleSync);

        return () => {
            window.removeEventListener('storage', handleSync);
            window.removeEventListener('focus', handleSync);
        };
    }, []);useEffect(() => {
    const handleSync = () => {
        const newPfp = localStorage.getItem('profilePicture');
        console.log("Header Sync Triggered. New pfp path from storage:", newPfp); // DEBUG LOG
        setPfp(newPfp);
    };

    window.addEventListener('storage', handleSync);
    window.addEventListener('profileUpdate', handleSync);
    window.addEventListener('focus', handleSync);

    return () => {
        window.removeEventListener('storage', handleSync);
        window.removeEventListener('profileUpdate', handleSync);
        window.removeEventListener('focus', handleSync);
    };
}, []);
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('profilePicture'); 
        navigate('/login');
    };

    return (
       <AppBar position="fixed" 
        sx={{ 
            backgroundColor: 'background.primary', 
            boxShadow: 'none', 
            height: 100,
            borderBottom: '2px solid #350b1a'
             }}>
        <Toolbar 
            sx={{ 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                height: '100%' 
                }}>
                <HomeLogo/>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {token ? (
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center'}}>
                         <Box
                                component={Link}
                                to="/dashboard"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    textDecoration: 'none',
                                    borderRadius: '50%',
                                    transition: 'opacity 0.2s',
                                    '&:hover': { opacity: 0.8 },
                                }}
                            >
                                <ProfilePicture
                                name={username}
                                src={pfp ? `http://localhost:5000${pfp}` : undefined}
                                size="48px"
                                readOnly={true}
                            />
                            </Box>
                        <Button
                            onClick={handleLogout}
                            variant="outlined"
                            sx={{
                                backgroundColor: 'background.primary',
                                color: 'background.secondary',
                                borderColor: 'background.secondary',
                                fontFamily: 'Poppins',
                                '&:hover': {
                                    backgroundColor: 'background.secondary',
                                    color: 'background.primary',
                                    borderColor: 'background.secondary'
                                }
                            }}
                        >
                            Logout
                        </Button>
                    </Box>
                    ) : (
                        <>
                            <Button
                                component={Link}
                                to="/login"
                                variant="outlined"
                                sx={{
                                    backgroundColor: 'background.primary',
                                    color: 'background.secondary',
                                    borderColor: 'background.secondary',
                                    fontFamily: 'Poppins',
                                    '&:hover': {
                                        backgroundColor: 'background.secondary',
                                        color: 'background.primary',
                                        borderColor: 'background.secondary'
                                    }
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                component={Link}
                                to="/signup"
                                variant="contained"
                                sx={{
                                    backgroundColor: 'background.tertiary',
                                    color: 'background.secondary',
                                    fontFamily: 'Poppins',
                                    '&:hover': {
                                        backgroundColor: 'background.secondary',
                                        color: 'background.primary'
                                    }
                                }}
                            >
                                Sign Up
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;