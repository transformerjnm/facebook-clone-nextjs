import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import styles from "./UserCommentWIthImage.module.css";

/**
 * Summary:
 * A comment that has the users profile picture, username, and comment.
 *
 * Props:
 * children: CircleImage of the author that is wrapped by this component
 * authorName: the author of the comment
 * authorComment: the comment of the author
 * navLinkDestination: url link that redirects the browser
 * timePosted: string time since the comment has been posted
 */
export default (props) => {
	return (
		<Grid container alignContent="center" spacing={1}>
			<Grid item>
				<Grid container justify="flex-start">
					{props.children}
				</Grid>
			</Grid>
			<Grid item>
				<div className={styles.container}>
					<Grid container>
						<Grid item xs={12}>
							<Link href={props.navLinkDestination} className={styles.link}>
								<Typography variant="subtitle2" className={styles.bold}>
									{props.authorName}
								</Typography>
							</Link>
						</Grid>
						<Grid item>
							<Typography variant="body2">{props.authorComment}</Typography>
						</Grid>
					</Grid>
				</div>
				<Grid container>
					<Grid item xs={3}>
						<Grid container>
							<Typography variant="subtitle2">Like</Typography>
						</Grid>
					</Grid>
					<Grid item xs={3}>
						<Grid container>
							<Typography variant="subtitle2">Reply</Typography>
						</Grid>
					</Grid>
					<Grid item xs={3}>
						<Grid container justify="center">
							<Typography variant="subtitle2">{props.timePosted}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
