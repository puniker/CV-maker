import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {AppBar, Box, Toolbar, Typography, IconButton, Switch, FormControlLabel, FormGroup, MenuItem, Menu} from '@mui/material'
import {Menu as MenuIcon, AccountCircle as AccountCircle} from '@mui/icons-material'


const StyledNavLink = {
    color: 'white',
    textDecoration: 'none',
    padding: '15px 0px',
    margin: '0px 20px'
}
const StyledNavLinkActive = {
    color: 'white',
    textDecoration: 'underline',
    padding: '15px 0px',
    margin: '0px 20px'
}

export default () => {
    
    const log_out = () => {
        localStorage.removeItem('session')
        location.reload()
    }

    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleChange = (event) => {
        setAuth(event.target.checked);
      };
    
      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
    <>


    <Box sx={{ flexGrow: 1 }}>
        

        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                <MenuIcon />
                </IconButton>
                <Typography  sx={{ flexGrow: 1 }}>
                    CV Maker
                </Typography>

                <NavLink
                    to="/crea-tu-cv"
                    activeclassname="active"
                    style={StyledNavLink}
                    activeStyle={StyledNavLinkActive} >
                    Crea tu CV
                </NavLink>
                <NavLink
                    to="/plantillas"
                    activeclassname="active"
                    style={StyledNavLink}
                    activeStyle={StyledNavLinkActive} >
                    Encuentra tu plantilla
                </NavLink>
                <NavLink
                    to="/descarga-cv"
                    activeclassname="active"
                    style={StyledNavLink}
                    activeStyle={StyledNavLinkActive} >
                    Descarga tu CV
                </NavLink>

                {auth && (
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                    <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >

                    <MenuItem onClick={handleClose}>
                        <NavLink to="/user" style={{color: "inherit", textDecoration: "none"}}>
                            Perfil
                        </NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Ajustes</MenuItem>
                    <MenuItem onClick={log_out}>Cerrar sesión</MenuItem>
                    </Menu>
                </div>
                )}
            </Toolbar>
        </AppBar>
    </Box>
    </>


    )

}