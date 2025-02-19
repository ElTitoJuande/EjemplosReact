import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav className='space-x-2'>

                <Link to="/" className='enlace'>Home</Link>
                <Link to="/productos" className='enlace'>Productos</Link>
                <Link to="/contacto" className='enlace'>Contacto</Link>

            </nav>
        </>
    )
}

export default Nav