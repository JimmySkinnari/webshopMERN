import React, { createContext, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { LoginContext } from '../contexts/LoginContextProvider'

export const RegisterContext = createContext()

const RegisterContextProvider = (props) => {
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [passwordRepeate, setPasswordRepeate] = useState('')
	const [firstName, setFirstName] = useState('')
	const [sureName, setSureName] = useState('')
	const [email, setEmail] = useState('')
	const [isUserNameTaken, setIsUserNameTaken] = useState(false)

	const { isUserLoggedIn, setIsUserLoggedIn } = useContext(LoginContext)

	const history = useHistory()

	const toggleLoginState = () => {
		setIsUserLoggedIn(!isUserLoggedIn)
	}

	const register = async () => {
		await Axios.post('http://localhost:8080/user/checkUserName', {
			userName,
		}).then((res) => {
			if (res.data) {
				setIsUserNameTaken(!isUserNameTaken)
			}
		})

		if (password !== passwordRepeate) {
			alert('password does not match')
			return
		} else if (password.length < 3) {
			alert('you need a longer password')
			return
		} else if (isUserNameTaken === true) {
			alert('username taken')
			return
		} else {
			Axios.post('http://localhost:8080/user/register', {
				userName,
				password,
				firstName,
				sureName,
				email,
			}).then((res) => {
				if (res.data.length > 0) {
					toggleLoginState()
					setPassword('')
					setUserName('')
					setPasswordRepeate('')
					setIsUserNameTaken(true)
				}
			})

			alert('Registration success')
			setIsUserLoggedIn(!isUserLoggedIn)
			history.push('/')
		}
	}

	return (
		<RegisterContext.Provider
			value={{
				register,
				setUserName,
				setPassword,
				isUserLoggedIn,
				toggleLoginState,
				passwordRepeate,
				password,
				setPasswordRepeate,
				setSureName,
				setFirstName,
				setEmail,
			}}
		>
			{props.children}
		</RegisterContext.Provider>
	)
}

export default RegisterContextProvider
