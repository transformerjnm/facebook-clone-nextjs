import { Grid } from '@mui/material';
import CircleImage from '../Atoms/CircleImage';
import TextInput from '../Atoms/TextInput';

/**
 * Summary:
 * Circle image on the left with an text input on the right. Will have different variants
 * like searchbar or post.
 * 
 * Props: 
 * inputVariant: string such as search, message, comment that will be used to determine the input styles
 * imageSrc: string image Url
 * imageAlt: string image alt for given image
 * onInputSubmit: function to run when the input is submitted
 * onImageClickDestination: string url to redirect to on click
 * isOnline: optional boolean for if the user should be displayed as online.
 */
export default props => {
	return (
		<Grid container spacing={1}>
			<Grid item>
				<CircleImage isOnline={props.isOnline ? props.isOnline : false} src={props.imageSrc} alt={props.imageAlt} onImageClickDestination={props.onImageClickDestination} />
			</Grid>
			<Grid item style={{ width: "calc(100% - 60px)" }}>
				<TextInput variant={props.inputVariant} submitInputValue={props.onInputSubmit} />
			</Grid>
		</Grid>
	);
};