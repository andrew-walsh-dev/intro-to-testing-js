// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane" when called with parameter "Jane"', function() {
        expect(sayHello("Jane")).toBe('Hello, Jane');
    });
    it('should return "Hello, Alex" when called with parameter "Alex"', function() {
        expect(sayHello("Alex")).toBe('Hello, Alex');
    });
    it('should return "Hello, Pat" when called with parameter "Pat"', function() {
        expect(sayHello("Pat")).toBe('Hello, Pat');
    });
    it('should return "Hello, World" when called with no parameter', function() {
        expect(sayHello()).toBe("Hello, World");
    });
    it('should return "Hello, World" when called with parameter true', function() {
        expect(sayHello(true)).toBe("Hello, World");
    });
    it('should return "Hello, World" when called with parameter false', function() {
        expect(sayHello(false)).toBe("Hello, World");
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return true when called with parameter 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when called with parameter "5"', function() {
        expect(isFive("5")).toBe(false);
    });
    it('should return true when called with parameter 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when called with no parameter', function() {
        expect(isFive()).toBe(false);
    });
});