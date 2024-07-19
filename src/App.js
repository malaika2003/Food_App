
// import Delivery from "./components/Delivery";

import { Route, Routes } from "react-router-dom";
import Viewmore from "./components/viewmore.js";
import Home from "./components/Home.js";
import Cart from "./components/Cart.js";
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/viewmore' element={<Viewmore />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </div> 
  );
}

export default App;
