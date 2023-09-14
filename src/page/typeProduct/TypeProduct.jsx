

import React from 'react'
import { NavbarComponent, CardComponent } from '../../components'
import { Pagination } from 'antd'
const TypeProduct = () => {
  return (
    <section className=' bg-gray-100'>
      <div className='flex w-1280 mx-auto'>
        <NavbarComponent />
        <CardComponent />
      </div>
      <div className='flex justify-center mt-20'>
        <Pagination defaultCurrent={6} total={500} />
      </div>

    </section>
  )
}

export default TypeProduct
