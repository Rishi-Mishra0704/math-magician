import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import Calculator from './components/calculator/Calculator';
import Root from './components/Root';
import QuotesPage from './components/quotes/QuotesPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<QuotesPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default App;
