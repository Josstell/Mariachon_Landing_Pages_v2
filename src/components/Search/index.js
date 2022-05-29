import React, { useEffect, useState } from 'react'

import { SearchIcon } from '@heroicons/react/solid'

const SearchGral = ({ regions }) => {
  const [setEstado, setSetEstado] = useState('Estado')

  useEffect(() => {
    console.log('sleg::  ', setEstado)
  }, [setEstado])

  return (
    <div className="flex items-center justify-center">
      <div
        className={`flex border-2 bg-white/90 rounded-full px-4 md:px-4 py-2 `}
      >
        <input
          type="datetime-local"
          className={` outline-none	border-0	 ml-4 px-1 md:px-4 text-slate-900 	 py-4 w-60 md:w-80 bg-white/90`}
        />
        <div className="border-l-4 border-slate-900 " />

        <select className="block appearance-none w-40  text-slate-900 outline-none	border-0  bg-white/90   hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>Estado</option>
          {regions
            ? regions.map((reg) => {
                console.log('slug: ', reg.slug)
                return (
                  <option
                    key={reg.region}
                    onChange={() => setSetEstado(reg.slug)}
                  >
                    {reg.region}
                  </option>
                )
              })
            : null}
        </select>
        {/* 
        <select className="relative block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>Estado </option>

          {/* {regions
            ? regions.map((reg) => {
                return <option key={reg.region}>{reg.region}</option>
              })
            : null} 
        </select> */}

        <button className="flex items-center justify-center px-1 md:px-2 border-0 md:border-l ">
          <SearchIcon className="w-10 fill-slate-900" />
        </button>
      </div>
    </div>
  )
}

export default SearchGral
