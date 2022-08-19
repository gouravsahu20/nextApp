import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className="mainnav shadow-md">
        <ul>
          <Link href={'/'}><li>Home</li></Link>
          <Link href={'/blogs'}><li>Blogs</li></Link>
          <Link href={'/about'}><li>About</li></Link>
          <Link href={'/contact'}><li>Contact</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
