'use client'
import React, { useEffect, useState } from 'react';
import { Grid, Box, Container, Typography } from '@mui/material';
import { Stack, Button } from '@mui/material';
import { toast } from 'react-toastify';

// In the Project
import PageContainer from '@/app/(home)/components/container/PageContainer';
import CustomTextField from '@/app/(home)/components/shared/CustomTextField';
import CustomTypography from '@/app/(home)/components/shared/CustomTypography';
import { useAppSelector } from '@/lib/hooks';
import useProduct from '@/hook/product/useProduct';


const Edit = () => {

    const { updateProduct } = useProduct()

    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('');
    const [id, setId] = useState('')
    const [price, setPrice] = useState(0)

    let idToRedux = useAppSelector(state => state.reducer.product.product.id)
    let titleToRedux = useAppSelector(state => state.reducer.product.product.title)
    let imageToRedux = useAppSelector(state => state.reducer.product.product.photo)
    let priceToRedux = useAppSelector(state => state.reducer.product.product.price)

    useEffect(() => {
        setId(idToRedux);
        setTitle(titleToRedux);
        setImageUrl(imageToRedux);
        setPrice(priceToRedux);
    },
        [titleToRedux,
            imageToRedux,
            idToRedux,
            priceToRedux
        ]
    )

    const handleUpdateProduct = async () => {
        let response = await updateProduct(id, title, imageUrl, price)
        if (response) {
            toast.success('Chỉnh sửa thành công')
        }
    }

    return (
        <PageContainer title="" description="this is home page">
            <Container>
                <Grid container spacing={3} >
                    <Grid item xs={12} lg={12}>
                        <Box m={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography
                                variant='h2Secondary'
                                color={(theme) => theme.palette.primary.main}
                                style={{ textAlign: 'center' }}
                            >
                                Thay đổi thông tin đồ uống
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Stack direction={'column'} spacing={2} sx={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
                            <Typography id='Account' variant='h5'>Chi tiết đồ uống</Typography>
                            <Stack direction={'column'} spacing={1}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    component="label"
                                    htmlFor="username"
                                    mb="5px"
                                >
                                    Id đồ uống
                                </Typography>
                                <CustomTextField
                                    value={id}
                                    disabled
                                    variant="outlined"
                                    type="text"
                                    sx={{ width: '20%' }} // Thêm dòng này
                                />
                                <Stack direction={'column'} spacing={1} justifyContent={'flex-start'}>
                                    <Box width={'300px'} height={'350px'} border="1px solid gray" borderRadius='3px' alignItems={'center'}>
                                        {imageUrl ?
                                            <img
                                                src={imageUrl}
                                                alt="img product"
                                                style={{ width: "300px", height: "350px", objectFit: "cover", borderRadius: '3px' }}
                                            />
                                            : <Box
                                                sx={{ padding: '10px', width: '100%', height: '350px' }}
                                            >Xem trước ảnh đồ uống</Box>}
                                    </Box>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                        gutterBottom
                                    >
                                        URL ảnh đồ uống:
                                    </Typography>
                                    <CustomTextField
                                        value={imageUrl}
                                        onChange={(e) => setImageUrl(e.target.value)}
                                        variant="outlined"
                                        type="text"
                                        sx={{ width: '100%' }} // Thêm dòng này
                                    />
                                </Stack>

                            </Stack>
                            <Stack direction={'column'} spacing={1}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    component="label"
                                    htmlFor="username"
                                    mb="5px"
                                >
                                    Tên đồ uống
                                </Typography>
                                <CustomTextField
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    variant="outlined"
                                    type="email"
                                    sx={{ width: '100%' }} // Thêm dòng này
                                />
                            </Stack>
                            <Stack direction={'column'} spacing={1}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    component="label"
                                    htmlFor="username"
                                    mb="5px"
                                >
                                    Giá bán
                                </Typography>
                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                    <CustomTextField
                                        value={price}
                                        onChange={(event) => setPrice(event.target.value)}
                                        variant="outlined"
                                        type="number"
                                    />
                                </Stack>
                            </Stack>
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} width={'100%'}>
                                <Button onClick={() => handleUpdateProduct()} variant='contained' fullWidth>Lưu lại</Button>
                            </Box>
                        </Stack >
                    </Grid>
                    <Grid item xs={12} lg={3}>
                    </Grid>
                </Grid>
            </Container>
        </PageContainer>
    )
}

export default Edit;
