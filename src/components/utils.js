/**
 * Calculate Fibonacci number (extracted for testability)
 * @param {number} n - The position in the Fibonacci sequence
 * @returns {number} The Fibonacci number at position n
 */
export const calculateFibonacci = (n) => {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};