import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProfileLayout from '../ProfileLayout';

// Mock the imported components
vi.mock('../../components/HomeHeader', () => ({
  default: () => <div data-testid="mock-home-header">Mock Header</div>
}));

vi.mock('../../components/ExpensiveCalculation', () => ({
  default: () => <div data-testid="mock-expensive-calculation">Mock Expensive Calculation</div>
}));

vi.mock('../../components/CallbackExample', () => ({
  default: () => <div data-testid="mock-callback-example">Mock Callback Example</div>
}));

describe('ProfileLayout', () => {
  it('renders the component with all child components', () => {
    render(<ProfileLayout />);
    
    // Check if the layout title is rendered
    expect(screen.getByText('Profile Page')).toBeInTheDocument();
    
    // Check if all mocked components are rendered
    expect(screen.getByTestId('mock-home-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-expensive-calculation')).toBeInTheDocument();
    expect(screen.getByTestId('mock-callback-example')).toBeInTheDocument();
  });
});