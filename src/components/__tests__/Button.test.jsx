import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

// Create a simple Button component for testing
const Button = ({ handleClick, children }) => {
  console.log(`${children} component rendered`);
  return <button onClick={handleClick}>{children}</button>;
};

describe('Button', () => {
  it('renders with children text', () => {
    const handleClick = vi.fn();
    render(<Button handleClick={handleClick}>Test Button</Button>);
    
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('calls handleClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button handleClick={handleClick}>Test Button</Button>);
    
    fireEvent.click(screen.getByText('Test Button'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('logs render to console', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    const handleClick = vi.fn();
    
    render(<Button handleClick={handleClick}>Test Button</Button>);
    
    expect(consoleSpy).toHaveBeenCalledWith('Test Button component rendered');
    
    consoleSpy.mockRestore();
  });
});