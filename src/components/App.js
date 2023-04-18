import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState("")

  function handleSearch(value){
    setSearch(value)
  }
  return (
    <div className="app">
      <Header handleSearch={handleSearch}/>
      <ListingsContainer search={search}/>
    </div>
  );
}

export default App;
