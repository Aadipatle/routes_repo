import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <header>
      <nav>
        <Link to={'/home'}>Home</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/register'}>Register</Link>
        <Link to={'/api'}>Products</Link>
        <Link to={'/storage'}>Storage</Link>
      </nav>
    </header>
    </>
  )
}

export default Header