import React from 'react';
import './index.css';
import axios from 'axios';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { GET_ALL } from './config';
import Spiner from './components/Spiner';
import Header from './components/Header';
import Main from './components/Main';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	const [countries, setCountries] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		if (!countries.length) {
			axios.get(GET_ALL).then(({ data }) => {
				setCountries(data);
				setIsLoading(false);
			});
		}
	}, []);

	return (
		<BrowserRouter>
			{isLoading && <Spiner />}
			<Header />
			<Main>
				<Routes>
					<Route
						exact
						path='/'
						element={
							countries.length && (
								<HomePage countries={countries} />
							)
						}
					/>
					<Route />
					<Route path='/country/:name' element={<DetailsPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Main>
		</BrowserRouter>
	);
}

export default App;
