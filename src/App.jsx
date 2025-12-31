import { useContext } from "react";
import UiContextProvider, { UIContext } from "./Context/UiContext";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import SearchFooter from "./SearchFooter";
import SearchPageHeader from "./SearchPageHeader";
import SearchResult from "./SearchResult";

function App() {
  const { isSearchClicked } = useContext(UIContext);

  return (
    <>
      <div className="bg-[#f5f6f7] h-screen w-screen">
        <Navbar />

        <SearchPageHeader />
        <SearchBox />
        {isSearchClicked ? <SearchResult /> : <SearchFooter />}
      </div>
    </>
  );
}

export default App;
