import List from '@mui/material/List';
import ListItemWithImageAndText from '../Molecules/ListItemWithImageAndText';

/**
 * Summary:
 * Displays a unordered list of images with text from an array that you can click on.
 * 
 * Props: 
 * listItemsArray: array of objects.
 * 		[
 * 			{	
 * 				image: component such as circleImage atom,
 * 				name: string to be displayed for the list item
 * 				action: function to be ran onlClick of a list item.
 * 			}
 * 		]
 */
export default props => {
	let listItemsArray = [];
	let keyForEachListItem = 1;
	const renderListItemsToScreen = () => {
		props.listItemsArray.forEach(item => {
			listItemsArray.push(
				<ListItemWithImageAndText action={item.action} text={item.name} key={keyForEachListItem}>
					{item.image}
				</ListItemWithImageAndText>
			);
			keyForEachListItem++;
		});
	};

	return (
		<div>
			<List>
				{renderListItemsToScreen()}
				{listItemsArray}
			</List>
		</div>
	);
}