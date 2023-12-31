import Head from 'next/head';
import React from 'react';
import MainLayout from '@/components/Layouts/MainLayout';
import Image from 'next/image';
import { BsStarFill } from 'react-icons/bs';

const Details = ({ singleProduct }) => {
    const product = singleProduct?.data
    const indRate = Array.from({ length: product.rating });
    const avgRate = Array.from({ length: product.avgRate });

    return (
        <div>
            <Head>
                <title>{product.name}</title>
            </Head>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row lg:items-center lg:justify-center">
                    <Image src={product.img} alt={product.name} width={400} height={300} />
                    <div>

                        <div className='flex gap-x-4 mb-4'>
                            <div className="badge badge-primary text-white font-semibold">{product.category}</div>
                            <div className="badge badge-secondary text-white font-semibold">{product.status}</div>
                        </div>
                        <h2 className='text-3xl font-bold'>{product.name}</h2>
                        <h2 className='text-start text-4xl font-semibold text-[#df1abea1]'>${product.price}</h2>
                        {/* rating */}
                        <div className='flex items-center  gap-x-6'>
                            <div className='flex items-center gap-x-4'>
                                <h2 className='pt-4 font-semibold'>Individual:</h2>
                                <div className='flex gap-x-[3px] mt-4 items-center'>
                                    {indRate.map((_, i) => (
                                        <h2 key={i} className='text-2xl text-yellow-500'> <BsStarFill /></h2>
                                    ))}
                                </div>
                            </div>
                            <div className='flex items-center gap-x-4'>
                                <h2 className='pt-4 font-semibold'>Average:</h2>
                                <div className='flex gap-x-[3px] mt-4 items-center'>
                                    {avgRate.map((_, i) => (
                                        <h2 key={i} className='text-2xl text-purple-600'> <BsStarFill /></h2>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='p-5 mt-5 w-full border border-[#333] rounded-lg'>
                            {Object.keys(product.features).map((key) => (
                                <p key={key}>
                                    <strong className='mr-4'>{key}: </strong>
                                    {product.features[key]}
                                </p>
                            ))}

                            <p className='text-lg font-medium text-justify mt-4'>{product.desc}</p>
                        </div>

                        {/* reviews */}
                        <div>
                            <h2 className='text-2xl font-semibold text-[#df1abea1] py-8'>##What Our Customers Say</h2>
                            <div>
                                {product.reviews.map((review) => (
                                    <div key={review._id} className='border border-[#dd90d0a1] rounded-md p-4 my-4'>
                                        <h2 className='font-bold '>@{review.name}</h2>
                                        <p className='italic pt-2'>{review.review}</p>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;

Details.getLayout = function getLayout(page) {
    return <MainLayout> {page} </MainLayout>;
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const { id } = params;

    const apiUrl = `https://pc-builder-afnanferdousi.vercel.app/api/pc?id=${id}`;

    const res = await fetch(apiUrl);
    const data = await res.json();

    return {
        props: {
            singleProduct: data,
        },
        revalidate: 10,
    };
};

export const getStaticPaths = async () => {
    // Fetch the list of all products or PC IDs from your API
    const apiUrl = process.env.API_URL // Update the URL if needed

    const res = await fetch(apiUrl);
    const data = await res.json();
    const paths = data.data.map((product) => ({
        params: { id: product._id }, // Assuming 'product._id' is the ID of each product
    }));

    return {
        paths,
        fallback: false,
    };
};
