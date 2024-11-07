import React from 'react'
import styles from './ModalButtonTop.module.scss'

interface ModalButtonTopPrors {
	text: string
	isActive: boolean
	onClick: () => void
	border: string
}

const ModalButtonTop: React.FC<ModalButtonTopPrors> = ({
	text,
	isActive,
	onClick,
	border,
}) => {
	return (
		<button
			className={styles.button}
			style={{
				backgroundColor: isActive ? '#fff' : '#D9D9D9',
				borderRadius: border,
			}}
			onClick={onClick}
		>
			{text}
		</button>
	)
}

export default ModalButtonTop
