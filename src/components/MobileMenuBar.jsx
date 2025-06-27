"use client"

import React from 'react'
import useMediaQuery from '@/hooks/useMediaQuery';
import MenuBar from './Custom/MenuBar';

const MobileMenuBar = () => {

    

    const isMobile = useMediaQuery('(max-width: 767px)');

  return isMobile ? <MenuBar /> : "" ;

}

export default MobileMenuBar