import React from 'react'

const Header = ({title}) => {
  return (
    <div>
        <section className='bg-red-500 py-4 md:py-6'>
            <div className="max-w-container mx-auto">
                <h2 className='text-white md:text-4xl text-2xl px-4 md:px-0 uppercase font-medium font-moderustic'>{title}</h2>
            </div>
        </section>
    </div>
  )
}

export default Header