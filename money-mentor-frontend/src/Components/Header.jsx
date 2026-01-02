import React from "react";
import { AppBar, Toolbar, Box, Button} from '@mui/material';

function Header() {
    return (
        <header >  
            <Toolbar>
            <Box
            component="img"
            src="/public/Logo-removebg-preview.png"
            alt="Company Logo"
            sx={{ height: 180, mr: 2, margin:0}}
            />

            <Button variant="contained">LOG-IN</Button>
            {/* Rest of your header content */}
        </Toolbar>
        </header>);
}

export default Header;