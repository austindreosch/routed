import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ItemCandy from './components/ItemCandy';
import ItemChips from './components/ItemChips';
import ItemSoda from './components/ItemSoda';
import VendingMachine from './components/VendingMachine';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/chips" element={<ItemChips/>} />
          <Route path="/candy" element={<ItemCandy/>} />
          <Route path="/soda" element={<ItemSoda/>} />
        </Routes>
    </Router>
  );
}

export default App;
