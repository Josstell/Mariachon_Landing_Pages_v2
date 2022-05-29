import React from 'react'

const Section01 = ({ data }) => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-[#000742]">
      <div className="flex flex-col lg:flex-row">
        <h2 className=" font-Roboto text-white font-extrabold text-center px-3 text-4xl md:text-[50px] 2xl:text-9xl pb-5">
          {data.title.textT}
        </h2>
      </div>
      <p className="font-Roboto font-normal w-11/12 px-1  text-white text-center text-xl md:text-[30px] mt-10 2xl:text-5xl">
        {data.paragraph.textP}
      </p>
    </div>
  )
}

export default Section01
