// src/components/common/WhatInTheBox.tsx
import React from 'react'
import { Box, Typography, List, ListItem, Divider } from '@mui/material'
import chargerIcon from '../../assets/ChargerIcon.png'
import whatInTheBox from '../../assets/whatInTheBox.png'

const items = [
	{ id: 1, label: 'Зарядный кабель', icon: chargerIcon },
	{ id: 2, label: 'Дополнительный чехол', icon: chargerIcon },
	{ id: 3, label: 'Элегантная коробка', icon: chargerIcon },
	{ id: 4, label: 'Руководство пользователя', icon: chargerIcon }
]

const WhatInTheBox: React.FC = () => {
	return (
		<Box
			mt={{ xs: 6, md: 8 }}
			display='flex'
			flexDirection={{ xs: 'column', md: 'row' }}
			alignItems='center'
			justifyContent='center'
			gap={6}
			px={4}
		>
			<Box
				position='relative'
				width={{ xs: '100%', md: '662px' }}
				sx={{
					boxShadow: 3,
					borderRadius: 2,
					overflow: 'hidden',
					transition: 'transform 0.3s',
					'&:hover': { transform: 'scale(1.05)' },
					backgroundColor: '#f5f5f5'
				}}
			>
				<img
					src={whatInTheBox}
					alt='Комплектация'
					style={{ width: '100%', height: '100%', objectFit: 'contain' }}
				/>
			</Box>

			<Box textAlign={{ xs: 'center', md: 'left' }} ml={{ md: 4 }}>
				<Typography variant='h4' color='primary' gutterBottom>
					Что входит в комплект
				</Typography>
				<List>
					{items.map((item, index) => (
						<React.Fragment key={item.id}>
							<ListItem>
								<Box display='flex' alignItems='center' width='100%'>
									<img
										src={item.icon}
										alt={`${item.label} Icon`}
										style={{
											width: '24px',
											height: '24px',
											marginRight: '16px'
										}}
									/>
									<Typography variant='h6' color='textPrimary'>
										{item.label}
									</Typography>
								</Box>
							</ListItem>
							{index < items.length - 1 && <Divider />}
						</React.Fragment>
					))}
				</List>
			</Box>
		</Box>
	)
}

export default WhatInTheBox
