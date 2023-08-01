import React from 'react';
import Banner from '@/components/UI/Banner';
import MainLayout from '@/components/Layouts/MainLayout';
import { useGetPCsQuery } from '@/redux/api/apiSlice';
import Loader from '@/components/UI/Shared/Loader'
import Head from 'next/head';
import FeaturedProducts from '@/components/UI/FeaturedProducts';
import FeaturedCategories from '@/components/UI/FeaturedCategories';

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
      {
        isLoading ? <Loader />
          : <FeaturedCategories/>
      }

    </div>
  );
};



export default Home;

Home.getLayout = function getLayout(page) {
  return <MainLayout> {page} </MainLayout>;
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/?limit=6"`);
  const data = await res.json()
  return {
    props: {
      allPc: data
    },
    revalidate: 10,
  }
}