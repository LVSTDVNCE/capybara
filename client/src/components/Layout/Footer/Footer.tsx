import left from './../../../assets/footer/left.png'
import right from './../../../assets/footer/right.png'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__wrapper}>
				<img src={left} alt='' className={styles.footer__leftImg} />
				<img src={right} alt='' className={styles.footer__rightImg} />
			</div>
		</footer>
	)
}

export default Footer
