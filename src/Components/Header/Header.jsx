import React from 'react'

const Header = ({title}) => {
  return (
    <div>
        <section className='bg-red-500 py-6'>
            <div className="max-w-container mx-auto">
                <h2 className='text-white text-4xl uppercase font-medium font-moderustic'>{title}</h2>
            </div>
        </section>
    </div>
  )
}

export default Header