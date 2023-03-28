import './App.css';
import Calculator from './components/calculator/Calculator';
import Quote from './components/quotes/quotes';

function App() {
  return (
    <div className="App">
      <h1>Math magician</h1>
      <div className="calculator">
        <Calculator />
      </div>
      <div className="quote">
        <Quote />
      </div>
    </div>
  );
}

export default App;
