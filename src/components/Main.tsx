import React from 'react'

const Main = () => {
  return (
    <div className=' h-full w-full flex flex-col items-center pt-10 bg-[#fafafa]'>
        <form onSubmit={()=>console.log("submitted")}>
            <input className='rounded-md p-2 w-full border-2 border-black' type='number' placeholder='0'/>
        </form>
    </div>
  )
}

export default Main