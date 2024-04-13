"use client";
import { Container, Box } from "@mui/material";
import React, { useState } from "react";

export default function RootLayout({ children }) {


  return (
    <Box>
      {children}
    </Box>
  );
}
