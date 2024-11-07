import React from 'react'
import styles from './ModalButtonSubmit.module.scss'

interface ISubmit {
	text: string
}

const ModalButtonSubmit: React.FC<ISubmit> = ({ text }) => {
	return (
		<button className={styles.button} type='submit'>
			{text}
		</button>
	)
}

export default ModalButtonSubmit
