import React from 'react'

export const Budget = () => {
  return (
    <div>
      <h1 className=''>Budget</h1>
      <div className='border-8'>
        <h1>Income</h1>
        <div>
          <div className='flex justify-between'>
            <h2>Income</h2>
            <h2><span className='font-semibold'>$152</span> over</h2>
          </div>
            <div className="w-full bg-gray-200 rounded-md dark:bg-gray-700 my-2 col-span-2 ">
              <div className={`bg-red-400 text-base font-medium text-white text-right py-1 leading-none rounded-md`} style={{width:`80%`}}>
                <span className='px-1'>152</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
