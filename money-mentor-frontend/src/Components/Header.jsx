import React from "react";
import { AppBar, Toolbar, Box, Button} from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header >  
            <Toolbar>
                <Link to="/home">
                <Box
                component="img"
                src="/public/Logo-removebg-preview.png"
                alt="Company Logo"
                sx={{ height: 180, mr: 2, margin:0}}
                />
                </Link>
            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: 'flex', gap: 3 }} >
                <Button 
                    color="secondary"
                    variant="contained" 
                    sx={{ 
                        backgroundColor: '#463be5ff', 
                        '&:hover': {
                            backgroundColor: '#281aabff' 
                        }
                    }}
                    component={Link} 
                    to="/login">
                    LOG-IN
                </Button>
                            <Button 
                    color="secondary"
                    variant="contained" 
                    sx={{ 
                        backgroundColor: '#463be5ff', 
                        '&:hover': {
                            backgroundColor: '#281aabff' 
                        }
                    }}
                    component={Link} 
                    to="/signup">
                    SIGN-UP
                </Button>
            </Box>
            {/* Rest of your header content */}
        </Toolbar>
        </header>);
}

export default Header;