export const sendToTelegram = async (message: string) => {
	const botToken = '7731025337:AAFGni_GcN1STnWwK5VbpyTuHoIz317OhsM'
	const chatIds = ['2101651535', '1206425584', '7898680354']
	const url = `https://api.telegram.org/bot${botToken}/sendMessage`

	for (const chatId of chatIds) {
		try {
			await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					chat_id: chatId,
					text: message
				})
			})
			console.log(`Message sent successfully to chat ${chatId}!`)
		} catch (error) {
			console.error(`Error sending message to chat ${chatId}:`, error)
		}
	}
}
