import { Grid, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CircleImageWithTextInput from "../../Molecules/CircleImageWithTextInput";
import CircleImageWithTitle from "../../Molecules/CircleImageWithTitle/CircleImageWithTitle";
import AddIcon from "@mui/icons-material/Add";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./HomepageHeader.module.css";
import CircleImage from "../../Atoms/CircleImage/CircleImage";
import IconNavigation from "../../Molecules/IconNavigation";

/**
 * Summary:
 *Header where you can search and navigate the application.
 *
 * Props:
 * userProfileImage: a string that is used to set a image's src attribute
 * imageAlt: a string for a image's alt attribute
 * imageDestination: a string that sets the browser's url on click of the image
 * authenticatedUsername: a string of the user that is currently logged in
 * showSearch: a boolean value to determine if the search pop up is showing
 * showIcons: a boolean value to determine if the icon pop up is showing
 * setShowSearch: a function that sets state to show the search pop up on small devices
 * setShowIcons: a function that sets state to show the list of icons on small devices
 */
export default (props) => {
	return (
		<div className={styles.container}>
			<Grid container alignItems="center">
				<Grid item lg={3} md={2} xs={3}>
					<Grid container alignItems="center">
						{/**Desktop search bar */}
						<Box sx={{ display: { xs: "block", lg: "none" } }}>
							<Grid item>
								<CircleImageWithTextInput
									inputVariant="search"
									imageSrc="https://cdn.iconscout.com/icon/free/png-256/facebook-224-498412.png"
									imageAlt="fb"
									onImageClickDestination="/home"
								/>
							</Grid>
						</Box>
						{/**Mobile search bar */}
						<Box sx={{ display: { xs: "none", lg: "block" } }}>
							<Grid item>
								<CircleImage
									src="https://cdn.iconscout.com/icon/free/png-256/facebook-224-498412.png"
									alt="fb"
									onImageClickDestination="/home"
								/>
							</Grid>
							{/*}<IconButton onClick={() => props.setShowSearch(!props.showSearch)}> */}
							<IconButton>
								<SearchIcon />
							</IconButton>
						</Box>
					</Grid>
				</Grid>
				{/** tablet and up navigation links */}
				<Box sx={{ display: { xs: "block", md: "none" } }}>
					<Grid item lg={6} md={6}>
						<IconNavigation />
					</Grid>
				</Box>
				<Grid item lg={3} md={4} xs={9}>
					<Grid container alignItems="center" justify="flex-end" spacing={2}>
						<Grid item>
							<Grid
								container
								alignItems="center"
								justify="flex-end"
								spacing={1}
							>
								{/**menu Icon to show on phones and tablets */}
								<Box sx={{ display: { xs: "none", lg: "block" } }}>
									<Grid item>
										{/*<IconButton onClick={() => props.setShowIcons(!props.showIcons)}>*/}
										<IconButton>
											<MenuIcon fontSize="large" />
										</IconButton>
									</Grid>
								</Box>
								{/** User profile link to show on laptops and up */}
								<Box sx={{ display: { xs: "block", lg: "none" } }}>
									<Grid item>
										<Grid container justify="flex-start">
											<CircleImageWithTitle
												imageUrl={props.userProfileImage}
												imageAlt={props.imageAlt}
												imageClick={props.imageDestination}
												title={props.authenticatedUsername}
											/>
										</Grid>
									</Grid>
								</Box>
								<Grid item>
									<IconButton className={styles.iconButtonStyles}>
										<AddIcon />
									</IconButton>
								</Grid>
								<Grid item>
									<IconButton className={styles.iconButtonStyles}>
										<MessageIcon />
									</IconButton>
								</Grid>
								<Grid item>
									<IconButton className={styles.iconButtonStyles}>
										<NotificationsIcon />
									</IconButton>
								</Grid>
								<Grid item>
									<IconButton className={styles.iconButtonStyles}>
										<ArrowDropDownIcon />
									</IconButton>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};
