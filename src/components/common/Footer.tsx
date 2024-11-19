// src/components/common/Footer.tsx
import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { FaInstagram, FaTelegram, FaVk } from 'react-icons/fa'

const Footer: React.FC = () => {
	return (
		<Box
			component='footer'
			sx={{
				backgroundColor: '#F54F29',
				p: 4,
				color: 'white',
				textAlign: 'center'
			}}
		>
			<Box display='flex' justifyContent='center' gap={3} mb={2}>
				<IconButton
					href='https://www.instagram.com'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Instagram'
					sx={{ color: 'white' }}
				>
					<FaInstagram size={32} />
				</IconButton>
				<IconButton
					href='https://t.me'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Telegram'
					sx={{ color: 'white' }}
				>
					<FaTelegram size={32} />
				</IconButton>
				<IconButton
					href='https://vk.com'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='VK'
					sx={{ color: 'white' }}
				>
					<FaVk size={32} />
				</IconButton>
			</Box>
			<Typography variant='body2'>
				&copy; {new Date().getFullYear()} Ваш Магазин. Все права защищены.
			</Typography>
		</Box>
	)
}

export default Footer
