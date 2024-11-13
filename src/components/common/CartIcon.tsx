// CartIcon.tsx
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { CartItem } from '../../pages/MainPage'

interface CartIconProps {
	cart: CartItem[]
	onClick: () => void
}

const CartIcon: React.FC<CartIconProps> = ({ cart, onClick }) => {
	const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

	return (
		<div
			className={`relative bg-gray-100 p-3 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-110 
				${
					totalItems > 0
						? 'bg-green-500 text-white'
						: 'bg-gray-100 text-gray-700'
				} animate-fadeIn`}
			onClick={onClick}
		>
			<FaShoppingCart size={24} />
			{totalItems > 0 && (
				<span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold'>
					{totalItems}
				</span>
			)}
		</div>
	)
}

export default CartIcon
