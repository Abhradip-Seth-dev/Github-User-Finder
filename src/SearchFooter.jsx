import { UserSearch } from 'lucide-react'
import { UIContext } from './Context/UiContext'
import { useContext } from 'react'



const SearchFooter = () => {
    const {isSearchClicked}=useContext(UIContext)
  return (
    <div className={`flex flex-col items-center mt-20 ${isSearchClicked?"hidden":"block"}`}>
      <span className='bg-[#f0f2f5] p-7 rounded-[50%] mb-4 '><UserSearch className='animate-pulse'/></span>
      <p className='font-serif mb-2'>Start your search</p>
      <p>Enter a Github username above to find profiles</p>
      
    </div>
  )
}

export default SearchFooter
