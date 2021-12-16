/** @format */

import NavigationDefinition from './Components/NavigationDefinition';
import './index.css';

import Header from './Components/Header';
import Footer from './Components/Footer';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';

/* *** *** *** *** *** *** *** ***\
|* In kompetenter Zusammenarbeit *|
|*      entstanden mit den       *|
|*     höchstqualifizierten      *|
|*    Programmierern Martin,     *|
|*     Mattteo und Jonas         *|
\*** *** *** *** *** *** *** *** */

function App() {
	const [adminLogin, setAdminLogin] = useState(false);
	const [user, setUser] = useState();

	useEffect(() => {}, []);
	const handleLogIn = (e) => {
		const item = e.target.parentNode;
		item.children[1].style.opacity = 1;
		item.children[1].style.pointerEvents = 'all';
	};
	const handleLogOut = () => {
		setAdminLogin(false);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const item = e.target;
		// console.log(item.children[1].value)
		await axios
			.get(`https://kochbuch-backend.herokuapp.com/admins/${item.children[1].value}`)
			.then((res) => setUser(res.data))
			.catch((err) => alert('Username nicht vorhanden'));
		try {
			if (item.children[3].value === user.password) {
				setAdminLogin(true);
				item.style.opacity = 0;
				item.style.pointerEvents = 'none';
				item.children[3].value = '';
				item.children[1].value = '';
			} else {
				alert('Passwort falsch');
			}
		} catch (err) {
			console.error(err);
		} finally {
			setUser({});
		}
	};
	return (
		<div className='App'>
			<header>
				<Header />
			</header>
			<div id='loginContainer'>
				{!adminLogin ? (
					<Button variant='contained' onClick={handleLogIn}>
						Log in
					</Button>
				) : (
					<Button variant='contained' onClick={handleLogOut}>
						Log out
					</Button>
				)}
				{adminLogin && (
					<TextField
						id='standard-read-only-input'
						value={user.username}
						InputProps={{
							readOnly: true,
						}}
						variant='standard'
					/>
				)}{' '}
				<form id='logInForm' onSubmit={handleSubmit}>
					<lable>Username</lable>
					<input required type='text' />
					<lable>Passwort</lable>
					<input required type='password' />
					<input value='login' type='submit' />
				</form>
			</div>
			<NavigationDefinition adminLogin={adminLogin} />
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
