import operate from './operate';

test('addition', () => {
  const result = operate('2', '3', '+');
  expect(result).toMatchSnapshot();
});

test('subtraction', () => {
  const result = operate('5', '2', '-');
  expect(result).toMatchSnapshot();
});

test('multiplication', () => {
  const result = operate('7', '8', 'x');
  expect(result).toMatchSnapshot();
});

test('division', () => {
  const result = operate('10', '2', '÷');
  expect(result).toMatchSnapshot();
});

test('division by zero', () => {
  const result = operate('5', '0', '÷');
  expect(result).toMatchSnapshot();
});

test('modulo', () => {
  const result = operate('10', '3', '%');
  expect(result).toMatchSnapshot();
});

test('modulo with zero', () => {
  const result = operate('10', '0', '%');
  expect(result).toMatchSnapshot();
});

test('unknown operation', () => {
  expect(() => operate('1', '2', '&')).toThrowErrorMatchingSnapshot();
});
