import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Navbar = () => {
    const navigate = useRouter();
    const categories = [
        "Processor",
        "Motherboard",
        "RAM",
        "Power Supply Unit",
        "Storage Device",
        "Monitor",
        "Others"]
    return (
        <div className="navbar bg-base-100 px-9">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Tech Store</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/">PC Builder</Link>
                    </li>
                    <li>
                        <details>
                            <summary>
                                Categories 
                            </summary>
                            <ul className="p-2 bg-base-100 ">
                                {categories.map((category) => (
                                    <li className='w-full' key={category}>
                                        <Link href={`/category/${category}`}>{category}</Link>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;