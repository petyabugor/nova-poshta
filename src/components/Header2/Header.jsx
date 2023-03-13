import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/img/icon/logo.png';
import styles from './styles.module.scss';

const Header = (props) => {
   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [anchorElUser, setAnchorElUser] = React.useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <AppBar
         position="static"
         sx={{
            bgcolor: '#0000',
            padding: '10px',
            boxShadow: 'none',
            borderBottom: '1px solid #dad9d9',
         }}
      >
         <Container maxWidth="lg">
            <Toolbar disableGutters>
               <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                     flexGrow: 1,
                     mr: 2,
                     display: { xs: 'none', md: 'flex' },
                     fontSize: '32px',
                     fontWeight: 900,
                     letterSpacing: '.2rem',
                     color: '#eb2020',
                     textDecoration: 'none',
                  }}
               >
                  НОВА ПОШТА
               </Typography>

               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="black"
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
                     <MenuItem onClick={handleCloseNavMenu}>
                        <Typography>
                           <Box
                              sx={{
                                 color: '#eb2020',
                                 textDecoration: 'none',
                              }}
                           >
                              <Link to="/">Перевірити ТТН</Link>
                           </Box>
                           <Box>
                              <Link to="/offices">Список відділень</Link>
                           </Box>
                        </Typography>
                     </MenuItem>
                  </Menu>
               </Box>

               <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  sx={{
                     mr: 2,
                     display: { xs: 'none', sm: 'block', md: 'none' },
                     flexGrow: 1,
                     fontWeight: 900,
                     letterSpacing: '.3rem',
                     color: '#eb2020',
                     textDecoration: 'none',
                  }}
               >
                  НОВА ПОШТА
               </Typography>
               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Typography
                     onClick={handleCloseNavMenu}
                     sx={{
                        my: 2,
                        mx: 4,
                        color: '#9e9d9d',
                        display: 'flex',
                        gap: '40px',
                        fontWeight: 700,
                     }}
                  >
                     <Box>
                        <Link to="/">Перевірити ТТН</Link>
                     </Box>
                     <Box>
                        <Link to="/offices">Список відділень</Link>
                     </Box>
                  </Typography>
               </Box>

               <Box sx={{ flexGrow: 0 }}>
                  <Box sx={{ width: '50px' }}>
                     <Link to="/">
                        <div>
                           <img
                              src={logo}
                              alt="logo"
                           />
                        </div>
                     </Link>
                  </Box>

                  <Menu
                     sx={{ mt: '15px' }}
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
                  ></Menu>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default Header;
