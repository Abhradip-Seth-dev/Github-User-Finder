import { useContext } from "react"
import { UIContext } from "./Context/UiContext"

const SearchPageHeader = () => {
    const {isSearchClicked}=useContext(UIContext)
  return (
    <div className={`text-center ${isSearchClicked? "mt-10":"mt-40"}`}> 
      <p className='font-bold text-5xl'>Find Github Users</p>
      <br />
      <p className="text-[#60748a]">Search for developers, explore repositories, and find profiles</p>
    </div>
  )
}

export default SearchPageHeader
