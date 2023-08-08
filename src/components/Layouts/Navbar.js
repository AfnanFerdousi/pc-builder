import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSession,  signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()
    const categories = [
        "Processor",
        "Motherboard",
        "RAM",
        "Power Supply Unit",
        "Storage Device",
        "Monitor",
        "Others"]
        console.log(session)
    return (
        <div className="navbar bg-base-100 px-9">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">Tech Store</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/pc/buildPc">PC Builder</Link>
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
                    <li>
                        {
                            session?.user ? 
                            <button onClick={()=> signOut()} className='border-[2px] rounded-md border-red-500' >Log Out</button>
                                :<Link className='border-[2px] rounded-md' href="/login">Log In</Link>
                             
                       }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;