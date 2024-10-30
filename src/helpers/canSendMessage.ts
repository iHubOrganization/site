const RATE_LIMIT_TIMEOUT = 60 * 1000 // 60 секунд

// Метод для проверки, можно ли отправить сообщение
export const canSendMessage = () => {
	const lastSent = localStorage.getItem('lastSent')
	const now = Date.now()

	if (lastSent && now - Number(lastSent) < RATE_LIMIT_TIMEOUT) {
		return false // Не отправляем, если прошло меньше лимитированного времени
	}

	// Обновляем временную метку при разрешении отправки
	localStorage.setItem('lastSent', now.toString())
	return true
}
