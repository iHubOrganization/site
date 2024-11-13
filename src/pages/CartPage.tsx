import React from 'react'
import { Button } from '@mui/material'
import { CartItem } from './MainPage'

interface CartPageProps {
	cart: CartItem[]
	clearCart: () => void
	onOrderClick: () => void
	totalAmount: string
}

const CartPage: React.FC<CartPageProps> = ({
	cart,
	clearCart,
	onOrderClick,
	totalAmount
}) => {
	return (
		<div className='p-6 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto text-gray-800'>
			<h2 className='text-3xl font-bold mb-6 text-center text-[#F54F29]'>
				Корзина
			</h2>
			{cart.length === 0 ? (
				<p className='text-center text-gray-500'>Ваша корзина пуста.</p>
			) : (
				<div>
					<ul className='space-y-4 mb-6'>
						{cart.map((item) => (
							<li
								key={item.title}
								className='flex justify-between items-center text-base'
							>
								<span
									className='font-semibold w-1/2 whitespace-nowrap
'
								>
									{item.title}
								</span>
								<span className='font-medium w-1/2 text-right'>
									{item.quantity} x {item.price} ₽
								</span>
							</li>
						))}
					</ul>
					<div className='flex justify-between items-center mb-6 text-lg font-semibold'>
						<span>Итоговая стоимость:</span>
						<span className='text-xl font-bold'>{totalAmount} ₽</span>
					</div>
					<div className='flex gap-4'>
						<Button
							onClick={clearCart}
							variant='contained'
							color='secondary'
							className='flex-1 py-2 bg-purple-500 text-white hover:bg-purple-600'
						>
							Очистить корзину
						</Button>
						<Button
							onClick={onOrderClick}
							variant='contained'
							color='primary'
							className='flex-1 py-2 bg-[#F54F29] text-white hover:bg-[#e14524]'
						>
							Заказать
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}

export default CartPage
