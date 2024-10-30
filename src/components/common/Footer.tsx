import React from 'react'
import { FaInstagram, FaTelegram, FaVk } from 'react-icons/fa'

const Footer: React.FC = () => {
	return (
		<footer className='bg-[#F54F29] p-10 text-white text-center'>
			<div className='flex justify-center gap-12'>
				<a
					href='https://www.instagram.com'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Instagram'
				>
					<FaInstagram size={32} className='hover:text-gray-300' />
				</a>
				<a
					href='https://t.me'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Telegram'
				>
					<FaTelegram size={32} className='hover:text-gray-300' />
				</a>
				<a
					href='https://vk.com'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='VK'
				>
					<FaVk size={32} className='hover:text-gray-300' />
				</a>
			</div>
		</footer>
	)
}

export default Footer
