import React from 'react'
import Logo from '../Logo/Logo'

export default function Header() {
  return (
    <div className='flex items-center h-[54px] px-4 py-3' role="header-component"> 
        <Logo />
    </div>
  )
}
