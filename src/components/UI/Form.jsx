const Form = ({ id, labelName, type,value, onChange }) => {
	return (
		<div>
			<label htmlFor={id}>{labelName}</label>
			<input id={id} type={type} onChange={onChange} value={value} />
		</div>
	)
}
export default Form
