import { formatCEP } from 'utils';

describe('Util formatCEP', () => {
  it('should return formatted CEP', () => {
    expect(formatCEP('12345678')).toBe('12345-678');
  });

  it("should return the same string if it doesn't have 8 letters", () => {
    expect(formatCEP('12345')).toBe('12345');
    expect(formatCEP('123456789')).toBe('123456789');
  });
});
