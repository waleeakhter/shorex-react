import React, { useState, useEffect } from 'react';
import { requestForToken } from '../Firebase/firebase';
import style from "./compponents.module.scss"
import { CButton, CCol, CForm, CInput, CRow } from '@evenlogics/react'
import { toast } from 'react-toastify';
import FlashScreen from './FlashScreen';
import { Spinner } from 'react-bootstrap'
import {withTranslation} from 'react-i18next'
const CustomLogin = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [currentUser, setCurrentUser] = useState(undefined);
	const [flashScreen, setFlashScreen] = useState(true)
	const [submit, setSubmit] = useState(false)
	useEffect(() => {
		let currentUser = localStorage.getItem('currentUser');
		console.log(currentUser, "currentUser");
		setCurrentUser(currentUser)
		if (currentUser) {
			// window.location = "/";
			props.history.push("/dashboard");
		}
	}, [props.history])
	useEffect(() => {
		setTimeout(() => {
			setFlashScreen(false)
		}, 3500)
	}, [])
	const handleLogin = async (e) => {
		setSubmit(true)
		e.preventDefault();
		const loginPayload = {
			username,
			password,
			'admin': true
		}

		fetch(`${process.env.REACT_APP_BASE_URL}/public/auth`, {
			method: "POST",
			body: JSON.stringify(loginPayload),
			headers: { "Content-type": "application/json;charset=UTF-8" }
		})
			.then(async response => {
				if (response.status >= 200 && response.status <= 299) {
					let data = await response.json()
					if (data.data.api_token) {
						if(data.data.roles.includes('Admin')||data.data.roles.includes('Sub Admin')){
							let currentUser = data.data;
							currentUser.authToken = data.data.api_token;
							localStorage.setItem('currentUser', JSON.stringify(currentUser));
							toast.success(props.t('shorex:login-successful'), { autoClose: 3000 });
							requestForToken()
							return true
						}else{
							toast.error("Sorry, You are not authorized to login!", { autoClose: 3000 });
							setSubmit(false)
						}
					}
				} else {
					let data = await response.json();
					toast.error(data.error, { autoClose: 3000 });
					setSubmit(false)
					return false;
				}
			}).catch(err => {
				console.log(err, "err")
				toast.error("Failed!", { autoClose: 3000 });
				setSubmit(false)

			});
	};
	return (
		<>
			{/* <FlashScreen check={flashScreen} /> */}
			{
				(currentUser !== null || currentUser !== undefined) &&
				<div className={`c-app c-default-layout flex-row align-items-center ${style.loginWrapper}`}>
					<div className={style.formDiv}>
						<CForm>
							<h1 className="mb-4">Login</h1>
							{/* <p className="text-muted">login-subtitle</p> */}
							<div className="mb-4 form-group">
								<label htmlFor="username">Username</label>
								<CInput type="text"
									placeholder='username'
									autoComplete="username"
									id='username'
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								// disabled={loading}
								/>
							</div>
							<div className="mb-4 form-group">
								<label htmlFor="password">Password</label>
								<CInput type="password"
									placeholder='password'
									autoComplete="current-password"
									id='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								// disabled={loading} 
								/>
							</div>
							<CRow>
								<CCol xs="12" className="text-center">
									{/* <Link to={'forget-password'}>  */}
									<p data-toggle="modal" data-target="#exampleModalCenter" className="text-muted forget-password-text">Forget password ?</p>
									{/* </Link>  */}
									<CButton style={{ transition: "0.3s all ease-in-out" }} color="success" className={`px-4 ${submit ? "w-25" : "w-100"}`} onClick={handleLogin}>
										{submit ? <Spinner
											as="span"
											animation="border"
											size="lg"
											role="status"
											aria-hidden="true"
										/> : 'Submit'}

									</CButton>
								</CCol>
							</CRow>
						</CForm>
					</div>

					<FlashScreen check={flashScreen} >
					</FlashScreen>
				</div>
			}

		</>

	);
}

export default withTranslation(['base', 'shorex', 'user', 'entity'])( CustomLogin);
