import React from 'react'

import ItemList from '../ItemList';
const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <section>
            <div className="max-w-container mx-auto">
                {items.length ? (
                       <ItemList
                       items={items}
                       handleCheck={handleCheck}
                       handleDelete={handleDelete}
                       />
                ):(
                    <div className="flex justify-center py-20">
                        <p className='text-black text-xl font-light font-moderustic'>Your list is empty</p>
                    </div>
                )}
                
            </div>
        </section>
    )
}

export default Content