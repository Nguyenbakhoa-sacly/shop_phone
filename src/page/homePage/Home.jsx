import React from 'react'
import { TypeProducts, SliderComponent } from '../../components'
import slider1 from '../../assets/img/img1.png'
import slider2 from '../../assets/img/img2.png'
import slider3 from '../../assets/img/img3.png'
import slider4 from '../../assets/img/img4.png'

const Home = () => {

  return (
    <>
      <section className='bg-gray-100 h-100vh'>
        <TypeProducts />
        <SliderComponent
          arrImage={[slider1, slider2, slider3, slider4]}
        />
      </section>
    </>
  )
}

export default Home
