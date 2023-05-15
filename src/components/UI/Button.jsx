import React from 'react'

const Button = ({ onClick, children, ...rest }) => {
	return (
		<button
			onClick={onClick}
			
			{...rest}
			style={{
				padding: '100px 20px',
				backgroundColor: 'pink',
				border: 'none',
			}}
		>
			{children}
		</button>
	)
}
// buttons

export default Button
