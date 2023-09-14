

import React from 'react'
import { DetailComponent } from '../../components'

const DetailPage = () => {
  return (
    <>
      <section className='bg-gray-100'>
        <div className=' mx-auto w-1280'>
          <p className='py-5 text-2xl text-gray-500'>Trang chu</p>
          <DetailComponent />
        </div>
      </section >
    </>
  )
}

export default DetailPage
