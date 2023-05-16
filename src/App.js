import './App.css';
import Sidenav from './components/Sidenav';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from './components/Home';
import Order from './components/Order';
import Analytics from './components/Analytics';
import Product from "./components/Product"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/'  element ={<Home/>}></Route>
      <Route  exact path='/analytics'  element={<Analytics/>}></Route>
      <Route  exact path='/product'  element ={<Product/>}></Route>
    </Routes>
    <Sidenav/>
    </BrowserRouter>
    </>
  );
}

export default App;
