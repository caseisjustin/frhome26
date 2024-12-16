import Brands from '@/components/brands/Brands'
import Hero from '@/components/hero/Hero'
import Products from '@/components/products/Products'
import { useFetch } from '@/hooks/useFetch'
import React from 'react'

const Home = () => {
  const {data,error,loading} = useFetch("/product/get")
  return (
    <div>
      <Hero/>
      <Brands/>
      <Products isAdmin={false} data={data}/>
    </div>
  )
}

export default Home