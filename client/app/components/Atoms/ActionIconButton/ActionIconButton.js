"use client";
import { Box, Button, FormControl, Typography } from "@mui/material";
import styles from "./ActionIconButton.module.css";

/**
 * Summary:
 * Button that has text and a icon. When clicked it fires an action.
 *
 * Props:
 * props.children: a icon that is wrapped within the opening and closing tags of this component
 * buttonAction: a callback function that is fired when the button component is clicked
 * buttonText: text that is shown next to the icon
 */
export default (props) => {
	return (
		<FormControl fullWidth hiddenLabel>
			<Button className={styles.button} onClick={() => props.buttonAction()}>
				<Box className={styles.box}>
					{props.children}
					<Typography className={styles.buttonText} variant="body1">
						{props.buttonText}
					</Typography>
				</Box>
			</Button>
		</FormControl>
	);
};
