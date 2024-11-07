import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Main from '../pages/Main/Main'
import TestPage from '../pages/TestPage/TestPage'
import Profile from '../pages/Profile/Profile'
import NoMatch from '../pages/NoMatch/NoMatch'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />} />
				<Route path='/Test' element={<TestPage />} />
				<Route path='/Profile' element={<Profile />} />
				<Route path='*' element={<NoMatch />} />
			</Route>
		</Routes>
	)
}

export default AppRouter
