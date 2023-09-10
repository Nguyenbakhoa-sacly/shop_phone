
import './app.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './containers/Layout'
import { Home, Login, Logout, NotFound, Order, Products } from './page'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/order' element={<Order />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/*' element={< NotFound />} />
      </Routes>
    </>
  )
}

export default App
