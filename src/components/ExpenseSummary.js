import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import { getExpensesTotal } from '../selectors/expense-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal, allExpenseCount }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  
  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} of {allExpenseCount} totalling {formattedExpensesTotal}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const allExpenses = selectExpenses(state.expenses, { text: '', sortBy: 'date' , startDate: 0, })

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses),
    allExpenseCount: allExpenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);