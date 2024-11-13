import React from 'react'
import { FaShoppingCart, FaStar } from 'react-icons/fa'

export interface ProductType {
	title: string
	grade: string
	img: string
	color: string
	price: string
}

interface ProductProps {
	product: ProductType
	toggleCartItem: (product: ProductType) => void
	isInCart: boolean
	quantityInCart: number
}

const Product: React.FC<ProductProps> = ({
	product,
	toggleCartItem,
	isInCart,
	quantityInCart
}) => {
	const handleCartToggle = () => toggleCartItem(product)

	return (
		<div
			className='transition-transform transform scale-100 hover:scale-105 active:scale-95'
			onClick={handleCartToggle}
		>
			<div
				className='w-full h-[350px] rounded-lg shadow-md p-4 text-center relative transition-transform duration-300 ease-out'
				style={{
					background: `radial-gradient(circle, ${product.color}20 0%, ${product.color}80 45%, ${product.color} 100%)`
				}}
			>
				<div className='w-full h-[250px] flex items-center justify-center'>
					<img
						src={product.img}
						alt={product.title}
						className='object-contain h-full max-h-full scale-125 translate-y-8'
					/>
				</div>
				<div
					className={`absolute top-2 right-2 p-3 bg-white rounded-full border-2 ${
						isInCart ? 'border-[#F54F29]' : 'border-gray-400'
					} cursor-pointer shadow-lg transform transition-transform hover:scale-110 active:scale-95 ${
						isInCart ? 'text-[#F54F29]' : 'text-gray-700'
					}`}
				>
					<FaShoppingCart size={20} />
					{isInCart && (
						<span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold'>
							{quantityInCart}
						</span>
					)}
				</div>
			</div>
			<div className='flex justify-between items-center mt-4'>
				<div className='flex gap-1'>
					{[...Array(5)].map((_, index) => (
						<FaStar
							key={index}
							className='text-yellow-500 opacity-80 transition-opacity'
						/>
					))}
				</div>
				<span className='text-base font-semibold text-gray-700'>
					{product.grade}
				</span>
			</div>
			<div className='flex justify-between items-center mt-2'>
				<p className='text-lg font-medium text-gray-800'>{product.title}</p>
				<p className='text-lg font-bold text-gray-900'>
					{product.price} руб.
				</p>
			</div>
		</div>
	)
}

export default Product
