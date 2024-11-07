import { useState } from 'react'
import ModalButtonTop from '../ModalButtonTop/ModalButtonTop'
import { ModalRegister } from '../ModalRegister/ModalRegister'
import { ModalLogin } from '../ModalLogin/ModalLogin'

const ModalForm = () => {
	const [activeButton, setActiveButton] = useState<'register' | 'login'>(
		'register'
	)

	const handleButtonClick = (button: 'register' | 'login') => {
		setActiveButton(button)
	}

	return (
		<>
			<ModalButtonTop
				text={'Регистрация'}
				isActive={activeButton === 'register'}
				onClick={() => handleButtonClick('register')}
				border={'35px 0 0 0'}
			/>
			<ModalButtonTop
				text={'Вход'}
				isActive={activeButton === 'login'}
				onClick={() => handleButtonClick('login')}
				border={'0 35px 0 0'}
			/>
			{activeButton === 'register' && <ModalRegister />}

			{activeButton === 'login' && <ModalLogin />}
		</>
	)
}

export default ModalForm
