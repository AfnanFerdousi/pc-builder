import React from 'react';
import Banner from '@/components/UI/Banner';
import MainLayout from '@/components/Layouts/MainLayout';

const Home = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};



export default Home;

Home.getLayout = function getLayout(page) {
  return <MainLayout> {page} </MainLayout>;
}