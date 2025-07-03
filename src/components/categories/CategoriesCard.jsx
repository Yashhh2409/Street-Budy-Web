import React from 'react'
import Image from 'next/image';

const CategoriesCard = ({Img, catName}) => {
  return (
    <div className='w-[120] md:w-[180px] h-[120] md:h-[180px] bg-white rounded-md flex items-center justify-center shadow-lg hover:bg-[#FFF8F3] transition-colors duration-300'>
        <div className='flex flex-col justify-center items-center gap-1'>
            <div className='w-[50px] md:w-[80px] h-[50px] md:h-[80px] overflow-hidden rounded-md'>
                <Image src={Img} width={80} height={80} alt='img' className='rounded-md w-full h-full object-cover hover:scale-125 transition-transform duration-300'/>
            </div>
            <p className='text-[13px] md:text-md font-semibold'>{catName}</p>
        </div>
    </div>
  )
}

export default CategoriesCard