/** @format */

import './../index.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { teal } from '@mui/material/colors';
import { styled } from '@mui/system';
import { Container } from '@mui/material';

const Footer = () => {
	const ColorIcon = styled(GitHubIcon)({
		color: teal[500],
	});
	return (
		<Container maxWidth='100%' id='footer'>
			<h3>Created by Jonas│Martin│Mett Teo</h3>

			<a className='jonLink' href='https://github.com/JoniJo06/'>
				<ColorIcon />
				JoniJo06
			</a>
		</Container>
	);
};

export default Footer;
