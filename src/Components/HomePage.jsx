/** @format */

import RecipeCard from './RecipeCard';
import { useState, useEffect } from 'react';
import { Grid, Box, Container, CircularProgress, Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './../index.css';

const HomePage = () => {
	const [recipes, setRecipes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(`https://kochbuch-backend.herokuapp.com/recipes`)
				.then((res) => setRecipes(res.data.recipes))
				.catch((err) => console.error(err));
			setIsLoading(false);
		};
		fetchData();
	}, []);
	return (
		<>
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
					<Link style={{ textDecoration: 'none' }} to='create-recipe'>
						<Button variant='contained'>Rezept hinzufügen</Button>
					</Link>
				</main>
			</Container>
		</>
	);
};

export default HomePage;
