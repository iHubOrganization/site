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
		colorOptions: [
			{ name: 'Розовый', color: '#FE9792' },
			{ name: 'Серый', color: '#4F4E53' },
			{ name: 'Синий', color: '#52617C' },
			{ name: 'Зеленый', color: '#90AA69' },
			{ name: 'Серебристый', color: '#F2F2F2' }
		],
		caseOptions: [
			{ name: 'Серебристый', color: '#F2F2F2' },
			{ name: 'Розовый', color: '#FE9792' },
			{ name: 'Серый', color: '#4F4E53' },
			{ name: 'Синий', color: '#52617C' },
			{ name: 'Зеленый', color: '#90AA69' }
		],
		backgroundColor: '#FFCC99',
		additionalImages: [w2, pro, w1]
	},
	{
		title: 'AirPods Pro',
		grade: '4.90',
		img: pro,
		price: '3490',
		caseOptions: [
			{ name: 'Персиковый', color: '#F4A261' },
			{ name: 'Коралловый', color: '#FF6F61' },
			{ name: 'Синий', color: '#0077B6' }
		],
		backgroundColor: '#B7A7E9',
		additionalImages: [pro, pro, pro]
	},
	{
		title: 'AirPods 2',
		grade: '4.70',
		img: pro,
		price: '1990',
		caseOptions: [
			{ name: 'Персиковый', color: '#F4A261' },
			{ name: 'Коралловый', color: '#FF6F61' },
			{ name: 'Лавандовый', color: '#6A5ACD' }
		],
		backgroundColor: '#85C1E9',
		additionalImages: [pro, pro, pro]
	},
	{
		title: 'AirPods 3',
		grade: '4.75',
		img: pro,
		price: '2490',
		caseOptions: [
			{ name: 'Синий', color: '#0077B6' },
			{ name: 'Лавандовый', color: '#6A5ACD' },
			{ name: 'Коралловый', color: '#FF6F61' }
		],
		backgroundColor: '#FFB84D',
		additionalImages: [pro, pro, pro]
	},
	{
		title: 'Apple Watch Series 9',
		grade: '4.85',
		img: w1,
		price: '3990',
		colorOptions: [
			{ name: 'Оранжевый', color: '#FF8C00' },
			{ name: 'Зелёный', color: '#2E8B57' },
			{ name: 'Синий', color: '#0077B6' }
		],
		backgroundColor: '#FF9985',
		additionalImages: [w1, w1, w1]
	},
	{
		title: 'Apple Watch Ultra 2',
		grade: '4.95',
		img: w2,
		price: '4990',
		colorOptions: [
			{ name: 'Оранжевый', color: '#FF8C00' },
			{ name: 'Зелёный', color: '#2E8B57' },
			{ name: 'Синий', color: '#0077B6' }
		],
		backgroundColor: '#A8D5BA',
		additionalImages: [w2, w2, w2]
	}
]
