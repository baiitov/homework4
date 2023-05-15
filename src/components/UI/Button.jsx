import React from 'react'

const Button = ({ onClick, children, ...rest }) => {
	return (
		<button
			onClick={onClick}
			
			{...rest}
			style={{
				padding: '10px 15px',
				backgroundColor: 'pink',
				border: 'none',
			}}
		>
			{children}
		</button>
	)
}

export default Button
