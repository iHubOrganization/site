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
		backgroundColor: '#FF6F61', // Цвет фона карточки товара
		additionalImages: [max, max, max]
	},
	{
		title: 'AirPods Pro',
		grade: '4.90',
		img: pro,
		price: '3490',
		colorOptions: ['#F4A261', '#FF6F61', '#0077B6'],
		caseOptions: ['Пластиковый кейс', 'Силиконовый кейс'],
		backgroundColor: '#6A5ACD',
		additionalImages: [pro, pro, pro]
	},
	{
		title: 'AirPods 2',
		grade: '4.70',
		img: pro,
		price: '1990',
		colorOptions: ['#F4A261', '#FF6F61', '#6A5ACD'],
		caseOptions: ['Пластиковый кейс', 'Силиконовый кейс'],
		backgroundColor: '#F4A261',
		additionalImages: [pro, pro, pro]
	},
	{
		title: 'AirPods 3',
		grade: '4.75',
		img: pro,
		price: '2490',
		colorOptions: ['#0077B6', '#6A5ACD', '#FF6F61'],
		caseOptions: ['Пластиковый кейс', 'Силиконовый кейс'],
		backgroundColor: '#0077B6',
		additionalImages: [pro, pro, pro]
	},
	{
		title: 'Apple Watch Series 9',
		grade: '4.85',
		img: w1,
		price: '3990',
		colorOptions: ['#FF8C00', '#2E8B57', '#0077B6'],
		caseOptions: ['Металлический браслет', 'Силиконовый браслет'],
		backgroundColor: '#FF8C00',
		additionalImages: [w1, w1, w1]
	},
	{
		title: 'Apple Watch Ultra 2',
		grade: '4.95',
		img: w2,
		price: '4990',
		colorOptions: ['#FF8C00', '#2E8B57', '#0077B6'],
		caseOptions: ['Металлический браслет', 'Кожаный ремешок'],
		backgroundColor: '#2E8B57',
		additionalImages: [w2, w2, w2]
	}
]
