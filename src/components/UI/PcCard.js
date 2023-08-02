import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsStarFill } from 'react-icons/bs'
import { addSelectedProduct } from '@/redux/features/product/productSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useRouter } from 'next/router';

const PcCard = ({ pc }) => {
    const dispatch = useAppDispatch();
    const ratingArray = Array.from({ length: pc.rating });
const navigate = useRouter();
    const handleAddProduct = () => {
        dispatch(addSelectedProduct({ category: pc.category, product: pc }));
        navigate.push(`/pc/buildPc`);
    };

    return (
        <div className='p-5  flex flex-col  bg-[#202020] rounded-lg '>
            <Image className="mx-auto" src={pc?.img} alt={pc.name} width={200} height={100} />
            <h2 className='text-center text-xl font-bold text-[#fff] mt-8'>{pc.name}</h2>
            <div className='text-start gap-x-8 mt-4 border p-5 rounded-md border-[#918d8d]'>
                <div>
                    <div className='flex gap-x-4 mb-4'>
                        <div className="badge badge-primary text-white font-semibold">{pc.category}</div>
                        <div className="badge badge-secondary text-white font-semibold">{pc.status}</div>
                    </div>
                    <h2 className='text-start text-4xl font-semibold text-[#df1abea1]'>${pc.price}</h2>
                    <div className='flex gap-x-[3px] mt-4'>
                        {ratingArray.map((_, i) => (
                            <h2 key={i} className='text-3xl text-yellow-500'> <BsStarFill /></h2>
                        ))}
                    </div>


                </div>
                <div className='flex items-center justify-between'>
                    <button onClick={handleAddProduct} className='btn btn-outline btn-primary'>Add</button>
                    <Link className='flex justify-end' href={`/pc/${pc._id}`}>
                        <button className='btn btn-primary mt-4'>Details</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default PcCard;
