import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@mui/material'
import { FaTelegramPlane } from 'react-icons/fa'
import { canSendMessage } from '../../helpers/canSendMessage'
import { sendToTelegram } from '../../helpers/telegramApi'
import { FormData } from '../../pages/MainPage'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
}> = ({ formData, setFormData }) => {
	const [city, setCity] = useState<string | null>(null)

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

	console.log(city)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async () => {
		if (!formData.name || !formData.phone) {
			toast.error('Пожалуйста, заполните обязательные поля: Имя и Телефон')
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

			const message = messageParts.join('\n')

			try {
				await sendToTelegram(message)
				toast.success('Заявка успешно отправлена!')
				setFormData(initialFormData)
			} catch (error) {
				toast.error('Ошибка при отправке заявки. Попробуйте еще раз позже.')
				console.error('Error sending message:', error)
			}
		} else {
			toast.warn('Пожалуйста, подождите минуту перед повторной отправкой.')
		}
	}

	return (
		<div className='order-form bg-white px-10 py-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10'>
			<h2 className='text-3xl font-bold text-gray-800 mb-2 text-center'>
				Оставить заявку
			</h2>
			<div className='form-fields flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center'>
				<TextField
					label='Имя'
					variant='outlined'
					name='name'
					value={formData.name}
					onChange={handleChange}
					className='w-full md:w-1/3'
					required
				/>
				<TextField
					label='Телефон'
					variant='outlined'
					name='phone'
					value={formData.phone}
					onChange={handleChange}
					className='w-full md:w-1/3'
					required
				/>
				<TextField
					label='Telegram'
					variant='outlined'
					name='telegram'
					value={formData.telegram}
					onChange={handleChange}
					className='w-full md:w-1/3'
				/>
				<TextField
					label='Введите промо-код'
					variant='outlined'
					name='promoCode'
					value={formData.promoCode}
					onChange={handleChange}
					className='w-full md:w-1/3'
				/>
				<TextField
					label='Комментарий к заказу'
					variant='outlined'
					name='comment'
					value={formData.comment}
					onChange={handleChange}
					multiline
					rows={4}
					className='w-full md:w-2/3'
				/>
				<Button
					variant='contained'
					color='primary'
					className='submit-button bg-[#F54F29] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#e14524]'
					onClick={handleSubmit}
				>
					<FaTelegramPlane className='mr-2' /> Оставить заявку
				</Button>
			</div>
		</div>
	)
}

export default Order
