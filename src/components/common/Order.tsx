import React, { useState, useEffect } from 'react'
import { TextField, Button, Box, Typography, Grid } from '@mui/material'
import { FaTelegramPlane } from 'react-icons/fa'
import InputMask from 'react-input-mask'
import { canSendMessage } from '../../helpers/canSendMessage'
import { sendToTelegram } from '../../helpers/telegramApi'
import { FormData, CartItem } from '../../pages/MainPage'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialFormData: FormData = {
	name: '',
	phone: '',
	telegram: '',
	promoCode: '',
	comment: ''
}

const Order: React.FC<{
	formData: FormData
	setFormData: React.Dispatch<React.SetStateAction<FormData>>
	cartItems: CartItem[]
	totalAmount: string
	clearCart: () => void
}> = ({ formData, setFormData, cartItems, totalAmount, clearCart }) => {
	const [city, setCity] = useState<string | null>(null)
	const [isSubmitting, setIsSubmitting] = useState(false)

	useEffect(() => {
		const fetchCity = async () => {
			try {
				const response = await axios.get('https://ipapi.co/json/')
				setCity(response.data.city)
			} catch (error) {
				console.error('Error fetching location:', error)
			}
		}
		fetchCity()
	}, [])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async () => {
		if (isSubmitting) return
		setIsSubmitting(true)

		if (!formData.name || !formData.phone) {
			toast.error('Пожалуйста, заполните обязательные поля: Имя и Телефон')
			setIsSubmitting(false)
			return
		}

		if (canSendMessage()) {
			const messageParts: string[] = []
			messageParts.push(`Новая заявка (${new Date().toLocaleString()}):`)
			messageParts.push(`Имя: ${formData.name}`)
			messageParts.push(`Телефон: ${formData.phone}`)
			if (formData.telegram)
				messageParts.push(`Telegram: ${formData.telegram}`)
			if (formData.promoCode)
				messageParts.push(`Промо-код: ${formData.promoCode}`)
			if (formData.comment)
				messageParts.push(`Комментарий: ${formData.comment}`)
			if (city) messageParts.push(`Город: ${city}`)
			if (cartItems.length > 0) {
				messageParts.push('\nТовары в корзине:')
				cartItems.forEach((item) => {
					messageParts.push(
						`${item.title} - ${item.quantity} x ${item.price} руб. (${
							item.color || 'Нет цвета'
						}, ${item.caseType || 'Нет чехла'})`
					)
				})
				messageParts.push(`Итоговая стоимость: ${totalAmount} руб.`)
			}

			const message = messageParts.join('\n')

			try {
				await sendToTelegram(message)
				toast.success('Заявка успешно отправлена!')
				setFormData(initialFormData)
				clearCart() // Очищаем корзину после успешной отправки
			} catch (error) {
				toast.error('Ошибка при отправке заявки. Попробуйте еще раз позже.')
				console.error('Error sending message:', error)
			}
		} else {
			toast.warn('Пожалуйста, подождите минуту перед повторной отправкой.')
		}

		setIsSubmitting(false)
	}

	return (
		<Box
			className='order-form'
			sx={{
				backgroundColor: 'white',
				px: { xs: 3, sm: 4, md: 5, lg: 6 },
				py: { xs: 4, sm: 5, md: 6, lg: 7 },
				borderRadius: 4,
				boxShadow: 3,
				maxWidth: { xs: '100%', sm: 650, md: 750, lg: 900 },
				mx: 'auto',
				mt: { xs: 5, md: 8 },
				width: '100%'
			}}
		>
			<Typography
				variant='h4'
				color='primary'
				align='center'
				gutterBottom
				sx={{
					fontSize: {
						xs: '1.5rem',
						sm: '1.75rem',
						md: '2rem',
						lg: '2.25rem'
					}
				}}
			>
				Оставить заявку
			</Typography>
			<Box
				component='form'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: { xs: 2, sm: 3, md: 4, lg: 5 },
					mt: { xs: 4, sm: 5 }
				}}
				noValidate
				autoComplete='off'
			>
				<Grid container spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
					<Grid item xs={12} md={6}>
						<TextField
							label='Имя'
							variant='outlined'
							name='name'
							value={formData.name}
							onChange={handleChange}
							required
							fullWidth
							InputProps={{
								style: {
									fontSize: '1rem' // дефолтный размер
								}
							}}
							sx={{
								fontSize: {
									xs: '1rem',
									sm: '1.1rem',
									md: '1.2rem',
									lg: '1.3rem'
								}
							}}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<InputMask
							mask='+7 (999) 999-99-99'
							value={formData.phone}
							onChange={handleChange}
						>
							{() => (
								<TextField
									label='Телефон'
									variant='outlined'
									name='phone'
									required
									fullWidth
									InputProps={{
										style: {
											fontSize: '1rem' // дефолтный размер
										}
									}}
									sx={{
										fontSize: {
											xs: '1rem',
											sm: '1.1rem',
											md: '1.2rem',
											lg: '1.3rem'
										}
									}}
								/>
							)}
						</InputMask>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label='Telegram'
							variant='outlined'
							name='telegram'
							value={formData.telegram}
							onChange={handleChange}
							fullWidth
							InputProps={{
								style: {
									fontSize: '1rem' // дефолтный размер
								}
							}}
							sx={{
								fontSize: {
									xs: '1rem',
									sm: '1.1rem',
									md: '1.2rem',
									lg: '1.3rem'
								}
							}}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label='Введите промо-код'
							variant='outlined'
							name='promoCode'
							value={formData.promoCode}
							onChange={handleChange}
							fullWidth
							InputProps={{
								style: {
									fontSize: '1rem' // дефолтный размер
								}
							}}
							sx={{
								fontSize: {
									xs: '1rem',
									sm: '1.1rem',
									md: '1.2rem',
									lg: '1.3rem'
								}
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label='Комментарий к заказу'
							variant='outlined'
							name='comment'
							value={formData.comment}
							onChange={handleChange}
							multiline
							rows={4}
							fullWidth
							InputProps={{
								style: {
									fontSize: '1rem' // дефолтный размер
								}
							}}
							sx={{
								fontSize: {
									xs: '1rem',
									sm: '1.1rem',
									md: '1.2rem',
									lg: '1.3rem'
								}
							}}
						/>
					</Grid>
				</Grid>
				<Button
					variant='contained'
					color='primary'
					startIcon={<FaTelegramPlane />}
					onClick={handleSubmit}
					disabled={isSubmitting}
					sx={{
						color: 'white',
						py: 1.5,
						boxShadow: 3,
						mt: 3,
						fontSize: {
							xs: '1rem',
							sm: '1.1rem',
							md: '1.2rem',
							lg: '1.3rem'
						},
						minHeight: { xs: 50, sm: 55, md: 60, lg: 70 }
					}}
				>
					Оставить заявку
				</Button>
			</Box>
		</Box>
	)
}

export default Order
