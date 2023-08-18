import React, { useState } from 'react'
import Usegig from './Usegig'
import { Spinner } from './Spinner'

export const Tagquoet = () => {

  const [tag , setinputype] = useState('')

  const {isloading ,getdata, getquoet } = Usegig(tag)

  
 
  function changehandler (event)
   {
      setinputype (event.target.value)
   }


  return (
    
    <div className=' bg-blue-500 border-black  flex flex-col  items-center gap-y-5 mt-2 w-1/2 rounded-md'>
     
     <div className='text-2xl underline uppercase font-bold  mt-2'> Random  {tag} Gif</div> 

      <div>

        { isloading ? <Spinner > </Spinner> : <img src = {getquoet} width="450" loading='lazy'/>  }

      </div> 

      <input
          className=' w-1/2 rounded-sm p-2 text-center'
          onChange={changehandler}
          value={tag}
          
      
      />
 
      <div className='w-full flex justify-center'>
        <button onClick={ () => getdata (tag)} className='bg-white w-10/12 text-lg py-2 rounded-lg h-[40px] mb-[20px]'> Genrate </button>
      </div>
     

    
    
    
    
    
    
    
    
    
    
    
    
     </div>
  )
}
