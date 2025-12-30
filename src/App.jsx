import UiContextProvider from "./Context/UiContext"
import Navbar from "./Navbar"
import SearchBox from "./SearchBox"
import SearchFooter from "./SearchFooter"
import SearchPageHeader from "./SearchPageHeader"


function App() {
  

  return (
    <>
      <div className="bg-[#f5f6f7] h-screen w-screen">
       <Navbar/ >
       <UiContextProvider>
            <SearchPageHeader/>
            <SearchBox />
            <SearchFooter/>
       </UiContextProvider>
      </div>
    </>
  )
}

export default App
