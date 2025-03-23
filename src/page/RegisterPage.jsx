import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { register } from '../redux/action/authActions';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { logout } from '../redux/action/authActions';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, registered } = useSelector((state) => state.auth);

    const [fullName, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [conffirmPassword, setConffirmPassword] = useState('');
    const [validate, setValidate] = useState({ fullname: false, username: false, password: false, conffirmPassword: false });
    
    useEffect(() => {
        if (registered) {
            alert("Registed success");
            navigate("/login");
        }
    }, [registered])

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(logout());// for clear error
        }
    }, [error])


    const handleSubmit = (e) => {
        if (!inValidInput()) {
            e.preventDefault();
            dispatch(register(fullName, username, password));
        }
    }

    /// VALIDATE FUNCTIONS
    const inValidInput = () => {
        var inValidFullName = fullName.length === 0;
        var inValidUsername = username.length === 0;
        var inValidPassword = password.length === 0;
        var inValidConffirmPassword = conffirmPassword.length === 0 || conffirmPassword !== password;

        setValidate({
            fullname: inValidFullName,
            username: inValidUsername,
            password: inValidPassword,
            conffirmPassword: inValidConffirmPassword
        });
        return inValidFullName || inValidUsername || inValidPassword || inValidConffirmPassword;
    }

    return (
        <div className="register-page">
            <Stack
                spacing={1}
                useFlexGap
                sx={{ flexWrap: 'wrap', width: '100%', maxWidth: '300px', margin: 'auto' }}
            >
                <h2>Create your account</h2>

                <TextField
                    id="fullname"
                    label="Fullname"
                    variant="standard"
                    required
                    error={(validate.fullname)}
                    onInput={(e) => setFullname(e.target.value)}
                    helperText={validate.username ? "Incorrect entry." : ""}
                />
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
                <TextField
                    id="confirm-password"
                    label="Confirm Password"
                    variant="standard"
                    type="password"
                    required
                    error={(validate.conffirmPassword)}
                    onInput={(e) => setConffirmPassword(e.target.value)}
                    helperText={(validate.password) ? "Incorrect no match." : ""}
                />
                <br></br>
                <Button
                    type="Submit"
                    id="submit"
                    onClick={handleSubmit}
                    variant="outlined"
                >
                    Submit
                </Button>

            </Stack>
        </div>
    )
}

export default RegisterPage;