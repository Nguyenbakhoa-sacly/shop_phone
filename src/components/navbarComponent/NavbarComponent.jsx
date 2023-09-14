

import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMinus } from 'react-icons/ai'
import { Button, Checkbox, Input, Rate } from 'antd'
const NavbarComponent = () => {

  const onChange = (e) => {

  }

  const renderContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((item, index) => {
          return (
            <li key={index} className='py-2'>
              <Link className='text-xl ' to=''>{item}</Link>
            </li>
          )
        })
      case 'checkbox':
        return options.map((item, index) => {
          return (
            <li key={index} className='py-2'>
              <Checkbox className=' text-xl'
              // value={item}
              // onChange={onChange}
              >
                {item}
              </Checkbox>
            </li>
          )
        })
      case 'star':
        return options.map((item, index) => {
          return (
            <li key={index} className='py-2 cursor-pointer'>
              <Rate
                className='text-xl mr-4'
                disabled defaultValue={item.value} />
              <span className='text-xl'>{item.text}</span>
            </li>
          )
        })
      case 'price':
        return options.map((item, index) => {
          return (
            <li key={index}
              className='py-2 '>
              <span
                className=' text-xl cursor-pointer py-2 px-5 rounded-3xl bg-gray-200'>{item}</span>
            </li>
          )
        })
      default:
        return null
    }
  }
  return (
    <nav className=' mt-12 mr-4 rounded-md'>
      <div className='bg-white p-8 w-248'>
        <h4 className='text-3xl pb-4'>Danh mục sản phẩm</h4>
        <div>
          <ul className='w-full'>
            {renderContent('text', [
              'Điện thoại Samrtphone',
              'Máy tính bảng',
              'Máy đọc sách',
              'Điện thoại phổ thông',
              'Điện thoại bàn'
            ])}
          </ul>
        </div>
        <h4 className='text-3xl pb-4 mt-6'>Dịch vụ</h4>
        <div>
          <ul className='w-full'>
            {renderContent('checkbox', [
              'Giao Siêu Tốc 2H',
              'Thưởng Thêm Átra',
              'Trả Góp 0%',
              'Giảm Sâu',
            ])}
          </ul>
        </div>
        <h4 className='text-3xl pb-4 mt-6'>Đánh giá</h4>
        <div>
          <ul className='w-full'>
            {renderContent('star', [
              { text: 'Từ 5 sao', value: 5 },
              { text: 'Từ 4 sao', value: 4 },
              { text: 'Từ 3 sao', value: 3 },
            ])}
          </ul>
        </div>
        <div>
          <h4 className='text-3xl pb-4 mt-6'>Giá</h4>
          <div className='mb-4'>
            <ul className='w-full'>
              {renderContent('price', [
                'Dưới 1.500.000',
                '1.500.000 đến 5.000.000',
                '5.000.000 đến 23.000.000',
                'Trên 23.000.000',
              ])}
            </ul>
          </div>
          <span className='text-xl'>Chọn khoảng giá</span>
          <div className='flex items-center gap-5 my-4'>
            <Input defaultValue="0" />
            <span><AiOutlineMinus /></span>
            <Input defaultValue="0" />
          </div>
          <Button type="primary" className='w-full text-xl' ghost>
            Áp dụng
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent
