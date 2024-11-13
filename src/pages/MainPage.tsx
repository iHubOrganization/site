import React, { useState, useEffect } from 'react'
import ProductList from '../components/common/ProductList'
import WhatInTheBox from '../components/common/WhatInTheBox'
import Order from '../components/common/Order'
import Footer from '../components/common/Footer'
import CartIcon from '../components/common/CartIcon'
import Modal from '../components/common/Modal'
import { productList } from '../data/productList'
import CartPage from './CartPage'
import { ProductType } from '../components/common/Product'

export interface FormData {
	name: string
	phone: string
	telegram: string
	promoCode: string
	comment: string
}

export interface CartItem {
	title: string
	quantity: number
	price: string
}

function MainPage() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		phone: '',
		telegram: '',
		promoCode: '',
		comment: ''
	})

	const [cart, setCart] = useState<CartItem[]>([])
	const [isCartOpen, setIsCartOpen] = useState(false)

	// Загружаем корзину из localStorage при первой загрузке компонента
	useEffect(() => {
		const savedCart = localStorage.getItem('cart')
		if (savedCart) {
			setCart(JSON.parse(savedCart))
		}
	}, [])

	// Сохраняем корзину в localStorage при каждом изменении состояния cart
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	// Функция для добавления или удаления товара из корзины
	const addToCart = (product: ProductType) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find(
				(item) => item.title === product.title
			)
			if (existingItem) {
				// Если товар уже в корзине, удаляем его при повторном нажатии
				return prevCart.filter((item) => item.title !== product.title)
			} else {
				// Если товара нет в корзине, добавляем его
				return [...prevCart, { ...product, quantity: 1 }]
			}
		})
	}

	// Подсчитываем общее количество товаров в корзине для отображения на иконке
	const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

	return (
		<div className='w-full bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen'>
			{/* Иконка корзины, которая появляется с анимацией, если есть товары */}
			{totalItems > 0 && (
				<div className='fixed top-4 right-4 z-50'>
					<CartIcon cart={cart} onClick={() => setIsCartOpen(true)} />
				</div>
			)}

			<div className='p-4'>
				<ProductList productList={productList} addToCart={addToCart} />
				<WhatInTheBox />
				<Order formData={formData} setFormData={setFormData} />
			</div>
			<Footer />

			{/* Модальное окно корзины */}
			{isCartOpen && (
				<Modal blackout onClose={() => setIsCartOpen(false)}>
					<CartPage cart={cart} />
				</Modal>
			)}
		</div>
	)
}

export default MainPage
