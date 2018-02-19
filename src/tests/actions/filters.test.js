import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('Set Start Date test', () => {
    const setStartDateResult = setStartDate(moment(0));
    expect(setStartDateResult).toEqual({ type: 'SET_START_DATE', startDate: moment(0) });
});

test('Set End Date test', () => {
    const setEndDateResult = setEndDate(moment(0));
    expect(setEndDateResult).toEqual({ type: 'SET_END_DATE', endDate: moment(0) });
});

test('Set Text Filter test', () => {
    const setTextFilterResult = setTextFilter();
    expect(setTextFilterResult).toEqual({ type: 'SET_TEXT_FILTER', text: '' });
});

test('Sort By Date Filter', () => {
    const sortByDateFilterResult = sortByDate();
    expect(sortByDateFilterResult).toEqual({ type: 'SORT_BY_DATE' });
});

test('Sort By AMount Filter', () => {
    const setSortByAmountFilterResult = sortByAmount();
    expect(setSortByAmountFilterResult).toEqual({ type: 'SORT_BY_AMOUNT' });
});