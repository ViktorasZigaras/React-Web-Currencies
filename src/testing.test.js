import abc from './testing'

/*
toBe: 
compares strict equality, using ===

toEqual:
compares the values of two variables. If it’s an object or array, it checks the equality of all the properties or elements

toBeNull:
is true when passing a null value

toBeDefined:
is true when passing a defined value (opposite to the above)

toBeUndefined:
is true when passing an undefined value

toBeCloseTo:
is used to compare floating values, avoiding rounding errors

toBeTruthy:
true if the value is considered true (like an if does)

toBeFalsy:
true if the value is considered false (like an if does)

toBeGreaterThan:
true if the result of expect() is higher than the argument

toBeGreaterThanOrEqual:
true if the result of expect() is equal to the argument, or higher than the argument

toBeLessThan:
true if the result of expect() is lower than the argument

toBeLessThanOrEqual:
true if the result of expect() is equal to the argument, or lower than the argument

toMatch:
is used to compare strings with regular expression pattern matching

toContain:
is used in arrays, true if the expected array contains the argument in its elements set

toHaveLength(number): 
checks the length of an array

toHaveProperty(key, value): 
checks if an object has a property, and optionally checks its value

toThrow:
checks if a function you pass throws an exception (in general) or a specific exception

toBeInstanceOf(): 
checks if an object is an instance of a class

*/

// .not.
// expect(Promise.resolve('lemon')).resolves.toBe('lemon')
// expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus')

beforeAll(() => {
    //do something
})

beforeEach(() => {
    //do something
})

afterEach(() => {
    //do something
})
  
afterAll(() => {
    //do something
})

describe('first set', () => {
    beforeEach(() => {
      //do something
    })
    afterAll(() => {
      //do something
    })
    // test(/*...*/)
    // test(/*...*/)
})
  
describe('second set', () => {
    beforeEach(() => {
      //do something
    })
    beforeAll(() => {
      //do something
    })
    // test(/*...*/)
    // test(/*...*/)
})

// Callbacks
// https://flaviocopes.com/jest/#introduction-to-jest
// https://jestjs.io/docs/en/getting-started
// Promises + .catch() + async/await
  
// Mocking

// expect().toHaveBeenCalled(): 
// check if a spied function has been called

// expect().toHaveBeenCalledTimes(): 
// count how many times a spied function has been called

// expect().toHaveBeenCalledWith(): 
// check if the function has been called with a specific set of parameters

// expect().toHaveBeenLastCalledWith(): 
// check the parameters of the last time the function has been invoked

// Spying

// const mathjs = require('mathjs')

// test(`The mathjs log function`, () => {
//   const spy = jest.spyOn(mathjs, 'log')
//   const result = mathjs.log(10000, 10)

//   expect(mathjs.log).toHaveBeenCalled()
//   expect(mathjs.log).toHaveBeenCalledWith(10000, 10)
// })

// Mock an entire package
// Mock a single function
// Pre-built mocks
// Snapshot testing - test if code changed in that location


  
  

test( 
    'subtract 2 - 1 to equal 1' , 
    () => {
        expect(
            abc( 2, 1 )
        ).toBe( 1 )
    } 
)

// test( 
//     'subtract 2 - 1 to equal 1' , 
//     () => {
//         expect(
//             abc( 5, 1 )
//         ).toBe( 1 ) 
//     } 
// )

import Enzyme, { shallow } from 'enzyme';
import App from './components';
import React, { PureComponent } from 'react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
describe('Load App', () => {
    it('should render correctly i mode', () => {
      const component = shallow(<App />);
      expect(component).toMatchSnapshot();
    });
});