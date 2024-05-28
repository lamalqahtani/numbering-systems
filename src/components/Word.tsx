import React from 'react'

interface Props{
    bytes: React.ReactNode[];
}
const Word = ({bytes}: Props) => {
  return (
    <div className='hover:bg-gray-300 p-2 flex'>
        {bytes.map((byteNode)=> byteNode)}
    </div>
  )
}

export default Word