
const method= require('./functions')


describe('Task1',()=>{
    it('Check the number of characters 1 :' , ()=>{
        // expect(stringLength('Hello')).toBe(5);
        expect(() =>stringLength('Hello world people')).toThrow();
     });
     it('Check the number of characters 2:' , ()=>{
        // expect(stringLength('Hello')).toBe(5);
        expect(() =>stringLength('')).toThrow();
     });
     it('Check the number of characters3' , ()=>{
        expect(method.stringLength('Hello')).toBe(5);
        //expect(() => stringLength('')).toThrow();
     });
});

describe('Task2',()=>{
    it('Revers string :' , ()=>{
       expect(method.reverseString('Hello')).toMatch('olleH');
     });
    
});

describe('Task3 - ADD',()=>{
    const obj = new method.calculator();
    it('add test1;',()=>{
       
        expect(obj.add(1,2)).toBe(3);
    });
    it('add test2;',()=>{
       
        expect(obj.add(4,10)).toBe(14);
    });
    it('add test3;',()=>{
       
        expect(obj.add(7,2)).toBe(9);
    });

});

describe('Task3 - subtract',()=>{
    const obj = new method.calculator();
    it('subtract test1;',()=>{
       
        expect(obj.subtract(6,2)).toBe(4);
    });
    it('subtract test2;',()=>{
       
        expect(obj.subtract(4,3)).toBe(1);
    });
    it('subtract test3;',()=>{
       
        expect(obj.subtract(7,9)).toBe(-2);
    });

});

describe('Task3 - Divide',()=>{
    const obj = new method.calculator();
    it('divide test1;',()=>{
       
        expect(obj.divide(20,2)).toBe(10);
    });
    it('divide test2;',()=>{
       
        expect(obj.divide(30,6)).toBe(5);
    });
    it('divide test3;',()=>{
       
        expect(obj.divide(40,5)).toBe(8);
    });

});

describe('Task3 - Multiply',()=>{
    const obj = new method.calculator();
    it('multiply test1;',()=>{

        expect(obj.multiply(20,2)).toBe(40);
    });
    it('multiply test2;',()=>{

        expect(obj.multiply(30,6)).toBe(180);
    });
    it('multiply test3;',()=>{

        expect(obj.multiply(40,5)).toBe(200);
    });
});

test('UperCase letter :',()=>{
    expect(method.uperCase('hello')).toMatch('Hello');
});

