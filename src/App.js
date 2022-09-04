import { Routes, Route } from 'react-router-dom';

import Navigation from "./components/Navigation";
import ConspiratorsList from "./components/ConspiratorsList";
import LocationsList from "./components/LocationsList";
import PlansList from "./components/PlansList";

import Conspirator from "./components/entities/Conspirator";
import Location from "./components/entities/Location";
import Plan from "./components/entities/Plan";

import NotFound from "./components/service-pages/NotFound";
import Home from "./components/service-pages/Home";

import './App.css';

function App() {
  return (
    <div className="App">
        <h3>Добро пожаловать в Карнаку!</h3>

        <Navigation />

        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/conspirators/:perpage" element={<ConspiratorsList />} />
            <Route path="/locations/:perpage" element={<LocationsList />} />
            <Route path="/plans/:perpage" element={<PlansList />} />

            <Route path="/conspirator/:id" element={<Conspirator />} />
            <Route path="/location/:id" element={<Location />} />
            <Route path="/plan/:id" element={<Plan />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
