import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/layout/header';
import Home from './component/pages/home'
import New from './component/pages/new'
import Popular from './component/pages/popular'
import Trending from './component/pages/trending'
import Categories from './component/pages/categories'
import Footer from './component/layout/footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;