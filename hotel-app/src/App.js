import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Hotel";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from './pages/login/Login';

function App() {
  
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
       <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
