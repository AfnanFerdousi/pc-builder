import React from 'react';
import Banner from '@/components/UI/Banner';
import MainLayout from '@/components/Layouts/MainLayout';
import { useGetPCsQuery } from '@/redux/api/apiSlice';
import Loader from '@/components/UI/Shared/Loader'
import Head from 'next/head';
import FeaturedProducts from '@/components/UI/FeaturedProducts';

const Home = ({ allPc }) => {
  console.log(allPc)
  const { data, isLoading } = useGetPCsQuery()

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Banner />
      {
        isLoading ? <Loader />
          : <FeaturedProducts data={allPc?.data} />
      }


    </div>
  );
};



export default Home;

Home.getLayout = function getLayout(page) {
  return <MainLayout> {page} </MainLayout>;
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/pc?limit=6");
  const data = await res.json()
  return {
    props: {
      allPc: data
    },
    revalidate: 10,
  }
}