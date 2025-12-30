import { UserSearch } from 'lucide-react'


const SearchFooter = () => {
  return (
    <div className='flex flex-col items-center mt-20'>
      <span className='bg-[#f0f2f5] p-7 rounded-[50%] mb-4 '><UserSearch/></span>
      <p className='font-serif mb-2'>Start your search</p>
      <p>Enter a Github username above to find profiles</p>
    </div>
  )
}

export default SearchFooter
