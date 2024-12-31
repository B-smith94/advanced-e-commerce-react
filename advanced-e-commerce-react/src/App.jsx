import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/HomePage';
import UserContext from './context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState({ name: '', isLoggedIn: false }) // Used to update UserContext
  // setUser in state overrides setUser in context
 // Everything here has access to context
  return (                        
    <UserContext.Provider value={{ user, setUser }}>  {/* Values for functionality that was set up in UserContext */}
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Homepage/>} />
        </Routes>
      </Router>
    </UserContext.Provider>
  )
}

export default App
