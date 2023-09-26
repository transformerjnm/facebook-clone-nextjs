import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import NavigationIconLink from "../Atoms/NavigationIconLink/NavigationIconLink";
import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";

/**
 * Summary:
 * navigation of icon links for header. links are hardcoded to go to home, friends, live, marketplace, and groups.
 *
 * Props:
 * None
 */
export default (props) => {
	return (
		<Grid container justify="center" alignItems="center">
			<Grid item>
				<NavigationIconLink navLinkDestination="/home">
					<HomeIcon />
				</NavigationIconLink>
			</Grid>
			<Grid item>
				<NavigationIconLink navLinkDestination="/friends">
					<PersonIcon />
				</NavigationIconLink>
			</Grid>
			<Grid item>
				<NavigationIconLink navLinkDestination="/live">
					<LiveTvIcon />
				</NavigationIconLink>
			</Grid>
			<Grid item>
				<NavigationIconLink navLinkDestination="/marketplace">
					<StorefrontIcon />
				</NavigationIconLink>
			</Grid>
			<Box sx={{ display: { xs: "block", md: "block", lg: "none" } }}>
				<Grid item>
					<NavigationIconLink navLinkDestination="/group">
						<GroupIcon />
					</NavigationIconLink>
				</Grid>
			</Box>
		</Grid>
	);
};
