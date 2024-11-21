// src/components/common/Order.tsx
import React, { useState, useEffect } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'
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
				px: { xs: 2, md: 4 },
				py: { xs: 3, md: 6 },
				borderRadius: 2,
				boxShadow: 3,
				maxWidth: '600px',
				mx: 'auto',
				mt: 4
			}}
		>
			<Typography variant='h4' color='primary' align='center' gutterBottom>
				Оставить заявку
			</Typography>
			<Box
				component='form'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
					mt: 3
				}}
				noValidate
				autoComplete='off'
			>
				<TextField
					label='Имя'
					variant='outlined'
					name='name'
					value={formData.name}
					onChange={handleChange}
					required
				/>
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
						/>
					)}
				</InputMask>
				<TextField
					label='Telegram'
					variant='outlined'
					name='telegram'
					value={formData.telegram}
					onChange={handleChange}
				/>
				<TextField
					label='Введите промо-код'
					variant='outlined'
					name='promoCode'
					value={formData.promoCode}
					onChange={handleChange}
				/>
				<TextField
					label='Комментарий к заказу'
					variant='outlined'
					name='comment'
					value={formData.comment}
					onChange={handleChange}
					multiline
					rows={4}
				/>
				<Button
					variant='contained'
					color='primary'
					startIcon={<FaTelegramPlane />}
					onClick={handleSubmit}
					disabled={isSubmitting}
					sx={{
						color: 'white',
						py: 1.5,
						boxShadow: 3
					}}
				>
					Оставить заявку
				</Button>
			</Box>
		</Box>
	)
}

export default Order
