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
		color: '#FF6F61',
		price: '9990'
	},
	{
		title: 'AirPods Pro',
		grade: '4.90',
		img: pro,
		color: '#6A5ACD',
		price: '3490'
	},
	{
		title: 'AirPods 2',
		grade: '4.70',
		img: pro,
		color: '#F4A261',
		price: '1990'
	},
	{
		title: 'AirPods 3',
		grade: '4.75',
		img: pro,
		color: '#0077B6',
		price: '2490'
	},
	{
		title: 'Apple Watch Series 9',
		grade: '4.85',
		img: w1,
		color: '#FF8C00',
		price: '3990'
	},
	{
		title: 'Apple Watch Ultra 2',
		grade: '4.95',
		img: w2,
		color: '#2E8B57',
		price: '4990'
	}
]
