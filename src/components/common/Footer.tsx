// src/components/common/Footer.tsx
import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { FaInstagram, FaTelegram, FaVk } from 'react-icons/fa'

const Footer: React.FC = () => {
	return (
		<Box
			component='footer'
			sx={{
				width: '100vw',
				backgroundColor: '#0077B6',
				p: 4,
				color: 'white',
				textAlign: 'center',
				position: 'relative',
				left: '50%',
				transform: 'translateX(-50%)'
			}}
		>
			<Box display='flex' justifyContent='center' gap={3} mb={2}>
				<IconButton
					href='https://www.instagram.com/i_hub_76/profilecard/?igsh=MTc4ajgxdzc4M2k1dw=='
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Instagram'
					sx={{ color: 'white' }}
				>
					<FaInstagram size={32} />
				</IconButton>
				<IconButton
					href='https://t.me/i_iiHub'
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
