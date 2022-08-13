import React from 'react'

const Section02 = ({ data }) => {
  return (
    <div className=" flex flex-col h-[100vh] justify-center items-end lg:items-start">
      <h3 className="text-5xl lg:text-6xl 2xl:text-9xl lg:w-[50vw] text-right pr-12 pl-16	">
        <span className="font-sans font-bold text-[#960909]">
          {data.title.textTa}{' '}
        </span>
        {data.title.textTb}
      </h3>
      <div className="pl-5 pr-10 mt-20 lg:w-[60vw] lg:ml-[35vw]">
        <p className="font-sans text-left text-2xl 2xl:text-5xl">
          {data.paragraph.textP}
        </p>
      </div>
    </div>
  )
}

export default Section02
