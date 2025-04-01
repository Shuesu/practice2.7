import { Header, UserBlock } from './components';
import { useEffect, useState } from 'react';
import { AppContext } from './context';
import styles from './app.module.css'


const getUserFromServer = () => ({
	id: 'a111',
	name: 'Иван',
	age: 23,
	email: 'ivan@mail.ru',
	phone: '+7-999-999-99-99',
})

const getAnotherUserFromServer = () => ({
	id: 'a111',
	name: 'Василий',
	age: 23,
	email: 'ivan@mail.ru',
	phone: '+7-999-999-99-99',
})

export const App = () => {
	const [userData, setUserData] = useState({});

	const dispatch = (action) => {
		const { type, payload } = action;

		switch (type) {
			case 'SET_USER_DATA': {
				setUserData(payload);
				break;
			}
			case 'SET_USER_AGE': {
				setUserData({
					...userData,
					age: payload,
				});
				break;
			}
			default:
		}
	}

	useEffect(() => {
		const userDataFromServer = getUserFromServer();
		setUserData(userDataFromServer);
	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnotherUserFromServer();
		setUserData(anotherUserDataFromServer);
	}


	return (
		<AppContext.Provider value={{ userData, dispatch }}>
			<div className={styles.app}>
				<Header />
				<hr />
				<UserBlock />
				<button onClick={onUserChange}>Сменить пользователя</button>
			</div>
		</AppContext.Provider>
	);
};
