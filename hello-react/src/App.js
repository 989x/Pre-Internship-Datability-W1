import './App.css';
import Navbar from './components/Navbar';
// import SecOne from './components/SecOne';
// import SecTwo from './components/SecTwo';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import View from "./pages/View";
import Edit from './pages/Edit';


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
    </Router>
  );
}

export default App;
