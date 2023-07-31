import React from 'react';
import Banner from '@/components/UI/Banner';
import MainLayout from '@/components/Layouts/MainLayout';
import { useGetPCsQuery } from '@/redux/api/apiSlice';
import Loader from '@/components/UI/Shared/Loader'
import Head from 'next/head';

const Home = ({ allPc }) => {
  console.log(allPc)
  const { data, isLoading } = useGetPCsQuery()
  if(isLoading) return <Loader/>
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Banner />

    </div>
  );
};



export default Home;

Home.getLayout = function getLayout(page) {
  return <MainLayout> {page} </MainLayout>;
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api");
  const data = res.json()
  return {
    props: {
      allPc: data
    },
    revalidate: 10,
  }
}