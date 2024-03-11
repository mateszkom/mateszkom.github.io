// components/Header.js

import React from 'react'
import Image from 'next/image'
import intervar1 from '/public/images/projects/intervar/intervar1.svg'
import intervar2 from '/public/images/projects/intervar/intervar2.svg'
const IntervarHeader = () => {
  return (
    <div className=" ml-2 flex h-40 flex-row  justify-between rounded-md  bg-neutral-100 p-2 shadow dark:bg-neutral-900">
      <div className=" justify-spac ml-5  mr-5 flex flex-col justify-center  ">
        <h5 className="text-xs">Case Study</h5>
        <div className="flex flex-row">
          <h3>Inter</h3>
          <h3 className="text-red-500 dark:text-red-600">var</h3>
        </div>
      </div>
      <div className="ml-2 flex  flex-col justify-center sm:ml-2">
        <Image
          src={intervar1}
          priority={true}
          alt="My image"
          className="-mb-20 ml-12 w-32"
        />
        <Image
          src={intervar2}
          priority={true}
          alt="My image"
          className=" w-32"
        />
      </div>
    </div>
  )
}

export default IntervarHeader
