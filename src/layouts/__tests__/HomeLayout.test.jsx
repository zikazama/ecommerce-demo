import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import HomeLayout from '../HomeLayout';
import { ThemeContext } from '../../context/ThemeContext';

// Mock dependencies
vi.mock('react-router-dom', () => ({
  Link: ({ to, children, style }) => (
    <a href={to} data-testid="mock-link" style={style}>
      {children}
    </a>
  )
}));

vi.mock('../../components/HomeHeader', () => ({
  default: () => <div data-testid="mock-home-header">Mock Header</div>
}));

vi.mock('../../components/HomeSlider', () => ({
  default: () => <div data-testid="mock-home-slider">Mock Slider</div>
}));

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn()
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('HomeLayout', () => {
  beforeEach(() => {
    // Mock fetch before each test
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          products: [
            {
              id: 1,
              title: 'Test Product',
              description: 'Test Description',
              price: 99.99,
              category: 'Test Category',
              rating: 4.5,
              thumbnail: 'test-image.jpg'
            }
          ]
        })
      })
    );
    
    // Mock console.log
    console.log = vi.fn();
    
    // Reset localStorage mock
    localStorageMock.getItem.mockReset();
    localStorageMock.setItem.mockReset();
  });

  // Create a wrapper component that provides the ThemeContext
  const renderWithThemeContext = (ui) => {
    return render(
      <ThemeContext.Provider value={{ darkMode: false, toggleDarkMode: vi.fn() }}>
        {ui}
      </ThemeContext.Provider>
    );
  };

  it('renders the component with loading state initially', () => {
    renderWithThemeContext(<HomeLayout />);
    
    // Check if header and slider are rendered
    expect(screen.getByTestId('mock-home-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-home-slider')).toBeInTheDocument();
    
    // Check if loading message is displayed
    expect(screen.getByText('Loading products...')).toBeInTheDocument();
  });

  it('renders products after loading', async () => {
    renderWithThemeContext(<HomeLayout />);
    
    // Wait for products to load
    await waitFor(() => {
      expect(screen.queryByText('Loading products...')).not.toBeInTheDocument();
    });
    
    // Check if product is rendered
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    
    // Use regex for text that might be split across elements
    expect(screen.getByText(/Price:/)).toBeInTheDocument();
    expect(screen.getByText(/\$99.99/)).toBeInTheDocument();
    expect(screen.getByText(/Category:/)).toBeInTheDocument();
    expect(screen.getByText(/Test Category/)).toBeInTheDocument();
    expect(screen.getByText(/Rating:/)).toBeInTheDocument();
    expect(screen.getByText(/4.5\/5/)).toBeInTheDocument();
  });

  it('handles fetch error gracefully', async () => {
    // Override fetch mock to simulate error
    global.fetch = vi.fn(() => Promise.reject('API error'));
    
    // Spy on console.error
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    renderWithThemeContext(<HomeLayout />);
    
    // Wait for error handling
    await waitFor(() => {
      expect(screen.queryByText('Loading products...')).not.toBeInTheDocument();
    });
    
    // Check if console.error was called
    expect(consoleSpy).toHaveBeenCalledWith('Error fetching products:', 'API error');
    
    // Clean up
    consoleSpy.mockRestore();
  });

  it('renders children content', async () => {
    renderWithThemeContext(
      <HomeLayout>
        <div data-testid="child-content">Child Content</div>
      </HomeLayout>
    );
    
    // Wait for products to load
    await waitFor(() => {
      expect(screen.queryByText('Loading products...')).not.toBeInTheDocument();
    });
    
    // Check if children are rendered
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });
});