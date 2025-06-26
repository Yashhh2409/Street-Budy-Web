"use client"

import useMediaQuery from '@/hooks/useMediaQuery'
import React from 'react'
import dynamic from 'next/dynamic';

const MobileHeader = dynamic(() => import('./MobileHeader'), {ssr: false});
const DesktopHeader = dynamic(() => import('./DesktopHeader'), {ssr: false});


const Header = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}

export default Header;