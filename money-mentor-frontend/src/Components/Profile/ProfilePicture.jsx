import { Avatar, Box, IconButton, Typography } from '@mui/material';
import { CameraAlt } from '@mui/icons-material';
import { useState } from 'react';

function ProfilePicture(props) {
  const [isHovering, setIsHovering] = useState(false);
  const [preview, setPreview] = useState(null);

  const size = props.size || '34vh';
  const readOnly = props.readOnly || false;
  const innerSize = readOnly ? size : `calc(${size} - 0.8vh)`;

  const getInitials = (name) => {
    if (!name) return "?";
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      if (props.onImageChange) props.onImageChange(file);
    }
  };

  return (
    <Box
      sx={{
        position: readOnly ? 'relative' : 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        border: readOnly ? '3.5vh solid' : '0.6vh solid',
        borderColor: 'background.secondary',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => !readOnly && setIsHovering(true)}
      onMouseLeave={() => !readOnly && setIsHovering(false)}
    >
      <Avatar
        src={preview || props.src}
        sx={{ height: innerSize, width: innerSize, fontSize: `calc(${size} * 0.35)` }}
      >
        {!props.src && !preview && getInitials(props.name)}
      </Avatar>

      {!readOnly && isHovering && (
        <Box
          sx={{
            position: 'absolute',
            width: innerSize,
            height: innerSize,
            borderRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            cursor: 'pointer',
          }}
          onClick={() => document.getElementById('profile-picture-input').click()}
        >
          <IconButton sx={{ color: 'white' }}>
            <CameraAlt sx={{ fontSize: '4rem' }} />
          </IconButton>
          <Typography sx={{ color: 'white', fontSize: '1rem' }}>
            UPLOAD NEW PICTURE
          </Typography>
        </Box>
      )}

      {!readOnly && (
        <input
          id="profile-picture-input"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      )}
    </Box>
  );
}

export default ProfilePicture;