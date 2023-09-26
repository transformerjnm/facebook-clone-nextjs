import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CircleImageWithTitle from "../../Molecules/CircleImageWithTitle/CircleImageWithTitle";
import Image from "next/image";
import PostInteractionCluster from "../../Molecules/PostInteractionCluster/PostInteractionCluster";
import Typography from "@mui/material/Typography";
import styles from "./UserPost.module.css";

/**
 * Summary:
 * Displays Text and Image post from an object.
 *
 * Props:
 * for CircleImageWithTitle:
 * 		authorImageUrl: string of url to image
 * 		authorImageAlt: string of text for if image can not be loaded
 * 		authorName: string authors name
 * 		subtitle: string to display under author name. Often it is last online time.
 * 		authorClick: function to be ran onclick of author image.
 *
 * for PostInteractionCluster:
 * 		addLikeToPost: function to increase number of likes
 * 		openCommentsForPost: function to open comment section
 * 		sharePost: function to allow user to share the post
 * 		numberOfPostLikes: integer of number of likes
 * 		numberOfPostComments: integer of number of comments
 * 		numberOfPostShares: integer of number of post
 *
 * postImages: array of image objects to be displayed.
 * 			[
 * 				{
 * 					imageSrc: string,
 * 					imageAlt: string,
 * 				},
 * 			];
 *
 * postText: string of text to display with the post
 */
export default (props) => {
	const renderPostImages = () => {
		/** if only one image is being displayed */
		if (props.postImages.length === 1) {
			return (
				<Image
					className={styles.imageLarge}
					src={props.postImages[0].imageSrc}
					alt={props.postImages[0].imageAlt}
					height={500}
					width={500}
				/>
			);
		} else if (props.postImages.length === 2) {
			return (
				<Grid container spacing={1} direction="row">
					<Grid item xs={6}>
						<Image
							className={styles.imageLarge}
							src={props.postImages[0].imageSrc}
							alt={props.postImages[0].imageAlt}
							height={500}
							width={500}
						/>
					</Grid>
					<Grid item xs={6}>
						<Image
							className={styles.imageLarge}
							src={props.postImages[1].imageSrc}
							alt={props.postImages[1].imageAlt}
							height={500}
							width={500}
						/>
					</Grid>
				</Grid>
			);
		} else if (props.postImages.length > 2) {
			return (
				<Grid container direction="row" spacing={1}>
					<Grid item xs={6}>
						<Image
							className={styles.imageLarge}
							src={props.postImages[0].imageSrc}
							alt={props.postImages[0].imageAlt}
							height={500}
							width={500}
						/>
					</Grid>
					<Grid item xs={6}>
						<Grid container direction="column" spacing={1}>
							<Grid item xs={12}>
								<Image
									className={styles.imageSmall}
									src={props.postImages[1].imageSrc}
									alt={props.postImages[1].imageAlt}
									height={246}
									width={246}
								/>
							</Grid>
							<Grid item xs={12}>
								<Image
									className={styles.imageSmall}
									src={props.postImages[2].imageSrc}
									alt={props.postImages[2].imageAlt}
									height={246}
									width={246}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			);
		}
	};

	return (
		<Card variant="outlined" className={styles.card}>
			<CardContent>
				<CircleImageWithTitle
					imageUrl={props.authorImageUrl}
					imgAlt={props.authorImageAlt}
					imageClick={props.authorClick}
					title={props.authorName}
					subtitle={props.subtitle}
				/>
				<Typography>{props.postText}</Typography>
				{renderPostImages()}
			</CardContent>
			<CardActions>
				<PostInteractionCluster
					addLikeToPost={props.addLikeToPost}
					openCommentsForPost={props.openCommentsForPost}
					sharePost={props.sharePost}
					numberOfPostLikes={props.numberOfPostLikes}
					numberOfPostComments={props.numberOfPostComments}
					numberOfPostShares={props.numberOfPostShares}
				/>
			</CardActions>
		</Card>
	);
};
