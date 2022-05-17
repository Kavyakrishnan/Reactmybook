import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addbook from './Component/Addbook';
import Searchbook from './Component/Searchbook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './Component/View';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path="/"exact element={<Addbook/>}/>
     <Route path="/search"exact element={<Searchbook/>}/>
    <Route path="/booklist"exact element={<View/>}/>


   </Routes>
   
   </BrowserRouter>
   
   </>
  );
}

export default App;
