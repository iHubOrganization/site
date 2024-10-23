import React from 'react'

export interface ProductType {
	title: string
	grade: string
	img: string
	color: string
	price: string
}

const Product: React.FC<ProductType> = (props) => {
	return (
		<div>
			<div
				className='w-[333px] h-[333px] rounded-lg shadow-md p-4 text-center relative'
				style={{ backgroundColor: props.color }}
			>
				<img
					src={props.img}
					alt={props.title}
					className='absolute left-6 bottom-6'
				/>
				<div className='absolute bottom-[282px] left-[283px] w-[80px] h-[80px] flex justify-center items-center bg-white rounded-full p-1'>
					<div
						className='flex justify-center items-center rounded-full w-full h-full'
						style={{ backgroundColor: props.color }}
					>
						<img src='/src/assets/cart.svg' alt='cart' />
					</div>
				</div>
			</div>
			<div className='flex justify-between mt-[35px]'>
				<div className='flex justify-between gap-[10px]'>
					<img src='/src/assets/star.png' alt='star' />
					<img src='/src/assets/star.png' alt='star' />
					<img src='/src/assets/star.png' alt='star' />
					<img src='/src/assets/star.png' alt='star' />
					<img src='/src/assets/star.png' alt='star' />
				</div>
				<span className='text-base text-[#180202] font-bold'>
					{props.grade}
				</span>
			</div>
			<div className='flex justify-between mt-[16px]'>
				<p className='text-xl text-[#180202] '>{props.title}</p>
				<p className='text-xl text-[#180202] font-bold'>${props.price}</p>
			</div>
		</div>
	)
}

export default Product
