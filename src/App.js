import  Header  from "./compnents/Header";
import './App.css'
import Home from "./compnents/Home";
import Cart from "./compnents/cart.js";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
