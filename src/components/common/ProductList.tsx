import React from 'react'
import Product, { ProductType } from './Product'

interface ProductListProps {
	productList: ProductType[]
	addToCart: (product: ProductType) => void
}

const ProductList: React.FC<ProductListProps> = ({
	productList,
	addToCart
}) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{productList.map((product) => (
				<Product
					key={product.title}
					product={product}
					addToCart={addToCart}
				/>
			))}
		</div>
	)
}

export default ProductList
