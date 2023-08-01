import Link from 'next/link';
import React from 'react';

const FeaturedCategories = () => {
    const categories = [
        "Processor",
        "Motherboard",
        "RAM",
        "Power Supply Unit",
        "Storage Device",
        "Monitor",
        "Others"]
    return (
        <div className='px-12 my-12'>
            <h2 className='text-4xl font-semibold text-[#df1abea1] py-8'>##Featured Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center mx-auto '>
                {categories.map((category) => (
                    <div key={category} className="card border transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-[rgba(177,37,147,0.3)]  duration-300">
                        <div className="card-body text-center">

                            <Link href={`/category/${category}`}>
                                <h2 className="text-center text-2xl font-bold">{category}</h2>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default FeaturedCategories;