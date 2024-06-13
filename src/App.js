import logo from './logo.svg';
import './App.css';
import Viewdocs from './components/Viewdocs';
import BookNow from './components/BookNow';
import ViewBooking from './components/ViewBooking';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={BookNow}/>
      <Route path='/viewdoctors' element={Viewdocs}/>
      <Route path='/viewbooking' element={ViewBooking}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
