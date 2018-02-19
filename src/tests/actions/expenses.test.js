import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Test Remove Expense Expensify Actions', () => {
    const removeExpenseActionResult = removeExpense({'id': 'abc123'});
    expect(removeExpenseActionResult).toEqual({'type': 'REMOVE_EXPENSE', 'id': 'abc123'});
});

test('Test Edit Expense Expensify Action', () => {
    const editExpenseActionReslut = editExpense('abc123', 
                                                  { 
                                                      'description': 'test', 
                                                      'note': 'test_note',
                                                       'amount': '100',
                                                       'createdAt': '1000000'
                                                    }
                                                );

    expect(editExpenseActionReslut).toEqual({'type': 'EDIT_EXPENSE', 
                                            'id': 'abc123',
                                            'updates' : {
                                                'description': 'test', 
                                                'note': 'test_note',
                                                'amount': '100',
                                                'createdAt': '1000000'
                                            }
    });

});

test('Test Add Expense Expensify Action for Default Parameters', () => {
    const addExpenseActionResult = addExpense();
    expect(addExpenseActionResult).toEqual(
        {
        'type' : 'ADD_EXPENSE',
        'expense':
            {
                "id": expect.any(String),
                'description': '',
                'note': '',
                'amount': 0,
                'createdAt': 0
            }
        }
    );
});