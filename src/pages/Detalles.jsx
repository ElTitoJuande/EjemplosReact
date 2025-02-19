import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Detalles = () => {

  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(respuesta => respuesta.json())
      .then(datos => setProducto(datos))
  }, []);

  return (
    <>
      <section className='max-w-[960px] mx-auto border p-5 '>
        <img src={producto.images} alt="" className='h-[400px] mx-auto' />
        <h1 className='text-4xl font-medium'>{producto.title}</h1>
      </section>

    </>
  )
}

export default Detalles