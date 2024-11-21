import { BsBagHeart } from 'react-icons/bs'
import Button from './Button'
import { CiSearch } from 'react-icons/ci'
import { FiUser } from 'react-icons/fi'
import ContentMain from './ContentMain'

const HomePage = () => {
	return (
		<div className='bg-[#F54F29] h-screen pt-11 px-56'>
			<div className='flex justify-center'>
				<img src='/public/icons/logo_header.svg' className='w-10 h-19' />
				<div className='flex gap-8 mx-auto'>
					<Button type='primary' onClick={() => {}}>
						<CiSearch size={24} color='#F54F29' />
					</Button>
					<Button type='primary' onClick={() => {}}>
						<BsBagHeart size={24} color='#F54F29' />
					</Button>
					<Button type='primary' onClick={() => {}}>
						<FiUser size={24} color='#F54F29' />
					</Button>
				</div>
				<img src='/public/icons/burger_menu.svg' className='w-10 h-19' />
			</div>
			<ContentMain />
		</div>
	)
}

export default HomePage
