import Head from 'next/head'

import Hero from '../components/Home/Hero'
import Products from '../components/Home/Products'


export default function Home({data}) {
 
  return (
   <>
    <Hero/>
    <Products products={data}/>
    
   </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://fakestoreapi.com/products`)
  const data = await res.json()

  return { props: { data } }
}
