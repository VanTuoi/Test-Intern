
// Third-party
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox,
} from "@mui/material";
import Link from "next/link";

// In the Project
import CustomTextField from "@/app/authentication/components/forms/CustomTextField";
import CustomTypography from "@/app/authentication/components/forms/CustomTypography";
import useAuth from "@/hook/auth/useLogin"
import { styled } from '@mui/material/styles';


const AuthLogin = ({ title, subtitle, subtext }) => {

    const {
        checkEmail, checkPassword, login,
        errEmail, errorPassWord
    } = useAuth();

    const [isChecked, setIsChecked] = useState(false);      // Kiểm tra check show pwd

    return (
        <>
            {title && (
                <Typography fontWeight="700" variant="h3" mb={1} color={'red'}>
                    {title}
                </Typography>
            )}
            {subtext}
            <Stack direction={'column'} spacing={1}>
                <Box>
                    <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        component="label"
                        htmlFor="username"
                        mb="5px"
                    >
                        Email đăng nhập
                    </Typography>
                    <CustomTextField onChange={(event) => checkEmail(event.target.value)} variant="outlined" type="email" fullWidth />
                    <CustomTypography>{errEmail}</CustomTypography>
                </Box>
                <Box>
                    <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        component="label"
                        id="passwordInput"
                        htmlFor="password"
                        autoComplete="new-password" // Chữ 'C' in hoa
                        mb="5px"
                    >
                        Mật khẩu
                    </Typography>
                    <CustomTextField onChange={(event) => checkPassword(event.target.value)} type={isChecked ? 'text' : 'password'} variant="outlined" fullWidth />
                    <CustomTypography>{errorPassWord}</CustomTypography>
                </Box>
                <Stack spacing={1} direction="row" alignItems="center">
                    <FormGroup
                    >
                        <FormControlLabel
                            sx={{ marginRight: '-5px' }}
                            control={<Checkbox checked={isChecked} onClick={() => setIsChecked(!isChecked)} />}
                            label="Hiện mât khẩu"
                        />
                    </FormGroup>
                </Stack>
            </Stack>
            <Stack direction={'column'} spacing={1} alignItems={'center'}>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={login}
                    type="submit"
                >
                    Đăng nhập
                </Button>
                <Typography
                    component={Link}
                    href=""
                    fontWeight="500"
                    sx={{
                        // marginTop: '5px',
                        textDecoration: "none",
                        color: "primary.main",
                    }}
                >
                    Quên mật khẩu ?
                </Typography>
                <Divider variant="middle"
                    style={{ width: '100%' }}
                    sx={{ marginTop: '15px' }}
                >Hoặc</Divider>
                <Button
                    sx={{ marginTop: '20px' }}
                    variant="outlined"
                    size="large"
                    fullWidth
                    type="submit"
                    startIcon={<GoogleIcon />}
                >
                    Đăng nhập với Google
                </Button>
            </Stack>
            {subtitle}
        </>
    );
}

export default AuthLogin;
