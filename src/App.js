import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import Subscribe from './Pages/subscribe'
// import Login from "./pages/Login";
// import Register from "./pages/Register";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/subscribe" element={<Subscribe/>} />
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
