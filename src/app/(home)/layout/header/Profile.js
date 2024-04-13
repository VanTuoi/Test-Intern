
// Third-party
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LoginIcon from '@mui/icons-material/Login';
import { IconHeartPin, IconMapCheck, IconUserCog, IconReport } from "@tabler/icons-react";
import {
    Stack,
    Box,
    Menu,
    Button,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";

// In the Project

const Profile = ({ haveNameLogin }) => {

    const router = useRouter()

    const [anchorEl2, setAnchorEl2] = useState(null);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    const handleClickLogin = () => {
        router.push('/authentication/login')
    }

    const handleClickLogout = () => {
        sessionStorage.removeItem('U_Name')
        router.push('/authentication/login')
    }

    const handleClickRegister = () => {
        router.push('/')
    }

    return (
        <Box>
            <Stack direction={'row'} alignItems={'center'} sx={{ marginTop: '5px' }}>
                {!haveNameLogin ?
                    (
                        <Stack direction={'row'} spacing={2}>
                            <Button
                                onClick={() => handleClickRegister()}
                                variant="text"
                                sx={{
                                    color: 'currentColor',
                                    fontWeight: '500',
                                    '@media (max-width: 480px)': {
                                        display: 'none'
                                    },
                                    '@media (min-width: 481px)': {
                                        display: 'block'
                                    },
                                }}
                            >
                                Đăng ký
                            </Button>
                            <Button
                                onClick={() => handleClickLogin()}
                                sx={{
                                    height: '42px',
                                    color: 'currentColor',
                                    border: '2px solid currentColor',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    backgroundColor: 'transparent',
                                    outline: 'none',
                                    '@media (max-width: 480px)': {
                                        display: 'none'
                                    },
                                    '&::after': {
                                        content: '""',
                                        zIndex: '-1',
                                        position: 'absolute',
                                        top: 0,
                                        left: '0',
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: (theme) => theme.palette.logo.nonTop,
                                        transform: 'scaleX(0)',
                                        transition: 'transform 0.3s ease',
                                        transformOrigin: 'left',
                                        border: `2px solid transparent`,
                                    },
                                    ':hover': {
                                        '&::after': {
                                            transform: 'scaleX(1)',
                                            border: (theme) => `2px solid ${theme.palette.logo.nonTop}`,
                                        },
                                        color: (theme) => theme.palette.logo.onTop,
                                        border: (theme) => `2px solid ${theme.palette.logo.nonTop}`,
                                        backgroundColor: (theme) => theme.palette.logo.nonTop,
                                    },
                                }}

                                variant="outlined" endIcon={<LoginIcon />}>
                                Đăng nhập
                            </Button>
                            <LoginIcon
                                onClick={() => handleClickLogin()}
                                sx={{
                                    '@media (min-width: 481px)': {
                                        display: 'none'
                                    },
                                }}
                            />
                        </Stack>
                    ) : (
                        <Box
                            onClick={handleClick2}
                            sx={{
                                gap: 1,
                                cursor: 'pointer',
                                color: 'currentColor',
                                height: '35px',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Typography variant="h5">
                                {haveNameLogin}
                            </Typography>
                            <ArrowDropDownIcon />
                        </Box>
                    )}

            </Stack>
            <Menu
                id="msgs-menu"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                sx={{
                    "& .MuiMenu-paper": {
                        width: "250px",
                        marginTop: '3px'
                    },
                }}
            >
                <Box padding={2}>
                    {haveNameLogin && haveNameLogin !== null && haveNameLogin !== '' && (
                        <Box>
                            <Typography variant="body1" fontWeight={400} display="inline">Xin chào, </Typography>
                            <Typography variant="body1" fontWeight={500} display="inline">
                                {haveNameLogin}
                            </Typography>
                        </Box>
                    )}
                </Box>
                {haveNameLogin && haveNameLogin !== null && haveNameLogin !== '' ? (
                    [
                        <MenuItem key="item1"
                            sx={{
                                ':hover': {
                                    color: (theme) => theme.palette.primary.main,
                                },
                            }}
                        >
                            <ListItemIcon>
                                <IconUserCog width={20} />
                            </ListItemIcon>
                            <ListItemText>Tài khoản của tôi</ListItemText>
                        </MenuItem>,
                        <MenuItem key="item2"
                            sx={{
                                ':hover': {
                                    color: (theme) => theme.palette.primary.main,
                                },
                            }}
                        >
                            <ListItemIcon>
                                <IconHeartPin width={20} />
                            </ListItemIcon>
                            <ListItemText>Đồ uống yêu thích</ListItemText>
                        </MenuItem>,
                        <MenuItem key="item5">
                            <Button
                                onClick={() => handleClickLogout()}
                                variant="text"
                                sx={{
                                    color: (theme) => theme.palette.error.dark
                                }}
                                fullWidth
                            >
                                Đăng xuất
                            </Button>
                        </MenuItem>
                    ]
                ) : (
                    null
                )}
            </Menu >
        </Box >
    );
};

export default Profile;
