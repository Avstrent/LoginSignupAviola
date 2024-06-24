import { Container, Box, Paper, TextField, Button, Typography, InputAdornment, IconButton } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from '../Services/Supabase';
import '../Styles/Index.css';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isError, setIsError] = useState({ email: false, password: false });
    const [generalError, setGeneralError] = useState("");

    const navigate = useNavigate();

    const login = async () => {
        if (email === "" || password === "") {
            setIsError({ email: email === "", password: password === "" });
            setGeneralError("Please fill in the fields");
            return;
        }

        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            setIsError({ email: true, password: true });
            setGeneralError(error.message);
            return;
        }

        if (data) {
            navigate("/dashboard");
        }
    };

    return (
        <>
            <Box sx={{ alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw' }}>
                <Container maxWidth="sm" component={Paper} sx={{ p: 3 }}>
                    <Typography variant="h5" sx={{ p: 1 }}>Login</Typography>
                    <Box sx={{ p: 1 }}>
                        <TextField
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setIsError({ ...isError, email: false });
                            }}
                            error={isError.email}
                            helperText={isError.email ? "Invalid Email" : ""}
                            fullWidth
                            label="Email"
                            variant="outlined"
                        />
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <TextField
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setIsError({ ...isError, password: false });
                            }}
                            error={isError.password}
                            helperText={isError.password ? "Invalid Password" : ""}
                            fullWidth
                            label="Password"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Box>
                    {generalError && (
                        <Typography align="center" color="error" sx={{ p: 1 }}>
                            {generalError}
                        </Typography>
                    )}
                    <Box sx={{ p: 1 }}>
                        <Button size="large" fullWidth onClick={login} variant="contained" endIcon={<LoginIcon />}>
                            Login
                        </Button>
                    </Box>
                    <Typography align="center">or</Typography>
                    <Box sx={{ p: 1 }}>
                        <Link to="/Signup" style={{ textDecoration: 'none' }}>
                            <Button size="large" fullWidth variant="contained" endIcon={<PersonAddAltRoundedIcon />}>
                                Sign up
                            </Button>
                        </Link>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
