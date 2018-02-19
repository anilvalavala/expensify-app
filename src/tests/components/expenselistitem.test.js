import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';

test('Test expense list item', () => {
    const expense = {
        id: "1",
        description: "Testing from Enzyme",
        amount: '100',
        createdAt: '0'
    };
    const wrapper = shallow(<ExpenseListItem {...expense} />)
    expect(wrapper).toMatchSnapshot();
});