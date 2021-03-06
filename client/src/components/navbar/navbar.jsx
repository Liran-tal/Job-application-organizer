import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { pages } from '../../consts/navbar-menu/navbar-menu'
import * as UserData from '../../providers/user-data/user-data.context';
import { Theme } from '../../styles/theme.style';

const NavBar = () => {
	const userData = UserData.useUserContext()
	const setUserData = UserData.useSetUserContext();
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);
	let navigate = useNavigate();

	const handleOpenNavMenu = ({ currentTarget }) => {
		setAnchorElNav(currentTarget);
	};
	
	const handleOpenUserMenu = ({ currentTarget }) => {
		setAnchorElUser(currentTarget);
	};

	const handleCloseNavMenu = ({ currentTarget }) => {
		setAnchorElNav(null);
		navigate(`${currentTarget.dataset.value}`)
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleUserLog = () => {
		if (!userData) {
			navigate('/login');
		}
		else {
			setUserData(null);
			navigate('/');
		}
	};

	return (
		<AppBar position="static" sx={{ width: "100%" }}>
			<Container maxWidth="xl" sx={{ backgroundColor: Theme.palette.primary.dark, padding: "0 2rem" }}>
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						Jobs Organizer
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
							{pages.map((page) => (
								<MenuItem
									key={page.value}
									onClick={handleCloseNavMenu}
									data-value={page.value}
								>
									<Typography textAlign="center" value={page.value}>
										{page.lable}
									</Typography>
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
						Jobs Organizer
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page.value}
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: "white",
									display: 'block'
								}}
								data-value={page.value}
							>
								{page.lable}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar
									alt={userData ? userData.name : "Login"}
									src="/static/images/avatar/2.jpg"
								/>
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
							<MenuItem onClick={handleUserLog}>
								<Typography textAlign="center">
									{userData ? "logout" : "Login"}
								</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
