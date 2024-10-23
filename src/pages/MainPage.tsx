import ProductList from '../components/common/ProductList'
import { productList } from '../data/productList'

function MainPage() {
	return (
		<div className='p-4 w-full'>
			<ProductList productList={productList} />
		</div>
	)
}

export default MainPage
