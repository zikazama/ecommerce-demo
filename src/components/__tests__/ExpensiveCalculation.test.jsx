import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ExpensiveCalculation from '../ExpensiveCalculation';

describe('ExpensiveCalculation', () => {
  it('renders the component with initial state', () => {
    render(<ExpensiveCalculation />);
    
    // Check if component renders with correct title
    expect(screen.getByText('Memoized Expensive Calculation')).toBeInTheDocument();
    
    // Check if initial fibonacci calculation is displayed (default is 20)
    expect(screen.getByText(/Fibonacci\(20\) =/)).toBeInTheDocument();
    
    // Check if counter is initialized to 0
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('updates the counter without recalculating fibonacci', () => {
    // Spy on console.log to check if calculation is performed
    const consoleSpy = vi.spyOn(console, 'log');
    
    render(<ExpensiveCalculation />);
    
    // Initial calculation should happen once
    expect(consoleSpy).toHaveBeenCalledWith('Performing expensive calculation...');
    
    // Reset the mock to check if it's called again
    consoleSpy.mockClear();
    
    // Click the increment button
    fireEvent.click(screen.getByText('Increment'));
    
    // Counter should update
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
    
    // Fibonacci calculation should not be performed again
    expect(consoleSpy).not.toHaveBeenCalledWith('Performing expensive calculation...');
    
    consoleSpy.mockRestore();
  });

  it('recalculates fibonacci when input value changes', () => {
    // Spy on console.log to check if calculation is performed
    const consoleSpy = vi.spyOn(console, 'log');
    
    render(<ExpensiveCalculation />);
    
    // Initial calculation should happen once
    expect(consoleSpy).toHaveBeenCalledWith('Performing expensive calculation...');
    
    // Reset the mock to check if it's called again
    consoleSpy.mockClear();
    
    // Change the input value
    const input = screen.getByLabelText('Change Fibonacci input:');
    fireEvent.change(input, { target: { value: '5' } });
    
    // Fibonacci calculation should be performed again
    expect(consoleSpy).toHaveBeenCalledWith('Performing expensive calculation...');
    
    // Result should be updated
    expect(screen.getByText('Fibonacci(5) = 5')).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });
});