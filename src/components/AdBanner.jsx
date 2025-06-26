import Image from 'next/image'
import React from 'react'

const AdBanner = () => {
  return (
    <>
    <div className='w-full px-3 md:px-48 my-5'>
        <div className='w-full md:h-[120px] overflow-hidden rounded-xl '>
            <Image src={"/assets/OfferBanners/bannerAdd.png"} width={500} height={300} alt='img' className='w-full h-full object-cover transition-transform hover:scale-110 duration-300 rounded-xl'/>
        </div>
    </div>
    </>
  )
}

export default AdBanner