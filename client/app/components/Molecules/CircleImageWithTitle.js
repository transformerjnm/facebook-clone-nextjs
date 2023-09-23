'use client';
import { Typography, Grid } from '@mui/material';
import CircleImage from '../Atoms/CircleImage';
import { lightTheme } from '../../theme';

/**
 * Summary:
 * Circle image with a title to the right and subtitle below the title.
 * 
 * Props: 
 * imageUrl: string of url to image
 * imageAlt: string of text for if image can not be loaded
 * imageClick: function to run when image is clicked
 * title: string for title
 * subtitle: string for subtitle area.(is often time since last online)
 */
export default props => {
	return (
		<Grid container spacing={1} alignItems="center">
			<Grid item >
				<CircleImage src={props.imageUrl} alt={props.imageAlt} onImageClickDestination={props.imageClick} />
			</Grid>
			<Grid item>
				<Typography variant="subtitle2">{props.title}</Typography>
				<Typography style={{ color: lightTheme.palette.text.secondary }} variant="subtitle2">{props.subtitle}</Typography>
			</Grid>
		</Grid>
	);
};