import { TextField, Button, Box, Typography, Divider } from '@mui/material';
import ProfilePicture from '../Components/Profile/ProfilePicture';
import { useState, useEffect } from 'react';

function Dashboard() {
    const [isEditing, setIsEditing] = useState(false);
    const [errors, setErrors] = useState({});

    // Profile state
    const [profileData, setProfileData] = useState({
        name: "",
        email: "",
        username: "",
        location: "",
        phone: "",
        profilePicture: ""
    });

    // Get logged in user
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");

    // ================= FETCH PROFILE =================
    useEffect(() => {
        console.log("Current Username from LocalStorage:", username); // Check 1
        console.log("Current Token from LocalStorage:", token);
        if (!username || !token) return;

        const fetchProfile = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/profile/${username}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (!res.ok) {
                const errorLog = await res.text();
                console.error("Server Error Page:", errorLog);
                return;
                }   
                const data = await res.json();
                setProfileData(prev => ({
                    ...prev,
                    ...data
                }));
            } catch (err) {
                console.log("Error fetching profile:", err);
            }
        };

        fetchProfile();
    }, [username, token]);

    // ================= SAVE PROFILE =================
    const handleSave = async () => {
        try {
            await fetch(`http://localhost:5000/api/profile/${username}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(profileData)
            });

            setIsEditing(false);
            alert("Profile updated successfully");
        } catch (err) {
            console.log("Error updating profile:", err);
        }
    };

    // ================= UPLOAD PROFILE PICTURE =================
    const handleImageChange = async (file) => {
        try {
            const formData = new FormData();
            formData.append("photo", file);

            const res = await fetch(`http://localhost:5000/api/profile/${username}/upload-photo`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData
            });

            const data = await res.json();
            setProfileData(prev => ({ ...prev, profilePicture: data.imagePath }));
        } catch (err) {
            console.log("Image upload failed:", err);
        }
    };

    // Email validation
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const textFieldStyles = {
        '& .MuiInputBase-input': { color: 'background.secondary' },
        '& .MuiInputLabel-root': { color: 'background.tertiary' },
        '& .MuiInputLabel-root.Mui-focused': { color: 'background.secondary' },
        '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'background.tertiary' },
            '&:hover fieldset': { borderColor: 'background.secondary' },
            '&.Mui-focused fieldset': { borderColor: 'background.secondary' },
        },
        '& .MuiInputBase-input.Mui-disabled': {
            WebkitTextFillColor: 'rgba(244, 225, 198, 0.6)',
        },
        '& .MuiInputLabel-root.Mui-disabled': {
            color: 'rgba(166, 117, 122, 0.5)',
        },
    };

    return (
        <Box className="dashboard-bg">
            <Box sx={{
                backgroundColor: 'background.darkPrimary',
                borderRadius: 10,
                minHeight: '100vh',
                marginX: 15,
                position: 'relative',
                pt: '40vh',
                pb: 4
            }}>

                {/* Profile Picture */}
                <Box sx={{ 
                    position: 'absolute', 
                    left: '50%', 
                    top:'12vh',
                    transform: 'translateX(-50%)' 
                }}>
                    <ProfilePicture 
                        name={profileData.name}
                        src={profileData.profilePicture ? `http://localhost:5000${profileData.profilePicture}` : ""}
                        onImageChange={handleImageChange}
                    />
                </Box>

                <Box sx={{ px: 6 }}>
                    {/* Name + Edit Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                        <Typography sx={{color:'background.secondary'}} variant="h3" fontWeight="bold">
                            {profileData.name || "User"}
                        </Typography>

                        <Button 
                            variant={isEditing ? "contained" : "outlined"}
                            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                            sx={{ px: 4, py: 1.5 }}
                        >
                            {isEditing ? 'Save Changes' : 'Edit Profile'}
                        </Button>
                    </Box>

                    <Divider sx={{ mb: 4 }} />

                    {/* Profile Fields */}
                    <Box sx={{
                        display: 'grid', 
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: 3,
                        mb: 4
                    }}>
                        <TextField
                            sx={textFieldStyles}
                            label="Full Name"
                            value={profileData.name}
                            disabled={!isEditing}
                            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                            fullWidth
                        />

                        <TextField
                            sx={textFieldStyles}
                            label="Username"
                            value={profileData.username}
                            disabled
                            fullWidth
                        />

                        <TextField
                            sx={textFieldStyles}
                            label="Email"
                            value={profileData.email}
                            disabled={!isEditing}
                            onChange={(e) => {
                                setProfileData({...profileData, email: e.target.value});
                                setErrors({...errors, email: !validateEmail(e.target.value)});
                            }}
                            error={errors.email}
                            helperText={errors.email ? 'Invalid email format' : ''}
                            fullWidth
                        />

                        <TextField
                            sx={textFieldStyles}
                            label="Phone"
                            value={profileData.phone}
                            disabled={!isEditing}
                            onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                            fullWidth
                        />

                        <TextField
                            sx={textFieldStyles}
                            label="Location"
                            value={profileData.location}
                            disabled={!isEditing}
                            onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                            fullWidth
                        />
                    </Box>

                    <Divider sx={{ my: 4 }} />

                    {/* Account Settings */}
                    <Box>
                        <Typography sx={{color:'background.tertiary'}} variant="h5" fontWeight="bold" mb={3}>
                            Account Settings
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button variant="outlined">Change Password</Button>
                            <Button variant="outlined" color="error">Delete Account</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Dashboard;
