import { ProductType } from '../components/common/Product'
import pro5 from '../assets/airpodsPro/5.jpeg'
import pro6 from '../assets/airpodsPro/6.jpeg'
import pro7 from '../assets/airpodsPro/7.jpeg'
import pro10 from '../assets/airpodsPro/10.jpeg'
import pro11 from '../assets/airpodsPro/11.jpeg'
import three4 from '../assets/airpods3/4.jpeg'
import three5 from '../assets/airpods3/5.jpeg'
import three6 from '../assets/airpods3/6.jpeg'
import three7 from '../assets/airpods3/7.jpeg'
import three8 from '../assets/airpods3/8.jpeg'
import two1 from '../assets/airpods2/1.jpeg'
import two2 from '../assets/airpods2/2.jpeg'
import two3 from '../assets/airpods2/3.jpeg'
import two4 from '../assets/airpods2/4.jpeg'
import two5 from '../assets/airpods2/5.jpeg'
import whatch9_1 from '../assets/Apple Watch Series 9/1.jpeg'
import whatch9_2 from '../assets/Apple Watch Series 9/2.jpeg'
import whatch9_5 from '../assets/Apple Watch Series 9/5.jpeg'
import whatch9_6 from '../assets/Apple Watch Series 9/6.jpeg'
import whatch9_7 from '../assets/Apple Watch Series 9/7.jpeg'
import ultra1 from '../assets/Apple Watch Ultra 2/1.jpeg'
import ultra2 from '../assets/Apple Watch Ultra 2/2.jpeg'
import ultra3 from '../assets/Apple Watch Ultra 2/3.jpeg'
import ultra4 from '../assets/Apple Watch Ultra 2/4.jpeg'
import ultra7 from '../assets/Apple Watch Ultra 2/7.jpeg'
import max12 from '../assets/AirPods Max/12.jpeg'
import max3 from '../assets/AirPods Max/3.jpeg'
import max8 from '../assets/AirPods Max/8.jpeg'
import max10 from '../assets/AirPods Max/10.jpeg'
import max11 from '../assets/AirPods Max/11.jpeg'

export const productList: ProductType[] = [
	{
		title: 'AirPods Max',
		grade: '4.80',
		img: max12,
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
		backgroundColor: 'white',
		// backgroundColor: '#FFCC99',
		additionalImages: [max12, max8, max3, max11, max10]
	},
	{
		title: 'AirPods Pro',
		grade: '4.90',
		img: pro7,
		price: '3490',
		caseOptions: [
			{ name: 'Персиковый', color: '#F4A261' },
			{ name: 'Коралловый', color: '#FF6F61' },
			{ name: 'Синий', color: '#0077B6' }
		],
		backgroundColor: 'white',
		// backgroundColor: '#B7A7E9',
		additionalImages: [pro7, pro5, pro6, pro10, pro11]
	},
	{
		title: 'AirPods 2',
		grade: '4.70',
		img: two4,
		price: '1990',
		caseOptions: [
			{ name: 'Персиковый', color: '#F4A261' },
			{ name: 'Коралловый', color: '#FF6F61' },
			{ name: 'Лавандовый', color: '#6A5ACD' }
		],
		// backgroundColor: '#85C1E9',
		backgroundColor: 'white',
		additionalImages: [two4, two2, two3, two1, two5]
	},
	{
		title: 'AirPods 3',
		grade: '4.75',
		img: three8,
		price: '2490',
		caseOptions: [
			{ name: 'Синий', color: '#0077B6' },
			{ name: 'Лавандовый', color: '#6A5ACD' },
			{ name: 'Коралловый', color: '#FF6F61' }
		],
		backgroundColor: 'white',
		// backgroundColor: '#FFB84D',
		additionalImages: [three8, three4, three5, three6, three7]
	},
	{
		title: 'Apple Watch Series 9',
		grade: '4.85',
		img: whatch9_1,
		price: '3990',
		colorOptions: [
			{ name: 'Оранжевый', color: '#FF8C00' },
			{ name: 'Зелёный', color: '#2E8B57' },
			{ name: 'Синий', color: '#0077B6' }
		],
		backgroundColor: 'white',
		// backgroundColor: '#FF9985',
		additionalImages: [whatch9_1, whatch9_2, whatch9_7, whatch9_5, whatch9_6]
	},
	{
		title: 'Apple Watch Ultra 2',
		grade: '4.95',
		img: ultra2,
		price: '4990',
		colorOptions: [
			{ name: 'Оранжевый', color: '#FF8C00' },
			{ name: 'Зелёный', color: '#2E8B57' },
			{ name: 'Синий', color: '#0077B6' }
		],
		backgroundColor: 'white',
		// backgroundColor: '#A8D5BA',
		additionalImages: [ultra2, ultra4, ultra3, ultra1, ultra7]
	}
]
