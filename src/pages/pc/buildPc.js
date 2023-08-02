import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import MainLayout from '@/components/Layouts/MainLayout';
import { useAppSelector } from '../../redux/hooks';

const BuildPc = () => {
    const selectedProducts = useAppSelector((state) => state);
    const categories = [
        "Processor",
        "Motherboard",
        "RAM",
        "Power Supply Unit",
        "Storage Device",
        "Monitor",
        "Others"]
    console.log("selectedProducts----", selectedProducts)
    return (
        <div>
            <Head>
                <title>Build PC</title>
            </Head>
            <div className='px-12 my-12'>
                <h2 className='text-2xl font-semibold text-[#df1abea1] pb-8'>##Build Your Dream PC</h2>
                <div className=''>
                    {
                        categories.map((category) => (
                            <div key={category} className='flex items-center justify-between border p-4 rounded-lg my-3'>
                                <h2 className='text-xl text-[#fff] font-bold '>{category}</h2>
                                <Link href={`/category/${category}`} className='btn btn-outline btn-primary '>choose</Link>
                            </div>
                        ))
                    }
                </div>

                <button className='btn btn-outline btn-primary text-center w-full'>COMPLETE BUILDING</button>
            </div>
        </div>
    );
};

export default BuildPc;


BuildPc.getLayout = function getLayout(page) {
    return <MainLayout> {page} </MainLayout>;
}
