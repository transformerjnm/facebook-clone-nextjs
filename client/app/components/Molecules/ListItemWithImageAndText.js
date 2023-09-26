"use client";
import { ListItemText, ListItemIcon } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";

/**
 * Summary:
 * List Item that has a image/icon on the left and text on the right beside it.
 * For use with unordered list and can take a action to be fired onClick. this
 * component must be wrapped with a material ui component "List".
 *
 * This component should wrap either a Icon or CircleImage component where
 * the user needs to add styles of marginLeft: "auto" to any material ui icons
 *
 * Props:
 * children: an icon component or circle Image Atom component.
 * Text: text that is shown next to an icon or image
 * action: a function that is fired on click of a ListItem
 */
export default (props) => {
	return (
		<>
			<ListItemButton onClick={() => props.action()}>
				<ListItemIcon children={props.children} />
				<ListItemText primary={props.text} style={{ marginLeft: "6px" }} />
			</ListItemButton>
		</>
	);
};
