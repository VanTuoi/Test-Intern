'use client'
import { styled, Container, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "@/app/(home)/layout/header/Header";
import Footer from "@/app/(home)/layout/footer/Footer";
import { usePathname } from 'next/navigation'

const MainWrapper = styled("div")({
    display: "flex",
    minHeight: "100vh",
    width: "100%",
});

const PageWrapper = styled("div")({
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    zIndex: 1,
});

export default function RootLayout({ children }) {

    return (
        <MainWrapper className="mainwrapper">
            <PageWrapper className="page-wrapper">
                <Header />
                <Box
                    sx={{
                        minHeight: '80vh',
                        position: 'relative',
                        zIndex: 2,
                    }}
                >
                    {children}
                </Box>
                <Footer />
            </PageWrapper>
        </MainWrapper>
    );
}