import { Box, Typography, Button } from '@mui/material'
import logo from '../assets/fullLogo.svg'

interface WelcomeScreenProps {
	onEnter: () => void
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100vh',
				backgroundColor: '#F54F29', // Заменен фон
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				zIndex: 1,
				padding: { xs: '20px', sm: '40px', md: '60px' } // Разные отступы для разных разрешений
			}}
		>
			{/* Логотип */}
			<Box
				component='img'
				src={logo}
				alt='Logo'
				sx={{
					maxWidth: {
						xs: '100%',
						sm: '70%',
						md: '60%',
						lg: '50%',
						xl: '40%'
					} // Устанавливаем максимальную ширину логотипа
				}}
			/>
			<Typography
				variant='h6'
				color='white'
				sx={{
					textAlign: 'center',
					mb: { xs: 4, sm: 4, md: 4, lg: 5, xl: 6 },
					fontSize: {
						xs: '0.9rem',
						sm: '1rem',
						md: '1.25rem',
						lg: '1.55rem',
						xl: '1.95rem'
					} // Адаптивный размер для подзаголовка
				}}
			>
				Лучший выбор наушников для вас
			</Typography>
			<Button
				variant='outlined'
				color='secondary'
				size='large'
				onClick={onEnter}
				sx={{
					px: { xs: 3, sm: 4, md: 5 }, // Паддинги для кнопки
					py: { xs: 1.5, sm: 2, md: 2.5 }, // Разные высоты кнопки
					fontSize: {
						xs: '0.9rem',
						sm: '1rem',
						md: '1.25rem',
						lg: '1.55rem',
						xl: '1.95rem'
					}, // Размер текста на кнопке
					maxWidth: '300px', // Ограничиваем ширину кнопки
					background: 'white'
				}}
			>
				В магазин
			</Button>
		</Box>
	)
}

export default WelcomeScreen
