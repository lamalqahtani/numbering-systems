import React from 'react'

interface Props{
    bit: String;
}
const Bit = ({bit}:Props) => {
  return (
    <div className=' hover:bg-blue-500 p-2'>{bit}</div>
  )
}

export default Bit