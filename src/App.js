
import './App.css';
import { RandomQuoet } from './Component/RandomQuoet';
import { Tagquoet } from './Component/Tagquoet';

function App() {
  return (
    <div className ="flex overflow-x-hidden  flex-col w-screen h-screen background  relative items-center" >
     
      <h1 className='bg-white w-11/12 mt -[40px]  ml-[25px] px-10 py-2 rounded-sm h-12 mt-6 text-center text-3xl font-bold items-center'> Random Quoet  </h1>
     
     
     <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>

     <RandomQuoet> </RandomQuoet>
       <Tagquoet></Tagquoet>

      </div>
     
     </div>
  );
}

export default App;
