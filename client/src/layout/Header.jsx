import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/Basket'}>Basket</Link>
        <Link to={'/Add'}>Add</Link>
        <Link to={'/WishList'}>WishList</Link>
        
    </div>
  )
}

export default Header