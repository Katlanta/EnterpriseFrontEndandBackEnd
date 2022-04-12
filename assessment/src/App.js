import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import './Styles/App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Headers from './Components/Headers';
import Profile from './Components/Profile';
import Events from './Components/Events';
import Comments from './Components/Comments';
import Register from './Components/Register';
import 'bootstrap/dist/css/bootstrap.css';
import store from 'store/dist/store.modern';

axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(store.get('user', false));

    useEffect(() => {
        store.set('user', user);
    }, [user]);
  
  return (
    <div className="App">
      <Headers/>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home user={user} setUser={setUser}/>}/>
        <Route path='/Login' element={<Login user={user} setUser={setUser}/>}/>
        <Route path='/Events' element={<Events/>}/>
        <Route path='/Comments' element={<Comments user={user} setUser={setUser} />}/>
        <Route path='/Profile' element={<Profile user={user} setUser={setUser}/>}/>
        <Route path='/Register' element={<Register user={user} setUser={setUser}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
