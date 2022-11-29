import { Link, Outlet } from 'react-router-dom'

import React from 'react'

const Products = () => {
  return (
    <>
        <div>
          <input type='search' placeholder='Search products' />
        </div>
        <nav>
          <Link to='featured'>Featured</Link>
          <Link to='new'>New</Link>

          {/* same as
           <Link to='/Products/featured'>Featured</Link>
          <Link to='/Products/new'>New</Link>
          */}
        </nav>
        <Outlet />
      </>
  )
}

export default Products


