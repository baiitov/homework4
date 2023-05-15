import { useState } from 'react'
import Button from '../UI/Button'
import Form from '../UI/Form'

const ExpenseForm = ({ addExpense, isShowToggle }) => {
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState(0)
	const [date, setDate] = useState()

	const titleChangeHandler = (event) => {
		setTitle(event.target.value)
	}
	const priceChangeHandler = (event) => {
		setPrice(event.target.value)
	}
	const dateChangeHandler = (event) => {
		setDate(event.target.value)
	}

	const cancelHandler = () => {
		isShowToggle()
	}
	const submitHandler = (event) => {
		event.preventDefault()
		let items = {
			id: Math.random().toString(),
			title,
			price,
			date,
		}
		addExpense(items)
	}

	return (
		<form>
			<Form
				onChange={titleChangeHandler}
				labelName='Title'
				id='title'
				value={title}
				type='text'
			/>
			<Form
				onChange={priceChangeHandler}
				value={price}
				labelName='Price'
				id='price'
				type='number'
			/>
			<Form
				onChange={dateChangeHandler}
				value={date}
				labelName='Date'
				id='date'
				type='date'
			/>
			<Button onClick={cancelHandler}>отмена</Button>
			<Button onClick={submitHandler}>Add expense</Button>
		</form>
	)
}

export default ExpenseForm
