import ProductList from '../components/common/ProductList'
import WhatInTheBox from '../components/common/WhatInTheBox'
import { productList } from '../data/productList'
import Order from '../components/common/Order'
import Footer from '../components/common/Footer'
import { useState } from 'react'

export interface FormData {
	name: string
	phone: string
	telegram: string
	promoCode: string
	comment: string
}

function MainPage() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		phone: '',
		telegram: '',
		promoCode: '',
		comment: ''
	})

	return (
		<div className='w-full'>
			<div className='p-4'>
				<ProductList productList={productList} />
				<WhatInTheBox />
				<Order formData={formData} setFormData={setFormData} />
			</div>
			<Footer />
		</div>
	)
}

export default MainPage
