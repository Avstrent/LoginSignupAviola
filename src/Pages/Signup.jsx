import { Container, Box, Paper, TextField, Button, Typography, InputAdornment, IconButton } from "@mui/material";
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Styles/Index.css';



export default function LoginPage() {
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
                    <Typography variant="h5" sx={{ p: 1 }}>Sign up    </Typography>
                    <Box sx={{ p: 1 }}>
                        <TextField error={isError} helperText={isError ? "Invalid Email" : ""} fullWidth label="First Name" variant="outlined" />
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <TextField error={isError} helperText={isError ? "Invalid Email" : ""} fullWidth label="Last Name" variant="outlined" />
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <TextField error={isError} helperText={isError ? "Invalid Email" : ""} fullWidth label="Email" variant="outlined" />
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <TextField
                            type={showPassword ? "text" : "password"}
                            error={isError}
                            helperText={isError ? "Invalid Password" : ""}
                            fullWidth
                            label="Password"
                            variant="outlined"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <TextField
                            type={showConfirmPassword ? "text" : "password"}
                            error={isError}
                            helperText={isError ? "Invalid Password" : ""}
                            fullWidth
                            label="Confirm Password"
                            variant="outlined"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                    </Box>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button size="large" fullWidth variant="contained" endIcon={<PersonAddAltRoundedIcon />}>
                                Sign in
                            </Button>
                        </Link>
                </Container>
            </Box>
        </>
    )
}