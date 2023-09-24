'use client';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import { lightTheme } from '../../../theme';
import styles from './NavigationIconLink.module.css';

/**
 * Summary:
 * Button Icon with no text that is a navigation link. 
 * 
 * Props:
 * children: a MUI icon
 * navLinkDestination: the path that the url should go to on click of the component
 */
export default props => {
	return (
		<div className={styles.navIconContainer}>
			<IconButton
			style={{ background: 'transparent' }}
			disableFocusRipple={true}
			disableRipple={true}
			>
				<Link
				href={props.navLinkDestination}
				style={{
					color: lightTheme.palette.primary.dark,
					paddingTop: '5px'
				}}
				/*activeClassName={styles.active}*/
				>
				{props.children}
				</Link>
			</IconButton>
		</div>
	);
};