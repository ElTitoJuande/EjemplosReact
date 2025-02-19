import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ productos }) => {
    console.log(productos)
    return (
        <>

            {
                productos?.map(producto => (
                    <div key={producto.id} className='border border-amber-300 text-center p-5 min-h-[400px]'>
                        <img src={producto.images[0]} alt="" className='h-[200px] mx-auto' />
                        <h2 className='font-medium text-2xl'>{producto.title}</h2>
                        <p className='text-[15px] my-3'>{producto.description}</p>
                        <Link to={`${producto.id}`} className='boton'>Más detalles</Link>
                    </div>
                ))
            }

        </>
    )
}

export default Card