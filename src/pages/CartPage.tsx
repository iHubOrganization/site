import React from 'react'
import { Box, Typography, Button, Divider, Grid } from '@mui/material'
import { FaTrash } from 'react-icons/fa'
import { CartItem } from './MainPage'
import { motion } from 'framer-motion'

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
		<Box
			sx={{
				p: 3,
				backgroundColor: 'white',
				borderRadius: 1,
				boxShadow: 2,
				maxWidth: 400,
				mx: 'auto',
				textAlign: 'center',
				position: 'relative'
			}}
		>
			<Typography variant='h5' color='primary' gutterBottom mb={0}>
				Корзина
			</Typography>
			{cart.length === 0 ? (
				<Typography color='textSecondary'>Ваша корзина пуста.</Typography>
			) : (
				<Box
					sx={{
						maxHeight: 400,
						overflowY: 'auto',
						overflowX: 'hidden',
						paddingRight: '16px'
					}}
				>
					<Divider sx={{ my: 2 }} />
					{cart.map((item, index) => (
						<Box key={index}>
							<Grid container spacing={1} alignItems='center'>
								<Grid item xs={8}>
									{' '}
									{/* Увеличиваем до 8 */}
									<Typography
										variant='body1'
										noWrap
										sx={{
											textOverflow: 'ellipsis',
											overflow: 'hidden'
										}}
									>
										{item.title}
									</Typography>
									{item.color && (
										<Typography
											variant='body2'
											color='textSecondary'
											noWrap
											sx={{
												textOverflow: 'ellipsis',
												overflow: 'hidden'
											}}
										>
											Цвет: {item.color}
										</Typography>
									)}
									{item.caseType && (
										<Typography
											variant='body2'
											color='textSecondary'
											noWrap
											sx={{
												textOverflow: 'ellipsis',
												overflow: 'hidden'
											}}
										>
											Чехол: {item.caseType}
										</Typography>
									)}
								</Grid>
								<Grid item xs={4} textAlign='right'>
									{' '}
									{/* Уменьшаем до 4 */}
									<Typography variant='body1'>
										{item.quantity} x {item.price} ₽
									</Typography>
								</Grid>
							</Grid>
							{index < cart.length - 1 && <Divider sx={{ my: 2 }} />}
						</Box>
					))}
				</Box>
			)}
			{cart.length > 0 && (
				<>
					<Divider sx={{ my: 2 }} />
					<Box display='flex' justifyContent='space-between' mb={2}>
						<Typography variant='h6'>Итоговая стоимость:</Typography>
						<Typography variant='h6' color='primary'>
							{totalAmount} ₽
						</Typography>
					</Box>
					<Box display='flex' gap={2}>
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ type: 'spring', stiffness: 300 }}
							style={{ flex: 1 }}
						>
							<Button
								variant='contained'
								color='secondary'
								startIcon={<FaTrash />}
								fullWidth
								onClick={clearCart}
								sx={{
									color: 'white',
									py: 1.5,
									boxShadow: 3
								}}
							>
								Очистить
							</Button>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ type: 'spring', stiffness: 300 }}
							style={{ flex: 1 }}
						>
							<Button
								variant='contained'
								color='primary'
								fullWidth
								onClick={onOrderClick}
								sx={{
									color: 'white',
									py: 1.5,
									boxShadow: 3
								}}
							>
								Заказать
							</Button>
						</motion.div>
					</Box>
				</>
			)}
		</Box>
	)
}

export default CartPage
