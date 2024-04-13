import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'json', 'products.json');
        const data = await fs.readFile(filePath, 'utf-8');
        const products = JSON.parse(data);
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.error(new Error('Error reading products file'));
    }
}

export async function POST(req, res) {
    const body = await req.json();
    // console.log(body);

    try {
        const filePath = path.join(process.cwd(), 'json', 'products.json');
        const data = await fs.readFile(filePath, 'utf-8');

        let products = JSON.parse(data);
        const newProductId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
        const newProduct = { id: newProductId, ...body.data };
        products.push(newProduct);
        await fs.writeFile(filePath, JSON.stringify(products, null, 2));

        return NextResponse.json({ message: 'Product added successfully', newProduct });
    } catch (error) {
        return NextResponse.error(new Error('Error adding product'));
    }
}

export async function PUT(req, res) {
    const body = await req.json();
    // console.log(body);

    try {
        const filePath = path.join(process.cwd(), 'json', 'products.json');
        const data = await fs.readFile(filePath, 'utf-8');

        let products = JSON.parse(data);

        const index = products.findIndex(product => product.id === body.data.id);
        if (index !== -1) {
            products[index] = { ...products[index], ...body.data };
            await fs.writeFile(filePath, JSON.stringify(products, null, 2));

            return NextResponse.json({ message: 'Product updated successfully', updatedProduct: products[index] });
        } else {
            return NextResponse.error(new Error('Product not found'), { status: 404 });
        }
    } catch (error) {
        return NextResponse.error(new Error('Error updating product'));
    }
}

export async function DELETE(req, res) {

    const body = await req.json();

    try {
        const filePath = path.join(process.cwd(), 'json', 'products.json');
        const data = await fs.readFile(filePath, 'utf-8');

        let products = JSON.parse(data);

        const index = products.findIndex(product => product.id === body.id);
        if (index !== -1) {
            products.splice(index, 1);
            await fs.writeFile(filePath, JSON.stringify(products, null, 2));
            return NextResponse.json({ message: 'Product deleted successfully', status: 200 });
        } else {
            return NextResponse.error(new Error('Product not found'), { status: 404 });
        }
    } catch (error) {
        return NextResponse.error(new Error('Error deleting product'));
    }
}