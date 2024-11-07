import styles from './ModalRegister.module.scss'
import ModalButtonSubmit from '../ModalButtonSubmit/ModalButtonSubmit'
import { useForm } from 'react-hook-form'

export const ModalRegister = ({}) => {
	const { register: registerRegister, handleSubmit: handleSubmitRegister } =
		useForm()
	const onSubmitRegister = (data: any) => {
		console.log('Registration Data:', data)
	}

	return (
		<form
			onSubmit={handleSubmitRegister(onSubmitRegister)}
			className={styles.form}
		>
			<label className={styles.form__label}>Логин</label>
			<input
				{...registerRegister('username', { required: true })}
				placeholder='Придумайте логин'
				className={styles.form__input}
			/>
			<label className={styles.form__label}>Пароль</label>
			<input
				{...registerRegister('password', { required: true })}
				placeholder='Придумайте пароль'
				type='password'
				className={styles.form__input}
			/>
			<label className={styles.form__label}>Повторите пароль</label>
			<input
				{...registerRegister('password', { required: true })}
				placeholder='Повторите пароль'
				type='password'
				className={styles.form__input}
			/>
			<ModalButtonSubmit text={'Зарегистрироваться'} />
		</form>
	)
}
