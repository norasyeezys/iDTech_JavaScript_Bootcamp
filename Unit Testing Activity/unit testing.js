function Greet(name) {
    returnString = "";
    if (name == null) {
        returnString = "Hello there!"
    }
    if (typeof(name) === 'string') {
        if (name === name.toUpperCase()) {
            returnString = "HELLO "+name+"!";
        } else {
            returnString = "Hello, "+name;
        }
    }
    if (typeof(name) === 'object') {
        returnString = "Hello";
        for (let i = 0; i<name.length; i++)
        returnString += ", "+name[i];
    }

}

describe('test greet()', function () {
    it('should return', function () {
        expect (greet()).toBe("Hello there!");
    });
});

describe('test greet()', function () {
    it('should return', function () {
        expect (greet('Elizabeth')).toBe("Hello, Elizabeth");
    });
});

describe('test greet()', function () {
    it('should return', function () {
        expect (greet('JOSE')).toBe("Hello, Elizabeth");
    });
});

describe('test greet()', function () {
    it('should return', function () {
        expect (greet(["Jose","Pep"])).toBe("Hello, Jose, Pep");
    });
});

describe('test greet()', function () {
    it('should return', function () {
        expect (greet(["Alex","Arsene","Jose","Zidane"])).toBe("Hello, Alex, Arsene, Jose, Zidane");
    });
});