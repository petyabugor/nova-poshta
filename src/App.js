import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Offices from './pages/Offices/Offices';
import { Routes, Route } from 'react-router-dom';

function App() {
   return (
      <div className="wrapper">
         <Header />
         <Routes>
            <Route
               path="/"
               element={<Home />}
            ></Route>
            <Route
               path="/offices"
               element={<Offices />}
            ></Route>
         </Routes>
      </div>
   );
}

export default App;
