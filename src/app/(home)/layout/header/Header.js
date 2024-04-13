
// Third-party
import React, { useEffect, useState, useRef } from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';

// In The Project
import Logo from "@/app/(home)/components/shared/Logo";
import Profile from '@/app/(home)/layout/header/Profile';

const Header = ({ }) => {

    const AppBarStyled = styled(AppBar)(({ theme }) => ({
        zIndex: '100',
        color: theme.palette.text.primary,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.10)',
        backgroundColor: theme.palette.header.onTop,
        justifyContent: 'center',
    }));

    const ToolbarStyledTop = styled(Toolbar)(({ theme }) => ({
        width: '100%',
        backgroundColor: theme.palette.header.onTop,
        color: theme.palette.logo.nonTop,
        minHeight: '70px !important'
    }));

    return (
        <AppBarStyled position="sticky" >
            <ToolbarStyledTop>
                <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
                    <Logo></Logo>
                    <Stack spacing={1} direction="row" alignItems="center">
                        <Profile haveNameLogin={'Trần Văn Tươi'} />
                    </Stack>
                </Stack>
            </ToolbarStyledTop>
        </AppBarStyled>
    );
};

Header.propTypes = {
    sx: PropTypes.object,
};

export default Header;
