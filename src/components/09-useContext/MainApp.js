import React from 'react';
import { UserContext } from './UserContext';
import { AppRouter } from './AppRouter';

export const MainApp = () => {
	const user = {
		id: 1234,
		name: 'Gerardo',
		email: 'villegasgerardo.j@gmail.com',
	};
	return (
		<UserContext.Provider value={user}>
			<AppRouter />
		</UserContext.Provider>
	);
};
