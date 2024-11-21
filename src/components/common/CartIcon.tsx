// src/components/common/CartIcon.tsx
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { CartItem } from '../../pages/MainPage'
import { Badge, IconButton } from '@mui/material'

interface CartIconProps {
	cart: CartItem[]
	onClick: () => void
}

const CartIcon: React.FC<CartIconProps> = ({ cart, onClick }) => {
	const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

	return (
		<IconButton
			onClick={onClick}
			sx={{
				backgroundColor: '#F54F29',
				color: 'white',
				p: 2,
				borderRadius: '50%',
				boxShadow: 3,
				'&:hover': {
					backgroundColor: '#e14524'
				}
			}}
		>
			<Badge
				badgeContent={totalItems}
				color='secondary'
				sx={{
					'& .MuiBadge-badge': {
						top: '-10px',
						right: '-10px',
						fontSize: '1.00rem',
						minWidth: '20px',
						height: '26px',
						border: '3px solid white',
						backgroundColor: '#F54F29',
						color: 'white'
					}
				}}
			>
				<FaShoppingCart size={24} />
			</Badge>
		</IconButton>
	)
}

export default CartIcon
