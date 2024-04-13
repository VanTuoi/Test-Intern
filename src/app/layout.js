"use client";

//Third-party
import { useRouter } from "next/navigation";
import React, { useState, useEffect, use } from "react";
import { getCookies } from 'cookies-next';
import { usePathname } from 'next/navigation'

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// In the Project
import StoreProvider from "@/app/StoreProvider";
import { baselightTheme, basedarkTheme } from "@/utils/Theme";

//
import ClientOnly from "./ClientOnly";

const SessionExpiredDialog = ({ open, handleClickLogin, handleClickNoAccount }) => {
    return (
        <Dialog
            open={open}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Phiên đăng nhập của bạn đã hết hạn"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Để đảm bảo bạn luôn nhận được những thông tin mới nhất từ chúng tôi, hãy đăng nhập lại nhé
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                    <Button variant="text" onClick={handleClickNoAccount}>Tiếp tục mà không cần tài khoản</Button>
                    <Button variant="contained" onClick={handleClickLogin}>Đăng nhập lại</Button>
                </Box>
            </DialogActions>
        </Dialog>
    );
};

export default function RootLayout({ children, pageProps }) {

    const router = useRouter()
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const handleClickLogin = () => {
        setOpen(false)
        router.push('/authentication/login')
    }
    const handleClickNoAccount = () => {
        sessionStorage.removeItem('U_Name');
        sessionStorage.removeItem('M_Name');
        setOpen(false)
        router.push('/')
    }

    let [haveLogin, setHaveLogin] = useState(false)

    useEffect(() => {
        if (pathname.includes('authentication')) {
            sessionStorage.getItem('U_Name') && router.push('/')
            setHaveLogin(true)
        } else {
            setHaveLogin(sessionStorage.getItem('U_Name'))
        }
    }, [pathname])


    return (
        <html lang="en">
            <body>
                <StoreProvider>
                    <ClientOnly>
                        <ThemeProvider theme={baselightTheme}>
                            <SessionExpiredDialog
                                open={open}
                                handleClickLogin={handleClickLogin}
                                handleClickNoAccount={handleClickNoAccount}
                            />
                            <CssBaseline />
                            {haveLogin ? children :
                                <Box>
                                    <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography variant="h4">
                                            Cần phải đăng nhập để thao tác với hệ thống
                                        </Typography>
                                        <Button variant="contained" sx={{ marginTop: '10px' }} onClick={() => handleClickLogin()}>
                                            Đăng nhập ngay
                                        </Button>
                                    </Box>
                                </Box>}
                            <ToastContainer />
                        </ThemeProvider>
                    </ClientOnly>
                </StoreProvider>
            </body>
        </html>
    );
}
