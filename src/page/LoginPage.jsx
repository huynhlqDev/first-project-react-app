import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/action/authActions';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { logged, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (logged) navigate("/dashboard"); 
    }, [logged])

    useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error])

    useEffect(() => {
        console.log("[SHOW] - Login page");
        
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        dispatch(login(username, password));
    };


    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-96 bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-center text-2xl font-semibold mb-6">Sign in with Apple ID</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Apple ID"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Sign In
                    </button>
                    <p className="text-center text-sm text-gray-500 mt-4">
                        Forgot your Apple ID or password?
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
