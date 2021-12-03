/** @format */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard({ recipe }) {
	console.log(recipe);
	return (
		<Card sx={{ boxShadow: 'none' }}>
			<Link to={'recipes/' + recipe.sys.id} style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }}>
				<CardActionArea>
					<CardMedia component='img' height='160' image={recipe.fields.homePicture} alt={recipe.fields.homePictureAltText} />
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{recipe.fields.title}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Link>
		</Card>
	);
}
