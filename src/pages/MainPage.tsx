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

	// Загрузка и сохранение корзины в localStorage
	useEffect(() => {
		const savedCart = localStorage.getItem('cart')
		if (savedCart) setCart(JSON.parse(savedCart))
	}, [])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	// Добавление и удаление товара из корзины
	const addToCart = (product: ProductType) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find(
				(item) => item.title === product.title
			)
			if (existingItem) {
				return prevCart.filter((item) => item.title !== product.title)
			} else {
				return [...prevCart, { ...product, quantity: 1 }]
			}
		})
	}

	// Подсчитываем общее количество товаров в корзине для отображения на иконке
	const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

	return (
		<div className='w-full bg-white min-h-screen'>
			{/* Анимированная иконка корзины, появляется и исчезает плавно */}
			{totalItems > 0 && (
				<div className='fixed top-4 right-4 z-50 transition-opacity duration-500 ease-in-out opacity-100'>
					<CartIcon cart={cart} onClick={() => setIsCartOpen(true)} />
				</div>
			)}

			<div className='p-4'>
				<ProductList
					productList={productList}
					addToCart={addToCart}
					cart={cart}
				/>
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
