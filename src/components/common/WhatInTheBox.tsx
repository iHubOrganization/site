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
			mt={{ xs: 5, md: 8 }}
			display='flex'
			flexDirection={{ xs: 'column', md: 'row' }}
			alignItems='center'
			justifyContent='center'
			gap={{ xs: 4, lg: 6 }} // Увеличиваем gap для больших экранов
			px={{ xs: 2, sm: 4, md: 6, lg: 8 }} // Адаптивные отступы по бокам
		>
			<Box
				position='relative'
				width={{ xs: 300, lg: 500 }} // Устанавливаем фиксированную ширину картинки
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
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'contain'
					}}
				/>
			</Box>

			<Box textAlign={{ xs: 'center', md: 'left' }} ml={{ md: 4 }}>
				<Typography
					variant='h4'
					color='primary'
					gutterBottom
					sx={{
						fontSize: { xs: '1.5rem', sm: '2rem', lg: '2.5rem' } // Размер шрифта заголовка
					}}
				>
					Что входит в комплект
				</Typography>
				<List>
					{items.map((item, index) => (
						<React.Fragment key={item.id}>
							<ListItem>
								<Box
									display='flex'
									alignItems='center'
									width='100%'
									gap={2}
								>
									{' '}
									{/* Добавляем отступы между иконкой и текстом */}
									<img
										src={item.icon}
										alt={`${item.label} Icon`}
										style={{
											width: '24px',
											height: '24px'
										}}
									/>
									<Typography
										variant='h6'
										color='textPrimary'
										sx={{
											fontSize: {
												xs: '0.875rem',
												sm: '1rem',
												lg: '1.125rem'
											}, // Адаптивный размер текста
											lineHeight: { xs: '1.5', sm: '1.6', lg: '1.7' } // Адаптивный межстрочный интервал
										}}
									>
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
