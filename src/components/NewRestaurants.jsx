import React from 'react'
import NewRestaurantsCard from './Custom/NewRestaurantsCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const NewRestaurants = () => {
  return (
    <>
    <div className='w-full md:px-48'>
        <div className=' relative bg-[#F7DFCC] p-2 px-4 py-4'>
            <p className='text-xl text-start md:text-center font-bold py-4'>New on StackFood</p>
        <div className='flex gap-4 md:flex-wrap overflow-x-scroll no-scrollbar'>
           <NewRestaurantsCard />
           <NewRestaurantsCard />
           <NewRestaurantsCard />
           <NewRestaurantsCard />
           <NewRestaurantsCard />
           <NewRestaurantsCard />
        </div>

        <div className='absolute top-5 right-6 bg-white w-8 h-8 flex items-center justify-center rounded-full border-2 border-orange-500'>
            <FontAwesomeIcon icon={faChevronRight} className='text-orange-400'/>
        </div>
        </div>
    </div>
    </>
  )
}

export default NewRestaurants