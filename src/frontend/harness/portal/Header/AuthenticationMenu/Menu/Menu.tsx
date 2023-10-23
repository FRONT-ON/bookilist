import { List, ListItem as MuiListItem, listItemClasses, styled } from '@mui/material';
import { Button } from '@frontend/atoms/Button';
import { memo } from 'react';

const ListItem = styled(MuiListItem)(() => ({
	[`&.${listItemClasses.root}`]: {
		width: 'auto',
	},
}));

interface Props {
	options: string[];
}

export const Menu = memo(({ options }: Props) => {
	return (
		<List sx={{ display: 'flex' }}>
			{options.map((option) => (
				<ListItem key={option}>
					<Button>{option}</Button>
				</ListItem>
			))}
		</List>
	);
});

Menu.displayName = 'Menu';
