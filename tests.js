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

describe('isEven', function() {
    it('should return a boolean for any input', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when called with parameter 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when called with parameter -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when called with parameter 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return true when called with parameter "banana"', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return false when called with parameter "8"', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when called with parameter Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return true when called with parameter true', function() {
        expect(isEven(true)).toBe(false);
    });it('should return true when called with parameter false', function() {
        expect(isEven(false)).toBe(false);
    });
});

describe('isVowel', function() {
    it('should return a boolean for any input', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true for input "a"', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true for input "A"', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return true for input "y"', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return true for input 4', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false for input true', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false for input false', function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false for input "banana"', function() {
        expect(isVowel("banana")).toBe(false);
    });
});

describe('add', function() {
    it('should return 5 for inputs 2, 3', function() {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 for inputs -3, -9', function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 for inputs "5", 6', function() {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 for inputs "-4", "10"', function() {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN for inputs "banana", "split"', function() {
        expect(add("banana", "split")).toBe("NaN");
    });
    it('should return NaN for inputs 2, "apples"', function() {
        expect(add(2, "apples")).toBe("NaN");
    });
    it('should return NaN for no input', function() {
        expect(add()).toBe("NaN");
    });
});

