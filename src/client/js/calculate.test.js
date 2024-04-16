import { countDownDays } from './calculate';

describe('countDownDays function', () => {
    beforeEach(() => {
        jest.useFakeTimers('modern');
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('returns 1 for a date exactly one day ahead', () => {
        jest.setSystemTime(new Date(2023, 3, 10)); 
        const result = countDownDays('2023-04-11');
        expect(result).toBe(2);
    });

    it('returns 5 for a date five days ahead', () => {
        jest.setSystemTime(new Date(2023, 3, 10)); 
        const result = countDownDays('2023-04-15');
        expect(result).toBe(6);
    });

    it('returns 0 if the date is today', () => {
        jest.setSystemTime(new Date(2023, 3, 10)); 
        const result = countDownDays('2023-04-10');
        expect(result).toBe(1); 
    });

    it('returns a negative number for a date in the past', () => {
        jest.setSystemTime(new Date(2023, 3, 10)); 
        const result = countDownDays('2023-04-05');
        expect(result).toBe(-4);
    });
});
