import ProductList from '../components/common/ProductList'
import WhatInTheBox from '../components/common/WhatInTheBox'
import { productList } from '../data/productList'
import TelegramInput from '../components/common/TelegramInput'

function MainPage() {
	return (
		<div className='p-4 w-full'>
			<ProductList productList={productList} />
			<WhatInTheBox />
			<TelegramInput />
			{/* это временный компонент для наглядности работы уже сейчас */}
		</div>
	)
}

export default MainPage
