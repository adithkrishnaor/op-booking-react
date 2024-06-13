import logo from './logo.svg';
import './App.css';
import Viewdocs from './components/Viewdocs';
import BookNow from './components/BookNow';
import ViewBooking from './components/ViewBooking';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<BookNow/>}/>
        <Route path='/viewbooking' element={<ViewBooking/>}/>
        <Route path='/viewdoctors' element={<Viewdocs/>} />
        </Routes></BrowserRouter>

    </div>
  )
}

export default App;
