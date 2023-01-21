import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/layout/navbar';
import Home from './component/pages/home'
import New from './component/pages/new'
import Popular from './component/pages/popular'
import Trending from './component/pages/trending'
import Categories from './component/pages/categories'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;