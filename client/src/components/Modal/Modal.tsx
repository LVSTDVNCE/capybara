import React, { useEffect } from 'react'
import styles from './Modal.module.scss'
import ModalForm from '../ModalForm/ModalForm'

interface ModalProps {
	onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	useEffect(() => {
		const handleEscapeKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose()
			}
		}

		document.addEventListener('keydown', handleEscapeKey)
		return () => {
			document.removeEventListener('keydown', handleEscapeKey)
		}
	}, [onClose])

	return (
		<div className={styles.overlay} onClick={handleOverlayClick}>
			<div className={styles.modal}>
				<ModalForm />
			</div>
		</div>
	)
}

export default Modal
