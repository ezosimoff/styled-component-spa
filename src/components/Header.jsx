import React from 'react';
import styled from 'styled-components';
import { FaRegMoon, FaMoon } from 'react-icons/fa';
import Container from './Container';
import { Link } from 'react-router-dom';

const HeaderEl = styled.header`
	box-shadow: var(--shadow);
	background-color: var(--ui-base-color);
	height: 57px;
	font-weight: var(--fw-normal);
`;
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;
`;
const Switcher = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	font-weight: var(--fw-light);
	text-transform: capitalize;
`;
const Title = styled(Link).attrs({
	to: '/',
})`
	color: var(--text-color);
`;

const Header = () => {
	const [theme, setTheme] = React.useState('light');
	const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
	React.useEffect(() => {
		document.body.setAttribute('data-theme', theme); // body not need ref
	}, [theme]);

	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title>Where is the world?</Title>
					<Switcher onClick={toggleTheme}>
						<span style={{ marginRight: '5px' }}>{theme} Mode</span>
						{theme === 'light' ? <FaRegMoon /> : <FaMoon />}
					</Switcher>
				</Wrapper>
			</Container>
		</HeaderEl>
	);
};

export default Header;
