import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CallbackExample from '../CallbackExample';

// Mock the Button component to track renders
vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    memo: (component) => component, // Mock memo to make testing easier
  };
});

describe('CallbackExample', () => {
  it('renders the component with initial state', () => {
    render(<CallbackExample />);
    
    // Check if component renders with correct title
    expect(screen.getByText('useCallback Example')).toBeInTheDocument();
    
    // Check if counter is initialized to 0
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
    
    // Check if both buttons are rendered
    expect(screen.getByText('Increment without useCallback')).toBeInTheDocument();
    expect(screen.getByText('Increment with useCallback')).toBeInTheDocument();
  });

  it('increments counter when buttons are clicked', () => {
    render(<CallbackExample />);
    
    // Initial count should be 0
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
    
    // Click the button without useCallback
    fireEvent.click(screen.getByText('Increment without useCallback'));
    
    // Count should be 1
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
    
    // Click the button with useCallback
    fireEvent.click(screen.getByText('Increment with useCallback'));
    
    // Count should be 2
    expect(screen.getByText('Count: 2')).toBeInTheDocument();
  });

  it('updates text input without affecting count', () => {
    render(<CallbackExample />);
    
    // Initial count should be 0
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
    
    // Type in the text input
    const input = screen.getByPlaceholderText('Type to trigger re-render');
    fireEvent.change(input, { target: { value: 'test' } });
    
    // Input value should be updated
    expect(input.value).toBe('test');
    
    // Count should still be 0
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('logs component renders to console', () => {
    // Spy on console.log to check component renders
    const consoleSpy = vi.spyOn(console, 'log');
    
    render(<CallbackExample />);
    
    // Both buttons should log their render
    expect(consoleSpy).toHaveBeenCalledWith('Increment without useCallback component rendered');
    expect(consoleSpy).toHaveBeenCalledWith('Increment with useCallback component rendered');
    
    consoleSpy.mockRestore();
  });
});