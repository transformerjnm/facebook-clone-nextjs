'use client';
import { createTheme } from '@mui/material/styles';
/** Light Theme */
export const lightTheme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1800,
		},
	},
	typography: {
		fontFamily: [
			'Arial',
			'sans-serif',
		].join(','),
	},
	palette: {
		background: {
			default: "#f0f2f5"
		},
		primary: {
			light: '#ffffff',
			main: '#f0f2f5',
			dark: '#adafb3'
		},
		secondary: {
			light: '#AAC9FF',
			main: '#1878f2',
			dark: '#4267B2'
		},
		info: {
			main: '#3d3d3d'
		},
		error: {
			main: '#f02849'
		},
		warning: {
			main: '#000000'
		},
		success: {
			main: '#31a24c'
		}
	},
	MuiTypography: {
		variantMapping: {
			body1: 'p'
		}
	}
});
//Headers
lightTheme.typography.h1 = {
	fontSize: 'calc(1rem + 5vmin)'
};
lightTheme.typography.h2 = {
	fontSize: 'calc(1rem + 4vmin)'
};
lightTheme.typography.h3 = {
	fontSize: 'calc(1rem + 3vmin)'
};
lightTheme.typography.h4 = {
	fontSize: 'calc(1rem + 2vmin)'
};
lightTheme.typography.h5 = {
	fontSize: 'calc(1rem + 1vmin)'
};
lightTheme.typography.h6 = {
	fontSize: 'calc(1rem + .5vmin)',
	color: '#05386B'
};

//more typography
lightTheme.typography.subtitle1 = {
	fontSize: 'calc(1rem + 1vmin)',
	margin: '1rem .5rem',
	fontWeight: 'normal'
};
lightTheme.typography.body1 = {
	fontSize: 'calc(.9rem + .25vmin)',
	color: '#313639'
}

