import React, { useRef } from 'react'
import { FaPlus } from "react-icons/fa";
const AddItem = ({newItem,setNewItem,handleSubmit}) => {
    const inputRef = useRef()
    return (
        <div>
            <div className="max-w-container mx-auto">
                <form action="" onSubmit={handleSubmit}>
                    <div className="mt-6 flex px-4 md:px-0 justify-between items-center justify-center gap-x-6">
                        <div className="md:w-[93%] w-[80%]">
                            <label className='text-black text-2xl font-medium font-moderustic' htmlFor="">Add Item :</label>
                            <input ref={inputRef} autoFocus className='mt-4 border w-full border-[#d1d1d1] py-4 rounded-md md:px-8 px-4' type="text" value={newItem} onChange={(e)=> setNewItem(e.target.value)} placeholder='Add Item'/>
                        </div>
                        <div className="md:w-[7%]">
                            <button className='py-5 hover:bg-teal-500 hover:text-white mt-11 rounded-md px-6 border font-medium text-[#457FB4]' type='submit' onClick={()=> inputRef.current.focus()}><FaPlus /></button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddItem

