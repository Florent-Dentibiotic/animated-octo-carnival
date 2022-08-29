import Header from 'modules/Header/Header';
import Home from 'modules/Home/Home';
import Pathologies from 'modules/Pathologies/Pathologies';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pathologies" element={<Pathologies />} />
      </Routes>
    </div>
  );
}

export default App;
