import { mathOperations  } from '../../src/utils/mathOperations'


describe("Calculator tests", () => {
  test('adding 1 + 2 should return 3', () => {
    // expect((1 + 2)).toBe(3);
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
 })
