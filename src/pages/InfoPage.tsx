import React from 'react'

const InfoPage: React.FC = () => {
	return (
		<div className='flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16'>
			<div className='lg:w-1/2'>
				<h1 className='text-3xl lg:text-5xl font-bold text-gray-800 mb-6'>
					Good headphones <br /> and loud music is all you need
				</h1>
				<ul className='space-y-6'>
					{[
						{ title: 'Battery', subtitle: 'Battery 6.2V-AAC codec' },
						{ title: 'Bluetooth', subtitle: 'Battery 6.2V-AAC codec' },
						{ title: 'Microphone', subtitle: 'Battery 6.2V-AAC codec' }
					].map((item, index) => (
						<li key={index} className='flex items-center space-x-4'>
							<div className='w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600'>
								<span className='text-xl font-bold'>
									{item.title[0]}
								</span>
							</div>
							<div>
								<h3 className='text-lg font-semibold'>{item.title}</h3>
								<p className='text-sm text-gray-600'>{item.subtitle}</p>
								<a
									href='#'
									className='text-red-600 text-sm font-semibold'
								>
									Learn More
								</a>
							</div>
						</li>
					))}
				</ul>
			</div>

			<div className='mt-8 lg:mt-0 lg:w-1/2 flex items-center justify-center relative'>
				<img
					src='public/icons/info_hedphone.svg'
					alt='Headphones'
					className='w-64 lg:w-80'
				/>
			</div>
		</div>
	)
}

export default InfoPage
