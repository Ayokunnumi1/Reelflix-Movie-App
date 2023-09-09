

const { add } = require('./test/try.js')
test('add function adds two numbers', () => {
  // Arrange
  const num1 = 3;
  const num2 = 5;

  // Act
  const result = add(num1, num2);

  // Assert
  expect(result).toBe(8); 
});
