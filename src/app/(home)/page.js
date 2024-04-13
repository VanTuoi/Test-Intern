'use client'
import { useRouter } from "next/navigation";
import { Grid, Box, Container, Typography, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PageContainer from '@/app/(home)/components/container/PageContainer';
// components
import Home from '@/app/(home)/components/dashboard/Products';

const Dashboard = () => {

    const router = useRouter()

    const handleClickAdd = () => {
        router.push('/add')
    }

    return (
        <PageContainer title="" description="this is home page">
            <Grid container spacing={3}>
                <Grid item xs={12} lg={12}>
                    <Container>
                        <Box m={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography
                                variant='h2Secondary'
                                color={(theme) => theme.palette.primary.main}
                                style={{ textAlign: 'center' }}
                            >
                                Danh mục đồ uống của cửa hàng
                            </Typography>
                        </Box>
                        <Home />
                    </Container>
                </Grid>
            </Grid>
            {/* AddButton */}
            <Box style={{ position: 'fixed', bottom: '20px', right: '20px' }} onClick={() => handleClickAdd()}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Box>
        </PageContainer>
    )
}

export default Dashboard;
