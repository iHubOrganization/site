import max from '../assets/max/pink.png'
import pro from '../assets/pro/1.png'
import w1 from '../assets/whatch/image.png'
import w2 from '../assets/whatch2/image.png'

import { ProductType } from '../components/common/Product'

export const productList: ProductType[] = [
	{
		title: 'AirPods Max',
		grade: '4.80',
		img: max,
		color: '#FFE5EE',
		price: '9 990'
	},
	{
		title: 'AirPods Pro',
		grade: '4.90',
		img: pro,
		color: '#E5F1FF',
		price: '3 490'
	},
	{
		title: 'AirPods 2',
		grade: '4.70',
		img: pro,
		color: '#E5FFFB',
		price: '1 990'
	},
	{
		title: 'AirPods 3',
		grade: '4.75',
		img: pro,
		color: '#FFE5EE',
		price: '2 490'
	},
	{
		title: 'Apple Watch Series 9',
		grade: '4.85',
		img: w1,
		color: '#E5F1FF',
		price: '3 990'
	},
	{
		title: 'Apple Watch Ultra 2',
		grade: '4.95',
		img: w2,
		color: '#E5FFFB',
		price: '4 990'
	}
]
