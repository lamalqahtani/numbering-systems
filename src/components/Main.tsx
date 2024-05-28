import React, { useRef, useState } from 'react'
import { decToBin } from '../helpers/convert'
import Anatomy from './Anatomy';

const Main = () => {
    const inputRef = useRef(0);
    const [binary, setBinary] = useState<string>("0");
    const [decimal, setDecimal] = useState<number>(0);
    const [octal, setOctal] = useState<number>(0);
    const [hexadecimal, setHexadecimal] = useState<string>("0");
    const [mode, setMode] = useState<"bin" | "hex" | "oct" | "dec">("bin");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const decimalNumber : number = Number.parseInt(inputRef.current.value);
        setDecimal(decimalNumber);
        setBinary(decimalNumber.toString(2));
        setOctal(Number.parseInt(decimalNumber.toString(8)));
        setHexadecimal(decimalNumber.toString(16).toUpperCase());
    }
  return (
    <div className=' h-full w-10/12 flex flex-col gap-4 pt-10'>
        <form className='flex gap-4' onSubmit={(e)=>onSubmit(e)}>
            <input ref={inputRef} className='rounded-md p-2 w-full border-2 border-black' type='number' min={0} placeholder='0'/>
            <button type='submit'>submit</button>
        </form>
        <div className=' w-full text-left'>
        <p>Binary: {binary}</p>
        <p>Octal: {octal}</p>
        <p>Decimal: {decimal}</p>
        <p>Hexadecimal: {hexadecimal}</p>
        </div>
        <option value=""></option>
        <select className=' w-40' name="system" onChange={(e)=>setMode(e.target.value)}>
            <option value="bin">Binary</option>
            <option value="hex">Hexadecimal</option>
        </select>
        <Anatomy system={mode} value={(mode == "bin"? binary : hexadecimal)}/>
    </div>
  )
}

export default Main