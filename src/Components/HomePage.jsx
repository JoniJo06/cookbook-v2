/** @format */

import RecipeCard from './RecipeCard';
import { useState, useEffect } from 'react';
import { Grid, Box, Container, CircularProgress } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

import './../index.css';

const HomePage = () => {
	const [recipes, setRecipes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(`https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
				.then((res) => setRecipes(res.data.items))
				.catch((err) => console.error(err));
			setIsLoading(false);
		};
		fetchData();
	}, []);
	return (
		<>
			<header>
				<Header />
			</header>
			<Container maxWidth='100%'>
				<main>
					<Box sx={{ flexGrow: '1', margin: '2em 0' }}>
						<Grid container spacing={5} justifyContent='center'>
							{!isLoading ? (
								recipes.map((recipe, i) => {
									return (
										<Grid key={i} item xs={10} sm={6} md={4} lg={3} xl={2}>
											<RecipeCard recipe={recipe} />
										</Grid>
									);
								})
							) : (
								<Grid item>
									<CircularProgress size={120} />
								</Grid>
							)}
						</Grid>
					</Box>
				</main>
			</Container>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default HomePage;
