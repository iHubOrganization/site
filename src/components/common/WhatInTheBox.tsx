import React from 'react'

import chargerIcon from '../../assets/ChargerIcon.png'
import whatInTheBox from '../../assets/whatInTheBox.png'

const items = [
	{ id: 1, label: 'Зарядное устройство 5А', icon: chargerIcon },
	{ id: 2, label: 'Дополнительный аккумулятор', icon: chargerIcon },
	{ id: 3, label: 'Элегантная сумка', icon: chargerIcon },
	{ id: 4, label: 'Руководство пользователя', icon: chargerIcon }
]

const WhatInTheBox: React.FC = () => {
	return (
		<div className='mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 px-4'>
			<div className='relative w-full max-w-xs md:max-w-[662px] aspect-w-16 aspect-h-9 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105'>
				<img
					src={whatInTheBox}
					alt='Комплектация'
					className='object-contain w-full h-full'
				/>
			</div>

			<div className='text-center md:text-left'>
				<h2 className='text-2xl md:text-3xl font-bold text-[#F54F29] mb-4'>
					Что входит в комплект
				</h2>
				<ul className='mt-6 md:mt-12 space-y-4'>
					{items.map((item, index) => (
						<div key={item.id}>
							<li className='flex items-center space-x-3'>
								<img
									src={item.icon}
									alt={`${item.label} Icon`}
									className='w-6 h-6'
								/>
								<span className='text-lg md:text-xl font-medium text-gray-800'>
									{item.label}
								</span>
							</li>
							{index < items.length - 1 && (
								<hr className='my-2 md:my-5 border-gray-300 w-[292px]' />
							)}
						</div>
					))}
				</ul>
			</div>
		</div>
	)
}

export default WhatInTheBox
