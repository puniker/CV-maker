import { useState, useContext } from 'react'
import {NavLink} from 'react-router-dom'
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Container,
    Button,
    Tooltip,
    Avatar,
    MenuItem,
    Menu
} from '@mui/material'
import {Brightness7 as Brightness7Icon, Brightness4 as Brightness4Icon, Menu as MenuIcon, AccountCircle as AccountCircle} from '@mui/icons-material'
import UserContext from '../../Context/UserContext'

const menuLinks = [
  {
    title: "Crea tu CV",
    url: "/crea-tu-cv"
  },
  {
    title: "Encuentra tu plantilla",
    url: "/plantillas"
  },
  {
    title: "Descarga tu CV",
    url: "/descarga-cv"
  },
]
const userMenuLinks = [
  {
    title: "Perfil",
    url: "/user"
  },
  {
    title: "Administrador",
    url: "/administrator"
  },
  {
    title: "Ajustes",
    url: "/user"
  },
  {
    title: "Cerrar sesión",
    url: "/user"
  }
]

export default () => {
    
  const log_out = () => {
      //localStorage.removeItem('session')
      location.reload()
  }
  const {userName} = useContext(UserContext)


  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
      setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
      setAnchorElUser(null)
  }
return (

    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menuLinks.map((link) => (
                <MenuItem key={link.url} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{link.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuLinks.map((link) => (
              <Button
                key={link.url}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavLink to={link.url} style={{color: "white", textDecorationLine: "none"}}>
                  {link.title}
                </NavLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userMenuLinks.map((link) => (
                <MenuItem key={link.url} onClick={handleCloseNavMenu}>
                  <NavLink to={link.url}>
                    <Typography textAlign="center">{link.title}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
)

}