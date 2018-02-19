import expensesReducer from '../../reducers/expenses';
import expensesData from '../fixtures/expenses';

test('Expenses reducers default test', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});