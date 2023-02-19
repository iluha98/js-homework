// import {functions} from './date';
const functions = require("./date");

describe('date', () => {
    test('isBeginOfMonth', () => {
        const res = functions.isBeginOfMonth(8);
        expect(res).toBe(false);    
        const res1 = functions.isBeginOfMonth(5);
        expect(res1).toBe(true);    
    });
});