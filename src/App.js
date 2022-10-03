import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/Home';
import UserList from './pages/UserList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from './pages/ProductList';
import ProductAdd from './pages/ProductAdd';
import Mail from './pages/Mail';
import Reports from './pages/Reports';



function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className='containerApp'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/productAdd" element={<ProductAdd />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
