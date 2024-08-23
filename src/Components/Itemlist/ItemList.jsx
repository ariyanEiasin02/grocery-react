import React from 'react'
import { MdDelete } from "react-icons/md";
const ItemList = ({items,handleCheck,handleDelete}) => {
    return (
        <div>
            <ul className='px-4 md:px-0'>
                {items.map((item) => (
                    <li className='bg-[#d1d1d1] rounded-lg px-4 py-6 mt-6' key={item.id}>
                        <div className="flex justify-between items-center">
                            <div className="">
                                <input className='w-8 h-8' type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} placeholder='Items List' />
                                <label onDoubleClick={() => handleCheck(item.id)} className={`font-light font-moderustic text-xl ml-4 md:ml-8 ${item.checked ? "line-through" : ""}`} htmlFor="">{item.item}</label>
                            </div>
                            <div className="">
                                <button className='text-3xl text-[#457FB4] hover:text-teal-500 duration-300' onClick={() => handleDelete(item.id)}><MdDelete /></button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ItemList