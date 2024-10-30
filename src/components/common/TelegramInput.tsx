import React, { useState } from 'react'
import { sendToTelegram } from '../../helpers/telegramApi'
import { canSendMessage } from '../../helpers/canSendMessage'

const TelegramInput: React.FC = () => {
	const [inputText, setInputText] = useState<string>('')

	const handleSend = () => {
		if (!canSendMessage()) {
			alert('Пожалуйста, подождите немного перед повторной отправкой.')
			return
		}

		if (inputText.trim() !== '') {
			sendToTelegram(inputText)
			setInputText('') // Очистка поля после отправки
		} else {
			alert('Пожалуйста, введите текст!')
		}
	}

	return (
		<div className='flex flex-col items-center p-4 max-w-sm mx-auto mt-6'>
			<input
				type='text'
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
				placeholder='Введите сообщение'
				className='border border-gray-300 rounded p-2 w-full mb-4 focus:outline-none focus:border-blue-500'
			/>
			<button
				onClick={handleSend}
				className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none'
			>
				Отправить
			</button>
		</div>
	)
}

export default TelegramInput
