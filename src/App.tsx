import React from "react";
import "./App.css";
import Details from "./pages/detail";
import Search from "./pages/search";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Route path='detail' exact render={()=>  <Details />} */}
      <Search />

      <Route path="detail" exact component={Details} />
    </div>
  );
}

export default App;
