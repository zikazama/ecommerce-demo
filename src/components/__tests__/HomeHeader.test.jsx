import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomeHeader from '../HomeHeader';

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  Link: ({ to, children, className }) => (
    <a href={to} data-testid="mock-link" className={className}>
      {children}
    </a>
  )
}));

describe('HomeHeader', () => {
  it('renders the header component', () => {
    render(<HomeHeader />);
    
    // Check if header exists
    const headerElement = document.querySelector('header');
    expect(headerElement).toBeInTheDocument();
    
    // Check if the site name is rendered
    expect(screen.getByText('SinauCommerce')).toBeInTheDocument();
    
    // Check if search input exists
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    
    // Check if profile link exists
    const profileLink = screen.getAllByTestId('mock-link').find(
      link => link.textContent === 'Profile'
    );
    expect(profileLink).toBeInTheDocument();
  });
});