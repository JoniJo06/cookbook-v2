/** @format */

import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Button } from '@mui/material';
import axios from 'axios';
import './../index.css';

const Recipes = ({ adminLogin }) => {
	const { id } = useParams();
	const [recipe, setRecipe] = useState([]);
	// const [ingredients, setIngredients] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(`https://kochbuch-backend.herokuapp.com/recipes/${id}`)
				.then((res) => setRecipe(res.data))
				.catch((err) => console.error(err));
			setIsLoading(false);
		};
		fetchData();
	}, [id]);

	const handleDelete = async () => {
		const input = prompt('wirklich löschen?\n \n dann bitte DELETE eingeben!');
		console.log(id);
		if (input === 'DELETE') {
			console.log(input);
			await axios
				.delete(`https://kochbuch-backend.herokuapp.com/recipes/${id}`)
				.then((res) => alert('rezept wurde gelöscht'))
				.catch((err) => console.error(err));
			navigate('/');
		}
	};

	return (
		<>
			{!isLoading ? (
				<Container maxWidth='100%' className='Recipes'>
					<h1 className='recipeHeader'>{recipe.title}</h1>
					<div className='imageContainer'>
						<img className='meal' src={recipe.picture_one} alt='#' />
						{recipe.picture_two && <img className='meal' src={recipe.picture_two} alt='#' />}
					</div>
					<h3>Zutaten</h3>
					{recipe.ingredients.split('\n').map((el, i) => {
						// console.log(el)
						return <p key={i}>{el}</p>;
					})}

					<h3>Zubereitung</h3>
					{recipe.instructions.split('\n').map((el, i) => {
						return <div key={i} dangerouslySetInnerHTML={{ __html: el + '<br/>' }}></div>;
					})}
					{adminLogin && (
						<Button onClick={handleDelete} color='error' variant='contained' style={{ marginTop: '1em' }} fullWidth>
							Delete
						</Button>
					)}
				</Container>
			) : (
				'loading...'
			)}
		</>
	);
};

export default Recipes;
