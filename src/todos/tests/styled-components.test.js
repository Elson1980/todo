import { expect } from 'chai';
import { getBorderStyleForDate } from "../TodoListItem";

describe('get border style for date', () => {
    it('returns none if less than 5 days', () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 3);

        const expected = 'none';
        const actual = getBorderStyleForDate(recentDate, today);

        expect(actual).to.deep.equal(expected);
    })

    it('returns border if greater than 5 days', () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 7);

        const expected = '2px solid red';
        const actual = getBorderStyleForDate(recentDate, today);

        expect(actual).to.deep.equal(expected);
        
    })
})