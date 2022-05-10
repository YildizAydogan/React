import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<LoginPage/>}></Route>
    <Route path="/" element={<HomePage/>}></Route>
    
    
    
    
    
    
    





    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
