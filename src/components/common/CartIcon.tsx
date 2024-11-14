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
			className='fixed top-4 right-4 p-3 rounded-full bg-[#F54F29] text-white cursor-pointer shadow-lg z-50 transition-all transform hover:scale-110'
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
