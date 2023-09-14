
import { Routes, Route } from 'react-router-dom'
import Layout from './containers/Layout'
import {
  Home, SignIn, SignUp, NotFound, Order, Products, TypeProduct, ForgetPage, DetailPage
} from './page'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/order' element={<Order />} />
          <Route path='/type' element={<TypeProduct />} />
          <Route path='/product_detail' element={<DetailPage />} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forget' element={<ForgetPage />} />
        <Route path='/*' element={< NotFound />} />
      </Routes>
    </>
  )
}

export default App
