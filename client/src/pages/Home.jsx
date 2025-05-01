import React from 'react'

import BestSeller from '../components/BestSeller'
import MainBanner from '../components/MainBanner'
import Categories from '../components/categories'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NEwsLetter'
const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner/>
        <Categories/>
        <BestSeller/>
        <BottomBanner/>
        <NewsLetter/>
    </div>
  )
}

export default Home