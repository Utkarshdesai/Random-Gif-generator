import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner';
import Usegig from './Usegig';


export const RandomQuoet = () => {

  const {  isloading ,getquoet, getdata } = Usegig()
   
  return (
    <div className=' bg-green-500 border-black w-1/2 flex flex-col  items-center gap-y-5 mt-[15px] rounded-md'>
     
       <div className='text-2xl underline uppercase font-bold mt-2 '> A Random Gif</div> 

        
          { isloading ? <Spinner/> :  <img src= {getquoet} width="450" />  }


           <div className='w-full flex justify-center'>
          <button onClick = { () => getdata ()} className='bg-white w-10/12 text-lg py-2 rounded-lg h-[40px] mb-[20px]'> Genrate </button>
        </div>
       
    </div>
  )
}
