import calculate from './calculate';

describe('calculate operations', () => {
  it('calculate addition', () => {
    const operation = calculate({ total: 8, next: 8, operation: '+' }, '=');
    expect(operation.total).toBe('16');
  });
  it('calculate subtraction', () => {
    const operation = calculate({ total: 20, next: 12, operation: '-' }, '=');
    expect(operation.total).toBe('8');
  });
  it('calculate multiplication', () => {
    const operation = calculate({ total: 20, next: 2, operation: 'x' }, '=');
    expect(operation.total).toBe('40');
  });
  it('calculate division', () => {
    const operation = calculate({ total: 20, next: 2, operation: '÷' }, '=');
    expect(operation.total).toBe('10');
  });
  it('Test "All Clear"', () => {
    const operation = calculate({ total: 5, next: 5, operation: '+' }, 'AC');
    expect(operation.total).toBe(null);
  });
});
