import React from 'react'

interface Props{
    nibbles: React.ReactNode[];
}
const Byte = ({nibbles}: Props) => {
  return (
    <div className='hover:bg-blue-300 p-2 flex'>
        {nibbles.map((nibbleNode)=>nibbleNode)}
    </div>
  )
}

export default Byte