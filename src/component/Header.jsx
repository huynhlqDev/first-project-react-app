import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";



const Header = () => {

    const { logged, error } = useSelector((state) => state.auth);
    return (
        <AppBar position="static" sx={{ backgroundColor: logged ? "#F2F2F7" : "transparent" , boxShadow: "none" }}>
            <Toolbar>
                {/* Icon bên trái luôn hiển thị */}
                <IconButton edge="start" color="inherit">
                    <MenuIcon />
                </IconButton>

                {/* Khi đăng nhập mới hiển thị tiêu đề */}
                {logged && (
                    <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 2 }}>
                        Dashboard
                    </Typography>
                )}

                {/* Khi đăng nhập mới hiển thị nút Logout */}
                {logged && (
                    <Button color="inherit" onClick={() => { }}>
                        Logout
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Header;