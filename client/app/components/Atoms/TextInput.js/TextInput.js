"use client";
import { useState } from "react";
import { FilledInput, FormControl, IconButton, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SendIcon from "@mui/icons-material/Send";
import styles from "./TextInput.module.css";

/**
 * Summary:
 * Should be full width by default as most of our uses are going to be full width which means the TextInput component must
 * be wrapped with a container. Needs to be able to be used for comment input, search bar, and messages. Should have at least a
 * variant for searchbar and a variant for messages. Messages variant should have the option to send emojis and images.
 * NOTE: The columns on the grid will change depending on how wide the parent component is. Once the set functions are created
 * they will need to be destructured from props and added to an onChange to the right FilledInput components
 *
 * Props:
 * children: icon to display
 * placeHolderText: text to display before typing
 * variant: search, message, comment, default changes style of input
 * submitInputValue: a function that is called onSubmit of the FilledInput component
 */
export default ({ children, placeHolderText = "", variant }) => {
	const [isTyping, setIsTyping] = useState(false);
	let input;

	const checkIfTypingToRenderIcon = () => {
		if (isTyping) {
			return <SendIcon color="secondary" />;
		} else {
			return <ThumbUpIcon color="secondary" />;
		}
	};

	if (variant === "search") {
		input = (
			<FormControl hiddenLabel fullWidth>
				<FilledInput
					className={styles.searchStyles}
					margin="dense"
					disableUnderline={true}
					placeholder="Search Facebook"
					startAdornment={<SearchIcon className={styles.SearchIcon} />}
				/>
			</FormControl>
		);
	} else if (variant === "message") {
		input = (
			<Grid container alignItems="center">
				<Grid item xs={3} md={2}>
					<Grid container justify="flex-end">
						<IconButton size="small">
							<ImageIcon color="secondary" />
						</IconButton>
					</Grid>
				</Grid>
				<Grid item xs={7} md={8}>
					<FilledInput
						className={styles.messageStyles}
						disableUnderline={true}
						margin="dense"
						placeholder="Aa"
						multiline
						fullWidth
						endAdornment={
							<IconButton size="small">
								<EmojiEmotionsIcon color="secondary" />
							</IconButton>
						}
						onKeyPress={() => setIsTyping(true)}
					/>
				</Grid>
				<Grid item md={2}>
					<Grid container alignItems="center" justify="flex-start">
						<IconButton size="small">{checkIfTypingToRenderIcon()}</IconButton>
					</Grid>
				</Grid>
			</Grid>
		);
	} else if (variant === "comment") {
		input = (
			<FormControl hiddenLabel fullWidth>
				<FilledInput
					className={styles.commentStyles}
					disableUnderline={true}
					margin="dense"
					placeholder="Write a comment..."
					fullWidth
					endAdornment={
						<IconButton size="small">
							<EmojiEmotionsIcon color="secondary" />
						</IconButton>
					}
				/>
			</FormControl>
		);
	} else if (variant === "newPost") {
		input = (
			<FormControl hiddenLabel fullWidth>
				<FilledInput
					className={styles.newPostStyles}
					disableUnderline={true}
					margin="dense"
					placeholder="What's on your mind?"
					fullWidth
				/>
			</FormControl>
		);
	} else if (variant === "default") {
		input = (
			<FormControl hiddenLabel fullWidth>
				<FilledInput
					className={styles.newPostStyles}
					disableUnderline={true}
					margin="dense"
					placeholder={placeHolderText}
					fullWidth
					endAdornment={children}
				/>
			</FormControl>
		);
	}

	return <>{input}</>;
};
