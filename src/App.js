/** @format */

import NavigationDefinition from './Components/NavigationDefinition';
import './index.css';
import { useState } from 'react';
import { Button } from '@mui/material';
import Header from './Components/Header';
import Footer from './Components/Footer';

/* *** *** *** *** *** *** *** ***\
|* In kompetenter Zusammenarbeit *|
|*      entstanden mit den       *|
|*     höchstqualifizierten      *|
|*    Programmierern Martin,     *|
|*     Mattteo und Jonas         *|
\*** *** *** *** *** *** *** *** */

function App() {
	const [adminLogin, setAdminLogin] = useState();
	return (
		<div className='App'>
			<header>
				<Header />
			</header>
			{!adminLogin ? <Button>Log in</Button> : <Button>Log out</Button>}
			<NavigationDefinition adminLogin={adminLogin} />
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
