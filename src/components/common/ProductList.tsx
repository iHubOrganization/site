import React from 'react'
import Product, { ProductType } from './Product'

interface ProductListType {
	productList: ProductType[]
}

const ProductList: React.FC<ProductListType> = ({ productList }) => {
	return (
		<div className='mx-auto'>
			<h2 className='text-[34px] md:text-[38px] xl:text-[44px] text-[#180202] font-bold text-center'>
				Our Latest Product
			</h2>
			<p className='text-center text-[#180202] mt-[10px] md:mt-[20px] xl:mt-[25px] text-base max-w-[460px] md:max-w-[560px] mx-auto'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
				facilisis nunc ipsum aliquam, ante.
			</p>
			<div className='flex justify-center items-center mt-[64px] md:mt-[78px] xl:mt-[91px]'>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16'>
					{productList.map((product) => (
						<Product
							key={product.title}
							title={product.title}
							grade={product.grade}
							img={product.img}
							color={product.color}
							price={product.price}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProductList
