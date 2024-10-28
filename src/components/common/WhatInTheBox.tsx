import React from 'react'

import chargerIcon from '../../assets/ChargerIcon.png'
import whatInTheBox from '../../assets/whatInTheBox.png'

const items = [
	{ id: 1, label: '5A Charger', icon: chargerIcon },
	{ id: 2, label: 'Extra battery', icon: chargerIcon },
	{ id: 3, label: 'Sophisticated bag', icon: chargerIcon },
	{ id: 4, label: 'User manual guide', icon: chargerIcon }
]

const WhatInTheBox: React.FC = () => {
	return (
		<div className='mt-[60px] md:mt-[130px] flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 px-4'>
			<div className='relative w-full max-w-xs md:max-w-[662px] aspect-w-16 aspect-h-9'>
				<img
					src={whatInTheBox}
					alt='Headphones Case'
					className='object-contain w-full h-full'
				/>
			</div>

			<div className='text-center md:text-left'>
				<h2 className='text-[24px] md:text-[44px] font-bold w-full md:w-[390px]'>
					Whatever you get in the box
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
								<span className='text-[18px] md:text-[22px]'>
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
