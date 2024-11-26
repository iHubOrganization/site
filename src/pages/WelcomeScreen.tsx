import { Box, Typography, Button } from '@mui/material'
import { useEffect } from 'react'

interface WelcomeScreenProps {
	onEnter: () => void
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				onEnter()
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [onEnter])

	return (
		<Box
			sx={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100vh',
				backgroundColor: '#1a1a1a',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				zIndex: 1400
			}}
		>
			<Typography
				variant='h3'
				color='white'
				gutterBottom
				sx={{ textAlign: 'center', mb: 2 }}
			>
				Добро пожаловать в iHub
			</Typography>
			<Typography
				variant='h6'
				color='white'
				sx={{ textAlign: 'center', mb: 4 }}
			>
				Лучший выбор наушников для вас
			</Typography>
			<Button
				variant='contained'
				color='primary'
				size='large'
				onClick={onEnter}
				sx={{ px: 4, py: 1.5 }}
			>
				В магазин
			</Button>
		</Box>
	)
}

export default WelcomeScreen
