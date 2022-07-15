import { expect } from 'chai';
import { getCompletedTodos } from '../selectors';

describe('The get completed todos selector', () => {
    it('Returns only completed todos', () => {
        const fakeTodos = [{
            text:  'hello',
            isCompleted: true
        }, {
            text:  'bye',
            isCompleted: false
        }, {
            text:  'check on potate',
            isCompleted:  false
        }];

        const expected = [{
            text:  'hello',
            isCompleted: true
        }];

        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);

    });
});