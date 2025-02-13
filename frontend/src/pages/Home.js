import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return ( 
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"dairy products"} heading={"Dairy Products"}/>
      <HorizontalCardProduct category={"fruits & vegetables"} heading={"Fruits & Vegetables"}/>

      <VerticalCardProduct category={"cold-drinks & juices"} heading={"Cold-Drinks & Juices"}/>
      <VerticalCardProduct category={"snacks & munchies"} heading={"Snacks & Munchies"}/>
      <VerticalCardProduct category={"instant-food"} heading={"Instant-Food"}/>
      <VerticalCardProduct category={"sweets"} heading={"Sweets"}/>
      <VerticalCardProduct category={"medicines & care"} heading={"Medicines & Care"}/>
      <VerticalCardProduct category={"house-care"} heading={"House-Care"}/>
      <VerticalCardProduct category={"pet-section"} heading={"Pet-Section"}/>
      <VerticalCardProduct category={"personal care"} heading={"Personal Care"}/>
      <VerticalCardProduct category={"area specific"} heading={"Area Specific"}/>
    </div>
  )
}

export default Home