"use client";
import { Typography, Grid, Divider } from "@mui/material";
import ActionIconButton from "../../Atoms/ActionIconButton/ActionIconButton";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReplyIcon from "@mui/icons-material/Reply";
import styles from "./PostInteractionCluster.module.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

/**
 * Summary:
 * Group of buttons that appear on the bottom of all post. Shows how many interaction you have and allows you to like, comments, and share on post.
 *
 * Props:
 * addLikeToPost: function to increase number of likes
 * openCommentsForPost: function to open comment section
 * sharePost: function to allow user to share the post
 * numberOfPostLikes: integer of number of likes
 * numberOfPostComments: integer of number of comments
 * numberOfPostShares: integer of number of post
 */
export default (props) => {
	/**
	 * If their post has any interactions for like, comments, or shares show the number of interactions they have.
	 * Also contains the light grey line divider that divides the interaction buttons and the number of interaction section.
	 */
	let showNumberOfInteractions = () => {
		if (
			props.numberOfPostShares > 0 ||
			props.numberOfPostLikes > 0 ||
			props.numberOfPostComments > 0
		) {
			return (
				<>
					<Grid item xs={6} className={styles.grid}>
						<Grid container justify="flex-start">
							<Grid item>
								<ThumbUpIcon
									className={styles.secondaryTextStyle}
									fontSize="small"
								/>
								<Typography
									className={styles.secondaryTextStyle}
									variant="subtitle1"
								>
									{props.numberOfPostLikes ? props.numberOfPostLikes : 0}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={6} className={styles.grid}>
						<Grid container justify="flex-end">
							<Grid item>
								<Typography
									className={styles.secondaryTextStyle}
									variant="subtitle1"
								>
									{props.numberOfPostComments ? props.numberOfPostComments : 0}{" "}
									Comments{" "}
									{props.numberOfPostShares ? props.numberOfPostShares : 0}{" "}
									Shares
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Divider />
					</Grid>
				</>
			);
		}
	};
	return (
		<Grid container alignContent="center">
			{showNumberOfInteractions()}
			<Grid item xs={4}>
				<ActionIconButton buttonText="Like" buttonAction={props.addLikeToPost}>
					<ThumbUpAltIcon className={styles.secondaryTextStyle} />
				</ActionIconButton>
			</Grid>
			<Grid item xs={4}>
				<ActionIconButton
					buttonText="Comment"
					buttonAction={props.openCommentsForPost}
				>
					<ChatBubbleOutlineIcon className={styles.secondaryTextStyle} />
				</ActionIconButton>
			</Grid>
			<Grid item xs={4}>
				<ActionIconButton buttonText="Share" buttonAction={props.sharePost}>
					<ReplyIcon className={styles.secondaryTextStyle} />
				</ActionIconButton>
			</Grid>
		</Grid>
	);
};
