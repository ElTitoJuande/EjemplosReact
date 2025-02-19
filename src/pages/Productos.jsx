import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Home from './Home'

const Productos = () => {
  const [productos, setProductos] = useState([])
  useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then(respuesta => respuesta.json())
      .then(datos => setProductos(datos.products));
  }, [])
  console.log(productos)

  return (
    <>
      <section className='grid grid-cols-3 my-5 mb-[100px] max-w-[1200px] mx-auto gap-5'>

        <Card productos={productos} />
        <Home productos={productos} />
      </section>
    </>
  )
}

export default Productos