
import CardsCarousel from '@/components/CardsCarousel'
import DineIn from '@/components/DineIn'
import CardComponent from '@/components/FoodTypeCarouel'
import NewRestaurants from '@/components/NewRestaurants'
import OfferCarousel from '@/components/OfferCarousel'
import RestaurantCardSlider from '@/components/RestaurantCardSlider'
import React from 'react'

const page = () => {
  return (
    <div className='h-[1000px]'>
      <CardComponent />
      <OfferCarousel /> 
      <CardsCarousel />
      <DineIn />
      <RestaurantCardSlider />
      <NewRestaurants />
    </div>
  )
}

export default page