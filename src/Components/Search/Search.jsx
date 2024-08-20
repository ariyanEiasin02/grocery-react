import React from 'react'
import { FaSearch } from "react-icons/fa";
const Search = ({search,setSearch}) => {
    return (
        <div>
            <div className="max-w-container mx-auto">
                <form className='relative px-4 md:px-0' action="search" onSubmit={(e) => e.preventDefault()}>
                    <label className='absolute top-9 right-8 md:right-4 text-[#457FB4] text-xl' htmlFor=""><FaSearch/></label>
                    <input className='mt-4 border text-xl w-full border-[#d1d1d1] py-4 rounded-md md:px-8 px-4' type="text" placeholder='Search.....' value={search} onChange={(e) => setSearch(e.target.value)} />
                </form>
            </div>
        </div>
    )
}

export default Search