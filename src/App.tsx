import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  const [searchText, setSearchText] = useState("");
  
  return (
    <div>
      <Nav searchText={searchText} setSearchText={setSearchText} />
      <Home searchText={searchText} />
    </div>
  );
}

export default App;
