import { Container, Box, Paper, TextField, Button, Typography, InputAdornment, IconButton } from "@mui/material";
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import '../Styles/Dashboard.css';



export default function Dashboard() {
    const [isError, setIsError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validate = () => {
        setIsError(true);
    }

    return (
        <>
            <Box sx={{ 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100vh', 
                width: '100vw'}}>
                <Container maxWidth="sm" component={Paper} sx={{ p: 3 }}>
                    <Typography variant="h5" sx={{ p: 1 }}>Dashboard  </Typography>
                    <Box sx={{ p: 1 }}>
                        <Button size="large" fullWidth variant="contained" endIcon={<PersonAddAltRoundedIcon />}>Home</Button>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Button size="large" fullWidth variant="contained" endIcon={<PersonAddAltRoundedIcon />}>About</Button>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Button size="large" fullWidth variant="contained" endIcon={<PersonAddAltRoundedIcon />}>Services</Button>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Button size="large" fullWidth variant="contained" endIcon={<PersonAddAltRoundedIcon />}>Hello</Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}