import SignUp from "./components/pages/Signup";
import SignupDetails from "./components/pages/SignupDetails";
import Login from "./components/pages/Login";
import Notifications from "./components/pages/Notifications";
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={ <SignUp/> }/>
        <Route path="/signupdetails"  element={ <SignupDetails/> }/>
        <Route path="/dash"  element={ <Dashboard/> }/>
        <Route path="/login"  element={ <Login/> }/>
        <Route path="/signup" element={
          <Navigate to="/" />
        } />
        <Route path="/notifications"  element={ <Notifications/> }/>
      </Routes>
    </Router>
  );
}

export default App;
