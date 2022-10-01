import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SharedLayout from './pages/sharedLayout';
import Login from "./pages/login";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

        </Route>



      </Routes>
    </BrowserRouter>
  )
}
