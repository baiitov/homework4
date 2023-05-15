import { useState } from 'react'
import ExpenseForm from '../expense-form/ExpenseForm'
import Button from '../UI/Button'
const NewExpense = ({ addExpense }) => {
	const [toggle, setIsToggle] = useState(false)

	//  toggle = false
	// setIsToggle

	const isShowToggle = async () => {
		setIsToggle((prevState) => !prevState)
	}
	return (
		<div
			style={{
				width: '500px',
				height: '150px',
				border: '1px solid red',
				marginLeft: '350px',
			}}
		>
			{!toggle && (
				<Button onClick={isShowToggle}>добавить новый расход</Button>
			)}
			{toggle && (
				<ExpenseForm
					addExpense={addExpense}
					isShowToggle={isShowToggle}
				/>
			)}
		</div>
	)
}

export default NewExpense
