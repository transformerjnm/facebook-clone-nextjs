"use client";
import { Paper, Divider, Grid, Box } from "@mui/material";
import CircleImageWithTextInput from "../../Molecules/CircleImageWithTextInput";
import ActionIconButton from "../../Atoms/ActionIconButton/ActionIconButton";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import styles from "./CreateNewPost.module.css";

/**
 * Summary:
 * Allows you to create a new text or image based post.
 *
 * Live video will just be a dummy button. We should be able to have text, images, and emojis/Feelings/Activity.
 * This will allow the user to enter all this information in but will not update the DB or anything yet.
 *
 * Props:
 * for CircleImageWithTextInput
 * 		inputVariant: string such as search, message, comment that will be used to determine the input styles
 * 		imageSrc: string image Url
 * 		imageAlt: string image alt for given image
 * 		onInputSubmit: function to run when the input is submitted
 * 		onImageClickDestination: string url to redirect to on click
 * 		isOnline: optional boolean for if the user should be displayed as online.
 *
 */
export default (props) => {
	let startLiveVideo = () => {
		console.log("Start live video");
	};

	let createImagePost = () => {
		console.log("Create image Post");
	};

	let updateFeeling = () => {
		console.log("feeling");
	};

	return (
		<Paper className={styles.paper}>
			<CircleImageWithTextInput
				inputVariant={props.inputVariant}
				imageSrc={props.imageSrc}
				imageAlt={props.imageAlt}
				onInputSubmit={props.onInputSubmit}
				onImageClickDestination={props.onImageClickDestination}
			/>
			<Divider className={styles.divider} />
			<Grid container alignContent="center">
				<Box sx={{ display: { sm: "block", md: "none" } }}>
					<Grid item xs={0} sm={4}>
						<ActionIconButton
							buttonText="Live Video"
							buttonAction={startLiveVideo}
						>
							<VideoCallIcon color="error" className={styles.icon} />
						</ActionIconButton>
					</Grid>
				</Box>
				<Grid item xs={6} md={4}>
					<ActionIconButton
						buttonText="Photo/Video"
						buttonAction={createImagePost}
					>
						<PhotoLibraryIcon className={(styles.icon, styles.iconPhoto)} />
					</ActionIconButton>
				</Grid>

				<Grid item xs={6} md={4}>
					<ActionIconButton
						buttonText="Feeling/Activity"
						buttonAction={updateFeeling}
					>
						<InsertEmoticonIcon className={(styles.icon, styles.iconFeeling)} />
					</ActionIconButton>
				</Grid>
			</Grid>
		</Paper>
	);
};
