import React from 'react'

interface ButtonProps {
	type: 'primary' | 'secondary' | 'tertiary'
	onClick: () => void
	children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
	const baseStyles =
		'transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none'

	const primaryStyles = `
    ${baseStyles}
    bg-white 
    rounded-full 
    w-12 h-12 
    flex items-center justify-center 
    shadow-md 
    hover:shadow-lg
  `

	const secondaryStyles = `
    ${baseStyles}
    bg-[#F54F29] 
    text-white 
    rounded-full 
    px-6 py-3 
    shadow-md 
    hover:shadow-lg
    font-medium
    w-fit
  `

	const tertiaryStyles = `
  ${baseStyles}
  text-[#F54F29]
  bg-white
  rounded-full 
  px-6 py-3 
  shadow-md 
  hover:shadow-lg
  font-medium
  w-fit
  `

	return (
		<button
			onClick={onClick}
			className={
				type === 'primary'
					? primaryStyles
					: type === 'secondary'
					? secondaryStyles
					: tertiaryStyles
			}
		>
			{children}
		</button>
	)
}

export default Button
