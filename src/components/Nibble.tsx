import React from 'react'

interface Props{
    bits: React.ReactNode[];
}
const Nibble = ({bits}:Props) => {
  return (
    <div className=' hover:bg-red-300 p-2 flex'>
        {bits.map((bitNode)=> bitNode)}
    </div>
  )
}

export default Nibble