import React from 'react'
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button
} from '@mui/material'

const Modal = ({
	open,
	onClose,
	children
}: {
	open: boolean
	onClose: () => void
	children: React.ReactNode
}) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>Корзина</DialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color='primary'>
					Закрыть
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default Modal
