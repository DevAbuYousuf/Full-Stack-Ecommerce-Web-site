import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
function App() {
  return (
   <BrowserRouter>
   <Header />
   <Home />
   <Routes>
        <Route path="/" exact={true} component ={<Home />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
