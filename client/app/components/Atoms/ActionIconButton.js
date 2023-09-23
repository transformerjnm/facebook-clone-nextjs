'use client';
import { Box, Button, FormControl, Typography } from '@mui/material';
import { lightTheme } from '../../theme';

/**
 * Summary: 
 * Button that has text and a icon. When clicked it fires an action.
 * 
 * Props:
 * props.children: a icon that is wrapped within the opening and closing tags of this component 
 * buttonAction: a callback function that is fired when the button component is clicked
 * buttonText: text that is shown next to the icon
 */
export default props => {
	const boxStyles = {
		display: 'flex',
		justifyContent: 'center',
	};

	const centerButtonStyle = {
		width: '100%'
	};

	return (
		<FormControl fullWidth hiddenLabel>
			<Button style={centerButtonStyle} onClick={() => props.buttonAction()}>
				<Box style={boxStyles}>
					{props.children}
					<Typography style={{ color: lightTheme.palette.text.secondary, marginLeft: '1rem' }} variant="body1">{props.buttonText}</Typography>
				</Box>
			</Button>
		</FormControl>
	);
};