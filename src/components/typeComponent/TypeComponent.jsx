import React from 'react'

const TypeComponent = () => {
  const type = [
    { id: 1, name: 'Tivi' },
    { id: 2, name: 'Tủ Lạnh' },
    { id: 3, name: 'Lap top' },
  ]
  return (

    <section className=' '>
      <div className='container'>
        <ul className='flex justify-start items-center '>
          {type && type.length > 0 && type.map((type) => (
            <li
              key={type.id}
              className='text-2xl px-6 py-4 hover:bg-gray-400 hover:text-gray-50'
            >
              {type.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TypeComponent
