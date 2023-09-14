import React from 'react'
import './Home.scss';
import { TypeComponent, SliderComponent, CardComponent, NavbarComponent } from '../../components'
import slider1 from '../../assets/img/img1.png'
import slider2 from '../../assets/img/img2.png'
import slider3 from '../../assets/img/img3.png'
import slider4 from '../../assets/img/img4.png'

const Home = () => {

  return (
    <>
      <section className='bg-gray-100 '>
        <div className='mx-auto w-1280'>
          <TypeComponent />
          <SliderComponent
            arrImage={[slider1, slider2, slider3, slider4]}
          />
          <div className='flex'>
            <CardComponent />
          </div>

          <div className='flex justify-center mt-8'>
            <button className='px-20 py-4 rounded-md text-2xl text-white bg-blue-600 hover:bg-blue-400'>Xem thêm</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
