
'use client'
import Link from "next/link";
import {
    CardContent,
    Typography,
    Grid,
    Rating,
    Tooltip,
    Fab,
} from "@mui/material";
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack } from "@mui/system";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import BlankCard from "@/app/(home)/components/shared/BlankCard";

import { useRouter } from "next/navigation";
import { useAppDispatch } from '@/lib/hooks';
import productSlice from '@/lib/features/productSlice'
import useProduct from "@/hook/product/useProduct";

const Blog = () => {

    const router = useRouter()
    const dispatch = useAppDispatch()
    const [products, setProducts] = React.useState([])
    const [open, setOpen] = React.useState(false);                          // Dialog
    const [idProductSelect, setIdproductSelect] = React.useState(null)      // Id product delete

    const { getProducts, deleteProduct } = useProduct()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                setProducts(response);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();
    }, []);



    const handleClickOpen = (product_id) => {
        setOpen(true);
        setIdproductSelect(product_id)
    };

    const handleClickNo = async () => {
        setOpen(false)
    }

    const handleDelete = async () => {
        try {
            const response = await deleteProduct(idProductSelect);
            if (response) {
                const response = await getProducts();
                setProducts(response);
            }
            setOpen(false);

        } catch (error) {
            console.error('Error fetching products:', error);
        }

    };

    const handleClickEdit = (product) => {
        dispatch(productSlice.actions.setProduct(product))
        router.push('/edit')
    }

    return (
        <>
            <Grid container spacing={5}>
                {products && products.map((product, index) => (
                    <Grid item xs={12} md={4} lg={3} key={index}>
                        <BlankCard sx={{ position: 'relative' }}>
                            <Typography component={Link} href="/">
                                <img
                                    src={product.photo}
                                    alt="img"
                                    style={{ width: "100%", height: "300px", objectFit: "cover" }}
                                />
                            </Typography>
                            {/* Delete icon positioned at the top right corner of the image */}
                            <Tooltip
                                title="Xóa"
                                placement="top"
                                onClick={() => handleClickOpen(product.id)}
                                sx={{
                                    position: 'absolute',
                                    top: 1,
                                    right: 1,
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: 'primary.main', // giữ màu nút khi hover
                                        '@media (hover: none)': {
                                            backgroundColor: 'primary.main' // đảm bảo trên thiết bị không có hover cũng không thay đổi
                                        }
                                    }
                                }} >
                                <Fab
                                    size="small"
                                    color="primary"
                                >
                                    <IconTrash size="16" color="#fff" />
                                </Fab>
                            </Tooltip>

                            <CardContent sx={{ p: 2, pt: 1 }}>
                                <Stack direction="row" spacing={1} sx={{ position: "absolute", bottom: "65px", right: "5px" }}>
                                    <Tooltip
                                        title="Chỉnh sửa"
                                        onClick={() => handleClickEdit(product)}
                                    >
                                        <Fab
                                            size="small"
                                            color="primary"
                                        >
                                            <IconEdit size="16" />
                                        </Fab>
                                    </Tooltip>
                                </Stack>
                                <Typography variant="h5Secondary">{product.title}</Typography>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    mt={1}
                                >
                                    <Stack direction="row" alignItems="center">
                                        <Typography variant="h6">{product.price}đ</Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </BlankCard>
                    </Grid>
                ))
                }
            </Grid >
            <React.Fragment>
                <Dialog
                    open={open}
                    onClose={handleDelete}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Xóa sản phẩm"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Bạn muốn xóa sản phẩm khỏi danh sách sản phẩm của hệ thống. Lưu ý hành động này không thể khôi phục !
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClickNo}>Hủy</Button>
                        <Button onClick={handleDelete} autoFocus variant="contained">
                            Xóa
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </>
    );
};

export default Blog;
