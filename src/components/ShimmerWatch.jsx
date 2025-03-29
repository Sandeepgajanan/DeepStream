import React from 'react'
import ShimmerRecom from './ShimmerRecom'

const ShimmerWatch = () => {
  return (
    <div className="flex ml-40 p-1 h-[calc(100vh-64px)] overflow-y-auto justify-between w-full max-sm:ml-0 max-sm:p-2 max-sm:flex-col ">
    <div className="flex flex-col shadow-md w-[42rem] overflow-hidden rounded-xl space-y-2  max-sm:w-full">
      <div className="h-96  bg-zinc-400  rounded-xl max-sm:h-48 ">
      </div>
      <div className=" min-h-20 space-y-4 p-3">
        <h1 className=" h-6 bg-zinc-400 rounded-lg"></h1>
        <p className="h-4 bg-zinc-400 rounded-lg"></p>
      </div>
    </div>
    <div className="w-[26rem]  max-sm:relative max-sm:w-full  ">
    <div className="w-full shadow-md  py-1 flex flex-col items-center  gap-6 border-l-2 border-zinc-200 px-2 ">
        {Array(4)
          .fill()
          .map((_, index) => (
            <ShimmerRecom key={index} />
          ))}
      </div>
      </div>
  </div>
  )
}

export default ShimmerWatch
