import {v4} from 'https://deno.land/std/uuid/mod.ts';
import {Product} from '../types.ts';

let products: Product[] = [
    {id: '1', name: 'product 1', description: 'this is product 1', price: 10},
    {id: '2', name: 'product 2', description: 'this is product 2', price: 20},
    {id: '2', name: 'product 2', description: 'this is product 2', price: 20},
    {id: '4', name: 'product 4', description: 'this is product 4', price: 40},
    {id: '5', name: 'product 5', description: 'this is product 5', price: 50},
];

// @desc    Get all Products
// @route   GET /api/v1/products
const getProducts = ({response}: {response:any}) => {
    response.body = {
        success: true,
        data: products
    }
};

// @desc    Get single Product
// @route   GET /api/v1/products/:id
const getProduct = ({params, response}: {params: {id: string}, response:any}) => {
    const product: Product | undefined = products.find(p => p.id === params.id);
    if (product) {
        response.status = 200,
        response.body = {
            success: true,
            data: product
        }  
    } else {
        response.status = 404,
        response.body = {
            success: false,
            msg: 'No product found'
        }
    }
};

// @desc    add single Product
// @route   POST /api/v1/products/:id
const addProduct = async ({request,  response}: {request: any, response:any}) => {
    const body = await request.body();

    if (!request.hasBody) {
        response.status = 400;
        response.body = {
            success: false,
            msg: 'No data'
        }
    } else {
        const product: Product = body.value;
        product.id = v4.generate();
        products.push(product);
        response.status = 201;
        response.body = {
            success: true,
            data: product
        }
    }
};

// @desc    update single Product
// @route   PUT /api/v1/products/:id
const updateProduct = async ({params, request, response}: {params: {id: string}, request: any, response:any}) => {
    const product: Product | undefined = products.find(p => p.id === params.id);
    if (product) {
        const body = await request.body();
        const updateData: {name?: string; description?: string; price?: number} = body.value;
        products = products.map(p => p.id === params.id ? {...p, ...updateData} : p);
    } else {
        response.status = 404,
        response.body = {
            success: false,
            msg: 'No product found'
        }
    }
};

// @desc    delete single Product
// @route   DELETE /api/v1/products/:id
const deleteProduct = ({params, response}: {params: {id: string}, response: any}) => {
    products = products.filter(p => p.id !== params.id);
    response.body = {
        success: true,
        msg: 'Product removed'
    }
};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct }