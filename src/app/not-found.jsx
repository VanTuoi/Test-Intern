'use client'
import { Button } from "@mui/material"
import { Box } from "@mui/system"
import { useRouter } from "next/navigation"

export default function NotFound() {

    const router = useRouter()

    const handleClickHome = () => {
        router.push('/')
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img style={{ height: '80vh', width: 'auto' }} src={'/images/404/not_found.png'} ></img>
            <Button sx={{ fontSize: '20px' }} onClick={() => handleClickHome()} variant="contained">Về trang chủ</Button>
        </Box>

    )
}