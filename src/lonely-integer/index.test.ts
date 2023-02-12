import { lonelyinteger } from ".";

describe('LonelyInteger', () => {
    it('should be a function', () => {
        expect(typeof lonelyinteger).toBe("function");
    });

    it('should return 4', () => {
        const arr = [1,2,3,4,3,2,1]
        const res = lonelyinteger(arr);
        expect(res).toBe(4);
    });

    it('should return 2', () => {
        const arr = [1,1,2]
        const res = lonelyinteger(arr);
        expect(res).toBe(2);
    });

    it('should return 2', () => {
        const arr = [0,0,1,2,1]
        const res = lonelyinteger(arr);
        expect(res).toBe(2);
    });
});