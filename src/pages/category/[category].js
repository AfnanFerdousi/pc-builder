import React from 'react';
import MainLayout from '@/components/Layouts/MainLayout';
import PcCard from '@/components/UI/PcCard';
import Head from 'next/head';

const CategorizedProducts = ({ categoryProducts }) => {

    console.log(categoryProducts)
    const products = categoryProducts?.data
    return (
        <div>
            <Head>
                <title>Categorized Products</title>
            </Head>
            <div className='px-12 my-12'>
                <h2 className='text-2xl font-semibold text-[#df1abea1] pb-8'>##Showing products according to category: </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center mx-auto'>
                    {
                        products?.map((product) => (
                            <PcCard pc={product} key={product._id} />
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default CategorizedProducts;

CategorizedProducts.getLayout = function getLayout(page) {
    return <MainLayout> {page} </MainLayout>;
}

export const getStaticProps = async (context) => {
    // if (typeof window === 'undefined') {
    //     return {
    //         props: {
    //             categoryProducts: [],
    //         }
    //     };

    // }
    const { params } = context;
    const { category } = params;

    const apiUrl = `https://pc-builder-afnanferdousi.vercel.app/api/pc?category=${category}`;

    const res = await fetch(apiUrl);
    const data = await res.json();

    return {
        props: {
            categoryProducts: data,
        },
    };
};

// Implement getStaticPaths to specify all possible paths for 'id'
export const getStaticPaths = async () => {
    // Fetch the list of all products or PC IDs from your API
    const apiUrl = "https://pc-builder-afnanferdousi.vercel.app/api/pc"

    const res = await fetch(apiUrl);
    const data = await res.json();
    const paths = data.data.map((product) => ({
        params: { category: product.category }, // Assuming 'product._id' is the ID of each product
    }));

    return {
        paths,
        fallback: false,
    };
};
