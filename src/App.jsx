import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Plantilla from './layout/Plantilla'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Detalles from './pages/Detalles'
import Contacto from './pages/Contacto'
import Error from './pages/Error'

function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Plantilla />}>
            <Route index element={<Home />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='productos/:id' element={<Detalles />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/*' element={<Error />} />
          </Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
