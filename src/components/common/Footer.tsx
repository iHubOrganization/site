import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { FaInstagram, FaTelegram, FaVk } from 'react-icons/fa'

const Footer: React.FC = () => {
	return (
		<Box
			component='footer'
			sx={{
				mt: { xs: 5, md: 8 },
				width: '100%',
				backgroundColor: '#0077B6',
				p: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 }, // Адаптивные отступы
				color: 'white',
				textAlign: 'center',
				position: 'relative',
				left: '50%',
				transform: 'translateX(-50%)'
			}}
		>
			<Box
				display='flex'
				justifyContent='center'
				gap={3}
				flexWrap='wrap' // Окончания на малых экранах
				mb={2}
			>
				<IconButton
					href='https://www.instagram.com/i_hub_76/profilecard/?igsh=MTc4ajgxdzc4M2k1dw=='
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Instagram'
					sx={{
						color: 'white',
						fontSize: { xs: 28, sm: 32, md: 36, lg: 40, xl: 44 } // Адаптивный размер иконок
					}}
				>
					<FaInstagram />
				</IconButton>
				<IconButton
					href='https://t.me/i_Hub'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Telegram'
					sx={{
						color: 'white',
						fontSize: { xs: 28, sm: 32, md: 36, lg: 40, xl: 44 } // Адаптивный размер иконок
					}}
				>
					<FaTelegram />
				</IconButton>
				<IconButton
					href='https://vk.com'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='VK'
					sx={{
						color: 'white',
						fontSize: { xs: 28, sm: 32, md: 36, lg: 40, xl: 44 } // Адаптивный размер иконок
					}}
				>
					<FaVk />
				</IconButton>
			</Box>
			<Typography
				variant='body2'
				sx={{
					fontSize: {
						xs: '0.75rem',
						sm: '0.85rem',
						md: '1rem',
						lg: '1.1rem',
						xl: '1.2rem'
					} // Адаптивный размер шрифта
				}}
			>
				&copy; {new Date().getFullYear()} Ваш Магазин. Все права защищены.
			</Typography>
		</Box>
	)
}

export default Footer
