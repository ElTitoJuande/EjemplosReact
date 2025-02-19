import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

const Home = () => {
  const [productos, setProducto] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then(respuesta => respuesta.json())
      .then(datos => setProducto(datos.products.slice(0,10)))
  }, [])

  return (
    <>
      <section className='max-w-[960px] mx-auto border p-5 '>
        <Card productos={productos}/>
      </section>
    </>
  )
}

export default Home