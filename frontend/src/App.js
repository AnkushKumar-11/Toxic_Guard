import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Component/Landing';
import HomePage from './Component/HomePage';
import Posts from './Component/Posts'
import Error from './Component/Error';
import Protected from './Component/Protected';

function App() {
  return (
    <>
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/homePage" element={<HomePage/>}/>
        
        <Route exact path="/posts" element={<Protected Component={Posts}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
