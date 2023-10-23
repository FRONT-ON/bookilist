import { Portal } from '@harness/portal/Portal';
import { Home } from '@pages/Home/Home';
import { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const getPage = (pageContent: ReactNode) => <Portal>{pageContent}</Portal>;

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={getPage(<Home />)} />
			</Routes>
		</BrowserRouter>
	);
};
