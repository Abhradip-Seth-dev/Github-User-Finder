import { Search } from 'lucide-react'
import { useContext } from 'react'
import { UIContext } from './Context/UiContext'


const SearchBox = () => {
    const {setisSearchClicked}=useContext(UIContext)
  return (
    <div>
      <form className=' mt-10 bg-white w-150 m-auto h-14 p-3 rounded-2xl flex'>
        <Search className='h-5 mt-1 ml-2 cursor-pointer animate-pulse'/>
        <input type="text" placeholder='e.g octocat ' className='ml-5 outline-none w-90 '/>
        <span className='bg-[#0b6bd9] text-white p-1 ml-20 w-20 rounded-2xl text-center cursor-pointer hover:animate-pulse'onClick={()=>{setisSearchClicked(prev=>!prev)}} >Search</span>
      </form>
    </div>
  )
}

export default SearchBox
