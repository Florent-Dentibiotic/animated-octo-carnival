import Header from 'modules/Header/Header';
import Home from 'modules/Home/Home';
import PathoDetails from 'modules/PathoDetails/PathoDetails';
import Pathologies from 'modules/Pathologies/Pathologies';
import Treatments from 'modules/Treatments/Treatments';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pathologies" element={<Pathologies />} />
        <Route path="/pathologies/:type" element={<PathoDetails />} />
        <Route path="/treatments" element={<Treatments />} />
      </Routes>
    </div>
  );
}

export default App;
