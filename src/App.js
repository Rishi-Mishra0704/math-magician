import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Calculator from './components/calculator/Calculator';
import Quotes from './components/quotes/Quotes';
import Root from './components/Root';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default App;
