import { useSelector, useDispatch } from 'react-redux'
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {logout } from "../redux/action/authActions";



const Header = () => {
    const dispatch = useDispatch();
    const { logged } = useSelector((state) => state.auth);
    const token = localStorage.getItem("TOKEN") || null;

    const handleLogout = (e) => {
        dispatch(logout());
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: logged ? "#F2F2F7" : "transparent" , boxShadow: "none" }}>
            <Toolbar>
                {/* Icon bên trái luôn hiển thị */}
                <IconButton edge="start" color="inherit">
                    <MenuIcon />
                </IconButton>

                {/* Khi đăng nhập mới hiển thị tiêu đề */}
                {logged && token && (
                    <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 2 }}>
                        Dashboard
                    </Typography>
                )}

                {/* Khi đăng nhập mới hiển thị nút Logout */}
                {logged && token && (
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Header;