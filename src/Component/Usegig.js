import { useEffect, useState } from "react"  
import axios from "axios"

const API_KEY = 'TLvgfI2YWbUaQft9Kl60D32Rw40a9ULz'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

//custome hook
function Usegig (tag) 

{
 
  const [getquoet ,setquoet] = useState ('')
  const [isloading ,setloding ] = useState (false)

  //API call
  async function getdata (tag) 
   {   
   setloding(true) 
   const {data} = await axios.get( tag ? `${url}&tag=${tag}` : url)
   setquoet(data.data.images.downsized_large.url)
   setloding(false)
   }

    useEffect (  () => {
         getdata(tag)
    }, [])
   
  
    return { isloading ,getquoet ,getdata }

}

export default Usegig 