import { useForm } from 'react-hook-form'
import styles from './ModalLogin.module.scss'
import ModalButtonSubmit from '../ModalButtonSubmit/ModalButtonSubmit'

export const ModalLogin = () => {
	const { register: registerLogin, handleSubmit: handleSubmitLogin } = useForm()
	const onSubmitLogin = (data: any) => {
		console.log('Login Data:', data)
	}

	return (
		<form onSubmit={handleSubmitLogin(onSubmitLogin)} className={styles.form}>
			<label className={styles.form__label}>Логин</label>
			<input
				{...registerLogin('username', { required: true })}
				placeholder='Введите логин'
				className={styles.form__input}
			/>
			<label className={styles.form__label}>Пароль</label>
			<input
				{...registerLogin('password', { required: true })}
				placeholder='Введите пароль'
				type='password'
				className={styles.form__input}
			/>
			<ModalButtonSubmit text={'Войти в аккаунт'} />
		</form>
	)
}
