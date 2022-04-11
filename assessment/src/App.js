import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {useState} from 'react';
import './Styles/App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Headers from './Components/Headers';
import Profile from './Components/Profile';
import Events from './Components/Events';
import Comments from './Components/Comments';
import Register from './Components/Register';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="App">
      <Headers/>
      <BrowserRouter>
      <Routes>
        
        <Route path='/' exact element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Events' element={<Events/>}/>
        <Route path='/Comments' element={<Comments/>}/>
        <Route path='/Profile' element={<Profile user={user} setUser={setUser}/>}/>
        <Route path='/Register' element={<Register user={user} setUser={setUser}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;