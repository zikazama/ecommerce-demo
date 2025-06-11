import { useState, useMemo } from 'react';
import { calculateFibonacci } from './utils';

const ExpensiveCalculation = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(20);

  // This is a simulated expensive calculation that will be memoized
  const expensiveResult = useMemo(() => {
    console.log('Performing expensive calculation...');
    return calculateFibonacci(inputValue);
  }, [inputValue]); // Only recalculate when inputValue changes

  return (
    <div className="expensive-calculation">
      <h2>Memoized Expensive Calculation</h2>
      
      <div className="calculation-section">
        <h3>Expensive Calculation Result:</h3>
        <p>Fibonacci({inputValue}) = {expensiveResult}</p>
        
        <div className="input-section">
          <label htmlFor="fibonacci-input">Change Fibonacci input:</label>
          <input
            id="fibonacci-input"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(parseInt(e.target.value) || 0)}
            min="0"
            max="40"
          />
          <p className="note">Note: Values above 40 may freeze your browser due to the recursive calculation</p>
        </div>
      </div>
      
      <div className="counter-section">
        <h3>Counter (Doesn't trigger recalculation):</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      
      <div className="explanation">
        <h3>How It Works:</h3>
        <p>
          The expensive Fibonacci calculation is wrapped in useMemo() so it only 
          recalculates when the input value changes. Clicking the counter button 
          will not trigger a recalculation, demonstrating the memoization effect.
        </p>
      </div>
    </div>
  );
};

export default ExpensiveCalculation;