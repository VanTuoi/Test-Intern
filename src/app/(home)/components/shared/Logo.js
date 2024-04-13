
// Third-party
import Link from "next/link";
import Image from "next/image";
import { Typography, styled } from "@mui/material";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
// In The Project


const Logo = () => {

    const router = useRouter();

    const handleClickHome = () => {
        router.push('/');
    };

    return (
        <Typography
            variant='h2Secondary'
            sx={{
                cursor: 'pointer'
            }}
            color={(theme) => theme.palette.logo.nonTop}
            onClick={() => handleClickHome()}
        >
            The Coffee
        </Typography>
    );
};

export default Logo;
