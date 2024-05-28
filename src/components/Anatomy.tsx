import React from 'react'
import Bit from './Bit';
import Nibble from './Nibble';
import Byte from './Byte';
import Word from './Word';

interface Props{
    system: "bin" | "hex" | "oct" | "dec";
    value: String;
}

const Anatomy = ({system, value}:Props) => {

    let val :React.ReactNode;
    let bits : React.ReactNode[] = []; 
    let nibbles : React.ReactNode[] = [];
    let bytes : React.ReactNode[] = [];
    let words : React.ReactNode[] = [];
    switch(system){
        case "bin":
            let placeholderBin = "00000000000000000000000000000000";
            value = (value.length < 32? placeholderBin.slice(value.length).concat(value as string) : value )
            bits = value.split('').map((char)=> <Bit bit={char}/>);
            for (let index = 0; index < bits.length;) {
                nibbles.push(<Nibble bits={bits.slice(index, index+4)}/>);
                index = index+4;
            }
            for (let index = 0; index < nibbles.length;) {
                bytes.push(<Byte nibbles={nibbles.slice(index, index+2)}/>);
                index = index+2;
            }
            for (let index = 0; index < bytes.length;) {
                words.push(<Word bytes={bytes.slice(index, index+4)}/>);
                index = index+4;
            }
            val = words;
        break;
        case "hex":
            let placeholderHex = "00000000";
            value = (value.length < 8? placeholderHex.slice(value.length).concat(value as string) : value)
            nibbles = value.split('').map((char)=> <Nibble bits={[<>{char}</>]}/>);
            for (let index = 0; index < nibbles.length;) {
                bytes.push(<Byte nibbles={nibbles.slice(index, index+2)}/>);
                index = index+2;
            }
            for (let index = 0; index < bytes.length;) {
                words.push(<Word bytes={bytes.slice(index, index+4)}/>);
                index = index+4;
            }
            val = words;
        break;
    } 
  return (
    <div className='flex flex-col overflow-scroll'>
        <div className='flex gap-4 self-center'>
            {val}
        </div>
    </div>
  )
}

export default Anatomy