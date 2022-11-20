import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const NavButtons = ({title, symbol}) => {
  return (
    <div className='py-2 px-1 hover:bg-gray-200'>
      <Link href={`/${title}`} >
          {title}
      </Link>
    </div>
   
  )
}

