import React from 'react';
import { BsGithub } from 'react-icons/bs';
import {signIn} from 'next-auth/react'
import Head from 'next/head';
import MainLayout from '@/components/Layouts/MainLayout';

const Login = () => {
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <button
                                onClick={() => signIn('github', {
                                    callbackUrl: ""
                                })}
                                className="mb-6 flex items-center text-xl gap-x-5 btn btn-outline btn-primary">Login with github <BsGithub /></button>
                            <div className="form-control">

                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <MainLayout> {page} </MainLayout>;
}
