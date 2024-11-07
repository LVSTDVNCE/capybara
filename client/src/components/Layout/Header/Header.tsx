import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import Modal from '../../Modal/Modal'

const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	return (
		<header className={styles.header}>
			<nav className={styles.header__nav}>
				<ul className={styles.header__list}>
					<li>
						<Link to='/Test' className={styles.header__link}>
							Пройти тест
						</Link>
					</li>
					<li>
						<Link to='' className={styles.header__link}>
							Информация
						</Link>
					</li>
				</ul>
				<button className={styles.header__button} onClick={openModal}>
					Войти
				</button>
			</nav>
			{isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
		</header>
	)
}

export default Header
