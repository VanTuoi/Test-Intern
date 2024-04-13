// Third-party
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'
// In the Project
import axios from 'axios';

const useProduct = () => {

    const getProducts = async () => {
        try {
            const response = await axios.get('/api/products');
            if (response) {
                return (response.data);
            } else {
                return ([]);
            }
        } catch (error) {
            console.log('Lỗi khi lấy dữ liệu sản phẩm:', error);
            return ([]);
        }
    };

    const deleteProduct = async (productId) => {
        try {
            const response = await axios.delete('/api/products', { data: { id: productId } });
            if (response.status === 200) {
                return true
            }
            return false
        } catch (error) {
            console.log('Lỗi khi xóa sản phẩm:', error);
        }
    };

    const updateProduct = async (productId, title, photo, price) => {
        try {
            const response = await axios.put('/api/products', { data: { id: +productId, title: title, photo: photo, price: price } });
            if (response.status === 200) {
                return true
            }
            return false
        } catch (error) {
            console.log('Lỗi khi sửa sản phẩm:', error);
        }
    };

    const addProduct = async (productId, title, photo, price) => {
        try {
            const response = await axios.post('/api/products', { data: { id: +productId, title: title, photo: photo, price: price } });
            if (response.status === 200) {
                return true
            }
            return false
        } catch (error) {
            console.log('Lỗi khi thêm sản phẩm:', error);
        }
    };

    return {
        getProducts,
        addProduct,
        updateProduct,
        deleteProduct,
    };
}

export default useProduct
