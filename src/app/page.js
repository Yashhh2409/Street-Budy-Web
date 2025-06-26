
import AdBanner from '@/components/AdBanner'
import CardsCarousel from '@/components/CardsCarousel'
import DineIn from '@/components/DineIn'
import CardComponent from '@/components/FoodTypeCarouel'
import NewRestaurants from '@/components/NewRestaurants'
import OfferCarousel from '@/components/OfferCarousel'
import RestaurantCardSlider from '@/components/RestaurantCardSlider'
import React from 'react'

const page = () => {
  return (
    <div className='h-auto'>
      <CardComponent />
      <OfferCarousel /> 
      <CardsCarousel />
      <DineIn />
      <RestaurantCardSlider />
      <NewRestaurants />
      <AdBanner />
    </div>
  )
}

export default page