import './App.css';
import Navbar from './components/Navbar';
import SecOne from './components/SecOne';
import SecTwo from './components/SecTwo';

function App() {
  return (
    <div className="App">
      
      <Navbar/>

        <div className="app-grid">
          <SecOne/>
          <SecTwo/>   

        </div>


      
    </div>
  );
}

export default App;
