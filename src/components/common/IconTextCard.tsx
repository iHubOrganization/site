type IconTextCardProps = {
	icon: string
	title: string
	text: string
}

const IconTextCard = ({ icon, title, text }: IconTextCardProps) => {
	return (
		<div className='flex items-center p-4  rounded-lg transition-shadow duration-300 w-fit'>
			{icon && <img src={`${icon}`} className='mr-4' />}
			<div>
				<h3 className='text-lg font-semibold'>{title}</h3>
				<p className='text-gray-600'>{text}</p>
				<a href='#' className='text-blue-500 hover:underline'>
					Читать далее...
				</a>{' '}
			</div>
		</div>
	)
}

export default IconTextCard
