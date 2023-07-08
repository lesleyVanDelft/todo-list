import { useEffect, useState } from 'react';
import './styles/index.scss';
import Button from './components/Button';

function App() {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)')) {
			setTheme('dark');
			localStorage.setItem('theme', theme);
		} else {
			setTheme('light');
			localStorage.setItem('theme', theme);
		}
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const handleThemeToggle = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
		localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<div className={`App ${theme === 'dark' ? 'dark' : 'light'}`}>
			<h1>hi</h1>
			<Button toggler={handleThemeToggle} />
		</div>
	);
}

export default App;
