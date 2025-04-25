import React from 'react'

import BestSeller from '../components/BestSeller'
import MainBanner from '../components/MainBanner'
import Categories from '../components/categories'
const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner/>
        <Categories/>
        <BestSeller/>
    </div>
  )
}

export default Home