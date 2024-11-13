// src/components/common/Modal.tsx
import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { FaTimes } from 'react-icons/fa'

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
				'fixed inset-0 z-50 flex items-center justify-center p-4',
				blackout && 'bg-[#00000066]'
			)}
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					onClose()
				}
			}}
			ref={rootRef}
		>
			<div
				className={clsx(
					'bg-white rounded-lg shadow-xl p-6 w-full max-w-md transition-transform transform duration-300 relative'
				)}
			>
				{withCloseButton && (
					<button
						className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors'
						onClick={onClose}
					>
						<FaTimes size={18} />
					</button>
				)}
				{children}
			</div>
		</div>
	)
}

export default Modal
