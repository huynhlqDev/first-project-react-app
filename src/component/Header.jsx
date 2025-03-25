import { useSelector, useDispatch } from 'react-redux'
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { logout } from "../redux/action/authActions";
import { useNavigate } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { logged } = useSelector((state) => state.auth);
    const token = localStorage.getItem("TOKEN") || null;

    const getTitles = () => {
        switch (location.pathname) {
            case "/":
                return "Home";
            case "/login":
                return "Sign In";
            case "/register":
                return "Sign Up";
            case "/dashboard":
                return "Dashboard";
            case "/project-form":
                return "Create New Project";
            case "/project-detail":
                return "Project Detail";
            case "/task-form":
                return "Create New Task";
            case "/task-detail":
                return "Task Detail";
            default:
                return "Bee** keeper";
        }
    }

    const handleLogout = (e) => {
        dispatch(logout());
    }

    const handleSignIn = (e) => {
        navigate("/login");
    }
    const handleSignUp = (e) => {
        navigate("/register");
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: "#F2F2F7", boxShadow: "none" }}>
            <Toolbar>
                {/* Icon bên trái luôn hiển thị */}
                <IconButton edge="end" color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 2 }}>
                    {getTitles()}
                </Typography>
                <ButtonGroup variant="text" aria-label="Basic button group">
                    {(logged || token) && (
                        <Avatar>H</Avatar>
                    )}
                    {(logged || token) && (
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    )}
                    {!token && (
                        <Button color="inherit" onClick={handleSignIn}>
                            Sign in
                        </Button>
                    )}
                    {!token && (
                        <Button color="inherit" onClick={handleSignUp}>
                            Sign up
                        </Button>
                    )}
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    )
}

export default Header;