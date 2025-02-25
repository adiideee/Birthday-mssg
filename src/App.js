import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamePage from './Component/GamePage';
import EatCakePage from './Component/EatCakePage';
import LetterPage from './Component/LetterPage'; // Import the new LetterPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path="/eat-cake" element={<EatCakePage />} />
        <Route path="/letter" element={<LetterPage />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;