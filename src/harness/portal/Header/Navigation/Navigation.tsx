import { List, ListItem } from '@mui/material';
import { NavigationLink } from '@molecules/NavigationLink';

export const Navigation = () => {
	return (
		<List sx={{ display: 'flex' }}>
			<ListItem>
				<NavigationLink to="/">Home</NavigationLink>
			</ListItem>
			<ListItem>
				<NavigationLink to="/books">Books</NavigationLink>
			</ListItem>
		</List>
	);
};
