import { describe, it, expect } from 'vitest';
import { calculateFibonacci } from '../utils';

describe('Utility Functions', () => {
  describe('calculateFibonacci', () => {
    it('returns correct fibonacci numbers for base cases', () => {
      expect(calculateFibonacci(0)).toBe(0);
      expect(calculateFibonacci(1)).toBe(1);
    });

    it('returns correct fibonacci numbers for small inputs', () => {
      expect(calculateFibonacci(2)).toBe(1);
      expect(calculateFibonacci(3)).toBe(2);
      expect(calculateFibonacci(4)).toBe(3);
      expect(calculateFibonacci(5)).toBe(5);
      expect(calculateFibonacci(6)).toBe(8);
    });

    it('handles larger inputs correctly', () => {
      expect(calculateFibonacci(10)).toBe(55);
    });
  });
});