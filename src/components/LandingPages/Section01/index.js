import React from 'react'

const Section01 = ({ data }) => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-[#000742]">
      <div className="flex flex-col lg:flex-row">
        <h2 className=" font-sans text-white font-black text-center text-[50px] 2xl:text-9xl ">
          {data.title.textTa} &nbsp;
          <br className="md:hidden" />
          {data.title.textTb} &nbsp;
          <br className="md:hidden" />
          {data.title.textTc} &nbsp;
        </h2>
      </div>
      <p className="font-sans  w-11/12 px-5  text-white text-center text-[30px] mt-10 2xl:text-5xl">
        {data.paragraph.textP}
      </p>
    </div>
  )
}

export default Section01
