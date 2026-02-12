import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/home';
import Header from './Components/Header/header';
import Steps from './Pages/Steps/steps';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/steps" element={<Steps />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
