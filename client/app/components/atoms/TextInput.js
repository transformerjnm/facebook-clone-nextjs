'use client';
import { useState } from 'react';
import { FilledInput, FormControl, IconButton, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import { lightTheme } from '../../theme';

/**
 * Summary:
 * Should be full width by default as most of our uses are going to be full width which means the TextInput component must 
 * be wrapped with a container. Needs to be able to be used for comment input, search bar, and messages. Should have at least a 
 * variant for searchbar and a variant for messages. Messages variant should have the option to send emojis and images. 
 * NOTE: The columns on the grid will change depending on how wide the parent component is. Once the set functions are created 
 * they will need to be destructured from props and added to an onChange to the right FilledInput components
 * 
 * Props: 
 * variant: search, message, comment (tells us which input to use)
 * submitInputValue: a function that is called onSubmit of the FilledInput component
 */
export default ({ variant }) => {
	const [isTyping, setIsTyping] = useState(false);

	let input;
	const searchStyles = {
		borderRadius: '50px'
	};
	const messageStyles = {
		paddingLeft: '1.25rem',
		paddingRight: '1.25rem',
		paddingTop: '4px',
		paddingBottom: '4px',
		borderRadius: '50px',
		Height: '32px'
	};
	const commentStyles = {
		borderRadius: '50px',
	};
	const newPostStyles = {
		borderRadius: '50px',
	};

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
					style={searchStyles}
					margin="dense" 
					disableUnderline={true}  
					placeholder="Search Facebook" 
					startAdornment={ 
						<SearchIcon color={lightTheme.palette.primary.light}/>
					}
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
						style={messageStyles}
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
						<IconButton size="small">
							{checkIfTypingToRenderIcon()}
						</IconButton>
					</Grid>
				</Grid>
			</Grid>
		);
	} else if (variant === "comment") {
		input = (
			<FormControl hiddenLabel fullWidth>
				<FilledInput
					style={commentStyles}
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
					style={newPostStyles}
					disableUnderline={true}
					margin="dense"
					placeholder="What's on your mind?"
					fullWidth
				/>
			</FormControl>
		);
	}

	return (
		<>
			{input}
		</>
	);
};