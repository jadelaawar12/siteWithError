import './App.css';
import Sidebar from './Components/Sidebar';
import LogIn from './Components/LogIN/LogIn';
import Home from './Components/Home/home';
import Account from './Components/Account/Account';
import Token from './Components/Token/Token';
import Marketplace from './Components/Marketplace/Marketplace';
import Game from './Components/Game/Game';
import {BrowserRouter, Routes, Switch, Route} from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <LogIn />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Account" element={<Account />} />
              <Route path="/Token" element={<Token />} />
              <Route path="/Marketplace" element={<Marketplace />} />
              <Route path="/Game" element={<Game />} />
          </Routes>
      </div>
    </div> 
    </BrowserRouter>
  );
  
}

export default App;
