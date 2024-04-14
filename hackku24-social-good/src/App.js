import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import SignUp from './components/SignUp';
import FoodPostForm from './components/FoodPostForm';
import SignedInBusinessHome from './components/SignedInBusinessHome';
import SignedInCustomerHome from './components/SignedInCustomerHome';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/cdashboard" element={<SignedInCustomerHome/>} />
          <Route path="/bdashboard" element={<SignedInBusinessHome/>} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


