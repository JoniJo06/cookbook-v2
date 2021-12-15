/** @format */

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';
import './../index.css';

const Recipes = () => {
	const { id } = useParams();
	const [recipe, setRecipe] = useState([]);
	// const [ingredients, setIngredients] = useState();
	const [isLoading, setIsLoading] = useState(true);

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

					<h3> Zubereitung</h3>
					{recipe.instructions.split('\n').map((el, i) => {
						return <div key={i} dangerouslySetInnerHTML={{ __html: el + '<br/>' }}></div>;
					})}
				</Container>
			) : (
				'loading...'
			)}
		</>
	);
};

export default Recipes;
