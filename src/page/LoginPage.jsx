import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logout } from '../redux/action/authActions';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const LoginPage = () => {
    /// PROPERRTIES
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { logged, error } = useSelector((state) => state.auth);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validate, setValidate] = useState({ username: false, password: false });

    /// PAGE LIFE CYCLE
    useEffect(() => {
        // console.log("validate: ", validate);
    }, [validate])

    useEffect(() => {
        if (logged) navigate("/dashboard");
    }, [logged])

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(logout());
        }
    }, [error])

    useEffect(() => {
        // console.log("username: ", username);
        // console.log("password: ", password);
    }, [username, password])

    useEffect(() => {
        if (logged) navigate("/dashboard");
    }, [logged])

    useEffect(() => {
        return () => {
            console.log("[LEAVE] Login");
        }
    }, [])

    /// LOGIC FUNCTIONS
    const handleSubmit = (e) => {
        if (!inValidInput()) {
            // Perform login
            setValidate({ username: false, password: false });
            e.preventDefault();
            dispatch(login(username, password));
        }
    };

    /// VALIDATE FUNCTIONS
    const inValidInput = () => {
        var inValidUsername = validateUsername();
        var inValidPassword = validatePassword();

        setValidate({ username: inValidUsername, password: inValidPassword });
        return inValidUsername || inValidPassword;
    }

    const validateUsername = () => {
        return username.length === 0;
    }

    const validatePassword = () => {
        return password.length === 0;
    }

    /// RENDER
    return (
        <div className="login-container">
            <Stack
                spacing={1}
                useFlexGap
                sx={{ flexWrap: 'wrap', width: '100%', maxWidth: '300px', margin: 'auto' }}
            >
                <h2>Sign in to Bee*** keeper</h2>
                <TextField
                    id="username"
                    label="Username or Email"
                    variant="standard"
                    required
                    error={(validate.username)}
                    onInput={(e) => setUsername(e.target.value)}
                    helperText={validate.username ? "Incorrect entry." : ""}
                />
                <TextField
                    id="password"
                    label="Password"
                    variant="standard"
                    type="password"
                    required
                    error={(validate.password)}
                    onInput={(e) => setPassword(e.target.value)}
                    helperText={(validate.password) ? "Incorrect entry." : ""}
                />
                <br></br>
                <Button
                    id="submit"
                    onClick={handleSubmit}
                    variant="outlined"
                >
                    Submit
                </Button>

                <label>Don't have an account?
                    <Link href="/register" underline="hover">
                        {" Create your now."}
                    </Link>
                </label>
            </Stack>
        </div>
    );
};

export default LoginPage;
