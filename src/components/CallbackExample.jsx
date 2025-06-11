import { useState, useCallback } from 'react';

// Child component that receives the callback
const Button = ({ handleClick, children }) => {
  console.log(`${children} component rendered`);
  return <button onClick={handleClick}>{children}</button>;
};

const CallbackExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Without useCallback - this function would be recreated on every render
  const incrementWithoutCallback = () => {
    setCount(count + 1);
  };

  // With useCallback - this function is memoized and only changes when dependencies change
  const incrementWithCallback = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array means this function never changes

  return (
    <div className="callback-example">
      <h2>useCallback Example</h2>
      
      <div className="count-display">
        <p>Count: {count}</p>
      </div>
      
      <div className="buttons">
        <Button handleClick={incrementWithoutCallback}>
          Increment without useCallback
        </Button>
        <Button handleClick={incrementWithCallback}>
          Increment with useCallback
        </Button>
      </div>
      
      <div className="text-input">
        <p>Type here (causes re-render but doesn't affect callbacks):</p>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type to trigger re-render"
        />
      </div>
      
      <div className="explanation">
        <p>
          Open the console to see which Button components re-render.
          When you type in the input field, both buttons will re-render,
          but only the one without useCallback creates a new function instance.
        </p>
      </div>
    </div>
  );
};

export default CallbackExample;