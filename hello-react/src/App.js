import './App.css';
import Navbar from './components/Navbar';
import View from "./pages/View";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<View />} />
        </Routes>
    </Router>
  );
}

export default App;
