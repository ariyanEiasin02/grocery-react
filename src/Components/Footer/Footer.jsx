import React from 'react'

const Footer = ({ length }) => {
    return (
        <section className='bg-teal-500 py-6 fixed left-0 bottom-0 w-full'>
            <div className="max-w-container mx-auto">
                <div className="flex justify-between">
                    <p className='text-white text-xl font-light font-moderustic'>© Copyright grocery list 2024.</p>
                    <p className='text-white text-xl font-light font-moderustic'>items {length}</p>
                </div>
            </div>
        </section>
    )
}

export default Footer