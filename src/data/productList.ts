// src/data/productList.ts
import { ProductType } from '../components/common/Product'
import max from '../assets/max/pink.png'
import pro from '../assets/pro/1.png'
import w1 from '../assets/watch/image.png'
import w2 from '../assets/watch2/image.png'

export const productList: ProductType[] = [
	{
		title: 'AirPods Max',
		grade: '4.80',
		img: max,
		price: '9990',
		colorOptions: ['#FF6F61', '#6A5ACD', '#0077B6'],
		caseOptions: ['Кожаный чехол', 'Силиконовый чехол'],
		backgroundColor: '#FFEEF0', // Цвет фона карточки товара
		additionalImages: [
			'/assets/airpods-max-1.png',
			'/assets/airpods-max-2.png',
			'/assets/airpods-max-3.png'
		]
	},
	{
		title: 'AirPods Pro',
		grade: '4.90',
		img: pro,
		price: '3490',
		colorOptions: ['#F4A261', '#FF6F61', '#0077B6'],
		caseOptions: ['Пластиковый кейс', 'Силиконовый кейс'],
		backgroundColor: '#F0F0FF',
		additionalImages: [
			'/assets/airpods-pro-1.png',
			'/assets/airpods-pro-2.png',
			'/assets/airpods-pro-3.png'
		]
	},
	{
		title: 'AirPods 2',
		grade: '4.70',
		img: pro,
		price: '1990',
		colorOptions: ['#F4A261', '#FF6F61', '#6A5ACD'],
		caseOptions: ['Пластиковый кейс', 'Силиконовый кейс'],
		backgroundColor: '#FFF0F5',
		additionalImages: [
			'/assets/airpods-2-1.png',
			'/assets/airpods-2-2.png',
			'/assets/airpods-2-3.png'
		]
	},
	{
		title: 'AirPods 3',
		grade: '4.75',
		img: pro,
		price: '2490',
		colorOptions: ['#0077B6', '#6A5ACD', '#FF6F61'],
		caseOptions: ['Пластиковый кейс', 'Силиконовый кейс'],
		backgroundColor: '#E0FFFF',
		additionalImages: [
			'/assets/airpods-3-1.png',
			'/assets/airpods-3-2.png',
			'/assets/airpods-3-3.png'
		]
	},
	{
		title: 'Apple Watch Series 9',
		grade: '4.85',
		img: w1,
		price: '3990',
		colorOptions: ['#FF8C00', '#2E8B57', '#0077B6'],
		caseOptions: ['Металлический браслет', 'Силиконовый браслет'],
		backgroundColor: '#FFE4B5',
		additionalImages: [
			'/assets/watch-series-9-1.png',
			'/assets/watch-series-9-2.png',
			'/assets/watch-series-9-3.png'
		]
	},
	{
		title: 'Apple Watch Ultra 2',
		grade: '4.95',
		img: w2,
		price: '4990',
		colorOptions: ['#FF8C00', '#2E8B57', '#0077B6'],
		caseOptions: ['Металлический браслет', 'Кожаный ремешок'],
		backgroundColor: '#E6E6FA',
		additionalImages: [
			'/assets/watch-ultra-2-1.png',
			'/assets/watch-ultra-2-2.png',
			'/assets/watch-ultra-2-3.png'
		]
	}
]
