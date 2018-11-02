
//  const getExpensesTotal = (expenses) => {
//     let total = 0
//     expenses.length===0 ? 0 : (
//         expenses.forEach((expense) => {
//           total = total + expense.amount
//         }) 
//         )
//     return total
// }

 export const getExpensesTotal = (expenses) => {
    return  expenses.reduce( (sum, expense) => sum + expense.amount, 0)
}




