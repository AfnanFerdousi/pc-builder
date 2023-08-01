import React from 'react';
import PcCard from './PcCard';

const FeaturedProducts = ({ data }) => {
    console.log(data)
    return (
        <div className='px-12 my-12'>
            <h2 className='text-4xl font-semibold text-[#df1abea1] py-8'>##Featured Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center mx-auto'>
                {
                    data?.map((pc) => (
                        <PcCard key={pc._id} pc={pc} />
                    ))
                }

            </div>
        </div>
    );
};

export default FeaturedProducts;