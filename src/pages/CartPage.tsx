// src/components/common/CartPage.tsx
import React from 'react'
import { CartItem } from './MainPage'

interface CartPageProps {
	cart: CartItem[]
}

const CartPage: React.FC<CartPageProps> = ({ cart }) => {
	return (
		<div className='p-6 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto text-gray-800'>
			<h2 className='text-2xl font-bold mb-4 text-center'>Корзина</h2>
			{cart.length === 0 ? (
				<p className='text-center text-gray-500'>Ваша корзина пуста.</p>
			) : (
				<ul className='space-y-4'>
					{cart.map((item) => (
						<li
							key={item.title}
							className='flex justify-between items-center'
						>
							<span className='text-lg font-semibold'>{item.title}</span>
							<span className='text-lg font-bold text-gray-700'>
								{item.quantity} x ${item.price}
							</span>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default CartPage
