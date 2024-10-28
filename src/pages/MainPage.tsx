import ProductList from '../components/common/ProductList'
import WhatInTheBox from '../components/common/WhatInTheBox'
import { productList } from '../data/productList'

function MainPage() {
	return (
		<div className='p-4 w-full'>
			<ProductList productList={productList} />
			<WhatInTheBox />
		</div>
	)
}

export default MainPage
