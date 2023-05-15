import { useState } from 'react'
import './App.css'
import Expense from './components/expenses/Expense'
import NewExpense from './components/new-expense/NewExpense'

function App() {
	const [expenses, setExpenses] = useState([])
	const addExpense = (item) => {
		setExpenses([...expenses, item])
	}

	return (
		<div>
			<NewExpense addExpense={addExpense} />
			<Expense expenses={expenses} />
		</div>
	)
}

export default App

// React
// components
// 1. function
// 2. return jsx
// 3. start with capital letter
// 4. baaryn bir element ( div) orop turush kerek
// 5.
// Reactive(state, Vdom)
// SPA

//declarative



// state
// render
// lifting state up
// children
// keys
