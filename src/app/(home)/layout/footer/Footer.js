import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link, styled, Button } from '@mui/material';
import { Stack } from '@mui/system';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const FooterStyled = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.footer.background,
    color: theme.palette.footer.color,
    padding: theme.spacing(2),
    marginTop: '100px',                 // Cách phần tử cuối
    zIndex: 0,
    '& a': {
        color: theme.palette.footer.color,
        textDecoration: 'none',
    },
    '& svg': {
        fill: theme.palette.footer.color
    },
}));

const Footer = () => {
    return (
        <FooterStyled component="footer">
            <Container maxWidth="lg">
                <Grid container spacing={3} alignItems="center" justifyContent="space-between">
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h3Secondary" gutterBottom>
                            The Coffee
                        </Typography>
                        <Typography variant="subtitle1">
                            Chúng tôi luôn mang đến cho bạn những thứ tốt nhất.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container justifyContent="flex-end" spacing={2}>
                            <Grid item>
                                <Link href="#" underline="none">Chính sách</Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" underline="none">Giới thiệu</Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" underline="none">Trang chủ</Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" underline="none">Hợp tác</Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" underline="none">Liên hệ</Link>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="flex-end" sx={{ marginTop: '5px' }}>
                            <IconButton sx={{ color: '#fff' }}>
                                <YouTubeIcon />
                            </IconButton>
                            <IconButton sx={{ color: '#fff' }}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton sx={{ color: '#fff' }}>
                                <LinkedInIcon />
                            </IconButton>
                        </Grid>

                    </Grid>
                </Grid>
                <Stack direction={'column'} spacing={1} justifyContent={'flex-start'} sx={{ marginTop: '20px' }}>
                    <Typography variant='body1' >
                        THÔNG TIN LIÊN HỆ
                    </Typography>
                    <Typography variant='body2'>
                        Văn Phòng TP.HCM: Lầu 13, Tòa nhà M-H, Số 728-730 Võ Văn Kiệt, P.1, Quận 5, TP Hồ Chí Minh
                    </Typography>
                    <Typography variant="body2">
                        Tổng đài:
                        <Link href="tel:18001533" color="inherit">
                            1800 1533
                        </Link>
                        {' | '}
                        Email:
                        <Link href="mailto:opentable@org.com" color="inherit">
                            support@opentable.com
                        </Link>
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ cursor: 'pointer' }}>
                        <Link href="mailto:opentable@org.com" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body2">
                                Đóng góp ý kiến
                            </Typography>
                            <ForwardToInboxIcon sx={{ marginLeft: '5px', fontSize: '18px' }} />
                        </Link>
                    </Stack>
                </Stack>
                <Stack mt={1} mb={1} textAlign="center" direction={'column'} spacing={1}>
                    <Divider />
                    <Typography variant="body2">
                        © {new Date().getFullYear()}  COPYRIGHT 2010 OPENTABLE.JSC, ALL RIGHTS RESERVED
                    </Typography>
                </Stack>
            </Container>
        </FooterStyled >
    );
};

export default Footer;
