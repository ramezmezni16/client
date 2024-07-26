import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/Register'
import Login from "./components/Login";

function App() {
  return (
        <Router>
          <Routes>
            <Route></Route>
            <Route></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route></Route>
          </Routes>
        </Router>
  )
}

export default App;
