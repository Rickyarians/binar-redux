import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './page/Home';
import Product from './page/Product';
import FAQ from './page/FAQ';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
