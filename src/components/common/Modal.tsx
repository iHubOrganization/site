import React, { useEffect, useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import clsx from 'clsx'

type Props = {
	children: React.ReactNode
	blackout?: boolean
	onClose: () => void
	className?: string
	withCloseButton?: boolean
}

const Modal = (props: Props) => {
	const { children, blackout, onClose, withCloseButton = true } = props
	const rootRef = useRef<HTMLDivElement>(null)
	const [isInitialClick, setIsInitialClick] = useState(true)

	useEffect(() => {
		const handleEscapePress = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		const handleWrapperClick = (event: MouseEvent) => {
			if (isInitialClick) {
				setIsInitialClick(false)
				return
			}
			if (
				rootRef.current &&
				!rootRef.current.contains(event.target as Node)
			) {
				onClose()
			}
		}

		window.addEventListener('click', handleWrapperClick)
		window.addEventListener('keydown', handleEscapePress)

		return () => {
			window.removeEventListener('click', handleWrapperClick)
			window.removeEventListener('keydown', handleEscapePress)
		}
	}, [onClose, isInitialClick])

	return (
		<div
			className={clsx(
				'fixed inset-0 z-50 flex justify-center items-center p-4',
				{ 'bg-[#00000066]': blackout }
			)}
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					onClose()
				}
			}}
		>
			<div
				ref={rootRef}
				className={clsx(
					'bg-white rounded-lg shadow-xl p-4 md:p-6 lg:p-8 w-full max-w-2xl relative',
					props.className
				)}
			>
				{withCloseButton && (
					<button
						className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors'
						onClick={onClose}
					>
						<FaTimes size={28} />
					</button>
				)}
				{children}
			</div>
		</div>
	)
}

export default Modal
