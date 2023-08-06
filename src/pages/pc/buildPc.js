import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/Layouts/MainLayout';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { removeSelectedProduct } from '@/redux/features/product/productSlice';
import axios from 'axios';

const BuildPc = () => {
    const selectedProducts = useAppSelector((state) => state.product.products);
    const requiredCategories = ["Processor", "Motherboard", "RAM", "Power Supply Unit", "Storage Device"];
    const categories = [
        "Processor",
        "Motherboard",
        "RAM",
        "Power Supply Unit",
        "Storage Device",
        "Monitor",
        "Others",
    ];
    const dispatch = useAppDispatch();

    const [username, setUsername] = useState('afnan');
    const [totalCost, setTotalCost] = useState(0);

    const isRequiredCategoriesSelected = requiredCategories.every((category) =>
        selectedProducts.some((product) => product.category === category)
    );

    const handleCompleteBuilding = async () => {
        const selectedProductsArray = selectedProducts.map((product) => product.product);
        console.log(selectedProductsArray);

        // Perform the form submission using Axios
        try {
            const response = await axios.post('https://pc-builder-server-orpin.vercel.app/addBuildedPc', {
                selectedProducts: selectedProductsArray,
                username,
                totalCost,
            });

            // Handle the response here if needed
            console.log('Server Response:', response.data);

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const getProductForCategory = (category) => {
        const productForCategory = selectedProducts.find((product) => product.category === category);
        return productForCategory
            ? { name: productForCategory?.product?.name, image: productForCategory?.product?.img }
            : { name: category, image: null };
    };

    return (
        <div>
            <Head>
                <title>Build PC</title>
            </Head>
            <div className='px-12 my-12'>
                <h2 className='text-2xl font-semibold text-[#df1abea1] pb-8'>##Build Your Dream PC</h2>
                <div className=''>
                    {categories.map((category) => (
                        <div key={category} className='flex items-center justify-between border p-4 rounded-lg my-3'>
                            {getProductForCategory(category).image && (
                                <div className='w-12 h-12 mr-2'>
                                    <Image
                                        src={getProductForCategory(category).image}
                                        alt={getProductForCategory(category).name}
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            )}
                            <h2 className='text-xl text-[#fff] font-bold'>{getProductForCategory(category).name}</h2>
                            <Link href={`/category/${category}`} className='btn btn-outline btn-primary'>
                                choose
                            </Link>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleCompleteBuilding}
                    className={`btn btn-outline btn-primary text-center w-full ${isRequiredCategoriesSelected ? '' : 'cursor-not-allowed opacity-50'
                        }`}
                    disabled={!isRequiredCategoriesSelected}
                >
                    COMPLETE BUILDING
                </button>
            </div>
        </div>
    );
};

export default BuildPc;