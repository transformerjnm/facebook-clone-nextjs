'use client';
import { Paper } from '@mui/material';
import UserCommentWithImage from '../Molecules/UserCommentWithImage';
import CircleImageWithTextInput from '../Molecules/CircleImageWithTextInput';
import CircleImage from '../Atoms/CircleImage';
import { lightTheme } from '../../theme';
import { Fragment } from 'react';

/**
 * Summary:
 * Displays comments and allows you to post comments. This should take in a array of objects and display them.
 * 
 * At the current stage of development this component should display comments based on a dummy array
 * of objects and allow the user to write a comment with images and emojis but doesn't need to add the comment yet.
 *
 * Props: 
 * authenticatedUser: object of profile information about the authenticated user.
 * 		{
 * 			authenticatedUsername: string authenticated username,
 * 			authenticatedProfilerUrl: sting url to authenticated user profile,
 * 			authenticatedProfileImage: string url to auth user profile image
 * 		}
 * comments: array of objects where each object is a comment.
 * 		[
 * 			{
 * 				commentMessage: string of comment,
 * 				commentAuthorName: sting of authors name,
 * 				commentAuthorProfileImage: string of url to authors profile image,
 * 				commentAuthorProfileUrl: string url location of author profile,
 * 				commentPostDate: js data object of time posted.
 * 			}
 * 		] 
 *
 */
export default props => {
	let arrayOfUserComments = [];
	let commentsKey = 1;
	/** 
	 * Calculate time since comment has been posted and return a string of time since posted in shorthand
	 * shorthand example: 6m 5d 1w 8m 1y
	*/
	const calculateTimeSincePosted = (dateObjectWhenPosted) => {
		return "5m";
	}
	/**
	 * Add new comment to this post comments
	 */
	const addNewComment = () => {

	};
	/**
	 * render all the comments to the screen
	 */
	const renderCommentsToScreen = () => {
		props.comments.forEach((comment) => {
			++commentsKey;
			arrayOfUserComments.push(
				<Fragment key={commentsKey}>
					<UserCommentWithImage

						authorName={comment.commentAuthorName}
						authorComment={comment.commentMessage}
						navLinkDestination={comment.commentAuthorProfileUrl}
						timePosted={calculateTimeSincePosted(comment.commentPostDate)}
					>
						<CircleImage
							src={comment.commentAuthorProfileImage}
							onImageClickDestination={comment.commentAuthorProfileUrl}
							isOnline={false}
							alt={`Picture of ${comment.commentAuthorName}`}
						/>
					</UserCommentWithImage>
				</Fragment>
			);
		});
	};
	renderCommentsToScreen();
	return (
		<Paper elevation={1} style={{ padding: lightTheme.spacing(1) }}>
			<CircleImageWithTextInput
				inputVariant="comment"
				imageSrc={props.authenticatedUser.authenticatedProfileImage}
				imageAlt={`Picture of ${props.authenticatedUser.authenticatedUsername}`}
				onInputSubmit={addNewComment()}
				onImageClickDestination={props.authenticatedUser.authenticatedProfileImage}
				isOnline={true}
			/>
			{arrayOfUserComments}
		</Paper>
	);
}