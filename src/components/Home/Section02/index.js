import Image from 'next/image'
import React from 'react'

const Section02 = ({ data }) => {
  console.log('datos Section02', data)
  return (
    <div className=" flex flex-col h-fill justify-center items-end lg:items-start">
      <h3 className="font-Roboto text-[#960909] font-bold text-5xl lg:text-6xl lg:px-40 lg:font-Roboto lg:font-black lg:text-7xl lg:mt-36  text-center px-3 my-5	">
        {data.title.textT}
      </h3>
      <div className="pl-5 pr-10 mt-20  flex flex-col lg:flex-row justify-between items-center ">
        {data?.paragraph
          ? data.paragraph.map((para, index) => {
              return (
                <div key={index} className="my-28 lg:w-1/4">
                  <div className=" w-50 h-44 relative mb-16">
                    <Image
                      src={para.icon.url}
                      alt={para.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="font-sans text-center text-2xl ">
                    {para.textP}
                  </p>
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default Section02
