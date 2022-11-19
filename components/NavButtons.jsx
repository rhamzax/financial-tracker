import React from 'react'
import Link from 'next/link'

export const NavButtons = ({title}) => {
  return (
    <Link href={`/${title}`}>
        {title}
    </Link>
  )
}

