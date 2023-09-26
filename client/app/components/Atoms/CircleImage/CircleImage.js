import Link from "next/link";
import { Paper } from "@mui/material";
import styles from "./CircleImage.module.css";

/**
 * Summary:
 * Takes in an image and displays it as a circle. All instances and uses of circle images should be the same size. On hover should show pop up with information about the user if passed in.
 *
 * Props:
 * src: image url
 * alt: image alt
 * onImageClickDestination: string url to redirect to once the image has been clicked
 * isOnline: boolean if user is online
 *
 * HoverInformation is being delayed until further notice. Once we get data structure setup and know what its going to display we can create it.
 * hoverInformation: Object of information to display.
 */
export default (props) => {
	const showImageOrImageFallback = () => {
		if (props.src) {
			if (!props.alt) {
				console.log("circle image is missing alt for " + props.src);
			}
			return (
				<Link href={props.onImageClickDestination}>
					<div className={styles.container}>
						<img className={styles.image} src={props.src} alt={props.alt} />
						{showOnlineCircle()}
					</div>
				</Link>
			);
		} else {
			return <Paper className={styles.paper} />;
		}
	};

	const showOnlineCircle = () => {
		if (props.isOnline) {
			return <div className={styles.statusCircleStyles} />;
		}
	};
	return <>{showImageOrImageFallback()}</>;
};
