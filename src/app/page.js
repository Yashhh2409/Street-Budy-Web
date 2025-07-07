
import AdBanner from '@/components/AdBanner'
import AllRestaurantsList from '@/components/AllRestaurantsList'
import CardsCarousel from '@/components/CardsCarousel'
import CuisineSlider from '@/components/CuisineSlider'
import MenuBar from '@/components/Custom/MenuBar'
import DineIn from '@/components/DineIn'
import CardComponent from '@/components/FoodTypeCarouel'
import Footer from '@/components/Footer'
import MobileMenuBar from '@/components/MobileMenuBar'
import NewRestaurants from '@/components/NewRestaurants'
import OfferCarousel from '@/components/OfferCarousel'
import RestaurantCardSlider from '@/components/RestaurantCardSlider'
import React from 'react'

const page = () => {
  return (
    <div className='h-auto'>
      <CardComponent />
      <OfferCarousel /> 
      <div className='md:px-48'>
        <CardsCarousel />
      </div>
      <DineIn />
      
      <div className='md:px-48 my-4'>

      <CuisineSlider />
      </div>
      <RestaurantCardSlider />
      <NewRestaurants />
      <AdBanner />
      <AllRestaurantsList />
     
      <MobileMenuBar />
    </div>
  )
}

export default page