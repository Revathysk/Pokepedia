// React looks for index.js 
import {useContext ,useState} from 'react';
import { Routes, Route } from 'react-router-dom'

//pages
import Login from './pages/Login'

// components
import UserContext from './contexts/UserContext';
import NavIndex from './components/Nav'

//css
import './App.css';

function App() {
  // const user = useContext(UserContext);  
  // console.log(user)
const [user, setUser] = useState('')

  return (
    <div className="App">
      {/* Provider component allows to use usercontext as wrapper and share value with all chils components */}
    
      <UserContext.Provider value={user}>  

        <NavIndex/>      
        <Routes> 
          <Route path='login' element={<Login setUser={setUser}/>}/>
        </Routes>
      
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
