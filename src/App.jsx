import React from 'react';
import './index.css';
import axios from 'axios';
import { GET_ALL } from './config';
import Spiner from './components/Spiner';
import Header from './components/Header';
import Main from './components/Main';
import HomePage from './pages/HomePage';

function App() {
	const [countries, setCountries] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		axios.get(GET_ALL).then(({ data }) => {
			setCountries(data);
			setIsLoading(false);
		});
	}, []);

	return (
		<>
			{isLoading && <Spiner />}
			<Header />
			<Main>
				{countries.length && <HomePage countries={countries} />}
			</Main>
		</>
	);
}

export default App;
