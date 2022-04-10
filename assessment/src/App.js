import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
  return (
    <div className="App">
      <Headers/>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Events' element={<Events/>}/>
        <Route path='/Comments' element={<Comments/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
